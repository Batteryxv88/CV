import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThemeToggle from '../../features/theme/ui/ThemeToggle';
import LanguageSwitcher from '../../features/language/ui/LanguageSwitcher';
import { getTranslation } from '../../shared/lib/getTranslation';

const Header = () => {
  const location = useLocation();
  const lang = useSelector((state) => state.language.value);

  const navItems = [
    { path: '/', label: getTranslation(lang, 'nav.home') },
    { path: '/blog', label: getTranslation(lang, 'nav.blog') },
    { path: '/error-codes', label: getTranslation(lang, 'nav.errorCodes') },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          CV
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
