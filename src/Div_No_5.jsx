import React, { Component } from 'react';
import './Div_No_5.css';

////  permissions granted to nauman
class Div_No_5 extends Component {
  render() {
    return (
      <div className="main_div" id="team">
        <div className="container">
          <div className="row">
            <h1 className="text-center heading">MEET THE TEAM</h1>
            <h3 className="text-center">Find about more about out talented and enthuastic staff</h3>
            <div className="col-sm-4 text-center">
              <img src={require('./images/img-11.png')} className="img-responsive img"/>
              <h2 className="text-center">Chystine Hineu</h2>
              <p className="text-center">Prident Vistibulum</p>
              <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="col-sm-4 text-center">
              <img src={require('./images/img-12.png')} className="img-responsive img"/>
              <h2 className="text-center">Martin Matrone</h2>
              <p className="text-center">Prident Vistibulum</p>
              <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="col-sm-4 text-center">
              <img src={require('./images/img-13.png')} className="img-responsive img"/>
              <h2 className="text-center">Steve Flaulkin</h2>
              <p className="text-center">Prident Vistibulum</p>
              <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            
          </div>
        </div>
      </div>
      )
  }
}

export default Div_No_5;