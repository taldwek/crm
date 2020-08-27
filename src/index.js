import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import {ClientsStore as clientsStore} from './stores/clientStore'

const ClientsStore = new clientsStore

const stores = { ClientsStore }

ReactDOM.render(
  <Provider {...stores}>
    <App />
</Provider>,
  document.getElementById('root')
);

