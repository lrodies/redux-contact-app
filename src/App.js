import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import ContactCard from './ContactCard/index';
import * as actionTypes from './actionTypes';

function App() {
  const contacts = useSelector((state) => state.contacts);
  const contactList = contacts.map((contact) =>
    <li key={contact.telNum}><ContactCard contact={contact} /></li>
  );

  const [showForm, setShowForm] = React.useState(false);

  const handleAdd = () => {
    // TODO make this 'open' an 'addContact' form
    console.log("Add clicked");
    displayForm();
  }

  const handleSubmit = () => {
    // TODO make this 'open' an 'addContact' form
    console.log("Add clicked in handleSubmit");
    displayForm();
  }

  // TODO func to add contact to store
  const addContact = () => {

  }
  const displayForm = () => {
    console.log("displayForm");
    return (
      <div>
        <form id="addContact">

          <label>First Name : </label>
          <input type="text"> </input>

          <label>Last Name : </label>
          <input type="text" ></input>

          <label>Telephone : </label>
          <input type="text"></input>

          <button>Create</button>
        </form>
      </div>
    );
  }
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>
        <ul className="unstyledList">
          {contactList}
        </ul>
      </div>
      <button
        aria-label="Add a contact"
        onClick={() => dispatch(actionTypes.OPEN)}
      ></button>
      <button onClick={handleAdd}>Add contact</button>
      <div>
        <h3>Add Contact Form</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
