import React from 'react';

class Footer extends React.Component{
render(){
    return(
     

            <footer className="footer">
              <div className="content has-text-centered">
                <p>
                  <strong>Mocktar Issa </strong> by <a href="https://mocktarissa.com">Mocktar Issa</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
                <p>
                    Built with love using <a href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width={50} height={28} />
                    </a> And with React <a href="https://reactjs.org/">
                    <img src="https://www.stickpng.com/assets/images/584830f5cef1014c0b5e4aa1.png" width={25} height={28} />
                    </a>
                </p>
              </div>
            </footer>
          );
   
}
}

export default Footer; 