import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./contact.css";
import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container-fluid">
        <div className="flex flex-col items-center justify-center">
          <div className="row">
            <div className="contactAndGet">
              <h1>Contact</h1>
              <h6>
                Get in touch if you have any questions or <br /> want to
                collaborate on any projects.
              </h6>
            </div>
          </div>
          <div className="row ci">
            <div className="contactInformation">
              <h1>Contact Information</h1>
              <h5 className="mt-4 mb-4">
                Feel free to contact me regarding any website or collaborative
                related topics. I would love to help get your brand or business
                the recognition it deserves.
              </h5>
              <h5>
                <MailOutlineIcon /> mammadovtelman03@gmail.com
              </h5>
              <h5 className="mt-4">
                <LocationOnIcon /> Baku - Azerbaijan
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
