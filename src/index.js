import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.onload = (e) => {
  let form_generalInfo = document.getElementById("form_generalInfo");
  form_generalInfo.addEventListener("submit",(e) => {
    e.preventDefault();
  
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    
    console.log(name.value);
    console.log(email.value);
    console.log(phone.value);
    name.value='';
    email.value='';
    phone.value='';
  })
}
