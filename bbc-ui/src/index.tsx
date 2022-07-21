import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript } from '@chakra-ui/react';

import { store } from './app/store';
import App from './App';
import customTheme from './app/styles/customTheme';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
