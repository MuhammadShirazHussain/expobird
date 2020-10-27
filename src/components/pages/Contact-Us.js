import React, { Component } from 'react';
import location from '../../assets/location icon.svg'
import Mail from '../../assets/mail icon.svg'
import HomeLogo from '../../assets/home icon.svg'



export default class ContactUs extends Component{
    render(){
        return(

            <div className="">
                <div className="row contact_container">
                    <div className="col-md-2 mt-5"></div>
                    <div className="col-md-8 text-center my-5 py-5 px-5">
                        <h4 className="text-uppercase contact-header1">Contact us</h4>
                        <h1 className="text-capitalize contact-header2">Let's Build Together</h1>
                        <p className="header-description">Our customer service team is ready to help you ahead. Just give us a call or fill up the contact form below.</p>
                    </div>
                    <div className="col-md-2 mt-5"></div>
                </div>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-4 text-center  px-3">
                            <div className="px-3 py-4 Cards">
                                <img width="100" src={location} alt=""/>
                                <h5 className="py-4">Office Address</h5>
                                <p className="pb-3">15/A PMJ square</p>
                                <p className="pb-3">naseerabad,</p>
                                <p className="pb-3">block 14 FB area</p>
                                <p className="pb-3">Karachi, Pakistan</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center px-3">
                            <div className="py-4 px-3 Cards">
                                <img width="100" src={Mail} alt=""/>
                                <h5 className="py-4">Contact Us</h5>
                                <p className="pb-3">Email:</p>
                                <p className="pb-3">info@expobird.com</p>
                                <p className="pb-3">Contact:</p>
                                <p className="pb-3">+92 000 0000000</p>
                            </div>
                        </div>
                        <div className="col-md-4 text-center px-3">
                            <div className="py-4 px-3 Cards">    
                                <img width="100" src={HomeLogo} alt=""/>
                                <h5 className="py-4">Availability</h5>
                                <p className="pb-3">Monday to Saturday</p>
                                <p className="pb-3">9am to 5pm</p>
                                <p className="pb-3">Sunday</p>
                                <p className="pb-3">Closed</p>
                            </div>    
                        </div>
                        <div className="col-2 mt-5"></div>
                        <div className="col-8 mt-5 contactCard">
                            <h2 className="text-center">Send a Message</h2>
                            <p className="text-center pt-4">For any sort of query feel free to contact us.</p>
                        </div>
                        <div className="col-2 mt-5"></div>
                        {/* <form action=""> */}

                        <div className="col-6 px-3 mt-5">
                            <div>
                                <input size ="55" type="text" placeholder="Name" className="inputBox py-3 pl-3 text-decoration-none"/>
                            </div>
                        </div>
                        <div className="col-6 px-3 mt-5">
                            <div>
                                <input size ="55" type="text" placeholder="Phone" className="inputBox py-3 pl-3 text-decoration-none"/>
                            </div>
                        </div>
                        <div className="col-6 px-3 mt-5">
                            <div>
                                <input size ="55" type="text" placeholder="Organisation" className="inputBox py-3 pl-3 text-decoration-none"/>
                            </div>
                        </div>
                        <div className="col-6 px-3 mt-5">
                            <div>
                                <input size ="55" type="email" placeholder="Email" className="inputBox py-3 pl-3 text-decoration-none"/>
                            </div>
                        </div>
                        <div className="col-12 mt-5">
                            <div>
                                <textarea rows="5" cols= "124" type="text" placeholder="Message" className="inputBox py-3 pl-3 text-decoration-none"/>
                            </div>
                        </div>
                    {/* </form> */}
                    </div>
                </div> 
            </div>
        )
    }
}