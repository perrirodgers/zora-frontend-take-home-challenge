import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import rootReducer from './common/store/root-reducer';
import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer: rootReducer, middleware: [thunk] }); // redux store configuration
const persistor = persistStore(store); // for persist store

root.render(
  // <React.StrictMode>

  // store provider to access redux state data
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor} >
      <App />
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
