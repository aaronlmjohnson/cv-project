import React, { Component } from "react";
import CV from "./components/CV";
import GeneralForm from "./components/GeneralForm";
import uniqid from "uniqid";

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

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
        user:{
          generalInfo: {
            ...this.state.generalInfo,
            isSubmitted: true,
            isBeingEdited: false
          }
        },
        generalInfo: {
          fullName:{text:'', id: uniqid()},
          email: {text:'', id: uniqid()},
          phone: {text:'', id: uniqid()},
          id: uniqid(),
          isSubmitted: false,
          isBeingEdited: false
        }, 
    });
  };

  displayView = ()=>{
    const {generalInfo} = this.state.user

    if(!generalInfo.isSubmitted){
      return (
        <GeneralForm 
          generalInfo = {this.state.generalInfo}
          user = {this.state}
          handleChange={this.handleChange.bind(this)}
          onSubmit={this.onSubmit.bind(this)}
        />
      )
    }

    return (
      <CV 
          user ={this.state.user}
          generalInfo={this.state.generalInfo}
          handleEdit = {this.handleEdit.bind(this)}
          handleChange = {this.handleChange.bind(this)}
          onSubmit = {this.onSubmit.bind(this)}
        />
    )
  }

  render() {
    return (
      <div id="content">
        {this.displayView()}
      </div>
    );
  }
}

export default App;