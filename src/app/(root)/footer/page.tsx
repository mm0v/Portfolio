import "./footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container-fluid">
       
        <div className="row">
          <div className="text-center">
            <div className="logo footer-logo-name">
              <span className="telman">telman</span>
              <span className="info">.info</span>
            </div>
            <div>
              <div className="my-mail">
                <h2>mammadovtelman03@gmail.com</h2>
              </div>
            </div>
            <div>
              <ul className="social-links footer-icons flex justify-center">
                <li>
                  <a
                    href="https://www.linkedin.com/in/telmanmammadov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/_iamtelman_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/mm0v/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/iamammadov"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <XIcon />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/hikmet.memmedov.714"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
