"use client";
import priceStore from "@/store/priceStore";
import { usePathname } from "next/navigation";

export default function PriceTableCard1({ data }) {
  const price = priceStore((state) => state.plan);

  const path = usePathname();

  return (
    <>
      <div
        className={`pricing_packages text-center bdrs16 ${
          data.isActive ? "active" : ""
        } ${path === "/home-10" ? "overflow-hidden" : "at-home2"}`}
      >
        <div className="heading mb10">
          {price === "1m" && (
            <h1 className="text2">
              ${data.monthlyPrice} <small>/ Aylık</small>
            </h1>
          )}

          {price === "1y" && (
            <h1 className="text1">
              ${data.yearlyPrice} <small>/ Yıllık</small>
            </h1>
          )}

          <h4 className="package_title mt-2">{data.plan}</h4>
        </div>
        <div className="details">
          <p className="text mb30">
          {data.description}
          </p>
          <div className="pricing-list mb40">
            <ul className="px-0">
            <li> {data.featuresOne}</li>
            <li> {data.featuresTwo}</li>
            <li> {data.featuresThree}</li>
            <li> {data.featuresFour}</li>
            <li> {data.featuresFive}</li>
            <li> {data.featuresSix}</li>
            <li> {data.featuresSeven}</li>
        
              
              <li>1 Listing</li>
              <li>30 Days Visibility</li>
              <li>Highlighted in Search Results</li>
              <li>5 Revisions</li>
              <li>9 days Delivery Time</li>
              <li>Products Support</li>
            </ul>
          </div>
          <div className="d-grid">
            <a
              className={`ud-btn ${
                path === "/home-10" ? "btn-dark-border" : "btn-light-thm"
              }`}
            >
              Satın Al
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
