import Image from "next/image";
import Link from "next/link";

export default function MobileNavigation6() {
  return (
    <>
      <div className="mobilie_header_nav stylehome1">
        <div className="mobile-menu">
          <div className="header bdrb1">
            <div className="menu_and_widgets">
              <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
                <Link className="mobile_logo" href="/">
                  <Image
                    height={40}
                    width={133}
                    src="/images/header-logo-dark.svg"
                    alt="Header Logo"
                  />
                </Link>
                <div className="right-side text-end">
                  <Link href="/giris-yap">Giriş Yap</Link>
                  <a
                    className="menubar ml30"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    <Image
                      height={20}
                      width={20}
                      src="/images/mobile-dark-nav-icon.svg"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="posr">
              <div className="mobile_menu_close_btn">
                <span className="far fa-times" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
