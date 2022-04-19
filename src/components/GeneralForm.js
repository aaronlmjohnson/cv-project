import React, { Component} from "react";


class GeneralForm extends Component{
    generalInput(value, type, id, labelValue){
        return(
            <div className="general-form-input">
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
        const { fullName, email, phone } = this.props;

        return (
            <form id="general-info-form" onSubmit={this.props.onSubmitTask}>
                {this.generalInput(fullName , "text", "full-name", "Full Name")} 
                {this.generalInput(email, "email", "email", "E-mail")}
                {this.generalInput(phone, "phone", "phone", "Phone Number")}
              <button type="submit">Submit</button>
            </form>
        )
    }
}

export default GeneralForm;