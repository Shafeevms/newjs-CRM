import { NewClientModal } from "../templates/NewClientModal";
import { ItemOfSocialContacts } from '../templates/AddSocialContacts';
import { render } from "./render";
import { store } from "../store";

const socialContactOptions = [];
let newClient = {};
let isValid = true;

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
    } else if (e.target.classList.contains('btn__save-client')) {
      onSave(e);
    }
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
  newClient = createClientObj();
  inputValidation(newClient);
  console.log(newClient)
}

const createClientObj = () => {
  const newClient = {};
  const newClientContacts = document.querySelectorAll('.add-social__item');
  newClient.firstName = document.querySelector('#name').value;
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

//! Разобраться с FormData
// const formData = (e) => {
//   const modalForm = document.querySelector('.modal__form-input');
//   const newClient = new FormData(modalForm);
//   console.log(modalForm);
//   console.log(newClient.entries());
// }

const inputValidation = (obj) => {
  console.log(isValid)
  if(!obj.surname) {
    obj.surname = false;
    isValid = false;
  }
  if(!obj.firstName) {
    obj.firstName = false
    isValid = false;
  }
  if (obj.contacts) {
    obj.contacts.forEach(el => {
      if (!el.value) {
        el.value = false;
        isValid = false;
      }
    })
  }
}
