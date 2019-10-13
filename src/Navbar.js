import React from 'react';

class Navbar extends React.Component{

    render(){
        return (
        
       <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://www.mocktarissa.com"> 
            <span class="icon">
  <i class="glyphicon glyphicon-console"></i>
</span> <b>Mocktar</b>
          </a>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>
            <a className="navbar-item">
              My Work
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Blog
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  About
                </a>
                
                
              </div>
            </div>
          </div>
          <div className="navbar-end">
          <a className="navbar-item">
                  Github
                </a>
                
                <a className="navbar-item">
                  Contact
                </a>
          </div>
        </div>
      </nav>);
    }
}

export default Navbar;