import React, { Component } from 'react';
import Pentagon from '../../assets/pentagon.svg'

export default class Stats extends Component{
    render(){
        return(
            <div> 
                                 <div className="row my-5 mt-3 text-center">
                    <div className="col-12 text-center pb-5">
                            <h1 className="heading-page ">{this.props.heading}</h1>
                            <h4>{this.props.subheading}</h4>
                    </div>
                    <div className="col-1 "></div>
                    <div className="col-3 px-3 pb-5" >
                            <video className="slight-br video-margin" muted  autoPlay>
                                <source src={this.props.video1} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                    </div>
                    <div className="col-3 px-3 pb-5">
                        <video className="slight-br video-margin" muted  autoPlay>
                            <source src={this.props.video2} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="col-3  px-3 pb-5">
                        <video className="slight-br video-margin" muted  autoPlay>
                            <source src={this.props.video3} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="pentagon">
                                   <img src={Pentagon} alt=""/>
                                </div>  
                        </div>  
                    

                    </div>

            </div>
        )
    }
}