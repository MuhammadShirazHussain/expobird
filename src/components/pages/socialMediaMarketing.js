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
import ServiceSection from '../Services-section'
import Cta1 from '../../assets/launch-fast-large.jpg'
import AnimatePopup from '../animatePopup'
import Testimonials from '../testimonials'
import ContactFormFooter from '../ContactFormFooter'
import Portfolio1 from '../../assets/Social Media Portfolio-01.png'
import Portfolio2 from '../../assets/Social Media Portfolio-02.png'
import Portfolio3 from '../../assets/Social Media Portfolio-03.png'
import Portfolio4 from '../../assets/Social Media Portfolio-04.png'
// import image1 from '../../assets/Social Media Portfolio-04.png'
// import image1 from '../../assets/Social Media Portfolio-04.png'
// import image1 from '../../assets/Social Media Portfolio-04.png'
// import image1 from '../../assets/Social Media Portfolio-04.png'
// import image1 from '../../assets/Social Media Portfolio-04.png'
// import image1 from '../../assets/Social Media Portfolio-04.png'
import Wakeup from '../../assets/Wake up.png'

import Circle2 from '../../assets/circle2.svg'
import Banner from '../pages/banner'




export default class SocialMediaMarketing extends Component{
    render(){
        return(
            <div> 
                <Banner title1={'Social Media Marketing'}desc1="Power up your Brand with Social Media Marketing from ExpoBird"/>
                <ClientSection/>

                <div className="row testi-margin">
                    <div className="col-12">
                            <h1 className="heading-page text-center">Our Portfolio</h1>
                    </div>    
                    <div className="col-2"></div>
                    <div className="col-2">
                        <img className="testi-margin" src={Portfolio1}  width="219px" height="176px"/>
                        <img className="marginTop" src={Portfolio3}  width="219px" height="176px"/>
                    </div>                   
                    <div className="col-2">
                        <img className="marginTop3" src={Portfolio2}  width="219px" height="176px"/>
                        <img className="marginTop" src={Portfolio4}  width="219px" height="176px"/>
                    </div>
                    <div className="col-4 testi-margin">
                        
                        <h3>Take a look at some of 
                            our top-of-line work 
                            for our clients they 
                            have loved
                            </h3>
                            <button className="services-cta mt-3">Learn More</button>
                            <div className="circle">
                                <img src={Circle2} />
                            </div>


                    <div className="col-2">

                    </div>
                    
                </div>
                </div>


            <div className="container testi-margin">
                <div className="row3 row-container" >
                    <div className="row2 center-align-columns card align-items-center justify-content-between"  >

                    <div  className="margin-top col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                            <h1 className="heading-page" >WAKE UP !</h1> 
                             <p className="text-secondary p-style">There can never be the right time to advertise your product or service on social media than now. You are playing your cards wrong if you have not considered going online yet. When everyone in your family and around you are making decisions based on what they learn on the internet, especially social media, then don't you think your target audience is doing the same. So stop wasting your time and set up a meeting now before it gets too late.
                             </p>
                                <button  className="rf">Set up a meeting</button>          
                    </div> 
                    
                    <div  className="col-xs-12 col-sm-12 col-md-6 col-lg-6">

                            {/* {/* <div className="play-btn-inside">
                                <FontAwesomeIcon icon={faPlay} /> */}
                            
                            <div> 
                                <img className="wake-up-image" src={Wakeup} alt="" height=""/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="container testi-margin">
                <div className="row">
                    <div className="col-md-2 col-lg-2 "></div>
                    <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 mt-3">
                            <h1 class="heading-page3" >Social Media Marketing is for industries of all types 
                            in Karachi and across Pakistan</h1>
                    </div>
                    <div className="col-md-2 col-lg-2 "></div>
                </div>
                
                <div className="row">
                    <div  className ="box col-xs-6 col-sm-6 col-md-6 col-lg-4 mt-4 ">
                                <div class="margin-top1">
                                    {/* <svg viewBox="0 0 28 28" className="icon-small" >
                                        <path className="svg-color" d="M1.7,9.76L1.7,9.76c2.26-2.34,5.94-2.34,8.2,0L14,14l-4.1,4.24c-2.26,2.34-5.94,2.34-8.2,0 C-0.57,15.9-0.57,12.1,1.7,9.76z"></path>
                                        <path  className="svg-color1" d="M26.3,18.24L26.3,18.24c-2.26,2.34-5.94,2.34-8.2,0L14,14l4.1-4.24c2.26-2.34,5.94-2.34,8.2,0 C28.57,12.1,28.57,15.9,26.3,18.24z"></path>
                                    </svg>                             */}
                                    <img src=""/>
                                    <h3 class="h3-style "><br/>Builders and Developers</h3>
                                    <p class="p-style ">All builders and developers in Karachi and Pakistan have a strong profile. This is primarily one of the reasons why you need to have a strong presence for social media advertising. With ExpoBird as your social media marketing company in Pakistan, you can reach out millions of prospects for your flats, apartments, villas and double-story units etc.</p>
                                </div>
                    </div>
                    <div  className ="box col-xs-6 col-sm-6 col-md-6 col-lg-4 mt-4 ">
                                <div class="margin-top1">
                                    {/* <svg viewBox="0 0 28 28" className="icon-small" >
                                            <path className="svg-color1"  d="m14.56 5h8.44c1.1 0 2 .9 2 2v8.43c0 .29-.38.77-.45.84l-11.28 11.28c-.3.3-.69.45-1.08.45s-.78-.15-1.08-.45l-8.66-8.66c-.6-.6-.6-1.57 0-2.17l11.27-11.27c.07-.07.61-.44.84-.45z"></path>
                                            <path className="svg-color"d="m20.89 5.75c.91 0 1.64-.74 1.64-1.64 0-.91-.74-1.64-1.64-1.64-.91 0-1.64.74-1.64 1.64s.74 1.64 1.64 1.64zm-6.33-5.75h8.44c1.1 0 2 .9 2 2v8.43c0 .29-.38.77-.45.84l-11.28 11.28c-.3.3-.69.45-1.08.45s-.78-.15-1.08-.45l-8.66-8.66c-.6-.6-.6-1.57 0-2.17l11.27-11.27c.07-.07.61-.44.84-.45z"></path>
                                    </svg>                             */}
                                    <h3 class="h3-style "><br/>Clothing and Fashion</h3>
                                    <p class="p-style ">All brands are selling their apparels on social media like hot cakes. Irrespective of their page likes, they are now of an opinion that their survival now relies more on online shopping stores than retail outlets. Recent upward shift in online purchasing from different stores denotes that social media marketing is the only in hand solution that can take your brand to the next level. Contact ExpoBird today to have an appealing Social Media presence that reaches to masses all over Karachi and across Pakistan.</p>
                                </div>
                    </div>
                    <div  className ="box col-xs-6 col-sm-6 col-md-6 col-lg-4 mt-4 ">
                                <div >
                                    {/* <svg viewBox="0 0 28 28" className="icon-small" >
                                        <path className="svg-color1" d="M26,6c1.1,0,2-0.9,2-2s-0.9-2-2-2h-4.83H18v2.84V10c0,1.1,0.9,2,2,2s2-0.9,2-2V8.77 c2.34,2.93,2.67,6.75,0.66,10.23c-2.57,4.45-8.06,6.18-12.66,4.16V26H6.83c0.06,0.04,0.11,0.09,0.18,0.13C9.2,27.4,11.6,28,13.98,28 c4.84,0,9.56-2.51,12.15-7c2.92-5.05,2.34-10.79-1.21-15H26z"></path>
                                        <path className="svg-color"d="M10,23.16V18c0-1.32-1.27-2.34-2.65-1.9C6.51,16.37,6,17.21,6,18.08v1.26C3.64,16.38,3.32,12.5,5.34,9 c1.34-2.31,3.49-3.97,6.07-4.66c2.21-0.59,4.51-0.41,6.59,0.5V2h3.17C21.12,1.96,21.06,1.91,21,1.88c-3.24-1.87-7.01-2.37-10.62-1.4 C6.77,1.45,3.75,3.76,1.88,7C-1.02,12.02-0.48,17.76,3,22H2c-1.32,0-2.34,1.27-1.9,2.65C0.37,25.49,1.21,26,2.08,26h4.74H10V23.16z"></path>
                                    </svg>                             */}
                                    <h3 class="h3-style "><br/>Restaurants and Fast Food Chains</h3>
                                    <p class="p-style ">Give me one name that is not on Facebook. You will not find a single restaurant that has not created an online profile for their advantage. And why not? Fast food chains and restaurants have a very strong customer base. The word-of-mouth marketing is their strongest weapon for social media advertisements. Foodies and passionate lovers now order more from home or any other place than actually dining-in on the basis of reviews and comments made public on social media. For this reason, you have to have an online presence that can take your brand name beyond expectations. Why not set up a meeting today and reap the benefits of the industry that is booming in Karachi and across Pakistan?</p>
                                </div>
                    </div>

                </div>
                
                <div className="row">
                    <div  className ="box col-xs-6 col-sm-6 col-md-6 col-lg-4 mt-4 ">
                                <div class="margin-top1">
                                    {/* <svg viewBox="0 0 28 28" className="icon-small" >
                                        <path className="svg-color" d="M1.7,9.76L1.7,9.76c2.26-2.34,5.94-2.34,8.2,0L14,14l-4.1,4.24c-2.26,2.34-5.94,2.34-8.2,0 C-0.57,15.9-0.57,12.1,1.7,9.76z"></path>
                                        <path  className="svg-color1" d="M26.3,18.24L26.3,18.24c-2.26,2.34-5.94,2.34-8.2,0L14,14l4.1-4.24c2.26-2.34,5.94-2.34,8.2,0 C28.57,12.1,28.57,15.9,26.3,18.24z"></path>
                                    </svg>                             */}
                                    <h3 class="h3-style "><br/>E-commerce Stores</h3>
                                    <p class="p-style ">As you also know that now more and more businesses have entered into online shopping stores. They are spending heavily on having their own ecommerce store rather than relying on someone else. Number one reason is people now order more products from home than any other way. Seeing this charm of online medium, they have found themselves in a win-win situation for their businesses in Pakistan. Recent economical changes all around the world, investors in Pakistan now feel that this is the right time to capture the market share not only in Pakistan, but also beyond the continents. If you are one of those with sufficient capital, ring us a bell.  We will help you to connect with customers from all around the world where your local brand will be transformed into an international one.</p>
                                </div>
                    </div>
                    <div  className ="box col-xs-6 col-sm-6 col-md-6 col-lg-4 mt-4 ">
                                <div class="margin-top1">
                                    {/* <svg viewBox="0 0 28 28" className="icon-small" >
                                            <path className="svg-color1"  d="m14.56 5h8.44c1.1 0 2 .9 2 2v8.43c0 .29-.38.77-.45.84l-11.28 11.28c-.3.3-.69.45-1.08.45s-.78-.15-1.08-.45l-8.66-8.66c-.6-.6-.6-1.57 0-2.17l11.27-11.27c.07-.07.61-.44.84-.45z"></path>
                                            <path className="svg-color"d="m20.89 5.75c.91 0 1.64-.74 1.64-1.64 0-.91-.74-1.64-1.64-1.64-.91 0-1.64.74-1.64 1.64s.74 1.64 1.64 1.64zm-6.33-5.75h8.44c1.1 0 2 .9 2 2v8.43c0 .29-.38.77-.45.84l-11.28 11.28c-.3.3-.69.45-1.08.45s-.78-.15-1.08-.45l-8.66-8.66c-.6-.6-.6-1.57 0-2.17l11.27-11.27c.07-.07.61-.44.84-.45z"></path>
                                    </svg>                             */}
                                    <h3 class="h3-style "><br/>Small and Medium Sized Enterprises</h3>
                                    <p class="p-style ">If you ask us what is the best time to go digital, we would say it is NOW! And we will also say it is Now or Never. When everyone around you is on Facebook, Instagram, and WhatsApp, what is stopping you from having your online presence. Is it the budget? Is it the fear of going online? Is it the dynamics of social media? What is it? With ExpoBird as your social media marketing agency in Karachi and across Pakistan, you do not need to worry for anything. We have got your back all the time. Instead, we do it all in your budget. So what else do you want? Call us now and set up a meeting because your online prospects are waiting for you.</p>
                                </div>
                    </div>
                    <div  className ="box col-xs-6 col-sm-6 col-md-6 col-lg-4 mt-4 ">
                                <div >
                                    {/* <svg viewBox="0 0 28 28" className="icon-small" >
                                        <path className="svg-color1" d="M26,6c1.1,0,2-0.9,2-2s-0.9-2-2-2h-4.83H18v2.84V10c0,1.1,0.9,2,2,2s2-0.9,2-2V8.77 c2.34,2.93,2.67,6.75,0.66,10.23c-2.57,4.45-8.06,6.18-12.66,4.16V26H6.83c0.06,0.04,0.11,0.09,0.18,0.13C9.2,27.4,11.6,28,13.98,28 c4.84,0,9.56-2.51,12.15-7c2.92-5.05,2.34-10.79-1.21-15H26z"></path>
                                        <path className="svg-color"d="M10,23.16V18c0-1.32-1.27-2.34-2.65-1.9C6.51,16.37,6,17.21,6,18.08v1.26C3.64,16.38,3.32,12.5,5.34,9 c1.34-2.31,3.49-3.97,6.07-4.66c2.21-0.59,4.51-0.41,6.59,0.5V2h3.17C21.12,1.96,21.06,1.91,21,1.88c-3.24-1.87-7.01-2.37-10.62-1.4 C6.77,1.45,3.75,3.76,1.88,7C-1.02,12.02-0.48,17.76,3,22H2c-1.32,0-2.34,1.27-1.9,2.65C0.37,25.49,1.21,26,2.08,26h4.74H10V23.16z"></path>
                                    </svg>                             */}
                                    <h3 class="h3-style "><br/>Mobile Brands and Accessories</h3>
                                    <p class="p-style ">In the last few years, we have witnessed many entrepreneurs introducing new smart phones in collaboration with different investors. These emerging brands set a very high budget for social media marketing all across Pakistan. They know that this is the easy and only way where they can directly get connected with potential customers. They create hype for their brands by making mind-boggling videos that touch the sentiments of the target audience. We, being the leader of social media advertisement in Karachi and Pakistan, will create videos that will turn your audience crazy for your brand. Schedule a call now and let’s move ahead.</p>
                                </div>
                    </div>

                </div>
            </div>
                <div className="row">
                        <div className="col-md-1 col-lg-1"></div>
                        <div  id="marketing-image-collage"   class="col-xs-12 col-sm-12 col-md-5 col-lg-5 image-collage">
                                <img class="image1" src={marketing01}/>
                                <img class="image2" src={marketing02}/>
                                <img class="image3" src={marketing03}/>
                                <img class="image4" src={marketing04}/>
                        </div>
                
                        <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-5 ml-4">
                                <h1 class="h1-style  heading-page ">Reward</h1> 
                                <p class="margin-bottom8 text-secondary p-style ">When you have done all right with ExpoBird as your partner, your business will experience 
                                    numerous benefits. High conversion rate, most engagements, increase in ROI, more demand for your product are few to name.
                                    This will be the time where you scale up and go to the next level all over Pakistan. So leave us a message now to enjoy 
                                    such economies of scale.</p>
                                <button className="rf">Lets Get Started</button>          
                        </div>
                        <div class="col-md-1 col-lg-1"></div>


                        <ServiceSection/>
                </div>

                <div class="row"  >
                    <div class="col-md-1 col-lg-1 "></div>

                    <div  class="col-xs-12 col-sm-12 col-md-5 col-lg-5 mb-5">
                            <h1  class="heading-page margin-bottom5">Stand Out !!!</h1> 
                            <h3 >Now is the time to distinguish your brand and capture high market share</h3>
                            <p  class="text-secondary p-style">Our team at ExpoBird is well-versed with needs and wants 
                            of brands for social media marketing.This will allow you to classify your niche 
                            in the right direction and earn greater market share for your product or service.</p>
                            <button class="rf">Lets Discuss a Project</button>          
                    </div> 
                    <div  class="top2 col-xs-12 col-sm-12 col-md-5 col-lg-5 mb-5">
                    <img  className="cta-image" src={Cta1}/>
                    </div>
                    <div class="col-md-1 col-lg-1 "></div>

                </div>
                        {/* <AnimatePopup/> */}
                    <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8 text-center">
                                        <h4>Let us help you maximize conversion rate for your<br/>
                                        business with Digital Marketing</h4>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-2"></div>
                            <div className="col-8 text-center">
                                <p>
                                Are you worried about the dramatic drop in your conversion rate when your competitors are enjoying 
                                high profits? If this is the case, then let us tell you that there is no need to be panic about it anymore. 
                                With ExpoBird as your digital marketing company, we will help you design and execute a sales funnel 
                                that will convert your leads into paying customers. 
                                </p>
                                <button className="services-cta mt-3 mb-5">Learn More</button>

                            </div>
                            <div className="col-2"></div>

                    </div>



                        <div class="rf-steps  margin-top3 " id="steps">
        <div class="rf-container ">
            <h2 class="rf-heading rf-35 white">Our Work Process </h2>
            <div class="line skyBlue"></div>
            <div class="rf-steps-container rf-en">
                <div class="rf-divider height-animation" id="rf-divider"></div>
                <div class="rf-row">
                    <div class="rf-col rf-col-1 rf-right-step1 start-animation" id="rf-right-step1">
                        <p class="rf-descr rf-18 white mobile-text">Understanding client’s needs and goals for our service.</p>
                        <div class="rf-round right">1</div>
                        <span class="rf-num rf-left">1</span>
                    </div>
                    
                    <div class="rf-col rf-col-2 rf-left-step3 start-animation" id="rf-left-step3">
                        <p class="rf-descr rf-18 white ">Taking assets from the clients such as logo, icons and other data necessary for our work.</p>
                        <div class="rf-round left mobile-text2">2</div>
                        <span class="rf-num rf-right">2</span>
                    </div>
                </div>
                <div class="rf-row">
                    <div class="rf-col rf-col-3 rf-right-step2 start-animation " id="rf-right-step2">
                        <p class="rf-descr rf-18 white mobile-text6">Our team go all out on the work expected from us by the client.</p>
                        <div class="rf-round right rf-top-allign mobile-text3">3</div>
                        <span class="rf-num rf-left mobile-text4">3</span>
                    </div>
                    <div class="rf-col rf-col-4 rf-left-step4 start-animation" id="rf-left-step4">
                        <p class="rf-descr rf-18 white">Delivery of artwork and publishing it on all social media platforms.</p>
                        <div class="rf-round left mobile-text5">4</div>
                        <span class="rf-num rf-right">4</span>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="row">
                        <div className="col-12 text-center mt-5 mb-5">
                            <h2>Is your Social Media Marketing SMART?</h2>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-6">
                            <img src={Image4}   width="600px" height= "313px" />
                        </div>
                        <div className="col-2">
                            <button className="Rounded-Rectangle-4 mb-3"><button className="Ellipse-1">S</button>SPECIFIC</button>
                            <button className="Rounded-Rectangle-4 mb-3"><button className="Ellipse-2">M</button>MEASURABLE</button>
                            <button className="Rounded-Rectangle-4 mb-3"><button className="Ellipse-3">A</button>ACHIEVABLE</button>
                            <button className="Rounded-Rectangle-4 mb-3"><button className="Ellipse-4">R</button>REACH</button>
                            <button className="Rounded-Rectangle-4 mb-3"><button className="Ellipse-5">T</button>TIMING</button>
s
                        </div>
                        <div className="col-2"></div>


        </div>

        <Testimonials/>
        <ContactFormFooter/>















            </div>
        )
    }
}