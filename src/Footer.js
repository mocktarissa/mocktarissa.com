import React from 'react';
import './styles/footer.css'
class Footer extends React.Component{
render(){
    return(
     <div class="footer">
         <p>&copy; Mocktar Issa</p>
        <li><a href="https://github.com/mocktarissa"><i class="fab fa-github"></i>Github</a></li>
        <li><a href="https://medium.com/@mocktarissa"><i class="fab fa-medium"></i>Medium</a></li>
        <li><a href=""><i class="fab fa-instagram"></i>instagram</a></li>
        <li><a href=""><i class="fab fa-twitter"></i>Twitter</a></li>
        <li><a href=""><i class="fab fa-youtube"></i>Youtube</a></li>
     </div>     );
   
}
}

export default Footer; 