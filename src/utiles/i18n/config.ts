import i18next from 'i18next';
import {initReactI18next} from 'react-i18next'
import enLang from './langs/en.json';
import faLang from './langs/fa.json';

i18next.use(initReactI18next).init({
    lng: 'fa',
    resources: {
        fa: {
            translation: faLang
        },
        en: {
            translation: enLang
        },
    },
    keySeparator: ':',
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;
