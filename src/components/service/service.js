import React from "react";

const Service = (props) => {
  const { icon, title, desc } = props;

  return (
    <div className="featured-box style-3 mb-5">
      <div className="featured-box-icon text-primary bg-white shadow-sm rounded">
        <i className={`fas fa-${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p className="mb-0">{desc}</p>
    </div>
  );
};

export default Service;
