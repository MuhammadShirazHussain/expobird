import React, { Component } from 'react';
import ICR from '../assets/icr.svg'
import RST from '../assets/right-side-testimonial.svg'
import LST from '../assets/left-side-testimonial.svg'
import bluceCircle from '../assets/Circle-01.svg'
import oxford from '../assets/oxford.png'
import memonBuilders from '../assets/memon builders.png'
import insignia from '../assets/insignia.png'
import hotwav from '../assets/hotwav.png'

export default class Testimonials extends Component{

    render(){
        return(
            <div className="row testi-margin">
                    <div className="col-12 text-center mb-5"><h1 className="heading-page chimney">Testimonials</h1></div>
                    <div className="col-1"></div>
                    <div className="col-5 testi-margin">

                        <div className="testi-card text-center">
                        <img width="100" className="testimonial" src={oxford} alt=""/>

                            <p>
                            ExpoBird is a brand for Oxford because they take us to another level. Approximately our sales after contacting ExpoBird is now double. They perfectly serve us so we couldn't think of hiring another company.their in house capabilities do not let us think to change our group. Whether its design, content, etc., they are best in everything.
                            </p>
                            <div className="testi-author">
                              <b>Oxford</b><br/>
                                Owner<br/>
                                <b>Yousuf Sattar</b><br/>
                            </div>
                            <div className="test-quotes">
                                <img src={ICR} alt=""/>
                            </div>
                            <div className="rst">
                                <img src={RST} width="150" height="100" alt=""/>
                            </div>
                            <div className="lst">
                                <img src={LST} width="120" height="80" alt=""/>
                            </div>
                                <div className="blueC">
                                    <img src={bluceCircle} width="40" height="40" alt=""/>
                                </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="testi-card text-center">
                        <img width="150" className="testimonial" src={memonBuilders} alt=""/>

                            <p>
                            Our field is of builders; people do not recognize many of the builders. We require healthy cement for infrastructure but for identifying ExpoBird helped us. They make us stand in a tough competition of builders. Now we can reach out and target many interested people who are willing to purchase our house.
                            </p>
                            <div className="testi-author">
                              <b>Memon Builders</b><br/>
                              CEO of Memon Group<br/>
                                <b>Hanif Memon</b><br/>
                            </div>
                            <div className="test-quotes2">
                                <img src={ICR} alt=""/>
                            </div>
                            <div className="rst2">
                                <img src={RST} width="150" height="100" alt=""/>
                            </div>
                            <div className="lst2">
                                <img src={LST} width="120" height="80" alt=""/>
                            </div>
                            <div className="blueC2">
                                    <img src={bluceCircle} width="40" height="40" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-1"></div>
                    <div className="col-5 testi-margin2">
                        <div className="testi-card text-center">
                        <img width="80" className="testimonial" src={insignia} alt=""/>
                            <p>
                            Expobird has been entertaining us for a long time; they have provided excellent quality with commitment. We acquired SEO services from ExpoBird, and the results surprised us. We have jumped to new levels, and working with ExpoBird has been an absolute delight.
                            </p>
                            <div className="testi-author">
                              <b>Insignia</b><br/>
                              Director of Insignia Advisory<br/>
                                <b>Uzair Ahmed</b><br/>
                            </div>
                            <div className="test-quotes">
                                <img src={ICR} alt=""/>
                            </div>
                            <div className="rst">
                                <img src={RST} width="150" height="100" alt=""/>
                            </div>
                            <div className="lst">
                                <img src={LST} width="120" height="80" alt=""/>
                            </div>
                            <div className="blueC">
                                    <img src={bluceCircle} width="40" height="40" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 testi-margin4">
                        <div className="testi-card text-center">
                        <img width="120" className="testimonial" src={hotwav} alt=""/>

                            <p>
                            With many leading brands on automobiles, we were thinking of changing the nature of the business, but after joining ExpoBird, our sales are now on the top. Now everyone knows the hotwave brand. Their elegant designs and catchy taglines insist users buy our cellphones.i would recommend to all contact ExpoBird to drive results and lead in the niche market.
                            </p>
                            <div className="testi-author">
                              <b>Hotwav </b><br/>
                                Director<br/>
                                <b>Ibrahim Memon</b><br/>
                            </div>
                            <div className="test-quotes2">
                                <img src={ICR} alt=""/>
                            </div>
                            <div className="rst2">
                                <img src={RST} width="150" height="100" alt=""/>
                            </div>
                            <div className="lst2">
                                <img src={LST} width="120" height="80" alt=""/>
                            </div>
                            <div className="blueC2">
                                <img src={bluceCircle} width="40" height="40" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
        );
    }
} 