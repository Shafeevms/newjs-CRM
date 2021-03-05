import { NewClientModal } from "../templates/NewClientModal";
import { ItemOfSocialContacts } from '../templates/AddSocialContacts';
import { render } from "./render";
import { itemsToRender } from "../templates";
import { store } from "../store";

const socialContactOptions = [];

export const newClientModalOPen = (e) => {
  e.preventDefault();
  document.querySelector('.modal').classList.remove('d-none');
  render('.modal__body', NewClientModal());
  addListeners(e)
}

const addListeners = (e) => {
  document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('close-modal') || e.target.classList.contains('btn__del-client')) {
      closeModal();
    } else if (e.target.classList.contains('btn__add-contact')) {
      addExtraContact(e);
    }
  })
}

const closeModal = () => {
  socialContactOptions.length = 0;
  document.querySelector('.modal').classList.add('d-none');
}

const addExtraContact = (e) => {
  e.stopImmediatePropagation();
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
  document.querySelector('.add-social').addEventListener('focus', (ev) => {
    if (ev.target.classList.contains('.add-social-select')) {
      console.log('select');
    }
    // e.target.closest('option-img').classList.add('rotate');
  }, true);
  // не отрабатывает фокус на селекте..
  document.querySelector('.add-social').addEventListener('click', (ev) => {
    ev.target.classList.contains('add-social__btn-clear') && console.log(ev.target.closest('add-social__input'));
  })
}
// разобраться с кнопкой - удалить содержимое инпута

const addClearInputButton = (ev) => {
  if (ev.target.classList.contains('add-social__input')) {
    ev.target.value.length !== 0
    ? ev.target.nextElementSibling.classList.remove('d-none')
    : ev.target.nextElementSibling.classList.add('d-none')
  }

}

