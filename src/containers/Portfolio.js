import React from 'react';
import axios from 'axios';
import '../styles/portfolio.css'
class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }
    async componentDidMount(){
        let res= await axios.get("https://api.github.com/users/mocktarissa/repos");
        
            
            this.setState(
               {data:res.data,} 
            )
        
    
        console.log(res.data);
    }
    render(){
        var projects=this.state.data.map( 
            p =>(
                <div > 
                    <img src={p.owner.avatar_url} alt="Logo"/>
                    {p.owner.login}
                     <a href={p.archive_url}> {p.id}</a>
                    <div>
                        {p.description}
                        <br/>
                        {p.full_name}
                    </div>
                </div>
            )
        );
        return <div className="portfolio-container">
            {projects}
        </div>
    }
}

export default Portfolio;