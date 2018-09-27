import React, {Component} from 'react'
import '../App.css';
import CoverImage from '../Images/cover.jpg';
import UploadImage from '../Components/UploadImage';

export default class Home extends Component {
    render(){
    return (
        <div >
            <NavBar />
            <Hero />
            {/* <UploadImage/> */}
            <About />
            <WhatWeDo />
            <Upcoming/>
        </div>
    )
    }
}

// class NavBar extends Component {
//     render() {
//         return(

//         )
//     }
// }

class NavBar extends Component {
  render() {
    return (
      <div id="navBar" className = "NavBar">
        <div class="eatburpTitle"><h1>Eatburp</h1></div>
        <div class="navLinks">
        <a class="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#whatWeDo">Contribute</a>
        <a href="#upcoming">Upcoming</a></div>
      </div>
    );
  }
}

class Hero extends Component {
    render() {
      return (
        <div id="hero" className="Hero" style={{}}>
          <div className="content">
            {/* <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" /> */}
            
            <h2 style={{fontSize:'50px', color:'#ffda00'}}>For there's something special for everyone, everywhere!</h2>
            <p></p>
            <div className="button-wrapper">
              <HeroButton primary={true} text="Submit Images" />
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      );
    }
}

class About extends Component {
  render() {
    return (
      <div id="about" className="About" style={{backgroundColor:'#fff'}}>
        <div className="content" style={{}}>
          {/* <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" /> */}          
          <p style={{paddingTop:'5%',paddingBottom:'5%',marginLeft:'10%', marginRight:'10%'}}><b>What do you do when you visit a new place and you want to explore some nice cafes, delicacies, drinks blah ?</b>

<b>Obviously, Ask google-“Best cafes to visit in indore/mumbai/ delhi” </b>
and what do you get? a liiiisst of places! but what would you do if all you care about is the taste and a list of reviews might change your mind and reading gets boring? sigh

That’s where *burpppp*oops, sorry i had a heavy meal :p
So,
that’s where Eatburp would serve you as an assistant and take you to all the amazing places with good taste, good taste and gooooood taste!


Also, I’m not a Food app. Please call me a food bot! it sounds more humanly. isn’t it?
          </p>
        </div>
      </div>
    );
  }
}

class WhatWeDo extends Component {
  render() {
    return (
      <div id="whatWeDo" className="WhatWeDo" style={{backgroundColor:'#F4D03F'}}>
        <div className="content">
          {/* <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" /> */}
          
          <h1>For there's something special for everyone, everywhere!</h1>
          <p></p>
        </div>
      </div>
    );
  }
}

class Upcoming extends Component {
  render() {
    return (
      <div id="upcoming" className="Upcoming" style={{backgroundColor:'#1ABC9C'}}>
        <div className="content">
          {/* <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="narcos background" /> */}
          
          <h1>For there's something special for everyone, everywhere!</h1>
          <p></p>
          </div>
      </div>
    );
  }
}

class HeroButton extends Component{
    render(){
      return (
        <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
      );
    }
}