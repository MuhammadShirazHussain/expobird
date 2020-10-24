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
import  portfolioCover from '../../assets/portfolio cover.png'
import DigitalMarketing2 from '../../assets/Digital Marketing.png'
import EmailMarketing from '../../assets/Email marketing.png'
import SearchEngineOptimisation from '../../assets/Search Engine Optimisation.png'
import SocialMediaMarketing from '../../assets/Social Media Marketing.png'
import WebContant from '../../assets/Web contant.png'
import Accordion from '../ui/Accordion'






export default class DigitalMarketing extends Component{
    render(){
        return(
            <div> 
                <Banner title1={'Top Digital Marketing Agency'}desc1="Create endless opportunities for your business in Karachi and across Pakistan through Digital Marketing with ExpoBird."/>



                {/* <div className="row bnr">
                    <img id="banner-img" src={banner} alt=""/>
                    <div className="heading-text">
                        <h1 id="heading-main">Top Digital Marketing <br/>Agency</h1>
                        <p>Create endless opportunities for your business in Karachi<br/> 
and across Pakistan through Digital Marketing with ExpoBird.<br/>
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
                    image={portfolioCover} 
                    subheading1="Let’s take a roller-coaster ride to our work for clients from all across Pakistan"   
                />
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


                        
                </div> */}
                                    <div className="container">

                                        <div className="row  testi-margin">
                                            <div className="col-1"></div>
                                                    <div className="col-10 align-self-center text-center">
                                                        {/* <h1 className="heading-page ">Exposure of Designs</h1> */}
                                                        <h2 className="mt-4 layout-heading">Let us help you maximize conversion rate for your business with Digital Marketing</h2>
                                                        <p className="text-secondary">Are you worried about the dramatic drop in your conversion rate when your competitors are enjoying high profits? If this is the case, then let us tell you that there is no need to be panic about it anymore. With ExpoBird as your digital marketing company, we will help you design and execute a sales funnel that will convert your leads into paying customers. </p>
                                                        
                                                        <div>
                                                            <button className="services-cta mt-3">You think we mades</button>
                                                            <button className="services-cta mt-3">Call us</button>
                                                        </div>
                                                    </div>
                                            <div className="col-1"></div>
                                        </div>
                                        <div className="row testi-margin justify-content-between ">

                                        <div   class="col-xs-12 col-sm-12 col-md-5 col-lg-5 align-self-center">
                                                <img src={DigitalMarketing2}   width="500" height="295" />
                                        </div>

                                        <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-6 col-lg-6 ml-4">
                                                <h1 className="heading-page">Online Marketing</h1>
                                                <h2 className="mt-4 layout-heading">Fulfill all your marketing needs with ExpoBird at your reach</h2> 
                                                <p class="margin-bottom8 text-secondary p-style ">
                                                Online Marketing is the process of buying and selling goods or services through the internet. Word of mouth plays a vital role in connecting customers with the service provider. The rich experience of ExpoBird uniquely fulfils all your needs to cater to your marketing goals.
                                                </p>
                                                <button className="services-cta mt-3 mb-5f">Schedule a call </button>          
                                        </div>
                                    </div>
                                </div>

                    <ServiceSectionTitle
                        title="Digital Marketing Services" SubHeading="Our Digital Marketing services provide a wide range of solutions to businesses of all types in Karachi and across Pakistan"
                        button="See Our Work " 
                    />
                    <ServiceSection
                        image1={SocialMediaMarketing} 
                        title1="Social Media Marketing" 
                        desc1="Power up your Brand with Social Media Marketing from ExpoBird" 

                        image2={SearchEngineOptimisation}
                        title2="Search Engine Optimisation" 
                        desc2="We design with the client perspective, so they convey their message of complex service with graphics"
                    />
                    <ServiceSection 
                        image1={WebContant} 
                        title1="Website Content" 
                        desc1="Convey your messages and explain your business with eye-catchy animated videos that will keep your audience engaged throughout and serve your purpose with our 
                        animation."
                         
                        image2={EmailMarketing} 
                        title2="Email Marketing" 
                        desc2="Get your company name out to the public at large using Social Media, Search Engines and other online marketing and digital marketing tools. The sky is the limit."
                    />
                        {/* <AnimatePopup/> */}
                        <Testimonials/>
                        <div className="row my-5 ">
                            <div className="col-12">
                                <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <Accordion title="Why hire us as your Digital Marketing Agency?" desc="We have an online marketing team that is well-versed with a sales funnel of online marketing. They are a part of our team not only because of what they know, but the marketing results they produce overtime. For this reason, they get aligned with your overall marketing and business goals which are consistently monitored to drive maximum profit out of your online marketing budget."/>
                                <br/>
                                <Accordion title="What services do you offer in Digital Marketing?" desc="<ul><li></li><li></li><li></li><li></li></ul>+"/>
                                <br/>

                                <Accordion title="Does digital marketing take a long time to work?" desc="Budget is not an issue at all as we have customised packages for different clients based on their marketing needs and business goals. So we are confident that we will definitely work it out for your organisation as well."/>
                                <br/>
                                <Accordion title="When the results of digital marketing reflect back?" desc="Nope. We have a strong link with companies that are based in other regions of Pakistan such as Islamabad, Lahore and Peshawar. With an internet in our hands, distance is no more an issue."/>
                                <br/>
                                <Accordion title="How will you offer your service in other cities when you are based in Karachi?" desc="Well, another most important service recently is Content and SEO. Rank your website and company at the top of the search engine result page of Google."/>
                                <br/>
                                
                                
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <ContactFormFooter/>
            </div>
        )
    }
}