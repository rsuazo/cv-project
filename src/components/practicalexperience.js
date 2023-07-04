import React, { Component } from 'react';

class PracticalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
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
    const { companyName, positionTitle, responsibilities, startDate, endDate, edit } = this.state;
    return (
      <div>
        <h2>Personal Information</h2>
        <h3>{companyName ? companyName : 'Company Name'}</h3>
        <h3>{positionTitle ? positionTitle : 'Positition Title'}</h3>
        <h3>{responsibilities ? responsibilities : 'Responsibilities'}</h3>
        <h3>{startDate ? startDate : 'Start Date'}</h3>
        <h3>{endDate ? endDate : 'End Date'}</h3>
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
          <form name="form_practicalExperience">
            <input type="text" id="company_name" name="companyName" placeholder='Company Name' onChange={this.handleChange}></input><br></br>
            <input type="text" id="position_title" name="positionTitle" placeholder='Position Title' onChange={this.handleChange}></input><br></br>
            <input type="text" id="responsibilities" name="responsibilities" placeholder='Responsibilities' onChange={this.handleChange}></input><br></br>
            <input type="date" id="start_date" name="startDate" placeholder='Start Date' onChange={this.handleChange}></input><br></br>
            <input type="date" id="end_date" name="endDate" placeholder='End Date' onChange={this.handleChange}></input><br></br>
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

export default PracticalExperience;