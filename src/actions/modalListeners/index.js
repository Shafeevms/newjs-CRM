import { store } from "../../store";
import { ItemOfSocialContacts } from '../../templates/ItemOfSocialContacts';
import { renderAllClients } from "../render";
import { addClient,changeClient } from '../../api/api';
import { inputValidation, alertValidation } from '../formValidation';

export const closeModal = () => {
  document.querySelector('.modal').classList.add('d-none');
  document.querySelector('.modal').removeEventListener('click', store.actions['clickButtonListeners']);
  document.querySelector('.add-social').removeEventListener('input', addClearInputButton);
  document.querySelector('.modal').removeEventListener('click', store.actions['clickButtonListeners']);
  delete store.currentClient;
}

export const addExtraContact = () => {
  const { currentClient: { contacts } } = store;
  const addLine = {
        type: 'tel',
        value: ''
      }
  if (contacts?.length < store.maxLength) {
    contacts.push(addLine);
    const li = document.createElement('li');
    li.classList.add('add-social__item');
    li.innerHTML = ItemOfSocialContacts(contacts[contacts.length - 1]);
    document.querySelector('.add-social').appendChild(li);
  }
  document.querySelector('.add-social').classList.remove('d-none');
  document.querySelector('.add__contact').classList.add('add__contact-padding');
  document.querySelector('.add-social').addEventListener('input', addClearInputButton);
}

export const onSave = (e) => {
  let { currentClient} = store;
  createClientObj();
  const formValid = inputValidation(currentClient);
  if (!formValid.isValid) {
    alertValidation(formValid, e);
  } else {
    addClient(currentClient);
    renderAllClients();
    closeModal();
    document.querySelector('.modal').removeEventListener('click', store.actions['clickButtonListeners']);
  }
}

export const onSaveEdited = (e) => {
  let { currentClient} = store;
  createClientObj();
  const formValid = inputValidation(currentClient);
  if (!formValid.isValid) {
    alertValidation(formValid, e);
  } else {
    document.querySelector('.modal').removeEventListener('click', store.actions['clickButtonListeners']);
    changeClient(currentClient).then(() => {
      renderAllClients();
      closeModal();
    })
  }
}

export const thisClientId = e => {
  const parent = e.target.closest('ul');
  store.currentId = parent.querySelector('.client__title-id').innerHTML;
}

const addClearInputButton = (ev) => {
  if (ev.target.classList.contains('add-social__input')) {
    ev.target.value.length !== 0
    ? ev.target.nextElementSibling.classList.remove('d-none')
    : ev.target.nextElementSibling.classList.add('d-none')
  }
}

const createClientObj = () => {
  let { currentClient} = store;
  const newClientContacts = document.querySelectorAll('.add-social__item');
  currentClient.name = document.querySelector('#name').value;
  currentClient.surname = document.querySelector('#surname').value;
  currentClient.lastName = document.querySelector('#lastname').value;
  if (newClientContacts.length > 0) {
    currentClient.contacts = Array.from(newClientContacts).map(el => {
      return {
        type: el.querySelector('.add-social-select').value,
        value: el.querySelector('.add-social__input').value
      }
    })
  } else currentClient.contacts = [];
}

export const clearAddContact = (e) => {
  const { currentClient: { contacts } } = store;
  const parent = e.target.closest('li');
  contacts.pop();
  parent.remove();
  if (contacts.length === 0) {
    document.querySelector('.add-social').classList.add('d-none');
    document.querySelector('.add__contact').classList.remove('add__contact-padding');
  }

}
