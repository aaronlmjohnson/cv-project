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
          email:'',
          phone:''
        },
      },
      generalInfo:{
        firstName:'',
        lastName:'',
        email:'',
        phone:''
      }   
  };
}

  handleChange = (e) => {
    this.setState({
        generalInfo:{
          firstName:e.target.id === 'first-name' ? e.target.value : this.state.generalInfo.firstName,
          lastName: e.target.id === 'last-name' ? e.target.value : this.state.generalInfo.lastName,
          email: e.target.id === 'email' ? e.target.value : this.state.generalInfo.email,
          phone: e.target.id === 'phone' ? e.target.value : this.state.generalInfo.phone,
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
        generalInfo: {firstName: '', lastName: '', email: '', phone: ''}, 
    });

  };


  render() {
    const { firstName, lastName, email, phone } = this.state.generalInfo;
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

          <label htmlFor="email">e-mail</label>
          <input
            onChange={this.handleChange}
            value={email}
            type="email"
            id="email"
          />

          <label htmlFor="phone">phone number</label>
          <input
            onChange={this.handleChange}
            value={phone}
            type="phone"
            id="phone"
          />



          <button type="submit">Submit</button>
        </form>
        <UserInfo user = {user}/>
      </div>
    );
  }
}

export default App;