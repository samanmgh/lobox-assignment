// import React from 'react'
import {I18nextProvider} from 'react-i18next';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {store} from './utiles/store'
import {Provider} from 'react-redux'
import i18next from "./utiles/i18n/config.ts";
import './utiles/styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
    // <React.StrictMode>
    <I18nextProvider i18n={i18next}>
        <Provider store={store}>
            <App/>
        </Provider>
    </I18nextProvider>
    // </React.StrictMode>,
);
