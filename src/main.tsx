import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSquareXTwitter, faDiscord, faTelegram } from '@fortawesome/free-brands-svg-icons';
import App from './App.tsx';
import './index.css';

// Add FontAwesome icons to library
library.add(faSquareXTwitter, faDiscord, faTelegram);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);