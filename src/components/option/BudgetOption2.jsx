"use client";

import ReactSlider from "react-slider";
import { useEffect, useState } from "react";

/*
type Props = {
  priceRange: {
    min: number,
    max: number,
  },
  setPriceRange: (priceRange: { min: number, max: number }) => void,
  onRangeChange: (value: number[]) => void,
};
*/

export default function BudgetOption2({ priceRange = { min: 0, max: 1000 }, onRangeChange = (value) => {} }) {
  const { min = 0, max = 1000 } = priceRange;
  const [price, setPrice] = useState({
    min: min,
    max: max,
  });

  return (
    <>
      <div className="card-body card-body px-0 pt-0">
        <div className="range-slider-style2">
          <div className="range-wrapper">
            <div className="price__range__box">
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                value={[price.min, price.max]}
                min={0}
                max={100000}
                onChange={(value) => {
                  setPrice({
                    min: value[0],
                    max: value[1],
                  });
                }}
                onAfterChange={(value) => {
                  onRangeChange(value);
                }}
                minDistance={10}
              />
            </div>
            <div className="d-flex gap-1 align-items-center pt-4">
              <input
                type="number"
                className="amount w-100"
                placeholder="$20"
                min={0}
                value={price.min}
                onChange={(e) =>
                  setPrice({
                    ...price,
                    min: e.target.value,
                  })
                }
              />
              <span className="fa-sharp fa-solid fa-minus mx-1 dark-color" />
              <input
                type="number"
                className="amount2 w-100"
                placeholder="$100000"
                min={0}
                max={100000}
                value={price.max}
                onChange={(e) =>
                  setPrice({
                    ...price,
                    max: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
