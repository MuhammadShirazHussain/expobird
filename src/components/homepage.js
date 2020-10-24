import React, { Component } from 'react';
import MainVid from '../assets/main-vid.mp4'
import Eg1 from '../assets/Eg1.mp4'
import Eg2 from '../assets/Eg2.mp4'
import Eg3 from '../assets/Eg3.mp4'
import Services from '../components/Services-section'
import ServicesTitle from '../components/Services-section-title'
import Accordion from './ui/Accordion'
import ContactForm from '../components/ContactFormFooter'
import Testimonials from '../components/testimonials'
import ClientSection from '../components/clients'
import Portfolio from '../components/portfolio'
import { BrowserRouter as Router, Link} from "react-router-dom";
import AnimatePopup from '../components/animatePopup'
import '../components/pages/socialMediaMarketing.css'
import Image from '../assets/image.svg'
import services1 from '../assets/services-1.gif'
import services2 from '../assets/video-production-expobird.gif'
import services3 from '../assets/video-animation-expobird.gif'
import services4 from '../assets/digital-marketing-expobird.gif'
import services5 from '../assets/web-development-expobird.gif'
import services6 from '../assets/social-media-expobird.gif'
import HomepageBanner from '../components/pages/homepageBanner';
import CtaOne from '../components/pages/cta-one'
import CtaTwo from '../components/pages/cta-two'
import CtaThree from '../components/pages/cta-three'
import Stats from '../components/pages/Stats'
import premiumQuality from'../assets/premium quality.mp4';
import competitivePricing from '../assets/competitive pricing.mp4';
import  portfolioCover from '../assets/portfolio cover.png';
import CtaVideo1 from '../assets/ctaVideo1.mp4';
import  CtaVideo2 from '../assets/ctaVideo2.mp4';
import  CtaVideo3 from '../assets/ctaVideo3.mp4';
import Modal from 'react-modal';

export default class Main extends Component{

