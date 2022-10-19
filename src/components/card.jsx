import React from "react";

const Card = ({ children, ...props }) => {
  return (
    <div className="col-12 mb-3">
      <div className="bg-white rounded shadow-sm p-3 text-center" {...props}>
        {children}
      </div>
    </div>
  );
};

export default Card;
