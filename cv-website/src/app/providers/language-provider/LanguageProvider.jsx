import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import i18n from '../../../shared/i18n/i18n';

export const LanguageProvider = ({ children }) => {
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <>{children}</>;
};
