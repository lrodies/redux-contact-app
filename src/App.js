import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import ContactCard from './ContactCard/index';
import * as actionTypes from './actionTypes';
import contactActions from './contactActions';

function App() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const contactList = !contacts ? {} : contacts.map((contact) =>
    <li key={contact.telNum}><ContactCard contact={contact} /></li>
  );


  const [showForm, setShowForm] = React.useState(false);
  const [btnLabel, setBtnLabel] = React.useState("Add Contact");

  const handleAdd = () => {
    setShowForm(!showForm);
  }

  const createNewContact = () => {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const teleNum = document.getElementById("telenum").value;
    const newCtc = { fName: firstName, lName: lastName, telNum: teleNum };
    dispatch(contactActions.createContact(newCtc));
    setShowForm(false);
  }

  return (
    <div className="App">
      <div className="listDiv">
        <ul className="unstyledList">
          {contactList}
        </ul>
      </div>
      <button onClick={handleAdd}>{btnLabel}</button>
      {showForm && <div className="formContainer"><div className="formDiv">
        <table>
          <tr><h3>Add Contact</h3></tr>
          <tr><label className="flexTxt" >First Name : </label>
            <input type="text" id="fname" ></input></tr>
          <tr><label className="flexTxt">Last Name : </label>
            <input type="text" id="lname"></input></tr>
          <tr><label className="flexTxt" >Telephone : </label>
            <input type="text" id="telenum"></input></tr>
          <tr><button onClick={createNewContact}>Create</button></tr>
        </table>
      </div >
      </div>}
    </div >
  );
}

export default App;
