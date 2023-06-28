import React, { Component } from 'react';

class PracticalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Practical Experience</h2>
        <form>
          <label for="company_name">Company Name</label><br></br>
          <input type="text" id="company_name" name="company_name"></input><br></br>
          <label for="position_title">Position Title</label><br></br>
          <input type="text" id="position_title" name="position_title"></input><br></br>
          <label for="responsibilities">Responsibilities</label><br></br>
          <input type="text" id="responsibilities" name="responsibilities"></input><br></br>
          <label for="start_date">Start Date</label><br></br>
          <input type="date" id="start_date" name="start_date"></input><br></br>
          <label for="end_date">End Date</label><br></br>
          <input type="date" id="end_date" name="end_date"></input><br></br>
        </form>
      </div>
    );
  }
}

export default PracticalExperience;