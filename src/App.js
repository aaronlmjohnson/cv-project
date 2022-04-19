// App.js

import React, { Component } from "react";
import CV from "./components/CV";
import GeneralForm from "./components/GeneralForm";

//import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user:{
        generalInfo:{
          fullName: '',
          email:'',
          phone:''
        },
      },
      generalInfo:{
        fullName: '',
        email:'',
        phone:''
      }   
  };
}

  handleChange = (e) => {
    this.setState({
        generalInfo:{
          fullName:e.target.id === 'full-name' ? e.target.value : this.state.generalInfo.fullName,
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
        generalInfo: {fullName:'', email: '', phone: ''}, 
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
        <CV user ={this.state.user}/>
      </div>
    );
  }
}

export default App;