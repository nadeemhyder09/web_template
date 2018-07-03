import React, { Component } from 'react';
import App from './App';
import Background_imge from './Background_imge';
import Div_No_3 from './Div_No_3';
import Div_No_4 from './Div_No_4';
import Div_No_5 from './Div_No_5';
import Div_No_6 from './Div_No_6';
import SimpleMap from './SimpleMap'
import Logos from './Logos';




class Main extends Component {
  render() {
    return(
      <div>
        <App></App>
        <Background_imge></Background_imge>
        <Div_No_3></Div_No_3>
        <Div_No_4></Div_No_4>
        <Div_No_5></Div_No_5>
        <Div_No_6></Div_No_6>
        <SimpleMap></SimpleMap>
        <Logos></Logos>
      </div>
    );
  }
}

export default Main;