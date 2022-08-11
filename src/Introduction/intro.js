import React, { Component } from 'react';
import My from './intro.png';
import {Mycontext} from '../contextfile/Mycon';


 
class Intro extends Component{ 
    render() {
        let age = new Date().getFullYear() - 1999;
        return (
  <Mycontext.Consumer>
        {({theme})=>  

                    <div className="intro-body">
                    <div className="intro-content">
                    <strong>
                        <p className="intro-name"  style={{color: theme=="dark" ? "" : "white"}}>
                    Hello, my name is Samer</p></strong>
                    <strong><p className="intro-about" style={{color: theme=="dark" ? "black" : ""}}>
                        I'm {age} years old, from Lebanon.  
                    iam a thriving future sofware engineer, I've studied front end development such as React, 
                    l love to learn new kinds of technologies,In the beginning i started with the basics Html
                    and css, then i worked up my way to JAvascript the main logical tech to run websites,and 
                    now iam using React to create most of my websites with different designs.  
                    </p></strong>
                    </div>
                    <div className="computer"><img className="hand" src={My} alt=""/></div> 
                    </div>
        
        }
          
    </Mycontext.Consumer>
        );
    }

}
export default Intro;
