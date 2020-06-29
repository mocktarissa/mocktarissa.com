import React from 'react';
import './RICK.png';
import './styles/body.css';
import Contact from './containers/Contact';
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

          <div class="Info container-fluid">
            <div class="row">
              <div class="col imge">col <button className="hovr">Learn More</button> </div>

              <div class="col-lg-6 exte">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          
          
</div>

            </div>
          </div>


          <div class="Info container-fluid">
            <div class="row">


              <div class="col-lg-6 exte">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          
          
</div>
              <div class="col imge">col</div>
            </div>
          </div>

          <div class="Info container-fluid">
            <div class="row">
              <div class="col imge">col</div>

              <div class="col-lg-6 exte">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          
          
</div>

            </div>
          </div>
        </div>
        
        <Load></Load>
       
      </div>
    );
  }
}
export default Body;