    import React, { Component } from 'react';
import bannerImg from '../../assets/seo-layers.svg'
import Purple from '../../assets/purple.svg'
import pink from '../../assets/pink.svg'


export default class SeoBanner extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-12 seo-banner wave-image">
                    <div>
                        <div className="wave-image">
                            <img src={bannerImg}   alt=""/>
                        </div>
                        <div id="seo-pentagon">
                            <img src={Purple} alt=""/>
                        </div>
                        <div id="seo-pink">
                            <img src={pink} alt=""/>
                        </div>
                    </div>
                    <div className="heading-text">
                        <h1 id="heading-main">SEO Services 
                                                <br/>Company in Pakistan</h1>
                        <p>
                                We help you rank on the top with proven 
                                <br/>and tested SEO techniques all over Pakistan.
                        </p>
                        <button className="rf">Get Started</button>
                    </div>
                    <div id="seo-form">
                        <div className="ml-2">
                            <h2 className="fw">Get Free Consultancy!</h2>
                        </div>
                        
                            <input type="text" placeholder="Enter Your Name"/>    
                        
                                                
                            <input type="text" placeholder="Enter Your Company Name"/>    
                                                
                                                
                            <input type="text" placeholder="Enter Your Contact#"/>    
                        
                                                
                            <input type="text" placeholder="Your Website"/>    
                            <input type="submit" id="seo-submit"/>
                    </div>
                </div>
                

            </div>
        );
    }

}