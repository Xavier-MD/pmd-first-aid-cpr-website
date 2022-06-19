import { Suspense } from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import 'swiper/css/bundle';

import App from './App';
import './styles/index.css';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'querystring', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json'
    }
  });

const loadingMarkup = (
  <div className='py-4 text-center'>
    PMD First Aid & CPR
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
