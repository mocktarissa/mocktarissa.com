import React from 'react';
import "./styles/navbar.css"
import { Link } from 'react-router-dom';
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
          
        
         <li>
            
           <Link exact to="/"><i class="fab fa-houzz"></i> Home</Link>
           </li>
          <li><Link exact to="portfolio">
          <i class="fas fa-code"></i> Portfolio
          </Link>
          </li>

          <li><Link exact to="/shop">
          <i class="fas fa-cart-arrow-down"></i> Shop
          </Link></li>
          <li><Link exact to="AboutMe">
          <i class="fab fa-pushed"></i> About me
          </Link>
             </li>
          <li ><Link exact to="contact">
          <i class="fas fa-id-card"></i>Contact
          </Link> 
            </li>
           
        



         </nav>
                    </div>
        );
    }
}

export default Navbar;