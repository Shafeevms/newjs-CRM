import { store } from '../store';
import { render, renderAllClients } from '../actions/render';
import { Loader } from '../templates/Loader';
import { createClient } from './clientActions/createClient';
import { removeClient } from './clientActions/removeClient';
import { editClient } from './clientActions/editClient';
import { sortBy, sortByString, sortByTime, onSearch } from '../actions/filters';

export const didMount = () => {
  document.addEventListener('DOMContentLoaded', DOMContentLoaded);
  store.actions['DOMContentLoaded'] = DOMContentLoaded;
};

const DOMContentLoaded = () => {
  render('.clients-list', Loader());
  renderAllClients();
  addGlobalListeners();
};

export const addGlobalListeners = () => {
  const input = document.querySelector('.header__input');
  input.addEventListener('input', onSearch);
  document.querySelector('.body').addEventListener('click', (e) => {
    const target = e.target.dataset.action;
    switch (target) {
      case 'add-client':
        createClient(e);
        break;
      case 'delete-client':
        removeClient(e);
        break;
      case 'edit-client':
        editClient(e);
        break;
        // сортировка:
      case 'sortID':
        sortBy('id');
        arrowRotate(e, 'id');
        break;
      case 'sortName':
        sortByString('surname');
        arrowRotate(e, 'surname');
        break;
      case 'createdAt':
        sortByTime('createdAt');
        arrowRotate(e, 'createdAt');
        break;
      case 'updatedAt':
        sortByTime('updatedAt');
        arrowRotate(e, 'updatedAt');
        break;
    }
  });
};

const arrowRotate = (e, name) => {
  const { sortedBy } = store;
  const parent = e.target.parentElement;
  sortedBy[name] === 'reverse'
  ? parent.querySelector('img').classList.add('rotate')
  : parent.querySelector('img').classList.remove('rotate');
};
