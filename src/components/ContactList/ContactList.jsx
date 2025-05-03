import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={s.contactItem}>
          <Contact id={contact.id} name={contact.name} number={contact.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

