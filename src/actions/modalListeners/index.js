import { store } from "../../store";
import { ItemOfSocialContacts } from '../../templates/ItemOfSocialContacts';
import { renderAllClients } from "../render";
import { addClient } from '../../api/api';
import { inputValidation, alertValidation } from '../formValidation';

const { currentClient: { contacts } } = store;

export const closeModal = () => {
  document.querySelector('.modal').classList.add('d-none');
  document.querySelector('.modal').removeEventListener('click', store.actions['clickButtonListeners']);
  document.querySelector('.add-social').removeEventListener('input', addClearInputButton);
  delete store.currentClient;
}

export const addExtraContact = () => {
  const addLine = {
        type: 'tel',
        value: ''
      }
  store.currentClient = createClientObj();
  if (contacts.length < store.maxLength) {
    contacts.push(addLine);
    const li = document.createElement('li');
    li.classList.add('add-social__item');
    li.innerHTML = ItemOfSocialContacts();
    document.querySelector('.add-social').appendChild(li);
  }
  document.querySelector('.add-social').classList.remove('d-none');
  document.querySelector('.add__contact').classList.add('add__contact-padding');
  document.querySelector('.add-social').addEventListener('input', addClearInputButton);
}
// export const addExtraContact = () => {
//   const addLine = {
//     type: '',
//     value: ''
//   }
//   if (contacts.length <= store.maxLength) {
//     const li = document.createElement('li');
//     li.classList.add('add-social__item')
//     li.innerHTML = ItemOfSocialContacts();
//     document.querySelector('.add-social').appendChild(li);
//   }
//   document.querySelector('.add-social').classList.remove('d-none');
//   document.querySelector('.add__contact').classList.add('add__contact-padding');
//   document.querySelector('.add-social').addEventListener('input', addClearInputButton);
// }

export const onSave = (e) => {
  let newClient = createClientObj();
  const formValid = inputValidation(newClient);
  if (!formValid.isValid) {
    alertValidation(formValid, e);
  } else {
    addClient(newClient);
    renderAllClients();
    closeModal();
    document.querySelector('.modal').removeEventListener('click', store.actions['clickButtonListeners']);
  }
}

export const thisClientId = e => {
  const parent = e.target.closest('ul');
  if (!store.currentId) store.currentId = parent.querySelector('.client__title-id').innerHTML;
}

const addClearInputButton = (ev) => {
  if (ev.target.classList.contains('add-social__input')) {
    ev.target.value.length !== 0
    ? ev.target.nextElementSibling.classList.remove('d-none')
    : ev.target.nextElementSibling.classList.add('d-none')
  }
}

const createClientObj = () => {
  const newClient = {};
  const newClientContacts = document.querySelectorAll('.add-social__item');
  newClient.name = document.querySelector('#name').value;
  newClient.surname = document.querySelector('#surname').value;
  newClient.lastName = document.querySelector('#lastname').value;
  if (newClientContacts.length > 0) {
    newClient.contacts = Array.from(newClientContacts).map(el => {
      return {
        type: el.querySelector('.add-social-select').value,
        value: el.querySelector('.add-social__input').value
      }
    })
  } else newClient.contacts = [];
  return newClient;
}
