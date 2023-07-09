import React, { useState } from 'react';

const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [edit, setEdit] = useState(false);

  const updateName = (e) => {
    setName(e.target.value);
  }
  
  const updateEmail = (e) => {
    setEmail(e.target.value);
  }

  const updatePhone = (e) => {
    setPhone(e.target.value);
  }

  const toggleEdit = (e) => {
    setEdit(!edit);
  }

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
            onClick={toggleEdit}
        >
          Edit
        </button>
      }

      {edit && 
        <form id="form_generalInfo">
          <input type="text" id="name" name="name" onChange={updateName} placeholder="Name" ></input><br></br>
          <input type="email" id="email" name="email" onChange={updateEmail} placeholder="Email"></input><br></br>
          <input type="tel" id="phone" name="phone"onChange={updatePhone} placeholder="Phone"></input><br></br><br></br>
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

export default GeneralInfo;