    render(){
        return(
            <div>
                <HomepageBanner/>
                <ClientSection/>
                <Portfolio 
                    image={portfolioCover}
                />
                <ServicesTitle
                    title="Our Services" SubHeading="Our Online Digital Marketing Services Cater To Variety of Solutions in Pakistan"
                    button="Explore Hundreds of Services" 
                />
                <Services  
                        image1={services1}
                        title1="Graphics & Design"
                        desc1="Nothing lasts forever. And so does your Graphics & design. Contact us now and get all the latest updates based on international standards at par."
                        link1="/graphic-design"

                        image2={services6}
                        title2="Web Design and Development"
                        desc2="A website is the digital face of your business. Glow your business face with web design and development services among your competition."
                        link2="/web-development"
                />
                <Services  
                        image1={services3}
                        title1="Animation"
                        desc1="Convey your messages and explain your business with eye-catchy animated videos that will keep your audience engaged throughout and serve your purpose with our animation."
                        link1="/animation"

                        image2={services4}
                        title2="Digital Marketing"
                        desc2="Get your company name out to the public at large using Social Media, Search Engines and other online marketing and digital marketing tools. The sky is the limit."
                        link2="/digital-marketing"
                />
                <Services  
                        image1={services5}
                        title1="Video Production"
                        desc1="Our in-house fully-equipped video production team allows you to create short and long duration videos that fit your business goals and objectives. "
                        link1="/video-production-service"

                        image2={services2}
                        title2="Search Engine Optimisation"
                        desc2="Use your audience habit and get more traffic now. How? By ranking at the top of the search engine result page. So get more clicks and enjoy huge profits with optimised search engine optimisation."
                        link2="/search-engine-optimization"
                />
                <Services  
                        image1={services1}
                        title1="Event Management"
                        desc1="Speak your heart out with the sheer taste of creativity. Use the power of words to influence your potential customers and capture high market share with our content marketing services."
                        link1="/event-management"

                        image2={services2}
                        title2="Social Media Marketing"
                        desc2="Win the hearts of your existing and potential customers by having a profound online presence on Facebook, Instagram, YouTube, Pinterest, and other forums with social media marketing."
                        link2="/social-media-marketing"
                />
                        <CtaOne
                            heading="Why Choose Us? "
                            subheading="The Most Trusted Online Marketing Company in Pakistan"
                            paragraph="With an experience of more than 8 years, ExpoBird strives to provide all marketing and promotional solutions that will help you become the market leader all across Pakistan."
                            button="Learn More About ExpoBird"
                            video={MainVid}
                        />
                        <Stats
                            heading="Our Stats"
                            subheading="The Best Digital & Online Marketing Service All Over Pakistan With 100% Client Satisfaction!"
                            video1={Eg1}
                            video2={Eg2}
                            video3={Eg3}
                        />
                        {/* <AnimatePopup
                            video1={CtaVideo1}
                            video2={CtaVideo2}
                            video3={CtaVideo3}
                            paragraph1="ExpoBird aspires to meet clients' expectations and 
                                                    satisfy them with unique online marketing tactics every time."
                            paragraph2="Our practice with every brand is that we create art should not look beautiful but feel and function beautifully."
                            paragraph3="We improvise your brand not only to look beautiful but to perform amazingly. We believe in numbers and growth."    
                        /> */}
        
                        
                        <div className="row my-5 ">
                            <div className="col-12">
                                <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <Accordion title="Why should I trust you for online marketing?" desc="We have an online marketing team that is well-versed with a sales funnel of online marketing. They are a part of our team not only because of what they know, but the marketing results they produce overtime. For this reason, they get aligned with your overall marketing and business goals which are consistently monitored to drive maximum profit out of your online marketing budget."/>
                                <br/>
                                <Accordion title="What is covered in your social media marketing package?" desc="<ul><li></li><li></li><li></li><li></li></ul>+"/>
                                <br/>

                                <Accordion title="How do you work on a tight budget?" desc="Budget is not an issue at all as we have customised packages for different clients based on their marketing needs and business goals. So we are confident that we will definitely work it out for your organisation as well."/>
                                <br/>
                                <Accordion title="Do you work for companies in Karachi only?" desc="Nope. We have a strong link with companies that are based in other regions of Pakistan such as Islamabad, Lahore and Peshawar. With an internet in our hands, distance is no more an issue."/>
                                <br/>
                                <Accordion title="What other services do you provide for digital marketing?" desc="Well, another most important service recently is Content and SEO. Rank your website and company at the top of the search engine result page of Google."/>
                                <br/>
                                
                                
                            </div>
                            <div className="col-1"></div>
                        </div>
                        
                        {/* Imported Contact Form  */}
                        
                        <Testimonials/>
                        {/* <CtaTwo
                            video1={CtaVideo1}
                            video2={CtaVideo2}
                            video3={CtaVideo3}
                            paragraph1="ExpoBird aspires to meet clients' expectations and 
                            satisfy them with unique online marketing tactics every time."
                            paragraph2="Our practice with every brand is that we create art should not look beautiful but feel and function beautifully."
                            paragraph3="We improvise your brand not only to look beautiful but to perform amazingly. We believe in numbers and growth."    
                        
                        /> */}

                        <CtaThree
                            video1={premiumQuality}
                            video2={competitivePricing}
                            heading1="Premium Quality"
                            paragraph1="ExpoBird is Pakistan's top digital marketing and online marketing company in Karachi that is committed to providing result-driven marketing support and public relations advertising that will help businesses reach the pinnacle of success."
                            heading2="Competitive Pricing"
                            paragraph2="Our reasonable pricing for all the services  is the second best thing for our clients. They get premium quality of work at a reasonable price. For this reason, they cannot afford to lose us nor can we. So this makes a perfect combination."
                            
                        />
            
                        <ContactForm/>

                        
            </div>
        );
    }
}