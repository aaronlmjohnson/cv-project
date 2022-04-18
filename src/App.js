// App.js

import React, { Component } from "react";
import UserInfo from "./components/UserInfo";
//import uniqid from "uniqid";

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
        generalInfo:{
          firstName:e.target.id === 'first-name' ? e.target.value : this.state.generalInfo.firstName,
          lastName: e.target.id === 'last-name' ? e.target.value : this.state.generalInfo.lastName
        }
    });
  };

  // handleGeneralInfoField(e, id){
  //     return e.target.id === id ? e.target.value : this.state.generalInfo
  // }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
        user:{
          generalInfo: this.state.generalInfo
        },
        generalInfo: {firstName: '', lastName: ''}, 
    });

  };

  render() {
    const { firstName, lastName } = this.state.generalInfo;
    const {user} = this.state;

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

          <label htmlFor="last-name">Last Name</label>
          <input
            onChange={this.handleChange}
            value={lastName}
            type="text"
            id="last-name"
          />

          <button type="submit">Submit</button>
        </form>
        <UserInfo user = {user}/>
      </div>
    );
  }
}

export default App;