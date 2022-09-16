import React from "react";

const SectionTitle = (props) => {
  const { frontText, backText } = props;

  return (
    <div className="position-relative d-flex text-center mb-5">
      <h2 className="text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0">
        {backText}
      </h2>
      <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0">
        {frontText}
        <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
      </p>
    </div>
  );
};

export default SectionTitle;
