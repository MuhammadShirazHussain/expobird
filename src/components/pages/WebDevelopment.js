import React, { Component } from 'react';
import '../pages/socialMediaMarketing.css'
import Image4 from '../../assets/image4.svg'
import ClientSection from '../clients'
import banner from '../../assets/digital-marketing-banner.jpg'
import Video from '../../assets/expobird-video.mp4'
import Cta from '../../assets/divi-preview.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import marketing01 from '../../assets/marketing-01.jpg'
import marketing02 from '../../assets/marketing-02.jpg'
import marketing03 from '../../assets/marketing-03.png'
import marketing04 from '../../assets/marketing-04.jpg'
import PortfolioImage from '../../assets/Web Portfolio.png'
import ExpobirdBlueLogo from '../../assets/expobirldLogoBlue.png'
import ServiceSection from '../Services-section'
import Cta1 from '../../assets/Our services.png'
import Accessing from '../../assets/accessing-your-business-requirement.png'
import Planning from '../../assets/planning-a-strategy-that-works.png'
import Featuring from '../../assets/featuring-website-solution.png'
import Front from '../../assets/Front Back Code.png'
import Testing from '../../assets/Testing QA.png'
import Prepare from '../../assets/prepare-your-development-team.png'
import Accordion from '../ui/Accordion'



import AnimatePopup from '../animatePopup'
import Testimonials from '../testimonials'
import ContactFormFooter from '../ContactFormFooter'
import Image3 from '../../assets/image3.svg'
import Circle2 from '../../assets/circle2.svg'
import Portfolio from '../../components/portfolio'
import Image5 from '../../assets/Our services.png'
import Image from '../../assets/image.svg'
import Banner from '../pages/banner'




