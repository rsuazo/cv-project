import React, { Component } from 'react';

class EducationalExperience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Educational Experience</h2>
        <form>
          <label for="school_name">School Name</label><br></br>
          <input type="text" id="school_name" name="school_name"></input><br></br>
          <label for="major">Major</label><br></br>
          <input type="text" id="major" name="major"></input><br></br>
          <label for="major_date">Date of Major</label><br></br>
          <input type="date" id="major_date" name="major_date"></input><br></br>
        </form>
      </div>
    );
  }
}

export default EducationalExperience;