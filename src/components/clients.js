import React, { Component } from 'react';
import oxford from '../assets/oxford.png';
import fbr from '../assets/fbr.png';
import diamondHomes from '../assets/diamond homes.png';
import memonBuilders from '../assets/memon builders.png';
import customs from '../assets/customs.png';
import apimatic from '../assets/apimatic.png';
import clariant from '../assets/clariant.png';
import hotwav from '../assets/hotwav.png';
import superPower from '../assets/super power.png';
import ronin from '../assets/ronin.png';
import iba from '../assets/iba.png';
import mehran from '../assets/mehran.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import diviCover from '../assets/divi-video-cover.jpg';
import greenCircle from '../assets/Green-01.svg';
import Pentagon from '../assets/pentagon.svg';


export default class Clients extends Component{

    render(){

        return(
            <div className="row testi-margin2 text-center" >
                <div className="col-12 text-center">
                        <h1 className="heading-page">Our Clients</h1>
                    </div>
                <div className="col-lg-2 col-xl-2 col-4 text-center mt-3">
                    <img className="clientImage" id="clients-img" src={oxford} alt=""/>
                </div>
                <div className="col-lg-2 col-xl-2 col-4 text-center mt-3">
                    <img className="clientImage " className="clientImage" id="clients-img" src={fbr} alt=""/>
                </div> 
                <div className="col-lg-2 col-xl-2 col-4 text-center mt-3">
                    <img className="clientImage" id="clients-img" src={diamondHomes} alt=""/>
                </div> 
                <div className="col-lg-2 col-xl-2 col-4 text-center mt-3">
                    <img className="clientImage" id="clients-img" src={memonBuilders} alt=""/>
                </div> 
                <div className="col-lg-2 col-xl-2 col-4 text-center mt-3">
                    <img className="clientImage" id="clients-img" src={customs} alt=""/>
                </div>   
                <div className="col-lg-2 col-xl-2 col-4 text-center mt-3">
                    <img className="clientImage" id="clients-img" src={apimatic} alt=""/>
                </div>  


                <div className="col-lg-2 col-xl-2 col-4  text-center mt-3">
                    <img className="clientImage" id="clients-img" src={clariant} alt=""/>
                </div>
                <div className="col-lg-2 col-xl-2 col-4 text-center mt-3">
                    <img className="clientImage" id="clients-img" src={hotwav} alt=""/>
                </div> 
                <div className="col-lg-2 col-xl-2 col-4 text-center mt-3">
                    <img className="clientImage" id="clients-img" src={superPower} alt=""/>
                </div> 
                <div className="col-lg-2 col-xl-2 col-4  text-center mt-3">
                    <img className="clientImage" id="clients-img" src={ronin} alt=""/>
                </div> 
                <div className="col-lg-2 col-xl-2 col-4   text-center mt-3">
                    <img className="clientImage" id="clients-img" src={iba} alt=""/>
                </div>   
                <div className="col-lg-2 col-xl-2 col-4 text-center mt-3">
                    <img className="clientImage" id="clients-img" src={mehran} alt=""/>
                </div>  
                
      
            </div>

        );
    }
}