import React, { Component } from 'react';
import greenCircle from '../assets/Green-01.svg'
import yellowsvg from '../assets/Yellow-01.svg'
import $ from "jquery"


export default class Popup extends Component{

    componentDidMount(){
        var element = document.getElementById('popup');
        var targetedDiv = element.offsetTop;
        console.log(targetedDiv + "px");
        var element1 = document.getElementById('myModal');
        var screenHeight = window.screen.height/100*75;
        console.log("screen height : " + window.screen.height + "screen height divided by 3 : " + screenHeight);
        var endTarget = targetedDiv + screenHeight;
                
        $(document).ready(function() {
            $(window).scroll(function() {
                
                if ($(document).scrollTop() > targetedDiv && $(document).scrollTop() < endTarget) {
                 
                    
                    $("#popup").addClass("et-highlighted");
                    $(".et-highlighted-overlay").css({
                        "visibility" : "visible",
                        "opacity" : "1",
                        "pointer-events" : "initial"
                    });
                    $("#popup").css("z-index", "4");
              }
              else {
                $("#popup").removeClass("et-highlighted");
                $(".et-highlighted-overlay").css({
                    "visibility" : "hidden",
                    "opacity" : "0",
                    "pointer-events" : "none"
                });
                $("#popup").css("z-index", "1");
            
              }
            });
          });

    }



    render(){
        return(
            <div>
                <div className="row et-highlightable my-5 py-5" id="popup">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="px-5 cta-popup my-5 text-center py-5">
                            <h2 className="text-white">
                            83,235 Customers Are Already Building Amazing Websites With Divi. Join The Most Emh1owered WordPress Community On The Web SIGN UP TODAY We offer a 30 Day Money Back Guarantee, so joining is Risk-Free!    
                            </h2>
                            <button className="my-3 pop-btn"><b>Sign Up Today</b></button>

                        </div>
                        <div className="bg-testi">
                            <img src={greenCircle} alt="" width="350" />
                        </div>
                        <div className="bg-testi2">
                            <img src={yellowsvg} alt="" width="30" />
                        </div>
                    </div>
                    <div className="col-1">
                    </div>
                </div>
                <span className="et-highlighted-overlay"></span>
            </div>
        );
    }
}