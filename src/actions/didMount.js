import { store } from '../store';
import { render } from '../actions/render';
import { Loader } from '../templates/Loader';
import { getClients } from '../api/api';
import { itemsToRender } from '../templates';
import { newClientModalOPen } from './newClientModalOPen';
import { ClientLine } from '../templates/ClientLine';

const DOMContentLoaded = () => {
  render('.clients-list', Loader());
  renderAllClients();
  console.log(store.clients)
}

export const didMount = () => {
  document.addEventListener("DOMContentLoaded", DOMContentLoaded);
  store.actions['DOMContentLoaded'] = DOMContentLoaded;
  document.querySelector('.btn-add').addEventListener('click', newClientModalOPen);
}

export const renderAllClients = () => {
  getClients().then(() => render('.clients-list', itemsToRender(store.clients, ClientLine))).then(console.log(store.clients))

}
