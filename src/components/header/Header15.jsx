import React from "react";
import Navigation from "./Navigation";
import MobileNavigation6 from "./MobileNavigation6";
import Image from "next/image";
import Link from "next/link";
import TabSection1 from "@/components/section/TabSection1";

export default function Header15() {
  return (
    <>
      <header className="header-nav nav-innerpage-style bg-transparent main-menu  ">
        <nav className="posr">
          <div className="container posr">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto px-0 px-xl-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos">
                    <Link className="header-logo logo1" href="/">
                      <Image
                        width={133}
                        height={40}
                        src="/images/header-logo-dark.svg"
                        alt="Header Logo"
                      />
                    </Link>
                  </div> 

                  <Navigation />
                </div>
              </div>
              <div className="col-auto pe-0 pe-xl-3">
                <div className="d-flex align-items-center">
                  <Link
                    className="login-info mx15-xl mx30"
                    href="/firma-ekle"
                  >
                    <span className="d-none d-xl-inline-block">Firma</span>{" "}
                    Ekle +
                  </Link>
                  <Link
                    className="login-info mr15-xl mr10 ud-btn btn-dark add-joining bdrs12 dark-color bg-transparent"
                    href="/giris-yap"
                  >
                    Giriş Yap
                  </Link>
                  <Link
                    className="ud-btn btn-dark add-joining bdrs12 text-white"
                    href="/kayit-ol"
                  >
                    Kayıt
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <TabSection1 />

        </nav>
      </header>

      <MobileNavigation6 />
    </>
  );
}
