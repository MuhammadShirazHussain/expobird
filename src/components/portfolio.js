import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import  portfolioCover from '../assets/portfolio cover.png'
import Pentagon from '../assets/pentagon.svg'
import greenCircle from '../assets/Green-01.svg'

export default class Clients extends Component{

    render(){

        return(
            <div className="row my-5 pt-6 pb-5">
                    <div className="col-2"></div>
                    <div className="col-8 text-center my-5">
                        <h1 className="heading-page">Our Work</h1>
                        <h4>Take a look at some of our top-of-line work for our clients they have loved</h4>
                        <p>{this.props.subheading1}</p>
                    </div>

                    <div className="col-3">

                    </div>
                    <div className="col-6 text-center">
                        <div className="play-btn">
                            <div className="play-btn-inside">
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                        </div>
                        <div id="diviCover" className="image-container">
                            <img id="dC" src={this.props.image} alt=""/>
                        </div>
                        <div className="circle">
                            <img src={greenCircle} alt=""/>
                        </div>
                        <div className="pentagon">
                            <img src={Pentagon} alt=""/>
                        </div>
                    </div>
                    <div className="col-3">

                    </div>
                </div>
        );
    }
}