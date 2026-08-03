import { useState, useSelector } from 'react-redux';
import './ErrorCodes.css';
import { getTranslation } from '../../shared/lib/getTranslation';

const errorCodesData = [
  {
    code: 'E001',
    description: {
      ru: 'Ошибка блока питания',
      en: 'Power supply unit error',
    },
    serviceManual: {
      ru: 'Проверьте подключение питания и замените блок при необходимости.',
      en: 'Check power connection and replace unit if necessary.',
    },
    personalNote: {
      ru: 'Часто проблема в окисленных контактах. Почистите перед заменой.',
      en: 'Often the issue is oxidized contacts. Clean before replacing.',
    },
  },
  {
    code: 'E002',
    description: {
      ru: 'Ошибка двигателя главного привода',
      en: 'Main drive motor error',
    },
    serviceManual: {
      ru: 'Проверьте ремень привода и двигатель на наличие повреждений.',
      en: 'Check drive belt and motor for damage.',
    },
    personalNote: null,
  },
  {
    code: 'E003',
    description: {
      ru: 'Ошибка термоблока',
      en: 'Fuser unit error',
    },
    serviceManual: {
      ru: 'Проверьте температуру термоблока и термопредохранитель.',
      en: 'Check fuser temperature and thermal fuse.',
    },
    personalNote: {
      ru: 'Замените термопасту для лучшего теплоотвода.',
      en: 'Replace thermal paste for better heat dissipation.',
    },
  },
  {
    code: 'E010',
    description: {
      ru: 'Ошибка лазера',
      en: 'Laser unit error',
    },
    serviceManual: {
      ru: 'Проверьте подключение лазерного блока и его чистоту.',
      en: 'Check laser unit connection and cleanliness.',
    },
    personalNote: null,
  },
];

const ErrorCodes = () => {
  const lang = useSelector((state) => state.language.value);
  const t = (path) => getTranslation(lang, path);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCodes = errorCodesData.filter(
    (item) =>
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description[lang].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="error-codes">
      <h1>{t('errorCodes.title')}</h1>
      
      <div className="search-container">
        <input
          type="text"
          placeholder={t('errorCodes.searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="error-codes-grid">
        {filteredCodes.map((item) => (
          <div key={item.code} className="error-card">
            <div className="error-header">
              <span className="error-code">{item.code}</span>
              <span className="error-description">{item.description[lang]}</span>
            </div>
            
            <div className="error-details">
              <div className="detail-section">
                <strong>{t('errorCodes.description')}:</strong>
                <p>{item.serviceManual[lang]}</p>
              </div>
              
              {item.personalNote && (
                <div className="detail-section personal">
                  <strong>{t('errorCodes.personalNote')}:</strong>
                  <p>{item.personalNote[lang]}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredCodes.length === 0 && (
        <p className="no-results">No results found</p>
      )}
    </div>
  );
};

export default ErrorCodes;
