import React from "react";
import "./App.css";
import Navbar from "./Navbar";

import Footer from "./Footer";
// import Portfolio from "./containers/Portfolio";
// import { Route, Switch } from "react-router-dom";
// import Contact from "./containers/Contact";
// import Home from "./containers/Home";
// import Shop from "./containers/Shop";
// import AboutMe from "./containers/AboutMe";
import Body from "./Body";
// import UnderConstruction from "./components/UnderConstruction";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: true,
    };
    this.handleUiChange = this.handleUiChange.bind(this);
  }
  handleUiChange(evt) {
    this.setState({
      background: this.state.background ? false : true,
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar background={this.state.background ? "dark" : " "} />
        <Body></Body>
        <Footer />     

      </div>
    );
  }
}

export default App;
