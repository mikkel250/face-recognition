import React from "react";
//import "./FaceRecognition.css";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2 mb5">
        <img src={imageUrl} alt="" width="500px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
