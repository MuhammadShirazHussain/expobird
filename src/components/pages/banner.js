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
                    <img id="banner-img" src={banner} alt=""/>
                    <div className="heading-text" >
                        <h1 id="heading-main">{this.props.title1}</h1>
                        <p>Create endless opportunities for your business in Karachi<br/> 
and across Pakistan through Digital Marketing with ExpoBird.<br/>
                        </p>
                        <button className="rf">
                            Get Started
                        </button>
                    </div>
                    

                    <div>
                        <ModalVideo 
                        channel='youtube' 
                        isOpen={this.state.isOpen} 
                        videoId='L61p2uyiMSo' 
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