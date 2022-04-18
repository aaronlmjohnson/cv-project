import React, { Component} from "react";


class GeneralForm extends Component{
    generalInput(value, type, id, labelValue){
        return(
            <div>
                <label htmlFor={id}>{labelValue}</label>
                <input
                    onChange={this.props.handleChange}
                    value={value}
                    type = {type}
                    id= {id}
                />
            </div>
        ) 
    }
    render(){
        const { firstName, lastName, email, phone } = this.props;

        return (
            <div>
            <form onSubmit={this.props.onSubmitTask}>
                {this.generalInput(firstName, "text", "first-name", "First Name")} 
                {this.generalInput(lastName, "text", "last-name", "Last Name")}
                {this.generalInput(email, "email", "email", "E-mail")}
                {this.generalInput(phone, "phone", "phone", "Phone Number")}
              <button type="submit">Submit</button>
            </form>
          </div>
        )
    }
}

export default GeneralForm;