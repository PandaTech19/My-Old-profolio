import React, { Component } from 'react';
import Facebook from './Face.jpg';
import Instagram from './Insta.jpg';
import Telegram from './Telegram.jpg';
import { FcCallback } from "react-icons/fc";
import Mycontext from '../contextfile/Mycon';

           

class Contact extends Component{ 
    render() { 
        return (
             <Mycontext.Consumer>
               {({theme})=>
               <div className="contact"  id="CONTACTS">
              
               <div className="contact-container"><p className="info"style={{color: theme=="dark" ? "black" : "white"}} >Contact me<FcCallback className="icon2"/></p></div>

               <div  className="get-container"><strong><p className="get"style={{color: theme=="dark" ? "rgb(32, 40, 77)" : "white"}}>Get in touch via social media or by : {" "}
                     <a className="eml" style={{color: theme=="dark" ? "rgb(46, 4, 160)" : "rgb(18, 197, 182)"}} href="mailto:sameroundead@gmail.com">emailing me</a> </p></strong>
               </div>

                   <div className="bar1">

                       <div className="bar2"> 
                        <a className="link" href="https://www.messenger.com/t/grim_hunter9"> <img  className="fa" src={Facebook} alt=""  /> </a>
                        <a className="link" href="http://www.instagram.com/grim_hunter9"> <img  className="in" src={Instagram} alt="" /> </a>
                        <a className="link" href="https://telegram.me/Grimhunter9"> <img  className="tl" src={Telegram} alt="" /> </a>
                        </div>


                          <div className="bar3">
                            <input className="information" placeholder="Enter your Name..."></input>
                            <input className="information" placeholder="Enter your email..."></input>
                            <textarea className="touch" placeholder="Ask me anything..." ></textarea>
                            <button className="sub" type="submit" ><p className="button-sub">Get in touch</p></button>
                        </div>

                </div>
               

               
             </div>
               
              }
             </Mycontext.Consumer>

                   
               
               
            
            
  );
  }
            
  }

export default Contact;