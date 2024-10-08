import React, { useState } from 'react';
import AddContactForm from './AddContactForm';
import SearchBar from './SearchBar';
import ContactTable from './ContactTable';
import EditContactModal from './EditContactModal';

const ContactContainer = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ firstName: '', lastName: '', phone: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewContact({ ...newContact, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!newContact.firstName.trim() || !newContact.lastName.trim() || !newContact.phone.trim()) {
      alert("All fields are required.");
      return;
    }

    const contactWithId = { id: Date.now(), ...newContact };
    setContacts([...contacts, contactWithId]);
    setNewContact({ firstName: '', lastName: '', phone: '' });
  }

  function handleDelete(id) {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  }

  function handleEdit(contact) {
    setCurrentContact(contact);
    setEditModalOpen(true);
  }

  function updateContact(updatedContact) {
    setContacts(contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    ));
    setEditModalOpen(false);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredContacts = contacts.filter(contact =>
    contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  return (
    <>
      <AddContactForm
        contact={newContact}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
      />

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <ContactTable contacts={filteredContacts} onDelete={handleDelete} onEdit={handleEdit} />

      {isEditModalOpen && (
        <EditContactModal
          contact={currentContact}
          updateContact={updateContact}
          closeModal={() => setEditModalOpen(false)}
        />
      )}
    </>
  );
}

export default ContactContainer;
