import React, { Component } from 'react';

class EducationalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      major: '',
      majorDate: '',
      edit: false
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    })
  }

  toggleEdit = (e) => {
    this.setState(
      prevState => ({
        edit: !prevState.edit
      })
    )
  }

  render() {
    const { schoolName, major, majorDate, edit } = this.state;

    return (
      <div>
        <h2>Educational Experience</h2>
        <h3>{schoolName ? schoolName : 'School Name'}</h3>
        <h3>{major ? major : 'Major'}</h3>
        <h3>{majorDate ? majorDate : 'Major Date'}</h3>
        {!edit &&
          <button
              className="edit-toggle"
              type="button"
              onClick={this.toggleEdit}
          >
            Edit
          </button>
        }

        {edit && 
          <form name="form_educationalExperience">
            <input type="text" id="school_name" name="schoolName" placeholder="School Name" onChange={this.handleChange}></input><br></br>
            <input type="text" id="major" name="major" placeholder='Major' onChange={this.handleChange}></input><br></br>
            <input type="date" id="major_date" name="majorDate" placeholder="Date of Major" onChange={this.handleChange}></input><br></br>
            <button
                type="button"
                onClick={this.toggleEdit}
                className='close'
            >
              Close Edit
            </button>
          </form>
        }
      </div>
    );
  }
}

export default EducationalExperience;