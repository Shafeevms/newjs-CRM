import { clearAlert } from '../formValidation';
import { closeModal, addExtraContact, onSave, socialContactOptions } from './index';
import { store } from '../../store';

export const addSaveListeners = () => {
  document.querySelector('.modal').addEventListener('click', clickButtonListeners);
  store.actions['clickButtonListeners'] = clickButtonListeners;
}

const clickButtonListeners = (e) => {
  e.preventDefault();
    const parent = e.target.closest('li');
    const target = e.target.classList;
    if (target.contains('close')) {
      closeModal();
    } else if (target.contains('btn__add-contact')) {
      addExtraContact(e);
    } else if (target.contains('add-social__btn-clear')) {
      parent.remove();
      socialContactOptions.pop();
      if (socialContactOptions.length === 0) {
        document.querySelector('.add-social').classList.add('d-none');
        document.querySelector('.add__contact').classList.remove('add__contact-padding');
      }
    } else if (target.contains('alert')) {
      clearAlert(e);
    } else if (target.contains('btn__save-client')) {
      onSave(e);
    }
}





