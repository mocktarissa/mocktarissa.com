import React from 'react';
import '../styles/mywork.css'

class MyWork extends React.Component{
    constructor(props){
        super(props);
        this.state={
            jobs:[
                {
                    jobTile:"Shop manager",
                    description:"I build a Shop manaager using React Js that is cloud based and allow a company to manage efficiently its stores in a could based manner"
                },
                {
                    jobTile:"",
                    description:""
                },
            ]
        }
    }

    render(){
        return(
            <div className="container">
            <div class="card" >
            <img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80."
             class="card-img-top" alt="..."/>>
            <div class="card-body">
                <h5 class="card-title">{this.state.jobs[0].jobTile}</h5>
                <p class="card-text">{this.state.jobs[0].description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>

            </div>
        );
    }
}

export default MyWork;