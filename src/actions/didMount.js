import { store } from '../store';
import { render, renderAllClients } from '../actions/render';
import { Loader } from '../templates/Loader';
import { newClientModalOPen } from './newClientModalOPen';
import { onDelete } from './onDelete';
import { onEdit } from './onEdit';


const DOMContentLoaded = () => {
  render('.clients-list', Loader());
  renderAllClients();
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
      onDelete(e);
    }
    if (e.target.classList.contains('edit')) {
      onEdit(e);
    }
  })
}

