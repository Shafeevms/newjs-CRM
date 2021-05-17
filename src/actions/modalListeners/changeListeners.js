import { clearAlert } from '../formValidation';
import { store } from '../../store';
import { removeClient } from '../clientActions/removeClient';
import { closeModal } from './index.js';
import { addExtraContact, clearAddContact } from './commonListeners.js';
import { render, renderAllClients } from '../render';
import { changeClient } from '../../api';
import { inputValidation, alertValidation } from '../formValidation';
import { createClientObj } from './index';
import { Loader } from '../../templates/Loader';

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
    clearAlert(e);
  } else if (target.contains('btn__save-client')) {
    onSaveEdited(e);
  } else if (e.target.dataset.order === 'del') {
    document.querySelector('.modal').removeEventListener('click', clickButtonListeners);
    removeClient(e);
  }
};

const onSaveEdited = (e) => {
  createClientObj();
  const { currentClient } = store;
  const formValid = inputValidation(currentClient);
  if (!formValid.isValid) {
    alertValidation(formValid, e);
  } else {
    document.querySelector('.modal').removeEventListener('click', store.actions['clickButtonListeners']);
    changeClient(currentClient).then(() => {
      closeModal();
      render('.clients-list', Loader());
      renderAllClients();
    });
  }
};

export default clickButtonListeners;
