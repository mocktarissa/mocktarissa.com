import React from 'react';
import './RICK.png';
import './styles/body.css';
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import MyStack from './components/MyStack'

// import MyWork from './components/MyWork'

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    
    return (

      <main>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <MyStack></MyStack>
      </main>
    );
  }
}
export default Body;
