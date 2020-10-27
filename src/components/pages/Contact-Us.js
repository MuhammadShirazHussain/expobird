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
import Image5 from '../../assets/choose.png'
import Image8 from '../../assets/image.svg'
import Banner from '../pages/banner'
import CtaFourth from '../pages/cta-fourth'
import Accordion from '../ui/Accordion'
import graphicPortfolio from '../../assets/graphicPortfolio.png'
import Modal from '../../components/modalVideo';
import iccamulateDesign from '../../assets/iccamulate design.png'

export default class GraphicDesign extends Component{
    render(){
        return(

            <div> 
 
                <Banner title1={'Graphic \n Design'}desc1="Develop your brand flawlessly with the ExpoBird 
                designing service to unleash your business identity 
                in Karachi and Pakistan."/>

                <ClientSection/>
                <Portfolio
                    image={graphicPortfolio} 
                    subheading1="When word complexity increases, designs come in front, which reflects the outlook of the business. A picture speaks a thousand words when some creativity and artwork is shown in the image. Please have a look our graphics designing work to satisfy yourself and then discuss your project with ExpoBird"   
                />
                <ServiceSectionTitle
                        title="Art Work" SubHeading="ExpoBird is a full-service online marketing agency 
                        that pursues creativity in your work."
                        button="See Our Work " 
                />
                <ServiceSection 
                    title1="Poster Designing" 
                    desc1="Customize your poster design with ExpoBird to create the plan to unlock the power of your brand" 

                    title2="Brochure Designing" 
                    desc2="We design with the client perspective, so they convey their message of complex service with graphics"
                />
                 <ServiceSection  
                    title1="Illustration Designing" 
                    desc1="Explain the context with graphic designing, so the customer understands quickly and turns on your site" 

                    title2="Infographics Designing" 
                    desc2="Strike with engaging visuals to communicate quickly and easily and increase popularity"
                    />
                    <ServiceSection
                    title1="Logo Designing" 
                    desc1="We design concept base logo which reflect your business nature and suit on the service" 

                    title2="Package Designing" 
                    desc2="Tailor-made design can be done for you to stand out with competitors and increase sales in less"
                    />

                    <CtaFourth className="cta-image-right"
                        heading="Immaculate Design"
                        subheading="Appealing and eye-catching design"
                        paragraph="In the world of unique graphics designing and hyper agencies, you will be finding a top agency. ExpoBird understands the system of marketing and sees the big picture and then design with its exceptional concepts. It can be understood easily whether you are fond of reading because the design is ready with your mindset and perspective."
                        button="Hire Professionals"
                        image={iccamulateDesign}
                    />
                    <div className="container">

                            <div className="row  testi-margin">
                                <div className="col-1"></div>
                                        <div className="col-10 align-self-center text-center">
                                            <h1 className="heading-page ">Exposure of Designs</h1>
                                            <h2 className="mt-4 layout-heading">Best way to convey message and concept with graphic design</h2>
                                            <p className="text-secondary">In the digital world, new and compelling design is necessary. Copy-paste is not allowed. With fancy images, ExpBird believes that the more important thing is to design beautifully.</p>
                                            
                                            <div>
                                                <button className="services-cta mt-3">You think we mades</button>
                                                <button className="services-cta mt-3">Call us</button>
                                            </div>
                                        </div>
                                <div className="col-1"></div>
                            </div>
                        <div className="row testi-margin justify-content-between ">

                            <div   class="col-xs-12 col-sm-12 col-md-5 col-lg-5 align-self-center">
                                    <img src={Image5}   width="420px" />
                            </div>
                    
                            <div  class="heading-page-2 col-xs-12 col-sm-12 col-md-6 col-lg-6 ml-4">
                                    <h1>Why choose us?</h1> 
                                    <p class="margin-bottom8 text-secondary p-style ">
                                    As a top agency of online marketing in Karachi and Pakistan, ExpoBird is well-defined with extraordinary services and has served more than 100+ clients. We think outside the box, so no design is reuse as we have pros for the design they think deep, so that is why we are the result-oriented agency.
                                    </p>
                                    <button className="services-cta mt-3 mb-5f">Schedule a call </button>          
                            </div>
                        </div>

                        
                </div>

                        {   /*<AnimatePopup/>*/}
                        <Testimonials/>
                        <div className="row my-5 ">
                            <div className="col-12">
                                <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <Accordion title="How many services do you provide in graphics designing?" desc="We have an online marketing team that is well-versed with a sales funnel of online marketing. They are a part of our team not only because of what they know, but the marketing results they produce overtime. For this reason, they get aligned with your overall marketing and business goals which are consistently monitored to drive maximum profit out of your online marketing budget."/>
                                <br/>
                                <Accordion title="Your agency is in Karachi and I am from another city will there be an issue?" desc="<ul><li></li><li></li><li></li><li></li></ul>+"/>
                                <br/>

                                <Accordion title="How much time is required for design?" desc="Budget is not an issue at all as we have customised packages for different clients based on their marketing needs and business goals. So we are confident that we will definitely work it out for your organisation as well."/>
                                <br/>
                                <Accordion title="In which format you will send the design?" desc="Nope. We have a strong link with companies that are based in other regions of Pakistan such as Islamabad, Lahore and Peshawar. With an internet in our hands, distance is no more an issue."/>
                                <br/>
                                <Accordion title="Will you provide content for image and post?" desc="Well, another most important service recently is Content and SEO. Rank your website and company at the top of the search engine result page of Google."/>
                                <br/>
                                
                                
                            </div>
                            <div className="col-1"></div>
                        </div>
                        <ContactFormFooter/>
            </div>
        )
    }
}