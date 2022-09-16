import React from "react";
import SectionTitle from "../common/section-title/section-title";
import ResumeCard from "./resume-card";
import Skill from "./skill";

const Resume = () => {
  return (
    <section id="resume" className="section">
      <div className="container px-lg-5">
        <SectionTitle frontText="Resume" backText="Summary" />

        <div className="row gx-5">
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4">My Education</h2>
            <ResumeCard
              date="2000 - 2004"
              title="Computer Science"
              subTitle="International University"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
            <ResumeCard
              date="2005 - 2008"
              title="Bachelor Degree"
              subTitle="University of California"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
            <ResumeCard
              date="2009 - 2012"
              title="Master Degree"
              subTitle="Harvard University"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
          </div>

          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4">My Experience</h2>
            <ResumeCard
              date="2012 - 2013"
              title="Jr. UI UX Designer"
              subTitle="Themeforest"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
            <ResumeCard
              date="2014 - 2016"
              title="Jr. Product Designer"
              subTitle="Dribbble"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
            <ResumeCard
              date="2017 - 2019"
              title="Product Designer"
              subTitle="Adobe"
              desc="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
            />
          </div>
        </div>

        <h2 className="text-6 fw-600 mt-4 mb-4">My Skills</h2>
        <div className="row gx-5">
          <div className="col-md-6">
            <Skill name="Web Design" value="65" />
            <Skill name="HTML/CSS" value="95" />
            <Skill name="JavaScript" value="80" />
          </div>
          <div className="col-md-6">
            <Skill name="React JS" value="70" />
            <Skill name="Angular Js" value="60" />
            <Skill name="Bootstrap" value="99" />
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            href="#"
            className="btn btn-outline-secondary rounded-pill shadow-none"
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
