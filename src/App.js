import React, { Component } from "react";
import CV from "./components/CV";
import GeneralForm from "./components/GeneralForm";
import uniqid from "uniqid";
import String from "./String";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user:{
        generalInfo:{},
      },
      generalInfo:{
        fullName: '',
        email:'',
        phone:'',
        id:uniqid()
      }   
  };
}

  handleChange = (e) => {
    this.setState({
        generalInfo:{
          fullName:this.setActiveField(e, 'full-name'),
          email: this.setActiveField(e, 'email'),
          phone: this.setActiveField(e, 'phone'),
          id:this.state.generalInfo.id
        }
    });
  };

  setActiveField = (e, fieldId)=>{
    return e.target.id === fieldId ? e.target.value : this.state.generalInfo[fieldId.dashToCamelCase()];
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
        user:{
          generalInfo: this.state.generalInfo
        },
        generalInfo: {fullName:'', email: '', phone: '', id: uniqid()}, 
    });
  };

  render() {
    return (
      <div id="content">
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