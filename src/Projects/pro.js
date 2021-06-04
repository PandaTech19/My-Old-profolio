import React, { Component } from 'react';
import { FcSettings } from "react-icons/fc";
import Fr from './first.png';
import Fu from './fut.png';
import Su from './studyuk.jpg'
import Mycontext from '../contextfile/Mycon';



class Pro extends Component {
    render() {
        return (
            <Mycontext.Consumer>
                {({ theme }) =>

                    <div className="projects-body" >
                        <div className="pro-container"><p className="myp" style={{ color: theme == "dark" ? "black" : "white" }}>Feaured projects <FcSettings className="icon3" /></p></div>

                        <div className="project-text">

                            <p className="name-site" style={{ color: theme == "dark" ? "black" : "white" }}>First step</p>

                            <p className="name-type" style={{ color: theme == "dark" ? "black" : "white" }}>Website:</p>

                            <strong> <p className="about-website" style={{ color: theme == "dark" ? "black" : "blanchedalmond" }}>First step is a template i've designed for marketing
                             or other uses, using react-player helped me to add a vid in the site </p></strong>

                            <a className="ahref" href="https://first-step-1919.netlify.app/"><img className="sites" src={Fr} alt="first-website" /></a>


                            <div className="split" ></div>

                            <p className="name-site" style={{ color: theme == "dark" ? "black" : "white" }}>Best future</p>

                            <p className="name-type" style={{ color: theme == "dark" ? "black" : "white" }}>Website:</p>

                            <strong> <p className="about-website" style={{ color: theme == "dark" ? "black" : "blanchedalmond" }}>Best future is a website that helps people
                            to apply for visas throught out the european union, either  for work or
                            studying abroad.</p></strong>

                            <a className="ahref" href="https://best-future.netlify.app/" id="ABOUT"><img className="sites" src={Fu} alt="Second-website" /></a>


                            <div className="split" ></div> 

                            <p className="name-site" style={{ color: theme == "dark" ? "black" : "white" }}>Study-in-uk</p>

                            <p className="name-type" style={{ color: theme == "dark" ? "black" : "white" }}>Website:</p>

                            <strong> <p className="about-website" style={{ color: theme == "dark" ? "black" : "blanchedalmond" }}>Study-in-uk is a website that helps people to apply for a visa for studying in Ukraine
                            and picking what university is suitable for you, its also has two languages for both english and arabic speakers to understand .</p></strong>

                            <a className="ahref" href="https://study-in-uk.netlify.app" id="ABOUT"><img className="sites" src={Su} alt="Second-website" /></a>



                            <div className="split" ></div>




                        </div>

                    </div>






                }
            </Mycontext.Consumer>


        );
    }
}
export default Pro;
