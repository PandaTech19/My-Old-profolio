import React, { Component } from 'react';
import { FcFlashOn } from "react-icons/fc";
import Html from './html.png';
import Csi from './C.png';
import Js from './js.png';
import Rct from './react.png';
import Github from './github.png';
import Git from './git.png';
import Mycontext from '../contextfile/Mycon';




class Skill extends Component{
    render() { 
        return ( 
            <Mycontext.Consumer>
            {({theme})=> 
                <div className="skill-body"  >
                     

                <div  className="skill-wrapper" >
                    <p className="skill"style={{color: theme=="dark" ? "#242c36" : "white"}}> my Skills <FcFlashOn className="icon"></FcFlashOn></p>
                </div>

                <div className="red">
                    <p className="know "style={{color: theme=="dark" ? "black" : "blanchedalmond"}} >These are some of the technologies i know </p>
                </div>

                <div className="img-wrapper"style={{background: theme=="dark" ? "" : "rgba(245, 222, 179, 0.199)"}} >

                 <div className="first-container">
                 <div><a href="https://www.w3schools.com/html/"><img className="ht" src={Html} alt="html-icon"/></a></div>
                 <div><a href="https://www.w3schools.com/css/"><img className="cs" src={Csi} alt="css-icon"/></a></div>
                 <div><a href="https://www.w3schools.com/js/DEFAULT.asp"><img className="js" src={Js} alt="js-icon"/></a></div>
                 </div>

                 <div className="second-container">
                 <div><a href="https://reactjs.org/"><img className="rc" src={Rct} alt="react-icon"/></a></div>
                 <div><a href="https://github.com/"><img className="gih" src={Github} alt="github-icon"/></a></div>
                 <div><a href="https://git-scm.com/"><img className="git" src={Git} alt="git-icon"/></a></div>
                 </div>

                </div>

                <div id="PROJECTS"></div>

             </div>}
     </Mycontext.Consumer>

        );
    }
}

export default Skill;