import React from "react";

const ContactForm = () => {
  return (
    <>
      <h2 className="mb-3 text-5 text-uppercase text-center text-md-start">
        Send us a note
      </h2>
      <form id="contact-form" action="php/mail.php" method="post">
        <div className="row g-4">
          <div className="col-xl-6">
            <input
              name="name"
              type="text"
              className="form-control"
              required=""
              placeholder="Name"
            />
          </div>
          <div className="col-xl-6">
            <input
              name="email"
              type="email"
              className="form-control"
              required=""
              placeholder="Email"
            />
          </div>
          <div className="col">
            <textarea
              name="form-message"
              className="form-control"
              rows="5"
              required=""
              placeholder="Tell us more about your needs........"
            ></textarea>
          </div>
        </div>

        <p className="text-center mt-4 mb-0">
          <button
            id="submit-btn"
            className="btn btn-primary rounded-pill d-inline-flex"
            type="submit"
          >
            Send Message
          </button>
        </p>
      </form>
    </>
  );
};

export default ContactForm;
