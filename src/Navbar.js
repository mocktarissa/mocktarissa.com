import React from 'react';
import "./styles/navbar.css"
class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
    render(){
      var Lr=this.props.background;
        return (
          <div classNAme={Lr+" naver"}>
         <nav className="header">
         <div className="logo">
         <i class="fab fa-hornbill fabi"></i>
            <span>
              M
              </span>
              <span>
                I
                </span>
                <span>
                  .
                </span>
          </div>
          
        
         <li><a href=""> <i class="fab fa-houzz"></i> Home</a> </li>
          <li><a href="">
          <i class="fas fa-code"></i> Portfolio
            </a></li>
          <li><a href="">
          <i class="fas fa-cart-arrow-down"></i> Shop
            </a></li>
          <li><a href="">
          <i class="fab fa-pushed"></i> About me
            </a> </li>
          <li className="btne"><a href="" className="btne"><i class="fas fa-id-card"></i> Contact
            </a></li>
           
        



         </nav>
                    </div>
        );
    }
}

export default Navbar;