export default class WebDevelopment extends Component{
    render(){
        return(
            <div> 
                <Banner title1={'Web Development with ExpoBird'}desc1="Develop your business website from our certified 
                developers in Karachi"/>
                {/* <div className="row bnr">
                    <img id="banner-img" src={banner} alt=""/>
                    <div className="heading-text">
                        <h1 id="heading-main">Web Development<br/>With Expobird</h1>
                        <p>Develop your business website from our certified 
developers in Karachi.<br/>
                            <span id="sub-text" >Call us now to revamp your Website</span>
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

                </div> */}
                <ClientSection/>
                <div className="container testi-margin">
                <div className="row3 row-container " >
                    <div className="row2 card justify-content-around testi-margin2" >
                        <div className="col-1"></div>
                        <div  className="col-xs-12 col-sm-12 col-md-5 col-lg-5 marginTop">
                            <img src={ExpobirdBlueLogo}   width="172px" height="104px "/>
                        </div> 
                        <div className="col-2"></div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-3">
                                <h1 className="heading-page" >Portfolio</h1> 
                        </div>




                        <div  className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                            <h1 className="heading-page">Start A Conversation</h1>
                        </div>
                        <div className="col-2"></div>

                        <div  className="col-xs-12 col-sm-12 col-md-8 col-lg-8 text-center">
                            <medium>The website gives a brand to the business and identity on its own. A website is a digital house in which its development and design fall. ExpoBird will provide your business with an 
                                    identical development that will differ your website from your competitors in Pakistan. 
                            </medium>
                            <button className="services-cta mt-3 mb-5">SET UP A WEBSITE WITH EXPOBIRD</button>
                        </div>
                        <div className="col-2"></div>

                    </div>
                </div>
                </div>
                <Portfolio
                        image={PortfolioImage}
               />
                <div className="container testi-margin">
                    <div class="row justify-content-between"  >

                        <div  class="col-xs-12 col-sm-12 col-md-6 col-lg-6  mb-5">
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

                    </div>
                </div>
                <div className="container">
                    <div className="row testi-margin justify-content-between ">
                        <div   class="col-xs-12 col-sm-12 col-md-5 col-lg-5 align-self-center">
                                <img src={Image5}  />
                        </div>
                
                        <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-6 col-lg-6 mt-5 ml-4">
                                <h1>Underperforming Website</h1> 
                                <p class="margin-bottom8 text-secondary p-style ">It will be harrowing if your website is not performing well as your 
                                    website is an identity of your brand. Also, it will affect the overall 
                                    performance of the website. For removing your pain, ExpoBird 
                                    will do your website development. After connecting with us, 
                                    you have to think only of the product making process and leave 
                                    everything about the website to ExpoBird.</p>
                                <button className="services-cta mt-3 mb-5f">SignUp</button>          
                        </div>


                        
                    </div>
                </div>


                <div className="container">
                <div className="row3 row-container testi-margin" >
                    <div className="row2 center-align-columns card text-center " >
                    <div  className="col-xs-12 col-sm-12 col-md-12 col-lg-12 marginTop ">
                            <h1>How is the Web Development process is Done?</h1>
                    </div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4  testi-margin2">
                                <img src={Accessing} width="90"/>
                                <h4>Accessing your <br/>business requirement</h4>
                                <p> Understanding your business needs is our main goal after which it is compile with technology requirements. It is a discovery and strategy process.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>          
                        </div> 
                        
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 testi-margin2">
                                <img src={Planning} width="90"/>
                                <h4>Planning a  <br/>Strategy that works</h4>
                                <p> Tools are essential for web development. Without the technical coding things can not be done. Our ExpoBird experts will become familiar with your given tools and tackle every technical issue very smartly.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>  
                        </div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4  testi-margin2">
                                <img src={Featuring} width="90"/>
                                <h4>Featuring Website  <br/>Solution</h4>
                                <p> We are capable of handling all your digital services. We early feature all the things you require for the website and give you the best possible solution.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>  
                        </div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4  testi-margin2">
                                <img src={Front} width="90"/>
                                <h4>Front-Back  <br/>Coding </h4>
                                <p> Our web development team is expert in using languages for coding like PHP,JAVA,HTML,CSS. Also they are certified in using codes and fluent in using a variety of CMS.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>          
                        </div> 
                        
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 testi-margin2">
                                <img src={Testing} width="90"/>
                                <h4>Testing  <br/>QA</h4>
                                <p>In this phase, the website is live on the client-server to solve issues regarding bugs and breaking of websites. After which problems are resolved as per client needs, and then it is live.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>  
                        </div>
                        <div  className="col-xs-12 col-sm-12 col-md-4 col-lg-4 testi-margin2 marginBottom">
                                <img src={Prepare} width="90"/>
                                <h4>Prepare your  <br/>development team   </h4>
                                <p>Our work is not finished yet, we handover CMS files and explain to them how it works, if any problems arise how it can be fixed. Crashing issues are also shared, so they take care of the website.</p>
                                <button className="services-cta mt-3 mb-5f">Contact Us</button>  
                        </div>



                    </div>
                </div>
            </div>

                        {/* <AnimatePopup/> */}
                        <Testimonials/>

                        <div className="row testi-margin">
                            <div className="col-12">
                                <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <Accordion title="For a project we need to meet?" desc="We have an online marketing team that is well-versed with a sales funnel of online marketing. They are a part of our team not only because of what they know, but the marketing results they produce overtime. For this reason, they get aligned with your overall marketing and business goals which are consistently monitored to drive maximum profit out of your online marketing budget."/>
                                <br/>
                                <Accordion title="How does it cost in building a website?" desc="<ul><li></li><li></li><li></li><li></li></ul>+"/>
                                <br/>

                                <Accordion title="What is Website Hosting?" desc="Budget is not an issue at all as we have customised packages for different clients based on their marketing needs and business goals. So we are confident that we will definitely work it out for your organisation as well."/>
                                <br/>
                                <Accordion title="Editing can be done once the website is ready?" desc="Nope. We have a strong link with companies that are based in other regions of Pakistan such as Islamabad, Lahore and Peshawar. With an internet in our hands, distance is no more an issue."/>
                                <br/>
                                <Accordion title="Do you write the content of a website?" desc="Well, another most important service recently is Content and SEO. Rank your website and company at the top of the search engine result page of Google."/>
                                <br/>
                                
                                
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <ContactFormFooter/>
            </div>
        )
    } 
}