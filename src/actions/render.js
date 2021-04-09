import { getClients } from '../api';
import { itemsToRender } from '../templates';
import { NotFound } from '../templates/NotFound';
import { ClientLine } from '../templates/ClientLine';
import { store } from '../store';
import { tooltipsInit } from './tooltipsInit';

export const render = (selector, component) => document.querySelector(`${selector}`).innerHTML = component;

export const renderAllClients = () => {
  getClients()
    .then(() => {
      render('.clients-list', itemsToRender(store.clients, ClientLine));
      tooltipsInit(store);
    })
    .catch(() => {
      render('.clients-list', NotFound());
    });
};
