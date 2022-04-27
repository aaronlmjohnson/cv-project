import React, { Component } from "react";
import CvForm from "./components/CvForm";

class App extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div id="content">
        <CvForm />
      </div>
    );
  }
}

export default App;