import React, { Component } from 'react';
import Banner from '../ui/seo-banner'
import ClientSection from '../clients'
import triple1 from '../../assets/111.jpg'
import bannerImg from '../../assets/seo-layers.svg'
import pink from '../../assets/pink.svg'
import '../pages/seo.css'
import AnimatePopup from '../animatePopup'
import Portfolio from '../../components/portfolio'
import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'
import Icon4 from '../../assets/icon4.png'
import Icon5 from '../../assets/icon5.png'
import Icon6 from '../../assets/icon6.png'
import SEOFactor from '../../assets/SEO The X-Factor.png'
import SEOServicesPortfolio from '../../assets/SEO Services Portfolio.png'
import ContactForm from '../../components/ContactFormFooter'
import CtaFourth from '../pages/cta-fourth'
import Accordion from '../ui/Accordion'


const styles111 = {
    backgroundImage : `url(${triple1})`,
    width: "100%",
    height: "400px",
}
export default class Seo extends Component{

    constructor(props){
        super(props);
        this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick(){
        let toggle = document.getElementById('seo-check');
        if(toggle.checked){
            document.getElementById('t-1').innerHTML = "<b>104,457</b>";
            document.getElementById('t-2').innerHTML = "<b>26,740</b>";
            document.getElementById('t-3').innerHTML = "<b>780%</b>";
        }
        else{
            document.getElementById('t-1').innerHTML = "<b>15,555</b>";
            document.getElementById('t-2').innerHTML = "<b>8,997</b>";
            document.getElementById('t-3').innerHTML = "<b>0%</b>";
        }
    }

    render(){
        return(
            <div>
                <Banner/>
                <ClientSection/>
                <Portfolio
                    image={SEOServicesPortfolio} 
                    subheading1="When word complexity increases, designs come in front, which reflects the outlook of the business. A picture speaks a thousand words when some creativity and artwork is shown in the image. Please have a look our graphics designing work to satisfy yourself and then discuss your project with ExpoBird"   
                />
                <CtaFourth className="cta-image-right"
                    // heading=""
                    subheading="SEO – The X-FACTOR for YOUR BRAND"
                    paragraph="When everyone around you is selling the same kind of product and service, when everyone is throwing the same promotions and discounts offers, when everyone is reaching the target audience through the same platform, then what is that one factor that could give you an edge over your rivals in this saturated market? Read More"
                    image={SEOFactor}
                    button="Rank Your Website Now"
                />
                {/* <div className="row my-5 pt-5">
                    <div className="col-1"></div>
                    <div className="col-5 pr5">
                        <h4 className="fw">Extend-able Styles</h4>
                        <p className="text-secondary">
                        Divi's extend styles functionality brings design efficiency to a whole new level. If you have a design style that you just created, and you want to use that elsewhere on the page, or even across the entire page, you can simply extend that style automatically to your desired location. Update hundreds of elements at once! Control exactly where and to which elements your styles should be extended to. For example, let's say you just crafted the perfect box shadow and border style for your images, but you have dozens of images on the page. You can extend that style to the rest of your images instantly!
                        </p>
                        <div className="mt-4">
                            <span><button className="small-btn" id="btn-blue">Learn More</button></span>
                            <span className="ml-2"><button className="small-btn" id="btn-lb">Play Video</button></span>
                        </div>
                    </div>
                    <div className="col-5 text-right">
                        <video className="skew-right" width="420" height="246"  muted loop autoPlay>
                          <source src="https://www.elegantthemes.com/videos/extend-styles.mp4" type="video/mp4"/>
                          Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="col-1"></div>
                </div> */}
                <div className="row my-5">
                    <div className="col-12 text-center">
                        <h2 className="text-center fw mt-5">SEO AUDIT is MUST !!!</h2>
                        <p>As part of our work process for SEO Services in Pakistan, we undertake your website audit with <br/>
                            respect to SEO and provide you a full-fledged SEO Audit report.</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="row my-5">
                            <div className="col-4 mt-3">
                                <img className="iconSize" src={Icon1} alt=""/>
                                <h6 className="fw mt-3">TITLE TAGS, META 
                                    <br/>DESCRIPTIONS, PAGE 
                                    <br/>TITLES, PAGE COPY, 
                                    <br/>ALT TEXT:</h6>
                                <small>
                                    Once you are done with Targeted Keyword Mapping, it is time to put them in the right sequence all over your website that can catch the attention of search engines and targeted users.
                                </small>
                            </div>
                            <div className="col-4 mt-3">
                                <img className="iconSize" src={Icon2} alt=""/>
                                <h6 className="fw mt-3">URL STRUCTURE</h6>
                                <small>
                                Your website’s URLs are another important factor for overall site optimisation. Unlike the vast majority of the websites, your website should have proper links with respect to relevance of content of the page. Doing so, when search engines will crawl the site based on your URLs, they will rank your website higher due to their relevance.                                </small>
                            </div>
                            <div className="col-4 mt-3">
                                <img className="iconSize" src={Icon3} alt=""/>
                                <h6 className="fw mt-3">WEBSITE CONTENT</h6>
                                <small>
                                Does your site have unique content? Are you sure that there is no duplicate content on your site? What if your site is already penalised and blacklisted by google search engine? These are some of the areas that you need to look at very precisely in relation to website content.                            
                                </small>
                            </div>
                            <div className="col-4 mt-3">
                                <img className="iconSize" src={Icon4} alt=""/>
                                <h6 className="fw mt-3">BACKLINKS</h6>
                                <small>
                                Backlinks of your websites are instrumental to rank your website at the top of the search engine result page. Higher the domain authority of the sites where backlinks are originated from, higher will be your chances to appear at the top. Backlinks are considered a lifeline for your website’s SEO. The more, the merrier.                                </small>
                            </div>
                            <div className="col-4 mt-3">
                                <img className="iconSize" src={Icon5} alt=""/>
                                <h6 className="fw mt-3">INTERNAL BROKEN LINKS</h6>
                                <small>
                                One of the ways search engines rank your website is by crawling your web links. Dead links on your website would mean search engine spiders and algorithms won’t be able to perform their functions on your site. Thus, these links will stop them from crawling your site and indexing it.
                                </small>
                            </div>
                            <div className="col-4 mt-3">
                                <img className="iconSize" src={Icon6} alt=""/>
                                <h6 className="fw mt-3">KEYWORDS SPAMMING</h6>
                                <small>
                                Using the right keywords excessively is termed as Black Hat SEO technique. You should be very cautious while drafting the keyword strategy for your business. Using the right keywords is not enough, in fact you need to use them wisely in terms of quality and quantity both.                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-5 seo-cta">
                    <div className="col-12 text-center ch">
                        <h1 className="text-white fw lets-work">Let's Work Together!</h1>
                        <p className="text-white">Your Business SEO Solutions to Drive Your Business Forward.</p>
                        <button className="white-btn">Get a Quote Now</button>
                        <div className="wave-image">
                            <img src={bannerImg}   alt=""/>
                        </div>
                        <div id="seo-cta-pink">
                            <img src={pink} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 text-center">
                        <h2 className="text-center fw mt-5 ">Keep Your Expectations Higher from Your SEO Service Company in Pakistan</h2>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-10">
                        <p >Backlinks of your websites are instrumental to rank your website at the top of the search engine result page. Higher the domain authority of the sites where backlinks are originated from, higher will be your chances to appear at the top. Backlinks are considered a lifeline for your website’s SEO. The more, the merrier.</p>
                    </div>
                    <div className="col-1"></div>
                </div>

                <div className="row">
                        <div className="col-12 text-center">
                            <span id="b-seo">Before S.E.O </span>
                            <label className="switch">
                                <input onClick={this.toggleClick} id="seo-check" type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                            <span id="a-seo">After S.E.O </span>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="row my-5">
                                <div className="col-3">
                                    <div className="card-seo" >
                                        <h1 id="t-1"><b>48%</b></h1>
                                        <p>Annual Organic Traffic</p>
                                        {/* <img src="https://victoriousseo.com/app/themes/victorious/dist/images/small-chart-bg_c141fc16.png" alt=""/> */}
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card-seo">
                                        <h1 id="t-2"><b>70%</b></h1>
                                        <p>Ranking Keywords</p>
                                        {/* <img src="https://victoriousseo.com/app/themes/victorious/dist/images/small-chart-bg_c141fc16.png" alt=""/> */}
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card-seo">
                                        <h1 id="t-3"><b>332</b></h1>
                                        <p>Return on Investment</p>
                                        {/* <img src="https://victoriousseo.com/app/themes/victorious/dist/images/small-chart-bg_c141fc16.png" alt=""/> */}
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="card-seo">
                                        <h1 id="t-3"><b>80%</b></h1>
                                        <p>Return on Investment</p>
                                        {/* <img src="https://victoriousseo.com/app/themes/victorious/dist/images/small-chart-bg_c141fc16.png" alt=""/> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                </div>
                {/* <AnimatePopup/> */}
                <div className="row my-5 ">
                            <div className="col-12">
                                <h2 className="text-center heading-page mb-5">FAQ's</h2> 
                            </div>
                            <div className="col-1"></div>
                            <div className="col-10">
                                <Accordion title="Why does SEO take time before I see the benefits?" desc="We have an online marketing team that is well-versed with a sales funnel of online marketing. They are a part of our team not only because of what they know, but the marketing results they produce overtime. For this reason, they get aligned with your overall marketing and business goals which are consistently monitored to drive maximum profit out of your online marketing budget."/>
                                <br/>
                                <Accordion title="How much time does it take to start seeing the results?" desc="<ul><li></li><li></li><li></li><li></li></ul>+"/>
                                <br/>

                                <Accordion title="Why are keywords important?" desc="Budget is not an issue at all as we have customised packages for different clients based on their marketing needs and business goals. So we are confident that we will definitely work it out for your organisation as well."/>
                                <br/>
                                <Accordion title="What other factors are important other than keywords?" desc="Nope. We have a strong link with companies that are based in other regions of Pakistan such as Islamabad, Lahore and Peshawar. With an internet in our hands, distance is no more an issue."/>
                                <br/>
                                
                            </div>
                            <div className="col-1"></div>
                        </div>
                <ContactForm/>
            </div>
        )
    }
} 