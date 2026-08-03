import { useSelector } from 'react-redux';
import './Blog.css';
import { getTranslation } from '../../shared/lib/getTranslation';

const blogPosts = [
  {
    id: 1,
    title: { ru: 'Диагностика ошибок печати', en: 'Print Error Diagnostics' },
    excerpt: {
      ru: 'Основные методы выявления проблем с качеством печати на цифровых машинах.',
      en: 'Key methods for identifying print quality issues on digital presses.',
    },
    date: '2024-01-15',
    readTime: { ru: '5 мин', en: '5 min' },
  },
  {
    id: 2,
    title: { ru: 'Замена блока проявки', en: 'Developer Unit Replacement' },
    excerpt: {
      ru: 'Пошаговая инструкция по замене блока проявки на моделях Xerox и Canon.',
      en: 'Step-by-step guide for replacing the developer unit on Xerox and Canon models.',
    },
    date: '2024-01-10',
    readTime: { ru: '8 мин', en: '8 min' },
  },
  {
    id: 3,
    title: { ru: 'Калибровка цвета', en: 'Color Calibration' },
    excerpt: {
      ru: 'Как правильно калибровать цветовую гамму для точной цветопередачи.',
      en: 'How to properly calibrate color gamut for accurate color reproduction.',
    },
    date: '2024-01-05',
    readTime: { ru: '6 мин', en: '6 min' },
  },
];

const Blog = () => {
  const lang = useSelector((state) => state.language.value);
  const t = (path) => getTranslation(lang, path);

  return (
    <div className="blog">
      <h1>{t('blog.title')}</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <h2>{post.title[lang]}</h2>
            <p className="blog-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime[lang]}</span>
            </p>
            <p className="blog-excerpt">{post.excerpt[lang]}</p>
            <button className="read-more-btn">
              {t('blog.readMore')} →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
