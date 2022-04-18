// App.js

import React, { Component } from "react";
import GeneralForm from "./components/GeneralForm";
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
    return (
      <div>
          <GeneralForm 
        generalInfo = {this.state.generalInfo}
        user = {this.state}
        handleChange={this.handleChange.bind(this)}
        onSubmitTask={this.onSubmitTask.bind(this)}

        />
        <UserInfo generalInfo = {this.state.user.generalInfo}/>
      </div>
    );
  }
}

export default App;