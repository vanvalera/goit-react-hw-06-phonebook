  import React, { useState, useEffect } from 'react';
  import css from './App.module.css';
  import ContactForm from './ContactForm/ContactForm';
  import ContactList from './ContactList/ContactList';
  import Filter from './Filter/Filter';


  const phoneContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const App = () => {
    const [contacts, setContacts] = useState(()=> {
      return JSON.parse(window.localStorage.getItem('contacts')) ?? phoneContacts
    });
    const [filter, setFilter] = useState('');
    useEffect(() => {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (contact) => {
      const isDuplicate = contacts.some(
        (existingContact) =>
          existingContact.name.toLowerCase() === contact.name.toLowerCase()
      );

      if (isDuplicate) {
        alert(`Contact with name ${contact.name} already exists!`);
      } else {
        setContacts((prevContacts) => [...prevContacts, contact]);
      }
    };

    const handleChange = (e) => {
      setFilter(e.target.value);
    };

    const deleteContact = (contactId) => {
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      );
    };

    const getFilteredContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    };

    const filteredContacts = getFilteredContacts();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1 className={css.phonebook__app}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2 className={css.contacts__app}>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  };

  export default App