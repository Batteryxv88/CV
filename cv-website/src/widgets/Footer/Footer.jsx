import './Footer.css';
import { useSelector } from 'react-redux';
import { getTranslation } from '../../shared/lib/getTranslation';

const Footer = () => {
  const lang = useSelector((state) => state.language.value);

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 Ivan Petrov. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
