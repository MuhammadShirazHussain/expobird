import React, { Component, createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import expoBirdLogo from '../assets/expobird logo white.svg'
import expoBirdSticky from '../assets/sticky menu navigation.png'
import whatsApp from '../assets/whatsapp icon.svg'
import call from '../assets/call icon.svg'
import $ from "jquery"
import videoProductionimg from '../assets/Video Production.svg'
import webDevelopment from '../assets/Web Development.svg'
import Branding from '../assets/Branding.svg'
import Vfx from '../assets/2D 3D VFX Animation.svg'
import Dm from '../assets/Digital Marketing.svg'
import Seo from '../assets/S.E.O.svg'
import Photography from '../assets/Photography.svg'
import OnlineMarketing from '../assets/Online Marketing.svg'
import graphicsDesign from '../assets/services 1.mp4'
import videoProduction from '../assets/video production expobird.mp4'
import animation from '../assets/video animation expobird.mp4'
import digimarket from '../assets/digital marketing expobird.mp4'
import services5 from '../assets/web development expobird.mp4'
import sm from '../assets/social media expobird.mp4'
import whatsapp from '../assets/whatsapp-brands.svg'

class Navbars extends Component {
  constructor(props){
    super(props);
    // this.myFunction = this.myFunction.bind(this);
    // this.openNav = this.openNav.bind(this);
    // this.MobCloseNav = this.MobCloseNav.bind(this);
  }
componentDidMount(){
  $(window).scroll(()=>{
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
      $(".navbar").css({
        position: 'fixed',
        zIndex : 2,
        backgroundColor : "white",
        padding : "0"
      })  ;
      $('#logo').attr('src',expoBirdSticky);
      $('#logo').css('width', '62px');
      $(".menu a:link").css({
        color:"#2E3192",
        fontSize : "15px"
      });
      $(".nostyling").css("color","#2E3192");
      $(".menu").css({
        boxShadow: "rgba(210, 210, 210, 0.5) 0px 3px 16px 0px"
      });

    }
    else {
      $(".navbar").css({
        "position": "relative",
        "backgroundColor" : "#2E3192"
      });
      $('#logo').attr('src',expoBirdLogo);
      $('#logo').css('width', '76px');
      $(".menu a:link").css({
        color:"white",
        fontSize : "16px"
      });
      $(".nostyling").css("color","white");
      $(".menu").css({
        "boxShadow" : "none"
      })
      $(".dropdown-menu-headings").css("color","black");
    }
  })
}  

// openNav(){
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginRight = "250px";

//   var x = window.matchMedia("(max-width: 700px)")
//   this.myFunction(x); // Call listener function at run time
//   x.addListener(this.myFunction);

// }

// myFunction(x){
//   if (x.matches) { // If media query matches
//   document.getElementById("mySidenav").style.width = "100%";
//   document.getElementById("mySidenav").style.textAlign = "center";
//   document.getElementById("main").style.marginRight = "0px";

//   }
// }

// closeNav(){
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginRight= "0";
  
// }
// MobCloseNav(){
  
//   if (window.matchMedia("(max-width: 767px)").matches){
//       document.getElementById("mySidenav").style.width = "0";
//       document.getElementById("main").style.marginRight= "0";
//   }
// }

  render(){

  return (
    <div>
      <Navbar  className="menu" /* color="light" light */ >
      <div id="mySidebar" className="sidebar"  >
        <a href="#" className="closebtn" onClick={this.closeNav}>×</a>
        <a href="#">About</a>
        <div className="dropdown">
          <a href="#">Services</a>
          
        </div>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
        <NavbarBrand className=" logo-container" href="/"><img className="" src={expoBirdLogo} id="logo" alt="ExpoBird Logo"/></NavbarBrand>
          <Nav className="" >
            <NavItem  className="dropdown" tab-index="0">
              <NavLink href="/components/">Services <FontAwesomeIcon icon={faCaretDown} /></NavLink>
              <div className="dropdown-content">
                <div className="row">
                  <div className="col-6">
                    <a href="#">
                      <div className="if">
                      <video className="sub-menu-video"  muted loop autoPlay>
                          <source src={videoProduction} type="video/mp4"/>
                          Your browser does not support the video tag.
                        </video>
                        {/*<img width="32px" className="mb-3" src={oxford} alt=""/>*/ }
                        <div className="ml-3">
                          <p className="dropdown-menu-headings"> Video & Production</p>
                          <p className="dropdown-menu-text">Nothing lasts forever. And so does your Graphics & design.</p>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="if">
                        <video className="sub-menu-video"  muted loop autoPlay>
                          <source src={services5} type="video/mp4"/>
                          Your browser does not support the video tag.
                        </video>
                        {/* <img width="32px" className="mb-3" src={webDevelopment} alt=""/> */}
                        <div className="ml-3">
                          <p className="dropdown-menu-headings">Web & App Development</p>
                          <p className="dropdown-menu-text">Nothing lasts forever. And so does your Graphics & design.</p>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="if">
                      <video className="sub-menu-video"  muted loop autoPlay>
                          <source src={graphicsDesign} type="video/mp4"/>
                          Your browser does not support the video tag.
                        </video>
                        {/* <img width="32px" className="mb-3" src={Branding} alt=""/> */}
                        <div className="ml-3">
                          <p className="dropdown-menu-headings">Branding & Strategy</p>
                          <p className="dropdown-menu-text">Nothing lasts forever. And so does your Graphics & design.</p>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="if">
                      <video className="sub-menu-video"  muted loop autoPlay>
                          <source src={animation} type="video/mp4"/>
                          Your browser does not support the video tag.
                        </video>
                        {/* <img width="32px" className="mb-3" src={Vfx} alt=""/> */}
                        <div className="ml-3">
                          <p className="dropdown-menu-headings">Animation</p>
                          <p className="dropdown-menu-text">Nothing lasts forever. And so does your Graphics & design.</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <div className="if">
                      <video className="sub-menu-video"  muted loop autoPlay>
                          <source src={digimarket} type="video/mp4"/>
                          Your browser does not support the video tag.
                        </video>
                        {/* <img width="32px" className="mb-3" src={Dm} alt=""/> */}
                        <div className="ml-3">
                          <p className="dropdown-menu-headings">Social Media Marketing</p>
                          <p className="dropdown-menu-text">Nothing lasts forever. And so does your Graphics & design.</p>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="if">
                      <video className="sub-menu-video"  muted loop autoPlay>
                          <source src={videoProduction} type="video/mp4"/>
                          Your browser does not support the video tag.
                        </video>
                        {/* <img width="32px" className="mb-3" src={Photography} alt=""/> */}
                        <div className="ml-3">
                          <p className="dropdown-menu-headings">Photography</p>
                          <p className="dropdown-menu-text">Nothing lasts forever. And so does your Graphics & design.</p>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="if">
                      <video className="sub-menu-video"  muted loop autoPlay>
                          <source src={services5} type="video/mp4"/>
                          Your browser does not support the video tag.
                        </video>
                        {/* <img width="32px" className="mb-3" src={Seo} alt=""/> */}
                        <div className="ml-3">
                          <p className="dropdown-menu-headings">Search Engine Optimization</p>
                          <p className="dropdown-menu-text">Nothing lasts forever. And so does your Graphics & design.</p>
                        </div>
                      </div>
                    </a>
                    <a href="#">
                      <div className="if">
                        {/* <img width="32px" className="mb-3" src={OnlineMarketing} alt=""/> */}
                        <video className="sub-menu-video"  muted loop autoPlay>
                          <source src={sm} type="video/mp4"/>
                          Your browser does not support the video tag.
                        </video>
                        <div className="ml-3">
                          <p className="dropdown-menu-headings">Online Marketing</p>
                          <p className="dropdown-menu-text">Nothing lasts forever. And so does your Graphics & design.</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 text-center">
                    <button className="sub-menu-button" >
                      Explore More Services
                    </button>
                  </div>
                </div>
              </div>
            </NavItem>
            <NavItem>
              <NavLink href="/">Case Study</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact Us</NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        {/* </Collapse> */}
        <div id="call-icon-container">
            <span><a href="https://api.whatsapp.com/send?phone=923333375061" target="_blank"><img className="call-icon" src={whatsApp} alt="whatsapp expobird"/><small className="mx-2">Whatsapp Us</small></a></span>
            <span><a href="tel:+923333375061"><img className="call-icon" src={call} alt="call expobird"/><small className="mx-2">Call Us </small></a></span>
        </div>
        {/* <div id="menu-icon" onClick={this.openNav} className="openbtn">
          <button className="nostyling"> ☰ </button>
        </div>  */}
      </Navbar>
      <div className="whatsapp-icon"><a href="https://api.whatsapp.com/send?phone=923333375061" 
                    target="_blank"  rel="noopener noreferrer"><img width="16" height="16" src={whatsapp} 
                    alt=""/></a>
        </div>
      
    </div>
  );
}
}

export default Navbars;