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
        <GeneralInfo />
        <EducationalExperience />
        <PracticalExperience />
      </div>
    );
  }
}

export default App;