import React, { Component } from 'react';
import { FcReading } from "react-icons/fc";
import Mycontext from '../contextfile/Mycon';



class About extends Component{  
    render() { 
        return (
           <Mycontext.Consumer>
               {({theme})=>

                 <div className="about-wrapper"  >
                 <div className="about-container"><p className="about-me"style={{color: theme=="dark" ? "" : "whitesmoke"}}>About me <FcReading className="bout-me"/></p></div>
               <div className="wma">
                      <p className="help" style={{color: theme=="dark" ? "" : "blanchedalmond"}}>
                   
                     <strong >
                        <p >
                            Hello again, i hope you've liked my site.
                            Now let me introduce my self formally, my name is samer timani 
                            iam from lebanon, i've been studying front-end development 
                            about a year from now,I'm looking forward to work in a tech  
                            company, as for my hobbies i like swimming, listening to music 
                            and riding the bike.
                            well i hope you know a little about me. ;)
                        </p>
                     </strong>
 
                     </p>
                     
                    
                     
                 </div>
                 
                  
 
              </div>
               
               
               
               
               }
           </Mycontext.Consumer>
        );
    }
}
export default About;