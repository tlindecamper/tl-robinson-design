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
                    <h1>Contact Us</h1> 
                </div>
                    <div >
                        <h1 className="contact-phrase">
                        I would love to hear from you.  Please click the link below so I can reach out to you. 
                         Make sure to include your 
                        Name, Phone Number and Email, along with a description of your project. 
                         I look forward to hearing from you.<br/>                   
                        Leta Harding<br/>
                        801-362-5661
                        </h1>
                    </div>    
                    <div className="contact-email">
                        <a  href="mailto:tlrobinsondesign@gmail.com?subject=I am interested in a consultation">click here to email </a>  
                                              
                    </div>    
                    <div className="contact-pic">                         
                    </div>                    
                
            </div>
        )
    } 
}