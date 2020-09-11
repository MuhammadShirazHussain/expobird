import React, { Component } from 'react';
import '../pages/socialMediaMarketing.css'
import ClientSection from '../clients'
import banner from '../../assets/digital-marketing-banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import ExpobirdBlueLogo from '../../assets/expobirldLogoBlue.png'
import ServiceSection from '../Services-section'
import Cta1 from '../../assets/launch-fast-large.jpg'
import AnimatePopup from '../animatePopup'
import Testimonials from '../testimonials'
import ContactFormFooter from '../ContactFormFooter'
import Image3 from '../../assets/image3.svg'
import Circle2 from '../../assets/circle2.svg'
import Portfolio from '../portfolio'
import Image5 from '../../assets/image5.svg'
import Image from '../../assets/image.svg'




export default class Animation extends Component{
    render(){
        return(
            <div> 
                <div className="row bnr">
                    <img id="banner-img" src={banner} alt=""/>
                    <div className="heading-text">
                        <h1 id="heading-main">Animation with<br/>Expobird</h1>
                        <p>Pakistan’s #1 Animation Company based in Karachi<br/>
                        </p>
                        <button className="rf">
                            Get Started
                        </button>
                    </div>

                    <div className="play-btn main-video ">
                    <div className="play-btn-inside">
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                    </div>

                </div>
                <ClientSection/>
                <Portfolio/>
                <erviceSection/>
                <div class="row"  >
                    <div class="col-md-1 col-lg-1 "></div>

                    <div  class="col-xs-12 col-sm-12 col-md-5 col-lg-5 mb-5">
                            <h1 >Our Services for Website Development</h1> 
                            <h3 >ExpoBird expertise in development. Explore more development in websites only Expobird in Karachi, Pakistan</h3>
                            <ul>
                                <li>Business Website</li>
                                <li>Custom Website</li>
                                <li>Ecommerce Website</li>
                                <li>Progressive Website </li>
                            </ul> 
                            <button class="rf">Schedule a Call</button>   
                            <button class="services-cta mt-3 mb-5f">See Our Work</button>          
       
                    </div> 
                        <div  class="top2 col-xs-12 col-sm-12 col-md-5 col-lg-5 mb-5">
                            <img  className="cta-image" src={Cta1}/>
                        </div>
                        <div class="col-md-1 col-lg-1 "></div>

                </div>
                    <div className="row">
                        <div className="col-md-1 col-lg-1"></div>
                        <div   class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                                <img src={Image5}   width="451px"height="245px" />
                        </div>
                
                        <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-5 ml-4">
                                <h1>Underperforming Website</h1> 
                                <p class="margin-bottom8 text-secondary p-style ">It will be harrowing if your website is not performing well as your 
                                    website is an identity of your brand. Also, it will affect the overall 
                                    performance of the website. For removing your pain, ExpoBird 
                                    will do your website development. After connecting with us, 
                                    you have to think only of the product making process and leave 
                                    everything about the website to ExpoBird.</p>
                                <button className="services-cta mt-3 mb-5f">SignUp</button>          
                        </div>
                        <div class="col-md-1 col-lg-1"></div>


                        
                </div>


            
                <div className="row3 row-container" >
                    <div className="row2 center-align-columns card text-center" >
                    <div  className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                            <h1>How is the Web Development process is Done?</h1>
                    </div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Image} />
                                <h3>Accessing your business requirement</h3>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>          
                        </div> 
                        
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Image} />
                                <h3>Accessing your business requirement</h3>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>  
                        </div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Image} />
                                <h3>Accessing your business requirement</h3>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>  
                        </div>

                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Image} />
                                <h3>Accessing your business requirement</h3>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>          
                        </div> 
                        
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Image} />
                                <h3>Accessing your business requirement</h3>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>  
                        </div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <img src={Image} />
                                <h3>Accessing your business requirement</h3>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>  
                        </div>



                    </div>
                </div>

                        <AnimatePopup/>
                        <Testimonials/>
                        <ContactFormFooter/>
            </div>
        )
    }
}