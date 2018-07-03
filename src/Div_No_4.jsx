import React, { Component } from 'react';
import './Div_No_4.css';

// import Grid from './Grid';
// const sources = [];
// here i am Check my Changings with Nauman Bhai
// I think there is something wronge
class Div_No_4 extends Component {

  constructor() {
    super()
    this.state = {
      showMe: true
    }
     this.state = {
      showMe1: true
    }
    this.state = {
      showMe2: true
    }
  }

  opertation() {
   this.setState({
    showMe: true,
    showMe1: false,
    showMe2: false
   })
  }

  opertation_1() {
   this.setState({
    showMe: false,
    showMe1: true,
    showMe2: false
   })
  }
  opertation_2() {
   this.setState({
    showMe: false,
    showMe1: false,
    showMe2: true
   })
  }

   opertation_all() {
   this.setState({
    showMe: true,
    showMe1: true,
    showMe2: true
   })
  }

  render() {
    return (
        <div className="main_div" id="work">
          <div className="container">
            <div className="row">
              <h1 className="text-center heading">PORTFOLIO</h1>
              <h3 className="text-center">Ensure your Products are listed or lauch a new Brand</h3>
              <div className="button-group filters-button-group list">
                 <button className="button is-checked" onClick={() => this.opertation_all()}>ALL</button>
                 <button className="button" onClick={() => this.opertation()}>AIR CONDTIONING</button>
                 <button className="button" onClick={() => this.opertation_1()}>REFRIGERATION</button>
                 <button className="button" onClick={() => this.opertation_2()}>DESIGN</button>
                 </div>
            </div>
            <div className="row row no-gutter grid">
              {
                this.state.showMe1?
                <div className="col-md-3 col-sm-6 img1 element-item air">
                <img src={require('./images/imgg1.png')} className="img-responsive img2"/>
                <div className="overlay"></div>
              </div>
              :null
              }
              {
                this.state.showMe2?
              <div className="col-md-3 col-sm-6 img1 element-item design">
                <img src={require('./images/img-8.png')} className="img-responsive img2"/>
                <div className="overlay"></div>
              </div>
              :null
              }
              {
                this.state.showMe?
              <div className="col-md-3 col-sm-6 img1 element-item refrigerationf">
                <img src={require('./images/img-6.png')} className="img-responsive img2"/>
                <div className="overlay"></div>
              </div>
              :null
              }
              {
                this.state.showMe2?
              <div className="col-md-3 col-sm-6 img1 element-item refrigerationf">
                <img src={require('./images/img-5.png')} className="img-responsive img2"/>
                <div className="overlay"></div>
              </div>
              :null
              }
              <div className="col-md-3 col-sm-6 img1 element-item air">
                <img src={require('./images/img-5.png')} className="img-responsive img2"/>
                <div className="overlay"></div>
              </div>
              {
                this.state.showMe1?
              <div className="col-md-3 col-sm-6 img1 element-item design">
                <img src={require('./images/img-9.png')} className="img-responsive img2"/>
                <div className="overlay"></div>
              </div>
              :null
              }
              {
                this.state.showMe1?
              <div className="col-md-3 col-sm-6 img1 element-item refrigerationf">
                <img src={require('./images/img-10.png')} className="img-responsive img2"/>
                <div className="overlay"></div>
              </div>
              :null
              }
              {
                this.state.showMe?
              <div className="col-md-3 col-sm-6 img1 element-item air" id="hello">
                <img src={require('./images/img-8.png')} className="img-responsive img2"/>
                <div className="overlay"></div>
              </div>
              :null
              }
            </div>
          </div>
        </div>
      )
  }
}

export default Div_No_4;
