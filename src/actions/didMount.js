import { store } from '../store';
import { render } from '../actions/render';
import { Loader } from '../templates/Loader';
import { getClients } from '../api/api';
import { itemsToRender } from '../templates';
import { newClientModalOPen } from './newClientModalOPen';
import { ClientLine } from '../templates/ClientLine';

const DOMContentLoaded = () => {
  render('.clients-list', Loader());
  getClients().then(() => render('.clients-list', itemsToRender(store.clients, ClientLine)));
}

export const didMount = () => {
  document.addEventListener("DOMContentLoaded", DOMContentLoaded);
  store.actions['DOMContentLoaded'] = DOMContentLoaded;
  document.querySelector('.btn-add').addEventListener('click', newClientModalOPen);
}
