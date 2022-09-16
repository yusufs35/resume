import React from "react";

const ResumeCard = (props) => {

    const { date, title, subTitle, desc } = props;


  return (
    <div className="bg-white border rounded p-4 mb-4">
      <p className="badge bg-primary text-2 fw-400">{date}</p>
      <h3 className="text-5">{title}</h3>
      <p className="text-danger">{subTitle}</p>
      <p className="mb-0">{desc}</p>
    </div>
  );
};

export default ResumeCard;
