import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank.jsx";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesjs-config";
import Clarifai from "clarifai";

import "./App.css";

// Require the client

// initialize with your api key. This will also work in your browser via http://browserify.org/

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_API
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      imageUrl: ""
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    console.log("submitted");
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function(response) {
          // check that we're getting a response
          console.log(
            response.outputs[0].data.regions[0].region_info.bounding_box
          ); 
        },
        function(err) {
          // there was an error
          console.log(err);
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
