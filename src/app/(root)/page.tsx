"use client";
import "./home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";
import HeightIcon from "@mui/icons-material/Height";
import React, { useRef, useState } from "react";

const Home = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Ref for the fullscreen container
  const [isFullScreen, setIsFullScreen] = useState(false); // Track fullscreen state

  const handleFullScreen = () => {
    const element = containerRef.current;

    if (!isFullScreen) {
      if (element) {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        }
        setIsFullScreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  return (
    <section className="container-fluid" ref={containerRef}>
      <div className="row main-home pt-20">
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
          <div></div>
        </div>
        <div className="pt-20 pb-16 flex items-center justify-around">
          <div className="field flex items-center">
            <div className="mouse"></div>
            <div className="scroll-down">
              <h6>Scroll down</h6>
            </div>
          </div>
          <div className="size-icon" onClick={handleFullScreen}>
            <HeightIcon />
          </div>
        </div>
      </div>

      <div className="row spec-row pt-5 pb-5">
        <div className="mt-20 mb-20">
          <div className="flex justify-around items-center">
            <div className="frontend-text">
              <h4>Frontend Developer</h4>
              <h6>
                I create visually appealing and responsive user interfaces for
                websites and applications.My goal is to ensure that every site I
                build is fast, functional, and delivers a seamless user
                experience across all devices
              </h6>
            </div>
            <div className="frontend">
              <h1>Frontend</h1>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="backend">
              <h1>Backend</h1>
            </div>
            <div className="backend-text">
              <h4>Backend Developer</h4>
              <h6>
                I focus on the server-side logic and database management that
                power web applications. I design and implement APIs, manage data
                storage, and ensure the security and efficiency of applications
                using languages like Node.js
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="row servicesOfMain">
        <div className="mt-10 mb-10">
          <div className="flex flex-row">
            <div className="basis-1/3 h3Andp">
              <h3>Website design</h3>
              <p>
                Get a full website designed to suit your needs and client target
                audience. Each website comes fully documented from start to
                finish so that you know exactly how things work
              </p>
            </div>
            <div className="basis-1/3 h3Andp">
              <h3>Website updates</h3>
              <p>
                If you need content updated on your website but don't want to
                waste unnecessary time learning the system; provide me with an
                update list and I will make the changes for you. This includes
                new pages, menu items, updated content and images.
              </p>
            </div>
            <div className="basis-1/3 h3Andp">
              <h3>Website optimization</h3>
              <p>
                Often websites have unnecessarily large images, excess files,
                links and code which can cause pages to load slowly taking away
                from a users experience of the website and can cause them to
                leave your site out of frustration.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="basis-1/3 h3Andp">
              <h3>Google services</h3>
              <p>
                Optimising your website for Google services is very important.
                Targeting specific keywords and demographics is vital to a
                website's performance. I offer Google Submissions, Ad words and
                Analytics for your website
              </p>
            </div>
            <div className="basis-1/3 h3Andp">
              <h3>Spam prevention</h3>
              <p>
                If you are getting spammed through your website via contact
                forms, email signups or comments contact me and I will take the
                necessary steps to ensure that your spam is mitigated if not
                entirely resolved
              </p>
            </div>
            <div className="basis-1/3 h3Andp">
              <h3>Search engine optimization (SEO)</h3>
              <p>
                Optimise your website and increase your search ranking on Google
                when people are looking for products or services similar to
                those that you or your company offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
