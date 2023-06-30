import React from 'react';
import { RiContactsFill } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.container}>
      <ul className={css.contact__ul}>
        {contacts.map(contact => (
          <li key={shortid.generate()} className={css.contact__list}>
            <RiContactsFill className={css.icon__contact} />
            {contact.name} : {contact.number}{' '}
            <button
              type="button"
              onClick={() => onDeleteContact(contact.id)}
              className={css.delete__contact}
            >
              <span className={css.icon__close}>
                <AiFillCloseCircle />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
