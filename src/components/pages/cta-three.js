import React, { Component } from 'react';

export default class CtaThree extends Component{
    render(){
        return(
            <div> 
                 <div className="row my-5 mt-5 pt-5">
                    <div className="col-12 text-center pb-5">
                            <h1 className="heading-page ">24 / 7</h1>
                    </div>
                    <div className="col-3"></div>
                    <div className="col-3 text-center">
                    <video className="slight-br" muted  autoPlay  >
                            <source src={this.props.video1} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <h4>{this.props.heading1}</h4>
                        <p>{this.props.paragraph1}</p>
                        <button className="cta-button">Learn More</button>
                    </div>
                    <div className="col-3 text-center">
                    <video className="slight-br" muted  autoPlay>
                            <source src={this.props.video2} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <h4>{this.props.heading2}</h4>  
                        <p>{this.props.paragraph2}</p>  
                        <button className="cta-button ">Learn More</button>
                    </div>
                    <div className="col-3"></div>


                </div>

            </div>
        )
    }
}