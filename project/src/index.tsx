import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { store } from './store';
import {fetchOffersAction, checkAuthAction, fetchFavoritesAction} from './store/api-actions';
import App from './components/app/app';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchFavoritesAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>
);
