import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      // Header
      "home": "Главная",
      "blog": "Блог",
      "error_codes": "Коды ошибок",
      
      // Home page
      "greeting": "Привет, я",
      "title": "Инженер по ремонту цифровых печатных машин",
      "about": "Обо мне",
      "experience": "Опыт работы",
      "skills": "Навыки",
      "contact": "Контакты",
      
      // Blog page
      "blog_title": "Блог о ремонте",
      "read_more": "Читать далее",
      "no_posts": "Постов пока нет",
      
      // Error codes page
      "error_codes_title": "Коды ошибок",
      "search_placeholder": "Поиск кода ошибки...",
      "error_code": "Код ошибки",
      "description": "Описание",
      "solution": "Решение",
      "personal_note": "Личное примечание",
      "no_errors": "Коды ошибок не найдены",
      
      // Theme
      "light_theme": "Светлая тема",
      "dark_theme": "Тёмная тема",
      
      // Languages
      "ru": "RU",
      "en": "EN"
    }
  },
  en: {
    translation: {
      // Header
      "home": "Home",
      "blog": "Blog",
      "error_codes": "Error Codes",
      
      // Home page
      "greeting": "Hello, I'm",
      "title": "Digital Printing Press Repair Engineer",
      "about": "About Me",
      "experience": "Experience",
      "skills": "Skills",
      "contact": "Contact",
      
      // Blog page
      "blog_title": "Repair Blog",
      "read_more": "Read more",
      "no_posts": "No posts yet",
      
      // Error codes page
      "error_codes_title": "Error Codes",
      "search_placeholder": "Search error code...",
      "error_code": "Error Code",
      "description": "Description",
      "solution": "Solution",
      "personal_note": "Personal Note",
      "no_errors": "No error codes found",
      
      // Theme
      "light_theme": "Light Theme",
      "dark_theme": "Dark Theme",
      
      // Languages
      "ru": "RU",
      "en": "EN"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
