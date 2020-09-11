import React,{Component} from 'react';
import Navbar from './components/Navbar'
import Homepage from './components/homepage'
import DigitalMarketing from './components/pages/digitalMarketing'
import Seo from './components/pages/Seo'
import SocialMediaMarketing from './components/pages/socialMediaMarketing'
import VideoProduction from './components/videoProduction'
import DigitalVideoCommercial from './components/digitalVideoCommercial'
import WebDevelopment from './components/pages/WebDevelopment'
import Animation from './components/pages/Animation'
import GraphicDesign from './components/pages/GraphicDesign'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";




export default class Main extends Component{

    render(){
        return(
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact>
                            <Homepage/>
                        </Route>
                        <Route path="/digital-marketing" >
                            <DigitalMarketing/>
                        </Route>
                        <Route path="/search-engine-optimization" >
                            <Seo/>
                        </Route>
                        <Router path="/social-media-marketing">
                            <SocialMediaMarketing/>
                        </Router>
                        <Router path="/video-production-service">
                            <VideoProduction/>
                        </Router>
                        <Router path="/digital-video-commercial">
                            <DigitalVideoCommercial/>
                        </Router>
                        <Router path="/web-development">
                            <WebDevelopment/>
                        </Router>
                        <Router path="/animation">
                            <Animation/>
                        </Router>
                        <Router path="/graphic-design">
                            <GraphicDesign/>
                        </Router>
                        
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}