"use client";
import FooterSocial from "./FooterSocial";



export default function FooterHeader() {
  return (
    <>
      <div className="row bb-white-light pb10 mb60">
        <div className="col-md-7">
          <div className="d-block text-center text-md-start justify-content-center justify-content-md-start d-md-flex align-items-center mb-3 mb-md-0">
           LOGO
          </div>
        </div>
        <div className="col-md-5">
          <FooterSocial />
        </div>
      </div>
    </>
  );
}
