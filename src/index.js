import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import { ClientStore as clientStore } from './stores/clientStore'
import { AppStore as appStore } from './stores/appStore'

const ClientStore = new clientStore()
const AppStore = new appStore()

const stores = { ClientStore, AppStore }

ReactDOM.render(
  <Provider {...stores}>
    <App />
</Provider>,
  document.getElementById('root')
);

