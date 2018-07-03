import React, {Component} from 'react';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';


import './Logos.css';

class Logos extends Component {
  render() {
    return (
        <div className="main_div">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 col-xs-5">
                <p className="text-center">Suavis Technologies@ 2018</p>
              </div>
              <div className="col-sm-6 col-xs-7">
                <ul className="list text-center">
                  <li><a href="#facebook"><i className="fa fa-facebook fa1"></i></a></li>
                  <li><a href="#twitter"><i className="fa fa-twitter fa2"></i></a></li>
                  <li><a href="#linkedin"><i className="fa fa-linkedin-square fa3"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      )
  }
}

export default Logos;