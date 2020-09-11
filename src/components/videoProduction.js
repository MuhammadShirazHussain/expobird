import React, { Component } from 'react';
import banner from '../assets/expobird-banner-image.svg'
import Video from '../assets/expobird-video.mp4'
import clients from '../assets/expobird clients.webp'
import diviCover from '../assets/divi-video-cover.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import greenCircle from '../assets/Green-01.svg'
import Pentagon from '../assets/pentagon.svg'
import Customize from '../assets/customize.jpg'
import Services from '../components/Services-section'
import Testimonials from '../components/testimonials'
import ContactForm from '../components/ContactFormFooter'
import AnimatePopup from '../components/animatePopup'
import Accordion from './ui/Accordion'


export default class VP extends Component {
    render(){
        return(
            <div>
                <div className="row bnr">
                    <img id="banner-img" src={banner} alt=""/>
                    <div className="heading-text">
                        <h1 id="heading-main" >Video Production<br/> Service</h1>
                        <p>Creative Video Production & Video Making Company for Business<br/>and Corporates Share your message directly with your audience<br/> and other stakeholders
<br/>
                       
                        </p>
                        <button className="rf">
                            Get Started
                        </button>
                    </div>
                    <div className="main-video">
                    <video  muted loop autoPlay>
                        <source src={Video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-12 text-center">
                            <h1 className="heading-page">Our Clients</h1>
                        </div>
                    <div className="col-1"></div>
                    <div className="col-10 text-center mt-3">
                        <img id="clients-img" src={clients} alt=""/>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-6">
                        
                    </div>
                    <div className="col-6">

                    </div>
                </div>
                <div className="row my-5 pt-6">
                    <div className="col-3">

                    </div>
                    <div className="col-6 text-center">
                        <div className="play-btn">
                            <div className="play-btn-inside">
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                        </div>
                        <div id="diviCover" className="image-container">
                            <img id="dC" src={diviCover} alt=""/>
                        </div>
                        <div className="circle">
                            <img src={greenCircle} alt=""/>
                        </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                    </div>
                    <div className="col-3">

                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-3">

                    </div>
                    <div className="col-6 text-center">
                        <div>
                            <h1 className="heading-page">
                            Branding
                            </h1>
                        </div>
                        <div>
                            <h2>
                            Leading Video Marketing Services in Pakistan & With Creative video production Proud
                            </h2>
                        </div>
                        <div>
                            <p>Divi is our flagship theme and visual page builder. It's the most widely used premium WordPress theme in the world according to stats from BuiltWith.com. Divi is more than just a theme, it's a website building framework that makes it possible to design beautiful websites without ever touching a single line of code and without installing and configuring dozens of disjointed plugins. We think this is the future of WYSIWYG and it's unlike any WordPress theme you have ever used before.</p>
                        </div>
                        <button className="layout-btn">Learn More About ExpoBird</button>
                    </div>
                    <div className="col-3">

                    </div>
                </div>
                <Services/>
                <div className="row"> 
                <div className="col-1"></div>
                <div className="col-5 text-center">
                    <img src={Customize} alt=""/>
                </div>
                <div className="col-5 text-center">
                    <h1 className="heading-page">
                    Why Us?
                    </h1>
                <h3>
                We thrive creativity and brilliance in our video production service. .
                </h3>
                <p>ExpoBird has experts for video production that take care of any video project. But the final touch will be done after your review. 
                    Our crew members are flexible, and they can do things on their own, whether it's video making or content in the video. 
                    On the ExpoBird website, you can check our work. If you are convinced, then schedule a call..</p>

                </div>
                <div className="col-1">

                </div>
                </div>
               
                <Testimonials/>
                <AnimatePopup/>

                <div className="row my-5 ">
                    <div className="col-12">
                        <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                    </div>
                    <div className="col-1"></div>
                    <div className="col-10">
                        <Accordion title="Why You Should Choose Video Ads For Your Business In Pakistan!" desc="The trend of Video Ads can never be this high at any stage of time in Pakistan. Now all big brands of all industries are focusing on and spending more money on high profile video ads. These ads are meant to go viral on social media, especially on Facebook and YouTube. And why they should not be when everyone is spending more of their time on social media"/>
                        <br/>
                        <Accordion title="What Are The Benefits Of Video Content Marketing !" desc="Today videos are considered to be life-blood for any organisation. It is a human instinct that we love action and prefer engagements than just random texts trying to convince us. We believe what we watch. Those days are long gone when the simple text was enough to justify your idea. Secondly, video content marketing allows you to deliver your message to the right place at the right time. And a lot more can be expressed now with short video ads that were not possible before at the time of long textual articles. Video Marketing with the right strategy can do wonders for businesses of all types."/>
                        <br/>

                        <Accordion title="How Can You Explain Your Company Milestone Through Corporate Video Production!" desc="Corporate Video Production is the best way to share historic moments when something big is achieved by companies. You can now capture such moments for the rest of your lives by creating a strong corporate video. This video will highlight all the tests of times that a company has gone through to achieve a particular milestone. These videos can then be used to increase motivation among the employees, appreciate the staff involved in achieving a milestone or share with your customers to show your level of dedication and sense of ownership. So there are plenty of ways you can use these videos for."/>
                        <br/>
                        <Accordion title="Can You Really Explain Your Brand Through Video Marketing!" desc="Video Marketing allows you to explain what your brand actually means to you and how it is going to make the lives of your customers easier. With inspirational scenes and heart-touching sound, you can create a video that will influence your target market. You can use such videos to create brand awareness among the target audience, thank your loyal customers for being faithful to your brand and enter into a new market. Because what words cannot do a video can. So contact us now and we will help you to transform your brand into the hearts of your customers."/>
                        <br/>

                        
                        
                    </div>
                    <div className="col-1"></div>

                </div>
                <ContactForm/>
            </div>
        );
    }
}