import React, { Component } from 'react';
import Pentagon from '../../assets/pentagon.svg'

export default class CtaFourth extends Component{
    render(){
        return(
            <div className="container"> 

                 <div className="row testi-margin justify-content-between ">
                    <div className="col-6 ">
                    <div className="">
                            <h1 className="heading-page ">{this.props.heading} </h1>
                            <h2 className="mt-4 layout-heading">{this.props.subheading} </h2>
                            <p className="text-secondary">{this.props.paragraph}</p>
                            <button className="services-cta mt-3">{this.props.button}</button>
                        </div>

                    </div>
                    <div className="col-5 mb-3 align-self-center">
                    <div className={this.props.className} >
                            <img className="slight-br" src={this.props.image} alt=""/>
                    </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}