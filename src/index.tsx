import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

const Setting = {
  CardHotelCount: 5
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cardHotelCount={Setting.CardHotelCount} />
  </React.StrictMode>
);
