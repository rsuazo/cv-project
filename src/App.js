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
        <div>
          <h1>CV Application Input</h1>
          <GeneralInfo /><br></br>
          <EducationalExperience /><br></br>
          <PracticalExperience /><br></br>
        </div>
        <div>
          <h1>CV Application Output</h1>
          <GeneralInfo />
        </div>

      </div>
    );
  }
}

export default App;