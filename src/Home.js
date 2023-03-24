import React, { Component } from 'react';
import logom5t from './assets/m5techlogo1.png';
import './App.css';
import './app.scss';
import Navigation from './Navigation.js';

export default class Home extends Component {
  state = { 
      translateXtoRight: "translateX(0px)",
      translateXtoLeft: "translateX(0px)",
      scale: "scale(0.8)",
      rotate: "rotateY(0deg)"
  }
 
  listenScrollEvent = e => {
    let currentScrollPos = window.pageYOffset * 2
    var negScrollPos = (0 - currentScrollPos)
    if (currentScrollPos <= 100) {
      var logoAdjustedVal = 0.8
    }
    else {
      var logoAdjustedVal = (currentScrollPos/100)
    }
    // console.log(currentScrollPos, logoAdjustedVal, negScrollPos)
    var rotateYVal = (currentScrollPos/2.5)+1
    this.setState({translateXtoLeft: "translateX("+ negScrollPos +"px)"})       // Slide text to left | translateY("+ currentScrollPos +"px)
    this.setState({translateXtoRight: "translateX("+ currentScrollPos +"px)"})  // Slide text to right | translateY("+ currentScrollPos +"px)
    this.setState({scale: "scale("+ logoAdjustedVal +") rotateY("+ rotateYVal +"deg)"})   // Zoom logo image
  }

  componentDidMount() {  
      window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {

    return (  
      <> 
        <div className='HomeLogo'>
          <img className='' src={logom5t} style={{transform: this.state.scale}} alt='logo'></img>
        </div>
      
        <div className='app_title' id='app_left' style={{transform: this.state.translateXtoLeft}}>
          Digital</div>
        <div className='app_title' id='app_right' style={{transform: this.state.translateXtoRight}}>
          Cover</div>     
      
      </>
    )
  }
}

// import React, { Component } from 'react'
// import logom5t from './assets/m5techlogo1.png'
// import './App.css';

// export default class App extends Component {
//   state = { 
//       translateXtoRight: "translateX(0px)",
//       translateXtoLeft: "translateX(0px)",
//       scale: "scale(0.8)",
//       rotate: "rotateY(0deg)"
//   }
 
//   listenScrollEvent = e => {
//     let currentScrollPos = window.pageYOffset * 2
//     var negScrollPos = (0 - currentScrollPos)
//     var logoAdjustedVal = (currentScrollPos/100)
//     console.log(currentScrollPos, logoAdjustedVal, negScrollPos)
//     var rotateYVal = (currentScrollPos/2.5)+1
//     this.setState({translateXtoLeft: "translateX("+ negScrollPos +"px)"})       // Slide text to left | translateY("+ currentScrollPos +"px)
//     this.setState({translateXtoRight: "translateX("+ currentScrollPos +"px)"})  // Slide text to right | translateY("+ currentScrollPos +"px)
//     this.setState({scale: "scale("+ logoAdjustedVal +") rotateY("+ rotateYVal +"deg)"})   // Zoom logo image
//   }

//   componentDidMount() {
//       window.addEventListener('scroll', this.listenScrollEvent)
//   }

//   render() {

//     return (
//       <>
//       <div className="App">
//         <div className='HomeLogo'>
//           <img className='' src={logom5t} style={{transform: this.state.scale}} alt='logo'></img>
//         </div>
      
//         <div className='app_title' id='app_left' style={{transform: this.state.translateXtoLeft}}>
//           Digital</div>
//         <div className='app_title' id='app_right' style={{transform: this.state.translateXtoRight}}>
//           Cover</div>
//       </div>
//       </>
//     )
//   }
// }