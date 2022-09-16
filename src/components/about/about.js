import React from "react";
import SectionTitle from "../common/section-title/section-title";
import Counter from "./counter";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container px-lg-5">
        <SectionTitle frontText="Know Me More" backText="About Me" />

        <div className="row gy-5">
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-7 fw-600 mb-3">
              I'm <span className="text-primary">Simone Olivia,</span> a Web
              Developer
            </h2>
            <p>
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              Delivering work within time and budget which meets client`s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </p>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul className="list-style-2">
                <li className="">
                  <span className="fw-600 me-2">Name:</span>Simone Olivia
                </li>
                <li className="">
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:chat@simone.com">chat@simone.com</a>
                </li>
                <li className="">
                  <span className="fw-600 me-2">Age:</span>28
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Los Angeles, California
                </li>
              </ul>
              <a href="#" className="btn btn-primary rounded-pill">
                Download CV
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="brands-grid separator-border mt-5">
          <div className="row">
            <div className="col-6 col-md-3">
              <Counter name="Years Experiance" value="10" sign="+" />
            </div>
            <div className="col-6 col-md-3">
              <Counter name="Happy Clients" value="250" sign="+" />
            </div>
            <div className="col-6 col-md-3">
              <Counter name="Projects Done" value="650" sign="+" />
            </div>
            <div className="col-6 col-md-3">
              <Counter name="Get Awards" value="20" sign="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
