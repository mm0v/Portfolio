"use client";
import "./navbar.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLinkClick = () => {
    setIsNavVisible(false); // Close nav when a link is clicked
  };

  return (
    <section>
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
                    <Link href={"/"} >Home</Link>
                  </li>
                  <li>
                    <Link href={"/about"} >About</Link>
                  </li>
                  <li>
                    <Link href={"/services"} >Services</Link>
                  </li>
                  <li>
                    <Link href={"/portfolio"} >Portfolio</Link>
                  </li>
                  <li>
                    <Link href={"/contact"} >Contact</Link>
                  </li>
                </ul>
              </nav>

              {/* Icon for toggling navigation */}
              <div className="icon-dark">
                {/* <DarkModeIcon className="dark-mode" /> */}

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
