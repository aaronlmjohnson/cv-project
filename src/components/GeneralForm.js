import React, { Component} from "react";


class GeneralForm extends Component{
    render(){
        const { firstName, lastName, email, phone } = this.props;

        return (
            <div>
            <form onSubmit={this.props.onSubmitTask}>
              <label htmlFor="first-name">First Name</label>
              <input
                onChange={this.props.handleChange}
                value={firstName}
                type="text"
                id="first-name"
              />
    
              <label htmlFor="last-name">Last Name</label>
              <input
                onChange={this.props.handleChange}
                value={lastName}
                type="text"
                id="last-name"
              />
    
              <label htmlFor="email">e-mail</label>
              <input
                onChange={this.props.handleChange}
                value={email}
                type="email"
                id="email"
              />
    
              <label htmlFor="phone">phone number</label>
              <input
                onChange={this.props.handleChange}
                value={phone}
                type="phone"
                id="phone"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )
    }
}

export default GeneralForm;