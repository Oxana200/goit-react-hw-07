import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { FaUser, FaPhone } from 'react-icons/fa';
import s from './Contact.module.css';

const formatPhone = (number) => {
  return number.replace(/\s*(x|ext)\s*\d+$/i, '').trim();
};

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.contact}>
      <div>
        <p className={s.contactName}>
          <FaUser className={s.icon} /> {name}
        </p>
        <p className={s.contactNumber}>
  <FaPhone className={s.icon} /> {formatPhone(number)}
</p>

      </div>
      <button className={s.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
