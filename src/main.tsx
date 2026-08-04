import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {HelmetProvider} from 'react-helmet-async';
import {CmsProvider} from './context/CmsContext';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <CmsProvider>
        <App />
      </CmsProvider>
    </HelmetProvider>
  </StrictMode>,
);


