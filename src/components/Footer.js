import React,{Component} from 'react';
import expobirdLogo from '../assets/expobird footer logo.svg'
import PakFlag from '../assets/pakistan-flag-icon.png'


export default class Footer extends Component{

    componentDidMount(){
        let date = new Date();
        document.getElementById("date").innerHTML = date.getFullYear();
    }

    render(){
        return(
            <div className="footer testi-margin2">
                <div className="row text-center">
                  <div className="col-md-12 mt-5">
                    <h5>Join Renderforest newsletter and be among the first ones <br/> to receive our latest news and offers</h5>
                    <br/>
                    <h6 className="chimney">You can easily unsubscribe at any time.</h6>
                  </div>
                </div>
                <div className="row email-panel my-3 text-center">
                    <div className="col-12">
                        <form action="">
                            <input className="email-field mr-5" type="text" placeholder="Enter Your Name"/>    
                            <input className="email-field" id="email-submit" type="text" placeholder="Enter Your Email"/>
                            <button className="services" id="submit-btn" type="submit">
                                Subscribe
                            </button>
                        </form>    
                    </div>
                </div> 
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-2">
                        <ul className="list-none ft-menu">
                            <li className="footer-menu-heading">Company</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Pricing</li>
                            <li>Help And Support</li>
                            <li>Blog</li>
                            <li>Affiliate Program</li>
                            <li>Terms Of Service</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className="list-none ft-menu">
                            <li className="footer-menu-heading">Services</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Pricing</li>
                            <li>Help And Support</li>
                            <li>Blog</li>
                            <li>Affiliate Program</li>
                            <li>Terms Of Service</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-2">
                    <ul className="list-none ft-menu">
                            <li className="footer-menu-heading">Services</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Pricing</li>
                            <li>Help And Support</li>
                            <li>Blog</li>
                            <li>Affiliate Program</li>
                            <li>Terms Of Service</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-2">
                    <ul className="list-none ft-menu">
                            <li className="footer-menu-heading">Services</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Pricing</li>
                            <li>Help And Support</li>
                            <li>Blog</li>
                            <li>Affiliate Program</li>
                            <li>Terms Of Service</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="col-2"></div>
                </div>
                <div className="row py-3">
                    <div className="col-4 text-center">
                        <img width="48" src={expobirdLogo} alt=""/>
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