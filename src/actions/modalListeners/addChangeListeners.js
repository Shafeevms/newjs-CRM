import { renderAllClients } from "../render";
import { store } from "../../store";
import { changeClient } from '../../api/api';
import { inputValidation, alertValidation, clearAlert } from '../formValidation';
import { removeClient } from '../clientActions/removeClient';
import { closeModal, addExtraContact } from './index.js';

export const addChangeListeners = () => {
  console.log('addChangeListeners')
  document.querySelector('.modal').addEventListener('click', clickButtonListeners);
  store.actions['clickButtonListeners'] = clickButtonListeners;
}

const clickButtonListeners = (e) => {
  e.preventDefault();
  const parent = e.target.closest('li');
  const target = e.target.classList;
  if (target.contains('close')) {
    closeModal(); // работает
  } else if (target.contains('btn__add-contact')) {
    addExtraContact(); // работает
  } else if (target.contains('add-social__btn-clear')) {
    parent.remove(); //!  не работает - не то удаляет
    client.contacts.pop();
    if (client.contacts.length === 0) {
      document.querySelector('.add-social').classList.add('d-none');
      document.querySelector('.add__contact').classList.remove('add__contact-padding');
    }
  } else if (target.contains('alert')) {
    clearAlert(e); // не работает
  } else if (target.contains('btn__save-client')) {
    onSaveEdited(e); // check it
    document.querySelector('.body').removeEventListener('click', clickButtonListeners);
  } else if (target.contains('btn__del-client')) {
    console.log('delete');
    closeModal();
    removeClient(e, client.id);
    document.querySelector('.body').removeEventListener('click', clickButtonListeners);
  }
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



//
