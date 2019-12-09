import React from 'react';

import './App.css';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      background: true,
    }
    this.handleUiChange=this.handleUiChange.bind(this);
  }
  handleUiChange(evt){

    this.setState(
      {
      background: this.state.background? false:true
      }
    )
  }
  render(){
    return (
      <div className="App">
        <Navbar background={this.state.background? "dark":" "}/>
        <button className="floot" onClick={this.handleUiChange}> {this.state.background ? "White Mode":"Dark mode" } </button>
        <Body background={this.state.background? "dark":" "}/>
        
             
        <Footer/>
      </div>
    );
  }
  
}

export default App;
