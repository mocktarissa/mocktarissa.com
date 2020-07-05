import React from 'react';
import './RICK.png';
import './styles/body.css';
// import Contact from './containers/Contact';
import Load from './components/Load';
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
              I'm a multi-talented human. Most of my time I design and build digital products. You can also call me a product designer, experience designer, interaction, UI, UX or by any other market defined function-title. I'm also a multi-disciplinary maker with over 5 years of experience in wide range of design disciplines, manager, advisor, entrepreneur, front-end developer, music enthusiast, traveler, photographer and more.
          
          
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