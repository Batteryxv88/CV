import { Link, useLocation } from 'react-router-dom';
import { ThemeSwitcher } from '../../features/theme-switcher/ui/ThemeSwitcher';
import { LanguageSwitcher } from '../../features/language-switcher/ui/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import './Header.css';

export const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/blog', label: t('blog') },
    { path: '/error-codes', label: t('error_codes') },
  ];

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-text">CV</span>
        </Link>
        
        <nav className="nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};
