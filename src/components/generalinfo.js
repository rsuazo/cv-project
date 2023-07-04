import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
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
    const { name, email, phone, edit } = this.state;
    return (
      <div>
        <h2>Personal Information</h2>
        <h3>{name ? name : 'Your name'}</h3>
        <h3>{email ? email : 'Email'}</h3>
        <h3>{phone ? phone : 'Phone'}</h3>
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
          <form id="form_generalInfo">
            <input type="text" id="name" name="name" onChange={this.handleChange} placeholder="Name" ></input><br></br>
            <input type="email" id="email" name="email" onChange={this.handleChange} placeholder="Email"></input><br></br>
            <input type="tel" id="phone" name="phone"onChange={this.handleChange} placeholder="Phone"></input><br></br><br></br>
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

export default GeneralInfo;