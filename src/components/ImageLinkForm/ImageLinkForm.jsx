import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="ma4 mt0">
      <p className="f3">
        {
          "Welcome to the Magic Brain App! Enter the link to a picture below and this magic brain will detect any faces."
        }
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5 center">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 div white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
