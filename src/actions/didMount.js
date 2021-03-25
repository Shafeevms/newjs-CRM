import { store } from '../store';
import { render, renderAllClients } from '../actions/render';
import { Loader } from '../templates/Loader';
import { newClientModalOPen } from './newClientModalOPen';
import { onEdit } from './onEdit';
import { removeClient } from './removeClient';


const DOMContentLoaded = () => {
  render('.clients-list', Loader());
  renderAllClients();
  addGlobalListeners();
}

export const didMount = () => {
  document.addEventListener("DOMContentLoaded", DOMContentLoaded);
  store.actions['DOMContentLoaded'] = DOMContentLoaded;

}

export const addGlobalListeners = () => {
  document.querySelector('.body').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-add')) {
      newClientModalOPen(e);
    }
    if (e.target.classList.contains('cancel')) {
      removeClient(e);
    }
    if (e.target.classList.contains('edit')) {
      onEdit(e);
    }
    if (e.target.classList.contains('head__title-id')) {
      console.log('sort by id')
    }

  })
}

