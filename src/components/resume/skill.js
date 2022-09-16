import React from "react";

const Skill = (props) => {
  const { name, value } = props;

  return (
    <>
      <p className="text-dark fw-500 text-start mb-2">
        {name} <span className="float-end">{value}%</span>
      </p>
      <div className="progress progress-sm mb-4">
        <div
          className="progress-bar"
          role="progressbar"
          style={{width: `${value}%`}}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </>
  );
};

export default Skill;
