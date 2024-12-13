import "./about.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

const About = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="text text-center">
            <h1>About Me</h1>
            <h5>
              I create emotional, meaningful & innovative digital experiences.
              <br /> I focus on crafting digital concepts to better enhance your
              online experience.
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="grid grid-cols-3 gap-4 aboutAndImage items-center">
            <div className="col-span-2">
              <div className="text-about">
                <h6>Hello, I am</h6>
                <h1>Telman Mammadov</h1>
                <p>
                  Hi, I’m Telman Mammadov, a Front End Developer based in
                  Azerbaijan. I am extremely passionate and dedicated to my work
                  and learning further in my career field.
                </p>
                <p>
                  With 2+ years of experience as a developer, I have acquired
                  the skills necessary to build feature-rich and premium
                  websites.
                </p>
                <p>
                  I was first introduced to website a few years before I began
                  work as an intern website developer however, I was not aware
                  at the time that I would fall in love with frontend and
                  backend . I have primarily been using Typescript during my
                  years of web developer however I am always looking to expand
                  my knowledge.
                </p>
                <p>
                  Lately I have been focusing heavily on web application UI
                  Design and UX Development. The tech stack is comprised of the
                  MERN stack (MongoDB, Express, React and Node) paired with
                  TailwindCSS.
                </p>
                <p>
                  I aim to improve on a skill every day and I am studying
                  part-time to improve my capability and abilities in the
                  workplace. There are a vast amount of web design languages and
                  frameworks out there that I would like to learn including
                  React, Node.js to name a few.
                </p>
              </div>
              <div className="flex gap-6 three-about">
                <div className="numberAndWord">
                  <h2>60+</h2>
                  <h6>Websites designed</h6>
                </div>
                <div className="numberAndWord">
                  <h2>12+</h2>
                  <h6>Courses completed</h6>
                </div>
                <div className="numberAndWord">
                  <h2>10+</h2>
                  <h6>Website languages</h6>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="imgbox-profile"></div>
            </div>
          </div>
        </div>
        <div className="row aboutWork">
          <div className="grid grid-cols-1 text-center workExperienceWord">
            <div>Work Experience</div>
          </div>

          <div className="grid grid-cols-2 aboutBox">
            <div className="col-span-1 current">
              <p>{`<Current/>`}</p>
            </div>
            <div className="col-span-1">
              <div className="box">
                <p>April 2023 - Present</p>
                <h3>Elemental Web Solutions</h3>
                <h5>
                  My latest venture in website design was gaining employment at
                  Elemental where I have started learning new technologies both
                  in the workplace and training. I am currently working on an
                  Angular course to further my knowledge and experience.
                </h5>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 aboutBox">
            <div className="col-span-1">
              <div className="box">
                <p>January 2021 - Present</p>
                <h3>telman.info</h3>
                <h5>
                  Once I was more comfortable and experienced in website design
                  I began freelancing to further my experience and
                  customer-relation skills. Handling all aspects of the process
                  gave me an insight into how a business is run and what it
                  takes to manage clients.
                </h5>
              </div>
            </div>
            <div className="col-span-1 freelance">
              <p>{`<Freelance />`}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 aboutBox">
            <div className="col-span-1 introduction">
              <p>{`<Introduction/>`}</p>
            </div>
            <div className="col-span-1">
              <div className="box">
                <p>May 2018 - April 2023</p>
                <h3>Maxitec Internet Services</h3>
                <h5>
                  My introduction to website design came from an internship and
                  later employment at a small ISP in my hometown. During my time
                  there I became familiar with CMS's, web technologies,
                  analytics and more.
                </h5>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="flex items-center justify-center">
            <div>
              <div className="imgboxTech">
                <img src="" alt="" />
              </div>
              <div className="imgboxTech">
                <img src="" alt="" />
              </div>
              <div className="imgboxTech">
                <img src="" alt="" />
              </div>
              <div className="imgboxTech">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
