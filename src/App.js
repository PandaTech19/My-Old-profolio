import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './Introduction/intro';
import Head from './Header/head';
import Service from './services/serv';
import Proj from './Projects/pro'
import About from './About-me/about'
import Contact from './Contacts/contact';
import Foot from './Footer/foot';
import { Mycontext } from './contextfile/Mycon';


/***************************************************************/
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Introduction/intro.css'
import './Header/head.css';
import './services/serv.css';
import './Projects/pro.css'
import './About-me/about.css'
import './Contacts/contact.css';
import './Footer/foot.css';


class App extends Component {

  state = {
    theme: "dark",
  }

  changeColor = () => {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark",

    })
  }


  render() {

    return (

      <Router>
        <Mycontext.Provider value={{ theme: this.state.theme, Themechange: this.changeColor }}>

          <div className="content-area" style={{ background: this.state.theme == "dark" ? "white" : "#212121" }} >
            <switch>

              <Route exact path="/">
                <Head />
                <Intro />

                <div id="SKILL" />
                <Service />
                <Proj />
                <About />

                <div id="ABOUT" />
                <Foot />

              </Route>

            </switch>
            <Route exact path="/CONTACTS">
              <Head />
              <Contact />
              <Foot />
            </Route>

          </div>
        </Mycontext.Provider>
      </Router>
    );
  }

}
export default App;
