import React, { Component } from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
import './App.css';
import FdcLogo from './Images/image.png';
import Home from './Components/HomeRoute';
import Footer from './Footer';
import ImageRoute from './Components/ImageRoute';
import About from './Components/AboutRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Route exact path ="/" component ={Home}/>
            {/* <Route path ="/about" component = {About}/> */}
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;