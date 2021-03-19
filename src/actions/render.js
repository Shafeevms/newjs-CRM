import { getClients } from '../api/api';
import { itemsToRender } from '../templates';
import { ClientLine } from '../templates/ClientLine';
import { store } from '../store';
import { tooltipsInit } from './tooltipsInit';

export const render = (selector, component) => document.querySelector(`${selector}`).innerHTML = component;

export const renderAllClients = () => {
  getClients().then(() => render('.clients-list', itemsToRender(store.clients, ClientLine)))
              .then(() => tooltipsInit())
}
