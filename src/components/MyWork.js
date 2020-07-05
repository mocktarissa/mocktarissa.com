import React from 'react';
import '../styles/mywork.css'
import movielist from './movie-list.png' 
class MyWork extends React.Component{
    constructor(props){
        super(props);
        this.state={
            jobs:[
                {   
                    jobTile:"React Color Picker",
                    description:"Color palette generator built using React and React Router",
                    link:"https://react-color-picker-ui.netlify.app/",
                    img:movielist

                },
                {
                    jobTile:"React Color Picker",
                    description:"Color palette generator built using React and React Router",
                    link:"https://react-color-picker-ui.netlify.app/",
                    img:movielist
                },
            ]
        }
    }

    render(){
        return(
            <div className="container">
            {this.state.jobs.map(
            job=>{
                return <div class="card" >
                <h3>{job.jobTile}</h3>
                <p>{job.description}</p>
                <img src={job.img} alt={job.jobTile}/>
                <a href={job.link}>View</a>
                </div>
            }    
            )}

            </div>
        );
    }
}

export default MyWork;