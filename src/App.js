import React, { Component } from 'react';
import PracticalExperience from './components/practicalexperience';
import EducationalExperience from './components/educationalexperience';
import GeneralInfo from './components/generalinfo';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>CV Application</h1>
        <GeneralInfo /><br></br>
        <EducationalExperience /><br></br>
        <PracticalExperience /><br></br>
      </div>
    );
  }
}

export default App;