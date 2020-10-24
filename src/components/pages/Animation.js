import React, { Component } from 'react';
import '../pages/socialMediaMarketing.css'
import ClientSection from '../clients'
import banner from '../../assets/digital-marketing-banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import ExpobirdBlueLogo from '../../assets/expobirldLogoBlue.png'
import ServiceSection from '../Services-section'
import ServiceSectionTitle from '../Services-section-title'
import Cta1 from '../../assets/launch-fast-large.jpg'
import AnimatePopup from '../animatePopup'
import Testimonials from '../testimonials'
import ContactFormFooter from '../ContactFormFooter'
import Image3 from '../../assets/image3.svg'
import Circle2 from '../../assets/circle2.svg'
import Portfolio from '../portfolio'
import Image5 from '../../assets/image5.svg'
import Image from '../../assets/image.svg'
import Banner from '../pages/banner'
import AnimationPortfolio from '../../assets/animation portfolio.jpg'
import services1 from '../../assets/services-1.gif'
import services2 from '../../assets/video-production-expobird.gif'
import services3 from '../../assets/video-animation-expobird.gif'
import services4 from '../../assets/digital-marketing-expobird.gif'
import services5 from '../../assets/web-development-expobird.gif'
import services6 from '../../assets/social-media-expobird.gif'
import HealthyExperience from '../../assets/animation-with-expobird.jpg'
import CtaFourth from '../pages/cta-fourth'
import compelling from '../../assets/compelling.jpg'
import Accordion from '../ui/Accordion'

export default class Animation extends Component{
    render(){
        return(
            <div> 
                <Banner title1={'Animation with ExpoBird'}
                desc1="Pakistan’s #1 Animation Company based in Karachi"/>

                {/* <div className="row bnr">
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

                </div> */}
                <ClientSection/>
                <Portfolio
                    image={AnimationPortfolio} 
                    subheading1="ExpoBird creates top animation and explainer videos for businesses of all types in Karachi, Islamabad, Lahore, and across Pakistan. Now you can say it all with interactive animated videos that touch your audience's hearts."   
                />
                <ServiceSectionTitle
                    title="Our Services" SubHeading="We Are Offering Professional Video Animation Services"
                    button="Explore Hundreds of Services" 
                />
                <ServiceSection
                       image1={services1}
                        title1="2D animation"
                        desc1="Create colorful and eye-catchy 2D animations videos that have a dazzling impact on the minds of customers and change their decision in your favor."
                        link1=""

                        image2={services6}
                        title2="3D animation"
                        desc2="Make 3D animations videos that will give you an extremely realistic feel with inspirational scenes and high definition sound for your business."
                        link2=""  
                />
                <ServiceSection
                       image1={services1}
                        title1="Animation explainer videos"
                        desc1="Explain your business, product, or service with compelling and interactive animated explainer videos that will win the hearts of your customers."
                        link1="/graphic-design"

                        image2={services6}
                        title2="Animation infographics video"
                        desc2="With appealing images and engaging scenes, you can now deliver your business idea through animated infographics video to grab the viewer's attention."
                        link2=""  
                />
                <ServiceSection
                       image1={services1}
                        title1="Cartoon animation"
                        desc1="Create videos based on animated cartoon characters that will be not only worth watching it, but it will be fun with learning."
                        link1="/graphic-design"

                        image2={services6}
                        title2="Custom logo animation"
                        desc2="Attract your customers by the powerful motion of logo animation and grab their attention with your eye-catching logo that will blow their minds."
                        link2="/web-development"  
                />
                
                {/* <div class="row"  >
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

                </div> */}
                    {/* <div className="row">
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

                        <AnimatePopup/> */}

                        <CtaFourth className="cta-image-right"
                        heading="Healthy Experience"
                        subheading="High engagement and better understanding"
                        paragraph="With the sound team of experts, we create 2D and 3D explainer videos that deliver results most desirably. Now you can explain your business model, how your business cycle works, share what you feel for your customers, discuss corporate social responsibility and give a demonstration on how your product or service works and many more."
                        button="Learn More"
                        image={HealthyExperience}
                        
                    />
                                        <div className="container">

                                            <div className="row  testi-margin">
                                                <div className="col-1"></div>
                                                        <div className="col-10 align-self-center text-center">
                                                            <h1 className="heading-page ">Customize and flexible</h1>
                                                            <h2 className="mt-4 layout-heading">Modern tools enable ExpoBird to defer your work from competitors!</h2>
                                                            <p className="text-secondary">ExpoBird is exceptional in creating animated characters that are entirely new. Your provided undefined story will produce in ways that you have never imagined and captivated a larger audience.</p>
                                                            
                                                            <div>
                                                                <button className="services-cta mt-3">Schedule a meeting</button>
                                                                <button className="services-cta mt-3">Call us</button>
                                                            </div>
                                                        </div>
                                                <div className="col-1"></div>
                                            </div>
                                            <div className="row testi-margin justify-content-between ">

                                            <div   class="col-xs-12 col-sm-12 col-md-5 col-lg-5 align-self-center">
                                                    <img src={compelling}   width="420px" />
                                            </div>

                                            <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-6 col-lg-6 ml-4">
                                                    <h1>Compelling</h1> 
                                                    <p class="margin-bottom8 text-secondary p-style ">
                                                    You should also make animated and explainer videos because your competitors are. They target your potential clients and existing customers with creative animated videos that build a company profile of your competitors into their minds knowingly and unknowingly. Eventually, they will show more trust and faithfulness towards other brands, and all your current customer base will be shifted to your competitors. This is the last thing that you will want for your business.
                                                    </p>
                                                    <button className="services-cta mt-3 mb-5f">Contact us</button>          
                                            </div>
                                        </div>
                                    </div>
                        <Testimonials/>
                        <div className="row my-5 ">
                            <div className="col-12">
                                <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <Accordion title="Do Animated videos really help my business to reach the target audience?" desc="We have an online marketing team that is well-versed with a sales funnel of online marketing. They are a part of our team not only because of what they know, but the marketing results they produce overtime. For this reason, they get aligned with your overall marketing and business goals which are consistently monitored to drive maximum profit out of your online marketing budget."/>
                                <br/>
                                <Accordion title="Can video ads on social media help my potential customers for conversions?" desc="<ul><li></li><li></li><li></li><li></li></ul>+"/>
                                <br/>

                                <Accordion title="How Animated Explainer Videos Help Grow My Business by 200% how it can 
help your marketing strategy?" desc="Budget is not an issue at all as we have customised packages for different clients based on their marketing needs and business goals. So we are confident that we will definitely work it out for your organisation as well."/>
                                <br/>
                                <Accordion title="Can Brand development be easily promoted through animated videos?" desc="Nope. We have a strong link with companies that are based in other regions of Pakistan such as Islamabad, Lahore and Peshawar. With an internet in our hands, distance is no more an issue."/>
                                <br/>
                                
                                
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <ContactFormFooter/>
            </div>
        )
    }
}