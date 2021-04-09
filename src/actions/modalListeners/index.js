import { store } from '../../store';
import { render } from '../render';

export const showModal = (component) => {
  render('.modal__body', component);
  document.querySelector('.modal').classList.remove('d-none');
};

export const closeModal = () => {
  document.querySelector('.modal').classList.add('d-none');
  document.querySelector('.add-social').removeEventListener('input', addClearInputButton);
  document.querySelector('.modal').removeEventListener('click', store.actions.clickButtonListeners);
  delete store.actions['clickButtonListeners'];
  delete store.currentClient;
  render('.modal__body', '');
};

export const getClientId = e => {
  const parent = e.target.closest('ul');
  return parent.querySelector('.client__title-id').innerHTML;
};


export const createClientObj = () => {
  const qs = (field) => document.querySelector(field).value;
  const { currentClient } = store;
  const newClientContacts = Array.from(document.querySelectorAll('.add-social__item'));

  store.currentClient = {
    ...currentClient,
    name: qs('#name'),
    surname: qs('#surname'),
    lastName: qs('#lastname'),
    contacts: newClientContacts.map(el => ({
      type: el.querySelector('.add-social-select').value,
      value: el.querySelector('.add-social__input').value
    })),
  };
};

export const addClearInputButton = (ev) => {
  if (ev.target.classList.contains('add-social__input')) {
    ev.target.value.length !== 0
      ? ev.target.nextElementSibling.classList.remove('d-none')
      : ev.target.nextElementSibling.classList.add('d-none');
  }
};
