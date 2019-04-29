import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Event extends Component {
    constructor(props){
        super(props);
        this.state = {
            startDate: new Date()
          };
          this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
          startDate: date
        });
      }

    render(){
        const {onInputChange, onRouteChange} = this.props;
    return(
    <article className="mw6 center br3 pa3 pa4-ns mv5 ba b--black-10 shadow-5">
        <main className="pa4 black-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Create Event</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="Title">Title</label>
                    <input 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                        type="text" 
                        name="Title"  
                        id="Title"
                        onChange = {onInputChange} 
                        />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="Date">Date</label>
                    <DatePicker selected={this.state.startDate}
                        onChange={this.handleChange} 
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Date"  id="Date" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="Time">Time</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Time"  id="Time" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="Address">Address</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Address"  id="Address" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="Image">Image</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="Image"  id="Image" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="Description">Description</label>
                    <textarea className="pa2 input-reset ba b--dark-gray bg-transparent hover-bg-black  hover-white w-100" type="text" name="Description"  id="Description" />
                </div>
                </fieldset>
                <div className="">
                <input onClick={() => onRouteChange('eventlist')} 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Create" />
                </div>
            </div>
        </main>
    </article>
    );
    }
    
}

export default Event;