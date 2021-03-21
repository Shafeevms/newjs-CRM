import { getClients } from '../api/api';
import { itemsToRender } from '../templates';
import { ClientLine } from '../templates/ClientLine';
import { store } from '../store';
import { tooltipsInit } from './tooltipsInit';
import { addGlobalListeners } from './didMount';


export const render = (selector, component) => document.querySelector(`${selector}`).innerHTML = component;

// export const renderAllClients = () => {
//   getClients().then(() => render('.clients-list', itemsToRender(store.clients, ClientLine)))
//               .then(() => tooltipsInit(store))
//               .then(() => console.log(store))
//               .then(addGlobalListeners)
// }

export const renderAllClients = () => {
  getClients().then(() => {
    console.log(store);
    render('.clients-list', itemsToRender(store.clients, ClientLine));
    tooltipsInit(store);
    addGlobalListeners();
  })
}
