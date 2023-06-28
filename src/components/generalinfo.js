import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>General Information</h2>
        <form>
          <label for="name">Name</label><br></br>
          <input type="text" id="name" name="name"></input><br></br>
          <label for="email">Email</label><br></br>
          <input type="email" id="email" name="email"></input><br></br>
          <label for="phone">Phone Number</label><br></br>
          <input type="tel" id="phone" name="phone"></input><br></br>
        </form>
      </div>
    );
  }
}

export default GeneralInfo;