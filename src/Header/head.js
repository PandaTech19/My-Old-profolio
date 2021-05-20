import React, { Component } from 'react';
import { Navbar , Nav  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import Logo from './logo.jpg';
import { FiSun } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import {Mycontext} from '../contextfile/Mycon';



class Head extends Component{


    render(){
        return (
        
            <Mycontext.Consumer>
            {({theme, Themechange})=> 
            <div>
         
            <Navbar className="header" style={{background: theme=="dark" ? "white" : "#242c36"}} collapseOnSelect expand="lg">
            <Navbar.Brand><HashLink to="/"><img src={Logo} className="log" alt="my-logo"/></HashLink></Navbar.Brand>
            <Navbar.Toggle  className="toggle-btn" aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse     id="responsive-navbar-nav">
            <Nav className="navbar"> 

                    <nav><HashLink  className="b"style={{color: theme=="dark" ? "black" : "white"}} smooth to="/#SKILL">Skills</HashLink></nav>
                    <nav><HashLink  className="b"style={{color: theme=="dark" ? "black" : "white"}} smooth to="/#PROJECTS">Projects</HashLink></nav>
                    <nav><HashLink  className="b"style={{color: theme=="dark" ? "black" : "white"}} smooth to="/#ABOUT">About-me</HashLink></nav>
                    <nav><Link      className="b"style={{color: theme=="dark" ? "black" : "white"}} smooth to="/CONTACTS">Contact me</Link></nav>

                    <nav onClick={()=>Themechange()}>{theme=="dark" ?   <BsMoon className="dark"/>:<FiSun className="light"/>}</nav>

            </Nav>

            </Navbar.Collapse>
            </Navbar>    

          </div>
            
            
            
            
            
            
            
            
            
            }
            </Mycontext.Consumer>
    
    
        )
    }
}
export default Head;








{/**/}