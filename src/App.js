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
    const {activeForm} = this.state
    return (
        <CvContainer activeForm={activeForm}/>
    );
  }
}

export default App;