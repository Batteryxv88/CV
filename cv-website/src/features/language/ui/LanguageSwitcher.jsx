import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../model/languageSlice';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.value);

  const handleLanguageChange = (newLang) => {
    dispatch(setLanguage(newLang));
  };

  return (
    <div className="language-switcher">
      <button
        className={lang === 'ru' ? 'active' : ''}
        onClick={() => handleLanguageChange('ru')}
      >
        RU
      </button>
      <button
        className={lang === 'en' ? 'active' : ''}
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
