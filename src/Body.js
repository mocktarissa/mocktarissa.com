import React from 'react';
import './RICK.png';
import './styles/body.css';
import Home from './components/Home'
import About from './components/About'
// import Contact from './containers/Contact';

import MyWork from './components/MyWork'

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    var background = this.props.background + " jumbotron jumbotron-fluid jb-is"
    return (
      <main>
      <Home></Home>
      <About></About>
      </main>
    );
  }
}
export default Body;