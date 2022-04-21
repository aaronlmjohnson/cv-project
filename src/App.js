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
        isSubmitted: false,
        isBeingEdited: false
      }   
  };
}

  handleChange = (e) => {
    console.log(e.target.name)
    this.setState(prevState => ({
      generalInfo: {
        ...prevState.generalInfo,
        [e.target.name]:{
          ...prevState.generalInfo[e.target.name],
          text: e.target.value
        } 
      }
    }));
  };

  handleEdit = (e)=>{
    this.setState(prevState =>({
      user:{
        generalInfo:{
          ...prevState.user.generalInfo,
          isBeingEdited: true
        }
      },
      generalInfo:{
        ...prevState.user.generalInfo
      }
    }));
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
          handleChange = {this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

export default App;