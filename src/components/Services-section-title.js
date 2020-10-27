import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";





export default class ServicesTitle extends Component{

    render(){
        return(
<<<<<<< HEAD

            <div className="row testi-margin ">
                    <div className="col-12 text-center my-5">
                        <h1 className="heading-page">{this.props.title}</h1>
                        <h4 className="services-subheading">{this.props.SubHeading  } </h4>
                        
                        <h5 className="explore-services">{this.props.button}<FontAwesomeIcon icon={faArrowAltCircleRight}/></h5>
                    </div>
=======
            <div className="container">
                <div className="row testi-margin ">
                        <div className="col-12 text-center my-5">
                            <h1 className="heading-page">{this.props.title}</h1>
                            <h4>{this.props.SubHeading  } </h4>
                            
                            <h5 className="explore-services">{this.props.button}<FontAwesomeIcon icon={faArrowAltCircleRight}/></h5>
                        </div>
                </div>
>>>>>>> f710db3d63ba0a8d44d77ce931e77d41aca0add7
            </div>
        );
    }
}