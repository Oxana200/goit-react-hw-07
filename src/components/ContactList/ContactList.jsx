import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button className={css.button} onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

