import "./navbar.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <header className="header-top">
            <div className="flex justify-around items-center">
              <div className="logo">
                <span className="telman">telman</span>
                <span className="info">.info</span>
              </div>
              <div>
                <nav>
                  <ul className="flex p-5 ul-nav">
                    <li>
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link href={"/about"}>About</Link>
                    </li>
                    <li>
                      <Link href={"/services"}>Services</Link>
                    </li>
                    <li>
                      <Link href={"/portfolio"}>Portfolio</Link>
                    </li>
                    <li>
                      <Link href={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="icon-dark">
                <DarkModeIcon />
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
