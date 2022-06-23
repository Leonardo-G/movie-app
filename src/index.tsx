import React from 'react';
import ReactDOM from 'react-dom/client';
import { FilterState } from './context/FilterState';
import { AppRouter } from './routes/AppRoutes';

import "./styles/base/base.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FilterState>
      <AppRouter />
    </FilterState>
  </React.StrictMode>
);
