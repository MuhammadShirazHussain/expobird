import React, { Component } from 'react';
import banner from '../../assets/expobird-banner-image.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

export default class Banner extends Component{
    
    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }
    
    
    render(){
        return(
            <div> 
                <div className="row bnr">
                    <div className="col-6">
                            <img id="banner-img" src={banner} alt=""/> 
                            <div className="heading-text" >
                                <h1 id="heading-main">{this.props.title1}</h1>
                                <p>{this.props.desc1}</p>
                                <button className="rf">
                                    Get Started
                                </button>
                            </div>
                    </div>
                    

                    <div className="col-5">
                        <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='BaS426OQTG0' 
                        onClose={() => this.setState({isOpen: false})} />


                            <div className="play-btn" onClick={this.openModal}> 
                            <div className="play-btn-inside">
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}