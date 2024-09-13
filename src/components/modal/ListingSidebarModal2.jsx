"use client";
import toggleStore from "@/store/toggleStore";
import ClearButton from "../button/ClearButton";
import AutocompleteInput from "../dropdown/AutoComplete";
import cityOptions from "../../constants/cities.json";
import { useState } from "react";
import BudgetOption2 from "../option/BudgetOption2";
import { FormCheck } from "react-bootstrap";
import { filterScores, filterCategories } from "@/data/filter";


export default function ListingSidebarModal2() {
  const listingToggle = toggleStore((state) => state.listingToggleHandler);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const districtOptions = cityOptions.find((city) => city.key === selectedCity)?.districts || [];

  return (
    <>
      <div className="lefttside-hidden-bar">
        <div className="hsidebar-header bdrb1">
          <h4 className="list-title">All filters</h4>
          <div className="sidebar-close-icon" onClick={listingToggle}>
            <span className="far fa-times" />
          </div>
        </div>
        <div className="hsidebar-content">
          <div className="widget-wrapper">
            <div className="sidebar-accordion">
              <div className="card mb20 rounded-3">
                <div>
                  <h4>Adres</h4>
                </div>
                <div className="card-body px-0 pt-2">
                  <div className="mb-3">
                    <AutocompleteInput
                      // label={"İl"}
                      placeholder="İl seçiniz"
                      emptyMessage="İl bulunamadı"
                      options={cityOptions}
                      value={selectedCity}
                      onChangeKey={(selectedKey) => {
                        setSelectedCity(selectedKey);
                        setSelectedDistrict("");
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <AutocompleteInput
                      disabled={!selectedCity}
                      // label={"İlçe"}
                      placeholder="İlçe seçiniz"
                      emptyMessage="İlçe bulunamadı"
                      options={districtOptions}
                      value={selectedDistrict}
                      onChangeKey={(selectedKey) => setSelectedDistrict(selectedKey)}
                    />
                  </div>
                </div>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="card mb20 pb0 ">
                  <div className="card-header" id="heading1">
                    <h4>
                      <button
                        className="btn btn-link ps-0 collapsed "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="true"
                        aria-controls="collapse1"
                      >
                        Ücret Aralığı
                      </button>
                    </h4>
                  </div>
                  <div id="collapse1" className="collapse show" aria-labelledby="heading1" data-parent="#accordionExample">
                    <div className="card-body card-body px-0 pt-4">
                      <BudgetOption2
                        onRangeChange={(value) => {
                          setSelectedPriceRange(value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb10">
                  <div className="card-header" id="heading0">
                    <h4>
                      <button
                        className="btn btn-link ps-0 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse02"
                        aria-expanded="true"
                        aria-controls="collapse02"
                      >
                        Yorum Sayısı
                      </button>
                    </h4>
                  </div>
                  <div id="collapse02" className="collapse show" aria-labelledby="heading0" data-parent="#accordionExample">
                    <div className="card-body px-0 pt-0">
                      {["3+", "5+", "10+", "20+", "50+", "100+"].map((item, i) => (
                        <FormCheck
                          key={i}
                          className="col-6"
                          type="checkbox"
                          id={`score-${i}`}
                          checked={selectedCategories.includes(item.title)}
                        >
                          <FormCheck.Input role="button" type="checkbox" />
                          <FormCheck.Label role="button">
                            <span> ({item})</span>
                          </FormCheck.Label>
                        </FormCheck>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb10">
                  <div className="card-header" id="heading0">
                    <h4>
                      <button
                        className="btn btn-link ps-0 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse03"
                        aria-expanded="true"
                        aria-controls="collapse03"
                      >
                        Puan
                      </button>
                    </h4>
                  </div>
                  <div id="collapse03" className="collapse show" aria-labelledby="heading0" data-parent="#accordionExample">
                    <div className="grid card-body card-body px-0 pt-0">
                      {filterScores.map((item, i) => (
                        <FormCheck
                          key={i}
                          className="col-12 col-xxl-6"
                          type="checkbox"
                          id={`score-${i}`}
                          checked={selectedCategories.includes(item.title)}
                        >
                          <FormCheck.Input role="button" type="checkbox" />
                          <FormCheck.Label role="button">
                            <span className="d-inline-flex">
                              {item.icons.map((icon, i) => (
                                <span key={i}>{icon}</span>
                              ))}
                              <span className="text-muted ms-2"> ({item.title})</span>
                            </span>
                          </FormCheck.Label>
                        </FormCheck>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <ClearButton />
            </div>
          </div>
        </div>
      </div>
      <div onClick={listingToggle} className="hiddenbar-body-ovelay" />
    </>
  );
}
