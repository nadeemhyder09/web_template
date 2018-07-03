
import React, { Component } from 'react';
import './App.css';
import logo from './images/logo.png';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/popper.js/dist/popper.js";
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class App extends Component {

           componentDidMount() {

            Events.scrollEvent.register('begin', function() {
              console.log("begin", arguments);
            });

            Events.scrollEvent.register('end', function() {
              console.log("end", arguments);
            });

          }
          scrollTo(id) {
            scroller.scrollTo(id, {
              duration: 2000,
              delay: 0,
              smooth: 'easeInOutQuart'
            })
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
        <header>
            <nav className="navbar navbar-inverse">
            <div className="container">
             <div className="row">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>                       
                </button>
                <a className="navbar-brand"><img src={logo} alt="Logo" /></a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
               
                <ul className="nav navbar-nav navbar-right">
                <li><a onClick={() => this.scrollTo('home')}>Home</a></li>
                <li><a onClick={() => this.scrollTo('features')}>Features</a></li>
                <li><a onClick={() => this.scrollTo('work')}>Work</a></li>
                <li><a onClick={() => this.scrollTo('team')}>Team</a></li>
                <li><a onClick={() => this.scrollTo('contact')}>Contact</a></li>
                </ul>
              </div>
             </div>
            </div>
          </nav>
        </header>
    );
  }
}

export default App;
