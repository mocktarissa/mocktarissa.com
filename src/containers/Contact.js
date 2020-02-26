import React from 'react';
import '../styles/body.css'

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.handlesubmit=this.handlesubmit.bind(this);
        
    }
    handlesubmit(evt){
        evt.preventDefault();
        alert(`Your message has been received we will get back soon. at ${evt.target.value}`);
    }
    render(){
        return(
            <div className="container contact">
                
            <form onSubmit={this.handlesubmit}>
               <div class="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" id="email" className="form-control"/>
                  <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                <label htmlFor="text"> Message</label>
                <input type="text" name="" id="text" className="form-control"/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            
            </div>
        )
    }
};

export default Contact;