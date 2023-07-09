import React, { useState } from 'react';

const PracticalExperience = () => {

  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [edit, setEdit] = useState(false);

  const updateCompanyName = (e) => {
    setCompanyName(e.target.value);
  }
  
  const updatePositionTitle = (e) => {
    setPositionTitle(e.target.value);
  }

  const updateResponsibilities = (e) => {
    setResponsibilities(e.target.value);
  }

  const updateStartDate = (e) => {
    setStartDate(e.target.value);
  }

  const updateEndDate = (e) => {
    setEndDate(e.target.value);
  }
  
  const toggleEdit = (e) => {
    setEdit(!edit);
  }

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
            onClick={toggleEdit}
        >
          Edit
        </button>
      }

      {edit && 
        <form name="form_practicalExperience">
          <input type="text" id="company_name" name="companyName" placeholder='Company Name' onChange={updateCompanyName}></input><br></br>
          <input type="text" id="position_title" name="positionTitle" placeholder='Position Title' onChange={updatePositionTitle}></input><br></br>
          <input type="text" id="responsibilities" name="responsibilities" placeholder='Responsibilities' onChange={updateResponsibilities}></input><br></br>
          <input type="date" id="start_date" name="startDate" placeholder='Start Date' onChange={updateStartDate}></input><br></br>
          <input type="date" id="end_date" name="endDate" placeholder='End Date' onChange={updateEndDate}></input><br></br>
          <button
              type="button"
              onClick={toggleEdit}
              className='close'
          >
            Close Edit
          </button>
        </form>
        
      }
    </div>
  );
}

export default PracticalExperience;