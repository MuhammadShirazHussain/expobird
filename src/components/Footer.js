import React,{Component} from 'react';
import expobirdLogo from '../assets/expobird footer logo.svg'
import PakFlag from '../assets/pakistan-flag-icon.png'
import mailLogo from '../assets/mail.png'
import contactLogo from '../assets/phone.png'
import FacebookLogo from '../assets/facebook.png'
import InstagramLogo from '../assets/instagram.png'
import TwitterLogo from '../assets/twitter.png'
import LinkedinLogo from '../assets/linkedin.png'
import YoutubeLogo from '../assets/youtube.png'
import agreementLogo from '../assets/negotiation.png'

export default class Footer extends Component{

    componentDidMount(){
        let date = new Date();
        document.getElementById("date").innerHTML = date.getFullYear();
    }

    render(){
        return(
            <div className="footer testi-margin2">
                <div className="row text-center">
                  <div className="footerHeader col-md-12 mt-5">
                    <h5>Join ExpoBird newsletter and be among the first ones <br/> to receive our latest news and offers</h5>
                    <br/>
                    <h6 className="chimney">You can easily unsubscribe at any time.</h6>
                  </div>
                </div>
                <div className="row my-3  footerBorder">
                    <div className="col-md-3 mb-5"></div>
                    <div className="col-6 mb-5 d-flex justify-content-center px-3">
                            <div className="email-panel px-3">
                            <form action="">
                                <div className="p-3">
                                    <input className=" email-field mr-3" type="text" placeholder="Enter Your Name"/>    
                                    <input className="email-field" id="email-submit" type="text" placeholder="Enter Your Email"/>
                                    <button className="services" id="submit-btn" type="submit">
                                        Subscribe
                                    </button>
                                </div>
                            </form>    
                            </div>
                    </div>
                    <div className="col-md-3 mb-5"></div>
                </div> 
                <div className="row pt-3 pb-2">
                    <div className="col-3 pt-4 mb-5 text-center">
                        <img width="80" src={expobirdLogo} alt=""/>
                    </div>
                    <div className="col-6 pt-5 mb-5 text-center"> 
                        <p>
                            Convey your messages and explain your business 
                            with eye-catchy animated videos that will keep  
                            <br/>
                            your audience engaged throughout and serve 
                            your purpose with our animation. 
                        </p>
                    </div>
                    <div className="col-3 mb-5 "></div>
                </div>
                <div className="row p-5">
                    <div className="col-4">
                        <h3></h3>
                        <ul className="list-none ft-menu">
                            <li className="footer-menu-heading">
                                <img className="mr-3 footerIcons" width="50"src={contactLogo}></img>
                                    Contact
                            </li>
                            <li>Please fill the <a className= "text-reset" href="#">Contact Form</a> from <a className= "text-reset" href="#">Contact Us </a>
                                page to facilitate yourself with our services.
                                <br/>
                                <p>OR <br/>Contact at 
                                    <a className= "ttext-reset" href="tellto: +92-333-3375061"> +92-333-3375061
                                    </a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul className="list-none ft-menu">
                            <li className="footer-menu-heading d-flex">
                                <img className="mr-3 footerIcons" width="50"src={mailLogo}></img>
                                    Email
                            </li>
                            <li className="mt-2" >  
                                <a className= "text-reset" href="mailto: info@expobird.com">
                                info@expobird.com
                                </a> 
                            </li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <ul className="list-none ft-menu">
                            <li className="footer-menu-heading">
                                <img className="mr-2 footerIcons" width="70"src={agreementLogo}></img>
                                Terms of Services
                            </li>
                            <li>For Terms of services and Privacy Policy click <a className= "text-reset" href="#">here</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row footerEnd py-3">
                    <div className="col-4">
                        <ul className="list-none mb-n1 d-flex justify-content-center ">
                            <li><a href="https://www.facebook.com/expobird"><img className="mediaIcon" width="20" src={FacebookLogo} alt=""/></a></li>
                            <li><a href="https://www.instagram.com/theoxfordstore/?hl=en"><img className="mediaIcon" width="20" src={InstagramLogo} alt=""/></a></li>
                            <li><a href="https://www.linkedin.com/company/expobird"><img className="mediaIcon" width="20" src={LinkedinLogo} alt=""/></a></li>    
                            {/* <li><a href="#"><img className="mediaIcon" width="20" src={TwitterLogo} alt=""/></a></li> */}
                            <li><a href="#"><img className="mediaIcon" width="20" src={YoutubeLogo} alt=""/></a></li>
                        </ul>
                    </div>
                    <div className="col-4 text-center">
                        <br/>

                          <div> <small> ExpoBird &#9400; <span id="date"> </span> - All Rights Reserved</small></div>
                    </div>
                    <div className="col-4 text-center">
                        <br/>
                        <small>
                    
                           <acronym title="Made in Pakistan With Love"> Made in <span> <img className="ml-1 mb-1" width="16" src={PakFlag} alt=""/></span> with <span className="ml-1 heart"> &#10084;	</span>
                           </acronym>
                        </small>
                    </div>
                </div>
            </div>
        );
    }
}