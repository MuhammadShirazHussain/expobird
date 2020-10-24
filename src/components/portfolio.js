import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import Pentagon from '../assets/pentagon.svg'
import greenCircle from '../assets/Green-01.svg'

export default class Clients extends Component{

    render(){

        return(
            <div className="container">
            <div className="row testi-margin">
                    <div className="col-12 text-center ">
                        <h1 className="heading-page">Our Work</h1>
                        <h4>Take a look at some of our top-of-line work for our clients they have loved</h4>
                        <p>{this.props.subheading1}</p>
                    </div>


                    <div className="align-self-center col-12 text-center">
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
                </div>
                </div>
        );
    }
}