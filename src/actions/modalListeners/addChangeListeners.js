import { store } from "../../store";
import { clearAlert } from '../formValidation';
import { removeClient } from '../clientActions/removeClient';
import { closeModal, addExtraContact, clearAddContact, onSaveEdited } from './index.js';

export const addChangeListeners = () => {
  document.querySelector('.modal').addEventListener('click', clickButtonListeners);
  store.actions['clickButtonListeners'] = clickButtonListeners;
}

const clickButtonListeners = (e) => {
  e.preventDefault();
  const target = e.target.classList;
  if (target.contains('close')) {
    closeModal();
  } else if (target.contains('btn__add-contact')) {
    addExtraContact();
  } else if (target.contains('add-social__btn-clear')) {
    clearAddContact(e);
  } else if (target.contains('alert')) {
    console.log('clear alert')
    clearAlert(e);
  } else if (target.contains('btn__save-client')) {
    onSaveEdited(e);
  } else if (e.target.dataset.order === 'del') {
    document.querySelector('.modal').removeEventListener('click', clickButtonListeners);
    console.log('delete')
    removeClient(e);
  }
}
