import React, { Component } from 'react';
import './Div_No_3.css';

class Div_No_3 extends Component {
  render() {
    return (
        <div className="main_div" id="features">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 text-center">
                <div className="back-img1"></div>
                <h2 className="text-center">LOREM IPSUM</h2>
                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
               <div className="col-sm-4 text-center">
                <div className="back-img2"></div>
                <h2 className="text-center">LOREM IPSUM</h2>
                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
               <div className="col-sm-4 text-center">
                <div className="back-img3"></div>
                <h2 className="text-center">LOREM IPSUM</h2>
                <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Div_No_3;