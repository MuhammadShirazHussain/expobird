import React, { Component } from 'react';
import banner from '../../assets/expobird-banner-image.svg'
import Video from '../../assets/expobird-video.mp4'

export default class HomepageBanner extends Component{
    render(){
        return(
            <div> 
                <div className="row bnr">
                    <img id="banner-img" src={banner} alt=""/>
                    <div className="heading-text">
                        <h1 id="heading-main">Top-Geared <br/>Marketing</h1>
                        <p>ExpoBird is the powerhouse for companies and individuals that seek<br/>
                        best digital marketing and online marketing solutions.<br/>
                        <span id="sub-text" >Call us now to revamp your digital and online presence</span>
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

            </div>
        )
    }
}