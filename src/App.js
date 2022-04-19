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
        fullName: {text:'', id: uniqid()},
        email:{text:'', id: uniqid()},
        phone:{text:'', id: uniqid()},
        id:uniqid()
      }   
  };
}

  handleChange = (e) => {
    const generalInfo = this.state.generalInfo;
    this.setState({
        generalInfo:{
          fullName:{text: this.setActiveField(e, 'full-name'), id: generalInfo.fullName.id},
          email: {text: this.setActiveField(e, 'email'), id: generalInfo.email.id},
          phone: {text: this.setActiveField(e, 'phone'), id: generalInfo.phone.id},
          id:generalInfo.id
        }
    });
  };

  setActiveField = (e, fieldId)=>{
    return e.target.id === fieldId ? e.target.value : this.state.generalInfo[fieldId.dashToCamelCase()].text;
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
        user:{
          generalInfo: this.state.generalInfo
        },
        generalInfo: {
          fullName:{text:'', id: uniqid()},
          email: {text:'', id: uniqid()},
          phone: {text:'', id: uniqid()},
          id: uniqid()
        }, 
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