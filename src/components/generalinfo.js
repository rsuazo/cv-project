import React, { Component } from 'react';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>General Information</h2>
        <form id="form_generalInfo">
          <label htmlFor="name">Name</label><br></br>
          <input type="text" id="name" name="name" onChange={this.props.handleChange} ></input><br></br>
          <label htmlFor="email">Email</label><br></br>
          <input type="email" id="email" name="email" onChange={this.props.handleChange}></input><br></br>
          <label htmlFor="phone">Phone Number</label><br></br>
          <input type="tel" id="phone" name="phone"onChange={this.props.handleChange}></input><br></br><br></br>
          <button type="submit">Submit</button>
        </form>

        <div>
          <h1>CV Application Output</h1>
          <label>Name: </label>
          <div>
            {this.props.info.name}
          </div>
          <label>Email: </label>
          <div>
            {this.props.info.email}
          </div>
          <label>Phone: </label>
          <div>
            {this.props.info.phone}
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;