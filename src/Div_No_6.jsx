import React, {Component} from 'react';
import './Div_No_6.css';

class Div_No_6 extends Component {
  constructor(props){
       super(props);

       this.state = {
           fields: {},
           errors: {}
       }
    }

handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        document.getElementById('print').innerHTML = '';
        if(!fields["Name"]){
           formIsValid = false;
           document.getElementById('print').innerHTML = 'Name must be filled out';
           return false;
        }

        //Email
        document.getElementById('print').innerHTML = '';
        if(!fields["Email"]){
           formIsValid = false;
           document.getElementById('print').innerHTML = 'Email must be filled out';
           return false;
        }

        //Message
        document.getElementById('print').innerHTML = '';
        if(!fields["Message"]){
           formIsValid = false;
           document.getElementById('print').innerHTML = 'Message must be filled out';
           return false;
        }

       this.setState({errors: errors});
       return formIsValid;
       
   }

   contactSubmit(){
        // e.preventDefault();
        if(this.handleValidation()){
           alert("Form was Submitted SUCCESSFULLY !!!");
        }

    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

  render() {
    return (
        <div className="main_div" id="contact">
          <div className="container">
            <div className="row">
              <h1 className="text-center heading">LET'S DISCUSS</h1>
              <h3 className="text-center">We are always here to Listen your Suggetions</h3>
                <div id="print"></div>
              <form  name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                <div className="col-sm-6">
                  <label htmlFor="usr"> Name:</label>
                  <input type="text" className="form-control no-border" refs="Name" placeholder="Enter your Name ..." onChange={this.handleChange.bind(this, "Name")} value={this.state.fields["Name"]} />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="usr"> E-mail:</label>
                  <input type="text" className="form-control no-border" refs="Email" placeholder="Enter your E-mail ..." onChange={this.handleChange.bind(this, "Email")} value={this.state.fields["Email"]} />
                </div>
                <div className="col-sm-12 abc">
                  <label htmlFor="usr"> Message:</label>
                  <input type="text" className="form-control no-border " refs="Message" placeholder="Enter your Message ..."  onChange={this.handleChange.bind(this, "Message")} value={this.state.fields["Message"]}/>
                </div>
              </form>
              <h5 className="pull-right h4_heading"><span className="glyphicon glyphicon-envelope span1"></span> <input type="submit" className="btn btn-default" value="Send Message" onClick={() => this.contactSubmit()}></input></h5>
            </div>
          </div>
        </div>
      )
  }
}

export default Div_No_6;