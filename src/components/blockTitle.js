import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import Pentagon from '../assets/pentagon.svg'
import greenCircle from '../assets/Green-01.svg'

export default class BlockTitle extends Component{

    render(){

        return(
            <div className="row my-5 pt-6 pb-5">
                    <div className="col-2"></div>
                    <div className="col-8 text-center my-5">
                        <h1 className="heading-page">{this.props.heading}</h1>
                        <h4>{this.props.subheading}</h4>
                        <p>{this.props.subheading1}</p>
                         
                    </div>

            </div>
        );
    }
}