import React, { Component } from 'react';
import PracticalExperience from './components/practicalexperience';
import EducationalExperience from './components/educationalexperience';
import GeneralInfo from './components/generalinfo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        name: '',
        email: '',
        phone: '',
      }

    }
  }

  handleChange = (e) => {
    this.setState({
      info: {
        ...this.state.info,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>CV Application Input</h1>
          <GeneralInfo handleChange={this.handleChange} info={this.state.info}/><br></br>
          <EducationalExperience /><br></br>
          <PracticalExperience /><br></br>
        </div>
      </div>
    );
  }
}

export default App;