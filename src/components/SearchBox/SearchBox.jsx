import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, setNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.wrapper}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(setNameFilter(e.target.value))}
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;

