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
import Image8 from '../../assets/image.svg'
import Banner from '../pages/banner'
import CtaFourth from '../pages/cta-fourth'
import services2 from '../../assets/video production expobird.mp4'
import graphicPortfolio from '../../assets/graphicPortfolio.png'
import Modal from '../../components/modalVideo';
import iccamulateDesign from '../../assets/iccamulate design.png'


export default class GraphicDesign extends Component{
    render(){
        return(

            <div> 
 
                <Banner title1={'Graphic \n Design'}desc1=""/>\

                <ClientSection/>
                <Portfolio
                    image={graphicPortfolio} 
                    subheading1="When word complexity increases, designs come in front, which reflects the outlook of the business. A picture speaks a thousand words when some creativity and artwork is shown in the image. Please have a look our graphics designing work to satisfy yourself and then discuss your project with ExpoBird"   
                />
                <ServiceSection title="Art Work" SubHeading="ExpoBird is a full-service online marketing agency 
                    that pursues creativity in your work."
                    button="See Our Work " 
                    title1="Poster Designing" desc1="Customize your poster design with ExpoBird to create the plan to unlock the power of your brand" video1={services2}
                    title2="Brochure Designing" desc2="We design with the client perspective, so they convey their message of complex service with graphics"
                    title3="Illustration Designing" desc3="Explain the context with graphic designing, so the customer understands quickly and turns on your site"
                    title4="Infographics Designing" desc4="Strike with engaging visuals to communicate quickly and easily and increase popularity"
                    title5="Logo Designing" desc5="We design concept base logo which reflect your business nature and suit on the service"
                    title6="Package Designing" desc6="Tailor-made design can be done for you to stand out with competitors and increase sales in less"
                    link1="/"
                    link2="/"
                    link3="/"
                    link4="/"
                    link5="/"
                    link6="/"

                    />

                    <CtaFourth
                        heading="Immaculate Design"
                        subheading="Appealing and eye-catching design"
                        paragrap="In the world of unique graphics designing and hyper agencies, you will be finding a top agency. ExpoBird understands the system of marketing and sees the big picture and then design with its exceptional concepts. It can be understood easily whether you are fond of reading because the design is ready with your mindset and perspective."
                        button="Hire Professionals"
                        image={}
                    />
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

                        {   /*<AnimatePopup/>*/}
                        <Testimonials/>
                        <ContactFormFooter/>
            </div>
        )
    }
}