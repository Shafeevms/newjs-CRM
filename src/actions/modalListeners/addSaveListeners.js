import { clearAlert } from '../formValidation';
import { closeModal, addExtraContact, onSave } from './index';
import { store } from '../../store';

const { currentClient: { contacts } } = store;

export const addSaveListeners = () => {
  console.log('addSaveListeners')
  document.querySelector('.modal').addEventListener('click', clickButtonListeners);
  store.actions['clickButtonListeners'] = clickButtonListeners;
}

const clickButtonListeners = (e) => {
  e.preventDefault();
  const { currentClient: { contacts } } = store;
    const parent = e.target.closest('li');
    const target = e.target.classList;
    if (target.contains('close')) {
      closeModal();
    } else if (target.contains('btn__add-contact')) {
      addExtraContact(e);
    } else if (target.contains('add-social__btn-clear')) {
      parent.remove();
      if (contacts.length === 0) {
        document.querySelector('.add-social').classList.add('d-none');
        document.querySelector('.add__contact').classList.remove('add__contact-padding');
      }
    } else if (target.contains('alert')) {
      clearAlert(e);
    } else if (target.contains('btn__save-client')) {
      onSave(e);
    }
}






