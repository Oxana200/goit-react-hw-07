import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleInputChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label htmlFor="search" className={s.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        value={filter}
        onChange={handleInputChange}
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;
