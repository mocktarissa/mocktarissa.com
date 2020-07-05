import React from 'react';
import './RICK.png';
import './styles/body.css';
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
      <div className={background}>
        <div class={background}>
          <div class="container">
            <h1 class="display-4">Hello I'm Mocktar(This site is still under construction)</h1>
            <p class="lead">
              I am Software Engineer/Web Developper with experience with industry experience with Machine Learning and Quality Assurance. 
          
</p>
          </div>

        </div>

        <div className="container">
          <div class="title">
            <h1> PORTFOLIO</h1>
            <hr />
          </div>

          <MyWork/>



          

        </div>
        
        {/* <Load></Load> */}
       
      </div>
    );
  }
}
export default Body;