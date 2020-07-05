import React from 'react';
import '../styles/mywork.css'
import movielist from './movie-list.png';
import colorpalette from './img/react-color-picker.png'
import dadjokes from './img/dad-jokes.png'
class MyWork extends React.Component{
    constructor(props){
        super(props);
        this.state={
            jobs:[
                {   
                    jobTile:"Movie List ",
                    description:"Movie sugestion website built using react",
                    link:"https://react-color-picker-ui.netlify.app/",
                    img:movielist

                },
                {
                    jobTile:"React Color Picker",
                    description:"Color palette generator built using React and React Router",
                    link:"https://react-color-picker-ui.netlify.app/",
                    img:colorpalette,
                },
                {
                    jobTile:"Dad joke ranker ",
                    description:"React app built using the Dad joke API",
                    link:"https://where-are-dads-jokes.netlify.app/",
                    img:dadjokes,
                },
                
            ]
        }
    }

    render(){
        return(
            <div className="container-project">
            {this.state.jobs.map(
            job=>{
                return <div class="card" >
                <img src={job.img} alt={job.jobTile}/>
                <h3>{job.jobTile}</h3>
                <p>{job.description}</p>
                
                <a href={job.link}>View Live Page</a>
                </div>
            }    
            )}

            </div>
        );
    }
}

export default MyWork;