import React from 'react';
import "./styles/navbar.css"
// import { Link } from 'react-router-dom';
class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
    render(){
      
        return (
          
<header class="desktop-header-2 light d-flex align-items-start flex-column">
	
	{/* <!-- logo image --> */}
	<div class="site-logo">
		<a href="/">
			<img src="images/logo-512.png" alt="Bolby" />
		</a>
	</div>
	
	{/* <!-- main menu --> */}
	<nav>
		<ul class="vertical-menu scrollspy">
			<li class="active"><a href="#home"><i class="icon-home"></i></a></li>
			<li><a href="#about"><i class="icon-user-following"></i></a></li>
			<li><a href="#experience"><i class="icon-graduation"></i></a></li>
			<li><a href="#services"><i class="icon-briefcase"></i></a></li>
			<li><a href="#works"><i class="icon-layers"></i></a></li>
			<li><a href="#blog"><i class="icon-note"></i></a></li>
			<li><a href="#contact"><i class="icon-bubbles"></i></a></li>
      <li><a href="#medium"><i class="icon-book-open"></i></a></li>
		</ul>
	</nav>
	
	{/* <!-- site footer --> */}
	<div class="footer">
		{/* <!-- copyright text --> */}
		<span class="copyright">© 2020 <a href="https://github.com/mocktarissa/">Mocktar Issa</a></span>
	</div>

</header>
        );
    }
}

export default Navbar;