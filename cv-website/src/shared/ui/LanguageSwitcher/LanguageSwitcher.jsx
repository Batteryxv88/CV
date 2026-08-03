import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import i18n from '../../config/i18n-setup';
import './LanguageSwitcher.css';

export const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentLang = i18n.language || 'ru';

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button
        className={`language-switcher__btn ${currentLang === 'ru' ? 'language-switcher__btn--active' : ''}`}
        onClick={() => changeLanguage('ru')}
      >
        RU
      </button>
      <span className="language-switcher__separator">/</span>
      <button
        className={`language-switcher__btn ${currentLang === 'en' ? 'language-switcher__btn--active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
};
