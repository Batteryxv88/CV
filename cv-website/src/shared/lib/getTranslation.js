import { translations } from '../config/translations';

export const getTranslation = (lang, path) => {
  const keys = path.split('.');
  let result = translations[lang];
  
  for (const key of keys) {
    if (result && result[key] !== undefined) {
      result = result[key];
    } else {
      return translations['ru'][path.split('.').pop()] || path;
    }
  }
  
  return result || path;
};
