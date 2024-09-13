"use client";
import submenu from "@/data/submenu";
import { isActiveNavigation } from "@/utils/isActiveNavigation";

import Link from "next/link";
import { usePathname } from "next/navigation";
 
export default function TabSection1() {
  const path = usePathname();

  return (
    <div className="  brd-top">
      <ul
        className={`ace-responsive-menu ui-navigation top-border container posr ${
          path == "/home-3" || path == "/home-4" || path == "/home-10"
            ? "menu-without-paddingy"
            : ""
        } `}
      >
        {submenu.map((item,i) => (
          <li
            key={ i }
            className={`visible_list menu-active ${
              item.type === "child-menu" ? "home-menu-parent" : ""
            } `}
          >
            {item.children ? (
              <a
                className={`list-items top-l`}
              >
                <span className="title">{item.name}</span>{" "} 
              </a>
            ) : (
              <Link
                href={item.path}
                className={`list-item top-l`}
              >
                <span className="title">{item.name}</span>
              </Link>
            )}

            {item.children && (
              <ul className={`sub-menu ${item.type === "child-menu" ? "home-menu" : ""} `}>
                {item.children?.map((item2,i2) => (
                  <li
                    key={i2}
                    className={`menu-active`}
                  >
                    {item2.children ? (
                      <a>
                        <span className="title">{item2.name}</span>
                        
                      </a>
                    ) : (
                      <Link href={item2.path}>
                        <span className="title">{item2.name}</span>
                      </Link>
                    )}

                    {item2.children && (
                      <ul className="sub-menu">
                        {item2.children?.map((item3,i3) => (
                          <li
                            key={i3}
                            className={
                              item3.path === path ||
                              item3.path === path.replace(/\/\d+$/, "")
                                ? "ui-child-active"
                                : ""
                            }
                          >
                            <Link href={item3.path}>{item3.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
