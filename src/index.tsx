import React from 'react';
import ReactDOM from 'react-dom/client';
import { StarState } from './context/StarState';
import { AppRouter } from './routes/AppRoutes';

import "./styles/base/base.css";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;800&display=swap');
</style>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StarState>
      <AppRouter />
    </StarState>
  </React.StrictMode>
);
