import React, { Component } from "react";
import CV from "./components/CV";
import GeneralForm from "./components/GeneralForm";
import uniqid from "uniqid";
import StringHelper from "./StringHelper";

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
        id:uniqid(),
        isSubmitted: false
      }   
  };
}

  handleChange = (e) => {
    this.setState(prevState => ({
      generalInfo: {
        ...prevState.generalInfo, 
        fullName: {    
          ...prevState.generalInfo.fullName,
          text: this.setActiveField(e, 'full-name')
        },
        email:{
          ...prevState.generalInfo.email,
          text: this.setActiveField(e, 'email')
        },
        phone:{
          ...prevState.generalInfo.phone,
          text: this.setActiveField(e, 'phone')
        }
      }
    }));
  };

  handleEdit = (e)=>{

  }

  setActiveField = (e, fieldId)=>{
    const formattedFieldId = StringHelper.dashToCamelCase(fieldId);
    return e.target.id === fieldId ? e.target.value : this.state.generalInfo[formattedFieldId].text;
  }

  onSubmitTask = (e) => {
    e.preventDefault();

    this.setState({
        user:{
          generalInfo: {
            ...this.state.generalInfo,
            isSubmitted: true
          }
        },
        generalInfo: {
          fullName:{text:'', id: uniqid()},
          email: {text:'', id: uniqid()},
          phone: {text:'', id: uniqid()},
          id: uniqid(),
          isSubmitted: false
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

        <CV 
          user ={this.state.user}
          handleEdit = {this.handleEdit.bind(this)}
        />
      </div>
    );
  }
}

export default App;