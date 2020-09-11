import React, { Component } from 'react';
import Pentagon from '../../assets/pentagon.svg'

export default class CtaOne extends Component{
    render(){
        return(
            <div> 
                 <div className="row">
                    <div className="col-1">
                    </div>
                    <div className="col-5">
                        <div >
                            <video className="slight-br" muted autoPlay>
                                <source src={this.props.video} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="col-5 mb-3">
                        <div className="ml-5">
                            <h1 className="heading-page ">{this.props.heading} </h1>
                            <h2 className="mt-4 layout-heading">{this.props.subheading} </h2>
                            <p className="text-secondary">{this.props.paragraph}</p>
                            <button className="services-cta mt-3">{this.props.button}</button>
                        </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                    </div>
                    <div className="col-1">

                    </div>
                </div>

            </div>
        )
    }
}