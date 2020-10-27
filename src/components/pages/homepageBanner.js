import React, { Component } from 'react';
import banner from '../../assets/expobird-banner-image.svg'
import Video from '../../assets/expobird-video.mp4'

export default class HomepageBanner extends Component{
    render(){
        return(
            <div> 
                <div className="row bnr">
                    <div className="col-1 mt-5"></div>
                    <div className="heading-text col-lg-5 col-xl-5 col-md-5 text-center text-lg-left text-md-left order-12 order-md-1 order-lg-1 order-xl-1 order-sm-12 pt-5 mt-5">
                        <span id="heading-main">Top-Geared <br/>Marketing</span>
                        <p>ExpoBird is the powerhouse for companies and individuals that seek<br/>
                        best digital marketing and online marketing solutions.<br/>
                        <span id="sub-text" >Call us now to revamp your digital and online presence</span>
                        </p>
                        <button className="rf">
                            Get Started
                        </button>
                    </div>
                    <div className="col-lg-5 col-xl-5 col-md-5 order-1 order-md-12 order-lg-12 order-xl-12 order-sm-1 text-center mt-5 pt-5">
                    <video  muted loop autoPlay className="main-video">
                        <source src={Video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    </div>
                    <div className="col-1 mt-5 order-12"></div>
                </div>
            </div>
        )
    }
}