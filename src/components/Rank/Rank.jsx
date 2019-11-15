import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="">
      <div className="white f3">{`${name}, your current entry count is ${entries}`}</div>
    </div>
  );
};

export default Rank;
