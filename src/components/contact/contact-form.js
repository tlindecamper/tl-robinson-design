import React, { Component } from 'react';


export default class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            phoneNumber: "",
            email: "" 
        }
        this.handleChange  = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {  
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        let name = this.state.name
        let phoneNumber = this.state.phoneNumber
        let email = this.state.email
        }


   


    render() {
        return (
            <div className="contact-form-wrapper">
                <div className="contact-form">
                    <h1>Contact me</h1>
                </div>
                    <div className="contact-phrase">
                        <p>
                        I would love to hear from you.  Please click the below link so I can reach out to you. 
                         Make sure to include your 
                        Name, phone number and email, and a description of what I can help you with. 
                         I look forward to hearing from you.<br/>                   
                        Leta Harding<br/>
                        801-362-3005
                        </p>
                    </div>    
                    <div className="contact-email">
                        <a href="mailto:tlrobinsondesign@gmail.com?subject=I am interested in contacting you">click here to email </a>  
                                              
                    </div>    
                    <div className="contact-pic"> 
                        
                    </div>                    
                
            </div>
        )
    } 
}