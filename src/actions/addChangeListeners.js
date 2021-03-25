import { ItemOfSocialContacts } from '../templates/AddSocialContacts';
import { renderAllClients } from "./render";
import { store } from "../store";
import { changeClient } from '../api/api';
import { inputValidation, alertValidation, clearAlert } from './formValidation';
import { removeClient } from './removeClient';

let client;

export const addChangeListeners = (e, currentClient) => {
  client = currentClient;
  document.querySelector('.modal').addEventListener('click', clickButtonListeners);
}

const clickButtonListeners = (e) => {
  e.preventDefault();
  const parent = e.target.closest('li');
  if (e.target.classList.contains('close')) {
    closeModal();
    document.querySelector('.body').removeEventListener('click', clickButtonListeners);
  } else if (e.target.classList.contains('btn__add-contact')) {
    addExtraContact(e);
  } else if (e.target.classList.contains('add-social__btn-clear')) {
    parent.remove();
    client.contacts.pop();
    if (client.contacts.length === 0) {
      document.querySelector('.add-social').classList.add('d-none');
      document.querySelector('.add__contact').classList.remove('add__contact-padding');
    }
  } else if (e.target.classList.contains('alert')) {
    clearAlert(e);
  } else if (e.target.classList.contains('btn__save-client')) {
    onSaveEdited(e);
    document.querySelector('.body').removeEventListener('click', clickButtonListeners);
  } else if (e.target.classList.contains('btn__del-client')) {
    closeModal();
    removeClient(e);
    document.querySelector('.body').removeEventListener('click', clickButtonListeners);
  }
}

const closeModal = () => {
  client.contacts.length = 0;
  document.querySelector('.modal').classList.add('d-none');
  document.querySelector('.modal').removeEventListener('click', clickButtonListeners);
  document.querySelector('.add-social').removeEventListener('input', addClearInputButton);
}

const addExtraContact = (e) => {
  // client.contacts.push(ItemOfSocialContacts());
  if (client.contacts.length <= store.quantityOfAddContactsInModalWindow) {
    const li = document.createElement('li');
    li.classList.add('add-social__item');
    li.innerHTML = ItemOfSocialContacts();
    document.querySelector('.add-social').appendChild(li);
  }
  document.querySelector('.add-social').classList.remove('d-none');
  document.querySelector('.add__contact').classList.add('add__contact-padding');
  document.querySelector('.add-social').addEventListener('input', addClearInputButton);
}

const addClearInputButton = (ev) => {
  if (ev.target.classList.contains('add-social__input')) {
    ev.target.value.length !== 0
    ? ev.target.nextElementSibling.classList.remove('d-none')
    : ev.target.nextElementSibling.classList.add('d-none')
  }
}

// const onSaveEdited = (e) => {
//   let newClient = createClientObj();
//   const formValid = inputValidation(newClient);
//   if (!formValid.isValid) {
//     alertValidation(formValid, e);
//   } else {
//     changeClient(newClient).then(() => {
//       renderAllClients();
//       closeModal();
//     })
//   }
// }
const onSaveEdited = (e) => {
  const formValid = inputValidation(client);
  if (!formValid.isValid) {
    alertValidation(formValid, e);
  } else {
    changeClientObj();
    changeClient(client).then(() => {
      renderAllClients();
      closeModal();
    })
  }
}

const changeClientObj = () => {
  client.name = document.querySelector('#name').value;
  client.surname = document.querySelector('#surname').value;
  client.lastName = document.querySelector('#lastname').value;
  const newClientContacts = document.querySelectorAll('.add-social__item');
  let contacts = [];
  if (newClientContacts.length > 0) {
    contacts = Array.from(newClientContacts).map(el => {
      return {
        type: el.querySelector('.add-social-select').value,
        value: el.querySelector('.add-social__input').value
      }
    })
  }
  client.contacts = [...client.contacts, ...contacts];
}
// const createClientObj = () => {
//   const newClient = {};
//   const newClientContacts = document.querySelectorAll('.add-social__item');
//   newClient.id = document.querySelector('.modal__id').innerText;
//   newClient.name = document.querySelector('#name').value;
//   newClient.surname = document.querySelector('#surname').value;
//   newClient.lastName = document.querySelector('#lastname').value;
//   if (newClientContacts.length > 0) {
//     newClient.contacts = Array.from(newClientContacts).map(el => {
//       return {
//         type: el.querySelector('.add-social-select').value,
//         value: el.querySelector('.add-social__input').value
//       }
//     })
//   }
//   return newClient;
// }



