import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>General Information</h2>
        <form id="form_generalInfo">
          <label htmlFor="name">Name</label><br></br>
          <input type="text" id="name" name="name"></input><br></br>
          <label htmlFor="email">Email</label><br></br>
          <input type="email" id="email" name="email"></input><br></br>
          <label htmlFor="phone">Phone Number</label><br></br>
          <input type="tel" id="phone" name="phone"></input><br></br><br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;