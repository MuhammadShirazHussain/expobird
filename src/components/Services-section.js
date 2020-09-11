import React, { Component } from 'react';
import services1 from '../assets/services 1.mp4'
import services2 from '../assets/video production expobird.mp4'
import services3 from '../assets/video animation expobird.mp4'
import services4 from '../assets/digital marketing expobird.mp4'
import services5 from '../assets/web development expobird.mp4'
import services6 from '../assets/social media expobird.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";





export default class Services extends Component{

    render(){
        return(
            <div className="row my-5 services-bg">
                    <div className="col-12 text-center my-5">
                        <h1 className="heading-page">{this.props.title ? this.props.title : "Our Services"}</h1>
                        <h4>{this.props.SubHeading ? this.props.SubHeading : "Our Online Digital Marketing Services Cater To Variety of Solutions in Pakistan"} </h4>
                        
                        <h5 className="explore-services">{this.props.button ? this.props.button : "Explore Hundreds of Services "}<FontAwesomeIcon icon={faArrowAltCircleRight}/></h5>
                    </div>
                    
                    <div className="col-md-1"></div>
                    <div className="col-md-5 mb-5 bg-white mr-4">
                        <div className="if">
                            <div className="services-video">
                                <video muted  autoPlay>
                                    <source src={this.props.video1} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="services-text ml-3">
                                <h2 className="services-heading">{this.props.title1}</h2>
                                <p className="text-secondary">{this.props.desc1}</p>
                                <div>
                                <Link to={this.props.link1}>
                                    <button className="services">
                                    Explore &nbsp;<FontAwesomeIcon icon={faCaretRight}/>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-5 bg-white">
                        <div className="if">
                            <div className="services-video">
                                <video muted  autoPlay>
                                    <source src={this.props.video2} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="services-text ml-3">
                                <h2 className="services-heading">{this.props.title2}</h2>
                                <p className="text-secondary">{this.props.desc2}</p>
                                <div>
                                <Link to={this.props.link2}>
                                    <button className="services">
                                    Explore &nbsp;<FontAwesomeIcon icon={faCaretRight}/>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>                     
                    </div>

                                <div className="col-md-1"></div> 
                    <div className="col-md-5 mb-5 bg-white mr-4">
                        <div className="if">
                            <div className="services-video">
                                <video muted  autoPlay>
                                    <source src={this.props.video3} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="services-text ml-3">
                                <h2 className="services-heading">{this.props.title3}</h2>
                                <p className="text-secondary">{this.props.desc3}</p>
                                <div>
                                <Link to={this.props.link3}>
                                    <button className="services">
                                    Explore &nbsp;<FontAwesomeIcon icon={faCaretRight}/>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-5 bg-white">
                        <div className="if">
                            <div className="services-video">
                                <video muted  autoPlay>
                                    <source src={this.props.video4} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="services-text ml-3">
                                <h2 className="services-heading">{this.props.title4}</h2>
                                <p className="text-secondary">{this.props.desc4}</p>
                                <div>
                                <Link to={this.props.link4}>
                                    <button className="services">
                                    Explore &nbsp;<FontAwesomeIcon icon={faCaretRight}/>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>                     
                    </div>
                    <div className="col-md-1"></div>
                    


                    <div className="col-md-5 mb-5 bg-white mr-4">
                        <div className="if">
                            <div className="services-video">
                                <video muted  autoPlay>
                                    <source src={this.props.video5} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="services-text ml-3">
                                <h2 className="services-heading">{this.props.title5}</h2>
                                <p className="text-secondary">{this.props.desc5}</p>
                                <div>
                                <Link to={this.props.link5}>
                                    <button className="services">
                                    Explore &nbsp;<FontAwesomeIcon icon={faCaretRight}/>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 mb-5 bg-white">
                        <div className="if">
                            <div className="services-video">
                                <video muted  autoPlay>
                                    <source src={this.props.video6} type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="services-text ml-3">
                                <h2 className="services-heading">{this.props.title6}</h2>
                                <p className="text-secondary">{this.props.desc6}  </p>
                                <div> 
                                    <Link to={this.props.link6}>
                                    <button className="services">
                                    Explore &nbsp;<FontAwesomeIcon icon={faCaretRight}/>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>                     
                    </div>


                </div>
        );
    }
}