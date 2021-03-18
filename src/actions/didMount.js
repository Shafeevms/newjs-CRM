import { store } from '../store';
import { render, renderAllClients } from '../actions/render';
import { Loader } from '../templates/Loader';
import { newClientModalOPen } from './newClientModalOPen';

const DOMContentLoaded = () => {
  render('.clients-list', Loader());
  renderAllClients();
}

export const didMount = () => {
  document.addEventListener("DOMContentLoaded", DOMContentLoaded);
  store.actions['DOMContentLoaded'] = DOMContentLoaded;
  document.querySelector('.btn-add').addEventListener('click', newClientModalOPen);
}
