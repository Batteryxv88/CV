import { useSelector } from 'react-redux';
import './Home.css';
import { getTranslation } from '../../shared/lib/getTranslation';

const Home = () => {
  const lang = useSelector((state) => state.language.value);
  const t = (path) => getTranslation(lang, path);

  const skills = [
    'Диагностика неисправностей',
    'Ремонт электроники',
    'Настройка ПО',
    'Калибровка оборудования',
    'Обучение персонала',
    'Техническая поддержка',
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1>{t('home.title')}</h1>
        <p className="subtitle">{t('home.subtitle')}</p>
      </section>

      <section className="about">
        <h2>{t('home.about')}</h2>
        <p>{t('home.aboutText')}</p>
      </section>

      <section className="skills">
        <h2>{t('home.skills')}</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>{t('home.contact')}</h2>
        <div className="contact-info">
          <p>Email: ivan.petrov@example.com</p>
          <p>Phone: +7 (999) 123-45-67</p>
          <p>Location: Москва, Россия</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
