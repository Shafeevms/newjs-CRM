import { NewClientModal } from "../templates/NewClientModal";
import { ItemOfSocialContacts } from '../templates/AddSocialContacts';
import { render } from "./render";
import { store } from "../store";
import { addClient } from '../api/api';
import { renderAllClients } from './didMount';

const socialContactOptions = [];
const alert = 'заполните поле!';

export const newClientModalOPen = (e) => {
  e.preventDefault();
  document.querySelector('.modal').classList.remove('d-none');
  render('.modal__body', NewClientModal());
  addListeners(e);
}

const addListeners = (e) => {
  document.querySelector('.modal').addEventListener('click', clickButtonListeners)
}

const clickButtonListeners = (e) => {
  e.preventDefault();
    const parent = e.target.closest('li');
    if (e.target.classList.contains('close-modal') || e.target.classList.contains('btn__del-client')) {
      closeModal();
    } else if (e.target.classList.contains('btn__add-contact')) {
      addExtraContact(e);
    } else if (e.target.classList.contains('add-social__btn-clear')) {
      parent.remove();
      socialContactOptions.pop();
      if (socialContactOptions.length === 0) {
        document.querySelector('.add-social').classList.add('d-none');
        document.querySelector('.add__contact').classList.remove('add__contact-padding');
      }
    } else if (e.target.classList.contains('alert')) {
      clearAlert(e);
    } else if (e.target.classList.contains('btn__save-client')) {
      onSave(e);
    }
}

const clearAlert = (e) => {
  e.target.classList.remove('alert');
  e.target.value = '';
  e.target.nextElementSibling.classList.remove('d-none');
}

const closeModal = () => {
  socialContactOptions.length = 0;
  document.querySelector('.modal').classList.add('d-none');
  document.querySelector('.modal').removeEventListener('click', clickButtonListeners);
  document.querySelector('.add-social').removeEventListener('input', addClearInputButton);
}

const addExtraContact = (e) => {
  socialContactOptions.push(ItemOfSocialContacts());
  if (socialContactOptions.length <= store.quantityOfAddContactsInModalWindow) {
    const li = document.createElement('li');
    li.classList.add('add-social__item')
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

//? сохранить - алгоритм:
// сначала заполнить объект из полей модального окна
// потом уже к объекту приминить валидацию
// если false добавить красное примечание в поле
// пробегается по объекту, где видит false добавляет в value 'заполните поле' красным цветом

// если true отправить объект на сервер
// из сервера отрисовать новый список

const onSave = (e) => {
  let newClient = {...createClientObj()};
  const formValid = inputValidation(newClient);
  if (!formValid.isValid) {
    alertValidation(formValid, e);
  } else {
    console.log(newClient)
    addClient(newClient);
    renderAllClients();
  }
}

const alertValidation = (obj, e) => {
  const parent = e.target.parentElement;
  if (!obj.surname) {
    parent.querySelector('#surname').value = alert;
    parent.querySelector('#surname').classList.add('alert');
  }
  if (!obj.firstName) {
    parent.querySelector('#name').value = alert;
    parent.querySelector('#name').classList.add('alert');
  }
  obj.contacts.forEach((el, index) => {
    if (!el) {
      document.querySelectorAll('.add-social__input')[index].value = alert;
      document.querySelectorAll('.add-social__input')[index].classList.add('alert');
    }
  })
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
  }
  return newClient;
}

const inputValidation = (obj) => {
  const formValid = {
    isValid: true,
    surname: true,
    name: true,
    contacts:[]
  }
  if(!obj.surname || obj.surname === alert) {
    formValid.surname = false;
    formValid.isValid = false;
  }
  if(!obj.name || obj.name === alert) {
    formValid.name = false
    formValid.isValid = false;
  }
  if (obj.contacts) {
    obj.contacts.forEach((el, index) => {
      if (!el.value || el.value === alert) {
        formValid.contacts[index] = false;
        formValid.isValid = false;
      } else formValid.contacts[index] = true;
    })
  }
  return formValid;
}


