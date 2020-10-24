import React,{Component} from 'react';
import Cfvideo from '../assets/cf-video.mp4'

export default class ContactForm extends Component{

    render(){
        return(
            <div className="container">
            <div className="row testi-margin">
                <div className="col-6 text-center pt-5">
                    <video className="slight-br videoSize" muted autoPlay>
                        <source src={Cfvideo} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="col-6 text-center">
                    <h2 className="mb-3" id="ah2"><b>Request A Callback</b></h2>
                    <div><p className="text-secondary ">Send us an email if you have any questions<br/>  about billing or your Elegant Themes <br/>account</p></div>
                    
                    <form action="" method="post">
                        <div className="mb-3">
                            <input type="text" className="cf-fields" placeholder="Name"/>
                        </div>
                        <div className="mb-3">
                            <input type="text" name="" id="" className="cf-fields" placeholder="Email"/>
                        </div>
                        <div className="mb-3">
                            <select name="" id="" className="cf-fields">
                                <option value="">I'm interested in...</option>
                                <option value="">Digital Marketing  </option>
                                <option value="">Graphics and Design</option>
                                <option value="">Website Development</option>
                                <option value="">Video and Animation</option>
                                <option value="">Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <textarea name="" id="" cols="30" rows="3" className="cf-fields">

                            </textarea>
                        </div>
                        <div className="mb-3">
                            <input type="text" name="" id="" placeholder="Your Contact#" className="cf-fields"/>
                        </div>
                        <input type="submit" name="" id="" className="services-cta cf-submit"/>
                    </form>                
                </div>
            </div>
            </div>
        );
    }
}
