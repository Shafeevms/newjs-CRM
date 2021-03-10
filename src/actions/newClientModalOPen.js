import { NewClientModal } from "../templates/NewClientModal";
import { ItemOfSocialContacts } from '../templates/AddSocialContacts';
import { render } from "./render";
import { store } from "../store";


const socialContactOptions = [];
const newClient = {
  firstName: '',
  surname: '',
  lastName: '',
  contacts: [
    {
      type: '',
      value: ''
    }
  ]
}


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
    const parent = e.target.closest('li');
    if (e.target.classList.contains('close-modal') || e.target.classList.contains('btn__del-client')) {
      closeModal();
    } else if (e.target.classList.contains('btn__add-contact')) {
      addExtraContact(e);
    } else if (e.target.classList.contains('add-social__btn-clear')) {
      parent.remove();
      // parent.querySelector('.add-social__input').value = '';
    } else if (e.target.classList.contains('btn__save-client')) {
      inputValidation();
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

const inputValidation = () => {
  const validation = {};
  if (document.querySelector('#surname').value) validation.surname = true;
  if (document.querySelector('#name').value) validation.name = true;


}
