import React from "react";
import Footer from "../../Shared/Footer/Footer";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact my-5 py-5">
      <div className="row container mx-auto">
        <div className="col-md-6 section-header mb-5">
          <h1>
            Let us handle your <br /> project, professionally.
          </h1>
          <p>
            With well written codes, we build amazing apps for all <br />{" "}
            platforms, mobile and web apps in general.
          </p>
        </div>
        <div className="col-md-6">
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your email address *"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your name / company’s name *"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                className="form-control"
                id=""
                cols="30"
                rows="10"
                placeholder="Your message *"
              ></textarea>
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-brand">
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
