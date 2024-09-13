import ClearButton from "../button/ClearButton";
import AutocompleteInput from "../dropdown/AutoComplete";
import BudgetOption2 from "../option/BudgetOption2";
import { useEffect, useState } from "react";
import cities from "../../constants/cities.json";
import { Button, FormCheck } from "react-bootstrap";
import { filterCategories, filterScores } from "@/data/filter";

const options = ["Banking", "Digital & Creative", "Retail", "Designer", "Developer"];

export default function ListingSidebar2() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const cityOptions = cities;
  const districtOptions = cities.find((city) => city.key === selectedCity)?.districts || [];

  return (
    <>
      <div className="list-sidebar-style1 d-none d-lg-block">
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
              <div className="row card-body px-0 pt-0">
                {["3+", "5+", "10+", "20+", "50+", "100+"].map((item, i) => (
                  <FormCheck key={i} className="col-6" type="checkbox" id={`comment-${i}`} checked={selectedCategories.includes(item.title)}>
                    <FormCheck.Input role="button" type="checkbox" />
                    <FormCheck.Label role="button">
                      <span> {item}</span>
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
                      <span>
                        {item.icons.map((icon, i) => (
                          <span key={i}>{icon}</span>
                        ))}
                        <span className="text-muted"> ({item.title})</span>
                      </span>
                    </FormCheck.Label>
                  </FormCheck>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <ClearButton /> */}
      </div>
    </>
  );
}
