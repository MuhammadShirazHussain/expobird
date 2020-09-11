import React, { Component } from 'react';
import ICR from '../assets/icr.svg'
import RST from '../assets/right-side-testimonial.svg'
import LST from '../assets/left-side-testimonial.svg'
import bluceCircle from '../assets/Circle-01.svg'


export default class Testimonials extends Component{

    render(){
        return(
            <div className="row">
                    <div className="col-12 text-center mb-5"><h1 className="heading-page chimney">Testimonials</h1></div>
                    <div className="col-1"></div>
                    <div className="col-5 testi-margin">
                        <div className="testi-card text-center">
                            <p>
                                Renderforest intro maker is a key enhancement to the content that I create because of it’s visually appealing, impactful, and effective video templates. I turn to Renderforest when I want to add an official touch to my videos and love the amount of various options available. Creativity is enhanced, and the possibilities are endless with Renderforest.
                            </p>
                            <div className="testi-author">
                              <b>Alex Charles</b><br/>
                                Content Creator and Blogger<br/>
                                <b>Mr. Worldview</b><br/>
                            </div>
                            <div className="test-quotes">
                                <img src={ICR} alt=""/>
                            </div>
                            <div className="rst">
                                <img src={RST} width="150" height="100" alt=""/>
                            </div>
                            <div className="lst">
                                <img src={LST} width="120" height="80" alt=""/>
                            </div>
                                <div className="blueC">
                                    <img src={bluceCircle} width="40" height="40" alt=""/>
                                </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="testi-card text-center">
                            <p>
                                Renderforest intro maker is a key enhancement to the content that I create because of it’s visually appealing, impactful, and effective video templates. I turn to Renderforest when I want to add an official touch to my videos and love the amount of various options available. Creativity is enhanced, and the possibilities are endless with Renderforest.
                            </p>
                            <div className="testi-author">
                              <b>Alex Charles</b><br/>
                                Content Creator and Blogger<br/>
                                <b>Mr. Worldview</b><br/>
                            </div>
                            <div className="test-quotes2">
                                <img src={ICR} alt=""/>
                            </div>
                            <div className="rst2">
                                <img src={RST} width="150" height="100" alt=""/>
                            </div>
                            <div className="lst2">
                                <img src={LST} width="120" height="80" alt=""/>
                            </div>
                            <div className="blueC2">
                                    <img src={bluceCircle} width="40" height="40" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-5 testi-margin2">
                        <div className="testi-card text-center">
                            <p>
                                Renderforest intro maker is a key enhancement to the content that I create because of it’s visually appealing, impactful, and effective video templates. I turn to Renderforest when I want to add an official touch to my videos and love the amount of various options available. Creativity is enhanced, and the possibilities are endless with Renderforest.
                            </p>
                            <div className="testi-author">
                              <b>Alex Charles</b><br/>
                                Content Creator and Blogger<br/>
                                <b>Mr. Worldview</b><br/>
                            </div>
                            <div className="test-quotes">
                                <img src={ICR} alt=""/>
                            </div>
                            <div className="rst">
                                <img src={RST} width="150" height="100" alt=""/>
                            </div>
                            <div className="lst">
                                <img src={LST} width="120" height="80" alt=""/>
                            </div>
                            <div className="blueC">
                                    <img src={bluceCircle} width="40" height="40" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 testi-margin4">
                        <div className="testi-card text-center">
                            <p>
                                Renderforest intro maker is a key enhancement to the content that I create because of it’s visually appealing, impactful, and effective video templates. I turn to Renderforest when I want to add an official touch to my videos and love the amount of various options available. Creativity is enhanced, and the possibilities are endless with Renderforest.
                            </p>
                            <div className="testi-author">
                              <b>Alex Charles</b><br/>
                                Content Creator and Blogger<br/>
                                <b>Mr. Worldview</b><br/>
                            </div>
                            <div className="test-quotes2">
                                <img src={ICR} alt=""/>
                            </div>
                            <div className="rst2">
                                <img src={RST} width="150" height="100" alt=""/>
                            </div>
                            <div className="lst2">
                                <img src={LST} width="120" height="80" alt=""/>
                            </div>
                            <div className="blueC2">
                                <img src={bluceCircle} width="40" height="40" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
        );
    }
} 