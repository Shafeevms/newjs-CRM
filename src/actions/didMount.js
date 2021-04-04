import { store } from '../store';
import { render, renderAllClients } from '../actions/render';
import { Loader } from '../templates/Loader';
import { createClient } from './clientActions/createClient';
import { removeClient } from './clientActions/removeClient';
import { editClient } from './clientActions/editClient';
import { sortBy, sortByString, sortByTime } from '../actions/filters';

export const didMount = () => {
  document.addEventListener("DOMContentLoaded", DOMContentLoaded);
  store.actions['DOMContentLoaded'] = DOMContentLoaded;
}

const DOMContentLoaded = () => {
  render('.clients-list', Loader());
  renderAllClients();
  addGlobalListeners();
}

//! сделать функцию которая будет искать по фио и отрисовывать - должен собраться новый массив
//! если поле инпут будет пустым должны отрисоваться все клиенты
//! эту функцию вынести в filter.js
//? таймер убрать в стор?


let timerID;
export const addGlobalListeners = () => {
  const input = document.querySelector('.header__input');
  clearTimeout(timerID);
  input.addEventListener('input', () => {
    timerID = setTimeout(() => {
      console.log(input.value)
    }, 400);
  })

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
        break;
      case 'sortName':
        sortByString('surname');
        break;
      case 'createdAt':
        sortByTime('createdAt');
        break;
      case 'updatedAt':
        sortByTime('updatedAt');
        break;
    }
  })
}
