import React from 'react';

function AddContactForm({ contact, onInputChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={onInputChange}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContactForm;
