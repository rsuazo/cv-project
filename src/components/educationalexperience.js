import React, { useState } from 'react';

const EducationalExperience = () => {

  const [schoolName, setSchoolName] = useState('');
  const [major, setMajor] = useState('');
  const [majorDate, setMajorDate] = useState('');
  const [edit, setEdit] = useState('');

  const updateSchoolName = (e) => {
    setSchoolName(e.target.value);
  }
  
  const updateMajor = (e) => {
    setMajor(e.target.value);
  }

  const updateMajorDate = (e) => {
    setMajorDate(e.target.value);
  }

  const toggleEdit = (e) => {
    setEdit(!edit);
  }

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
            onClick={toggleEdit}
        >
          Edit
        </button>
      }

      {edit && 
        <form name="form_educationalExperience">
          <input type="text" id="school_name" name="schoolName" placeholder="School Name" onChange={updateSchoolName}></input><br></br>
          <input type="text" id="major" name="major" placeholder='Major' onChange={updateMajor}></input><br></br>
          <input type="date" id="major_date" name="majorDate" placeholder="Date of Major" onChange={updateMajorDate}></input><br></br>
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

export default EducationalExperience;