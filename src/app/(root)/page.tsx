import "./home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import HeightIcon from "@mui/icons-material/Height";
import React from "react";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <section className="pt-20">
      <div className="container">
        <div className="row">
          <div className="flex justify-around items-start">
            <div>
              <ul className="social-links">
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
            <div className="text-home">
              <div className="my-name">
                <h1>Hello, I'm Telman</h1>
              </div>
              <div className="specialty">
                <h6>Front End Developer</h6>
              </div>
              <div>
                <h6 className="text-page">
                  I create clean, user-friendly websites that improve online
                  experiences and help businesses connect with their customers.
                </h6>
              </div>
              <div>
                <a href="/contact" rel="noopener noreferrer">
                  <Button className="contact-btn" variant="contained">
                    Contact me
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <div className="imgbox"></div>
            </div>
          </div>
          <div className="pt-20 pb-16 flex items-center justify-around">
            <div className="field flex items-center">
              <div className="mouse"></div>
              <div className="scroll-down">
                <h6>Scroll down</h6>
              </div>
            </div>
            <div className="size-icon">
              <HeightIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
