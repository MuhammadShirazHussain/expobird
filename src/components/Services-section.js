import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";





export default class Services extends Component{

    render(){
        return(
            // <div className="container">
            <div className="row ">
                    <div className="col-md-1"></div>
                    <div className="col-md-5 mb-5 bg-white mr-0 mr-sm-0 mr-md-4 mr-lg-4 mr-xl-4">
                        <div className="if">
                            <div className="services-video">
                                <img src={this.props.image1} />
                            </div>
                            <div className="services-text ml-3">
                                <h2 className="services-heading">{this.props.title1}</h2>
                                <p className="text-left text-md-left text-lg-center text-sm-left">{this.props.desc1}</p>
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
                            <img src={this.props.image2} />

                            </div>
                            <div className="services-text ml-3">
                                <h2 className="services-heading">{this.props.title2}</h2>
                                <p className="text-left text-md-left text-lg-center text-sm-left">{this.props.desc2}</p>
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

                    {/* <div className="col-md-5 mb-5 bg-white mr-4">
                        <div className="if">
                            <div className="services-video">
                                <img src={this.props.image3} />

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
                                <img src={this.props.image4} />

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
                                <img src={this.props.image5} />

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
                                <img src={this.props.image6} />

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
                    </div> */}
                    {/* <div className="col-md-1"></div> 
                    <div className="col-md-5 mb-5 bg-white mr-4">
                        <div className="if">
                            <div className="services-video">
                            <img src={this.props.image7} />

                            </div>
                            <div className="services-text ml-3">
                                <h2 className="services-heading">{this.props.title7}</h2>
                                <p className="text-secondary">{this.props.desc7}</p>
                                <div>
                                <Link to={this.props.link7}>
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
                                <img src={this.props.image8} />

                            </div>
                            <div className="services-text ml-3">
                                <h2 className="services-heading">{this.props.title8}</h2>
                                <p className="text-secondary">{this.props.desc8}</p>
                                <div>
                                <Link to={this.props.link8}>
                                    <button className="services">
                                    Explore &nbsp;<FontAwesomeIcon icon={faCaretRight}/>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>                     
                    </div>
                    <div className="col-md-1"></div> */}
 
 </div>

                // </div>
        );
    }
}