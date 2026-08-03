import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../model/languageSlice';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

export const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const { i18n } = useTranslation();

  const handleToggle = () => {
    const newLang = language === 'ru' ? 'en' : 'ru';
    dispatch(setLanguage(newLang));
    i18n.changeLanguage(newLang);
  };

  return (
    <button className="language-switcher" onClick={handleToggle}>
      {language === 'ru' ? 'EN' : 'RU'}
    </button>
  );
};
