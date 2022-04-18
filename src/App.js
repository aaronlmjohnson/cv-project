// App.js

import React, { Component } from "react";
import UserInfo from "./components/UserInfo";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user:{
        generalInfo:{
          firstName:'',
          lastName:'',
        },
      },
      generalInfo:{
        firstName:'',
        lastName:''
      }   
  };
}

  handleChange = (e) => {
    this.setState({
        generalInfo:{firstName:e.target.value}
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
        user:{
          generalInfo: this.state.generalInfo
        },
        generalInfo: {firstName: ''}, 
    });

  };

  render() {
    const { firstName } = this.state.generalInfo;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="first-name">First Name</label>
          <input
            onChange={this.handleChange}
            value={firstName}
            type="text"
            id="first-name"
          />

          <button type="submit">Add Task</button>
        </form>
        <UserInfo firstName={firstName} />
      </div>
    );
  }
}

export default App;