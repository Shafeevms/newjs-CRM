import { clearAlert } from '../formValidation';
import { closeModal } from './index';
import { addExtraContact, clearAddContact } from './commonListeners.js';
import { renderAllClients } from '../render';
import { addClient } from '../../api';
import { inputValidation, alertValidation } from '../formValidation';
import { store } from '../../store';
import { createClientObj } from './index';

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
};

const onSave = (e) => {
  createClientObj();
  const { currentClient } = store;
  const formValid = inputValidation(currentClient);
  if (!formValid.isValid) {
    alertValidation(formValid, e);
  } else {
    addClient(currentClient);
    renderAllClients();
    closeModal();
    document.querySelector('.modal').removeEventListener('click', store.actions['clickButtonListeners']);
  }
};

export default clickButtonListeners;
