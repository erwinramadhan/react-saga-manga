import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import globalStore from "./redux/store"
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);