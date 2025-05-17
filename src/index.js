import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
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
    fallbackLng: 'fr',
    detection: {
      order: ['cookie', 'querystring', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json'
    }
  });

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log('PMD Premiers Soins & RCR | PMD First Aid & CPR ');
  });
  return <App />;
}


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<AppWithCallbackAfterRender />);
