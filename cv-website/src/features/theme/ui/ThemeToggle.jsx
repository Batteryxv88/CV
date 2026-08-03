import './ThemeToggle.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../model/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button className="theme-toggle" onClick={handleToggle} aria-label="Toggle theme">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
