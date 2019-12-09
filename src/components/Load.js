import React from'react'
import '../styles/body.css'
class Load extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(evt){
        alert(`you clicked on element ${evt.target.value}`)
    }
render(){
    return(
<div className="row">
  <div className="col">
  <div className="load " onClick={this.handleClick}></div>

  </div>
  <div className="col">
  <div className="load "></div>

  </div>
  <div className="col">

  <div className="load "></div>

  </div>
</div>
)}
}

export default Load;