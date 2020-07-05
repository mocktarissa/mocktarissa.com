import React from 'react';
import axios from 'axios';
import '../styles/portfolio.css'
import MyWork from '../components/MyWork';
class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }
    
    render(){
        return       <MyWork/>
    }
}

export default Portfolio;