import React from 'react';
import './styles/footer.css'
class Footer extends React.Component{
render(){
    return(
     <div >
        <div className="footer">
        <li><a href="https://github.com/mocktarissa"><i class="fab fa-github"></i>Github</a></li>
        <li><a href="https://medium.com/@mocktarissa"><i class="fab fa-medium"></i>Medium</a></li>
        <li><a href="https://www.instagram.com/mocktar_issa/"><i class="fab fa-instagram"></i>Instagram</a></li>
        <li><a href="https://twitter.com/mocktarissa"><i class="fab fa-twitter"></i>Twitter</a></li>
        <li><a href="https://www.linkedin.com/in/mocktar-issa-30a9674a/"><i class="fab fa-linkedin"></i>Youtube</a></li>
        </div> 
               
     </div>     );
   
}
}

export default Footer; 