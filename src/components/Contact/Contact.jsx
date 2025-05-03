import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaUser, FaPhone } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.contact}>
     <div>
        <p className={s.contactName}>
          <FaUser className={s.icon} /> {name}
        </p>
        <p className={s.contactNumber}>
          <FaPhone className={s.icon} /> {number}
        </p>
     </div>
      <button className={s.deleteButton} onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;



