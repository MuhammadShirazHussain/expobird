import React, { Component } from 'react';
import Pentagon from '../../assets/pentagon.svg'

export default class Stats extends Component{
    render(){
        return(
            <div className="container"> 
                <div className="row testi-margin text-center">
                    <div className="col-12 text-center pb-5">
                            <h1 className="heading-page ">{this.props.heading}</h1>
                            <h4>{this.props.subheading}</h4>
                    </div>
                    </div>
                    <div className="row text-center">
                    <div className="col-4 pb-5" >
                            <video className="slight-br video-margin" muted  autoPlay>
                                <source src={this.props.video1} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                    </div>
                    <div className="col-4 pb-5">
                        <video className="slight-br video-margin" muted  autoPlay>
                            <source src={this.props.video2} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="col-4 pb-5">
                        <video className="slight-br video-margin" muted  autoPlay>
                            <source src={this.props.video3} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video> 
                    </div>  
                    

                    </div>
            </div>

        )
    }
}