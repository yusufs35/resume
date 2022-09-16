import React from "react";
import SectionTitle from "../common/section-title/section-title";
import Service from "./service";

const Services = () => {
  return (
    <section id="services" className="section bg-light">
      <div className="container px-lg-5">
        <SectionTitle frontText="What I Do?" backText="Services" />

        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <Service
                  title="Graphic Design"
                  desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
                  icon="palette"
                />
              </div>
              <div className="col-md-6">
                <Service
                  title="Web Design"
                  desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
                  icon="desktop"
                />
              </div>
              <div className="col-md-6">
                <Service
                  title="UI/UX Design"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                  icon="pencil-ruler"
                />
              </div>
              <div className="col-md-6">
                <Service
                  title="App Design &amp; Develop"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                  icon="paint-brush"
                />
              </div>
              <div className="col-md-6">
                <Service
                  title="Business Analysis"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                  icon="chart-area"
                />
              </div>
              <div className="col-md-6">
                <Service
                  title="SEO Marketing"
                  desc="Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure."
                  icon="bullhorn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
