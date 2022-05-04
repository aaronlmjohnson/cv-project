import React, { Component } from "react";
import CvContainer from "./components/CvContainer";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
        generalInfo:{
          fullName:"Aaron Johnson",
          email:"aaron@gmail.com",
          phone:"012-345-6789"
      },
    }
  };



  render() {
    
    return (
        <CvContainer />
    );
  }
}

export default App;