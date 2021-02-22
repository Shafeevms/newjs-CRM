import { NewClientModal } from "../templates/NewClientModal";
import { ItemOfSocialContacts } from '../templates/AddSocialContacts';
import { render } from "./render";
import { itemsToRender } from "../templates";
import { store } from "../store";

const socialContactOptions = [];

const addListeners = (e) => {
  document.querySelector('.modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('close-modal') || e.target.classList.contains('btn__del-client')) {
      socialContactOptions.length = 0;   //splice(0,5);
      document.querySelector('.modal').classList.add('d-none');
    } else if (e.target.classList.contains('btn__add-contact')) {
      e.stopImmediatePropagation();
      socialContactOptions.push(ItemOfSocialContacts());
      socialContactOptions.length <= store.quantityOfAddContactsInModalWindow && render('.add-social', itemsToRender(socialContactOptions, ItemOfSocialContacts));
      document.querySelector('.add-social').classList.remove('d-none');
      document.querySelector('.add__contact').classList.add('add__contact-padding');

    }
  })

}

export const newClientModalOPen = (e) => {
  e.preventDefault();
  document.querySelector('.modal').classList.remove('d-none');
  render('.modal__body', NewClientModal());
  addListeners(e)
}

