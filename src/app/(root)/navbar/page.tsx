"use client";
import "./navbar.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const pathname = usePathname();
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLinkClick = () => {
    setIsNavVisible(false);
  };

  return (
    <section className="navbar-section">
      <div className="container-fluid">
        <div className="row">
          <header className="header-top p-4">
            <div className="flex justify-around items-center">
              <div className="logo">
                <span className="telman">telman</span>
                <span className="info">.info</span>
              </div>

              {/* Navigation */}
              <nav className={isNavVisible ? "visible" : ""}>
                <ul className="flex p-5 mt-3 ul-nav" onClick={handleLinkClick}>
                  <li>
                    <Link href="/" className={pathname === "/" ? "active" : ""}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className={pathname === "/about" ? "active" : ""}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className={pathname === "/services" ? "active" : ""}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className={pathname === "/portfolio" ? "active" : ""}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className={pathname === "/contact" ? "active" : ""}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="icon-dark">
                {!isNavVisible ? (
                  <DehazeIcon className="res-icon ml-4" onClick={toggleNav} />
                ) : (
                  <CloseIcon className="res-icon ml-4" onClick={toggleNav} />
                )}
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
