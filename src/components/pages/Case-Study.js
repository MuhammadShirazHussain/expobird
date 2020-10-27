import React, { Component } from 'react';
import CaseStudyBanner from '../../assets/casestudy.png'

export default class CaseStudy extends Component{
    render(){
        return(

            <div>
                <div className="row case-study-backgroundColor align-items-center">
                            <div className="col-1"></div>
                            <div className="col-5">
                                    <h1 className="case-study-font ">
                                        CASE STUDY
                                    </h1>
                            </div>
                            <div className="col-6">
                                <img className="case-study-image" src={CaseStudyBanner} />
                            </div>
                </div>
                <div className="container testi-margin2">
                    <div className="row ">
                        <div  className="col-12 text-center">
                                    <h1 className="heading-page">
                                        Marketing that Leads You Grow
                                    </h1>      
                        </div>
                        <div className="col-12 ">
                                asdda
                        </div>
                    </div>
                </div>
                    
            </div>
        )
    }
}