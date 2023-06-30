import css from './App.module.css';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { getContacts } from 'Redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

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
      <ContactForm />
      <h2 className={css.contacts__app}>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <p>Your phonebook is empty. Add first contact!</p>
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
