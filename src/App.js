import React, { Component } from "react";
import CvContainer from "./components/CvContainer";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeForm: "general"
    }
  };



  render() {
    
    return (
        <CvContainer />
    );
  }
}

export default App;