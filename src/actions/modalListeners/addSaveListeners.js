import { clearAlert } from '../formValidation';
import { closeModal, addExtraContact, onSave, clearAddContact } from './index';
import { store } from '../../store';

export const addSaveListeners = () => {
  console.log('addSaveListeners', store)
  document.querySelector('.modal').addEventListener('click', clickButtonListeners);
  store.actions['clickButtonListeners'] = clickButtonListeners;
}

const clickButtonListeners = (e) => {
  e.preventDefault();
    const target = e.target.classList;
    if (target.contains('close')) {
      closeModal();
    } else if (target.contains('btn__add-contact')) {
      addExtraContact(e);
    } else if (target.contains('add-social__btn-clear')) {
      clearAddContact(e);
    } else if (target.contains('alert')) {
      clearAlert(e);
    } else if (target.contains('btn__save-client')) {
      onSave(e);
    }
}






