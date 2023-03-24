// import React, { Component } from 'react'
// // import logom5t from './assets/m5techlogo1.png'

// export default class Navigation extends Component {
//     state = { 
//         clicked: false,
//         // color: 'rgba(196, 213, 228, 0.555)',
//         // color: 'white',
//         visibility: 'visible',
//         transition: 'none',
//         isHovering: false,
//         opacity: '1'
//     }
    
//     handleClick = () => {
//         this.setState({clicked: !this.state.clicked})
//     }

//     listenScrollEvent = e => {
//         // let currentScrollPos = window.pageYOffset
//         if (window.scrollY > 100) {
//             this.setState({opacity: '0'})
//             this.setState({visibility: 'hidden'})
//         } else if (window.scrollY >= 50 && window.scrollY <= 100) {
//             this.setState({opacity: '0.5'})
//             this.setState({visibility: 'visible'})
//         } else if (window.scrollY < 50) {
//             this.setState({opacity: '1'})
//             this.setState({visibility: 'visible'})
//         }
//     }

//     handleMouseEnter = () => {
//         this.setState({isHovering: true})
//     }
//     handleMouseLeave = () => {
//         this.setState({isHovering: false})
//     }

//     componentDidMount() {
//         window.addEventListener('scroll', this.listenScrollEvent)
//     }

//     render(){
    
//         return (
//             <>
//             <nav className='fixed-navigation' 
//             style={{background: this.state.color, transition: this.state.transition,
//                     visibility: this.state.visibility, opacity: this.state.opacity,
//                 }}
//                 >
//                 {/* <a href='/'><img src={logom5t} className="M5T-logo" alt="logo"/></a> */}

//                 <div>
//                     <ul id="navbar" 
//                         className={this.state.clicked ? "#navbar active" : "#navbar"}
//                         >
//                         <li><a href='/'>Home</a></li>
//                         <li><a href='/about'>About</a></li>
//                         <li><a href='/'>Services</a></li>
//                         <li><a href='/'>Partners</a></li>
//                         <li><a href='/'>Team</a></li>
//                         <li><a href='/'>Contact</a></li>
//                     </ul>
//                 </div>

//                 <div id='mobile' onClick={this.handleClick}>
//                     <i id='bar' 
//                     className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
//                     ></i>
//                 </div>
//             </nav>
//             </>
//         )  
//     }
// }
import React, {useState} from 'react';
import './app.scss';
import {motion, AnimatePresence} from "framer-motion";
import Apps from './App';

function App() {

  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  }

  const closeMenu = () => {
    setOpen(false);
  }

  //lets start animation
  const item={
    exit:{ 
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        delay:1.2
      }
    }
  }

  return (
    <>
    <div className="container">
      <header>
        <div className="menu" onClick={isOpen}>
          <i className="fa fa-bars"></i>
        </div>
      </header>

      <AnimatePresence>
      
        {
          open &&(
            <motion.div className="menu_container"
              variants={item}
              initial={{height:0,opacity:0}}
              animate={{height:"100vh", opacity:1}}
              transition={{duration:.5}}
              exit="exit"
            >
              <div className="btn_close" onClick={closeMenu}>X</div>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.8}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:1
                    }
                 }}
              >Home</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.7}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.8
                    }
                 }}
              >About</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.6}}
                 exit={{
                  opacity:0,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.6
                    }
                 }}
              >Portfolio</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.5}}
                 exit={{
                  opacity:1,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.4
                    }
                 }}
              >Blog</motion.a>
              <motion.a href=""
                 initial={{y:80,opacity:0}}
                 animate={{y:0, opacity:1}}
                 transition={{delay:.4}}
                 exit={{
                  opacity:1,
                  y:90,
                    transition:{
                      ease:"easeInOut",
                      delay:.2
                    }
                 }}
              >Contact</motion.a>  
            </motion.div>
          )
        } 
        
      </AnimatePresence> 
     <div className="content_wrapper">
      {/* <p>Animated Navigation</p> */}
      {/* <Apps/> */}

     </div> 
     
    </div>
    </>
  );
}

export default App;
