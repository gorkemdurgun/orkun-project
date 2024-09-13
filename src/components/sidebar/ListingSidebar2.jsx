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
        <div className="card mb20 p-3 rounded-3">
          <div>
            <h4>Adres</h4>
            <hr />
          </div>
          <div className="card-body px-0 pt-0">
            <div className="mb-3">
              <AutocompleteInput
                label={"İl"}
                placeholder="İl seçiniz"
                emptyMessage="İl bulunamadı"
                options={cityOptions}
                value={selectedCity}
                onChangeKey={(selectedKey) => {
                  setSelectedCity(selectedKey);
                  console.log(selectedKey);
                  setSelectedDistrict("");
                }}
              />
            </div>
            <div className="mb-3">
              <AutocompleteInput
                disabled={!selectedCity}
                label={"İlçe"}
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
          <div className="card mb20 pb10 mt-0">
            <div className="card-header" id="heading0">
              <h4>
                <button
                  className="btn btn-link ps-0 pt-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse0"
                  aria-expanded="false"
                  aria-controls="collapse0"
                >
                  Kategori
                </button>
              </h4>
            </div>
            <div id="collapse0" className="collapse show" aria-labelledby="heading0" data-parent="#accordionExample">
              <div className="row px-3 pt-0 bg-red">
                {filterCategories.slice(0, showMore ? filterCategories.length : 10).map((item, i) => (
                  <FormCheck
                    key={i}
                    className="col-12 col-xxl-6"
                    type="checkbox"
                    id={`category-${i}`}
                    checked={selectedCategories.includes(item.title)}
                  >
                    <FormCheck.Input
                      role="button"
                      type="checkbox"
                      onChange={({ target: { checked } }) => {
                        console.log(item.title);
                        setSelectedCategories((selectedCategories) =>
                          checked ? [...selectedCategories, item.title] : selectedCategories.filter((category) => category !== item.title)
                        );
                      }}
                    />
                    <FormCheck.Label role="button">{item.title}</FormCheck.Label>
                  </FormCheck>
                ))}
              </div>
              <Button variant="link" className="p-0 fs-6 text-primary text-start" onClick={() => setShowMore(!showMore)}>
                {!showMore ? `Daha fazla göster (${filterCategories.length - 10})` : `Daha az göster`}
              </Button>
            </div>
          </div>
          <div className="card mb20 pb0">
            <div className="card-header" id="heading1">
              <h4>
                <button
                  className="btn btn-link ps-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  Ücret Aralığı
                </button>
              </h4>
            </div>
            <div id="collapse1" className="collapse " aria-labelledby="heading1" data-parent="#accordionExample">
              <div className="card-body card-body px-0 pt-4">
                <BudgetOption2
                  onRangeChange={(value) => {
                    console.log(value);
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
                  aria-expanded="false"
                  aria-controls="collapse02"
                >
                  Puan
                </button>
              </h4>
            </div>
            <div id="collapse02" className="collapse " aria-labelledby="heading0" data-parent="#accordionExample">
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
        <Button
          variant="primary"
          className="w-100 text-white"
          onClick={() => {
            console.log({
              selectedCity,
              selectedDistrict,
              selectedPriceRange,
              selectedCategories,
            });
          }}
        >
          Filtrele
        </Button>
      </div>
    </>
  );
}
