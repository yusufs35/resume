import React from "react";

const Counter = (props) => {
  const { name, value, sign } = props;
  return (
    <div className="featured-box text-center">
      <h4 className="text-12 text-muted mb-0">
        <span className="counter" data-from="0" data-to={value}>
          {value}
        </span>
        {sign}
      </h4>
      <p className="mb-0">{name}</p>
    </div>
  );
};

export default Counter;
