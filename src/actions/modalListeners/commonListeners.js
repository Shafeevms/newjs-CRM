import { store } from '../../store';
import { ItemOfSocialContacts } from '../../templates/ItemOfSocialContacts';
import { addClearInputButton } from '../modalListeners';

export const addExtraContact = () => {
  const { currentClient: { contacts } } = store;
  const addLine = {
        type: 'tel',
        value: ''
      };
  if (contacts?.length < store.maxLength) {
    contacts.push(addLine);
    const li = document.createElement('li');
    li.classList.add('add-social__item');
    li.innerHTML = ItemOfSocialContacts(contacts[contacts.length - 1]);
    document.querySelector('.add-social').appendChild(li);
  }
  if (contacts?.length === store.maxLength) {
    document.querySelector('.btn__add-contact').setAttribute('disabled', 'disabled');
  }
  document.querySelector('.add-social').classList.remove('d-none');
  document.querySelector('.add__contact').classList.add('add__contact-padding');
  document.querySelector('.add-social').addEventListener('input', addClearInputButton);
};

export const clearAddContact = (e) => {
  const { currentClient: { contacts } } = store;
  const parent = e.target.closest('li');
  contacts.pop();
  parent.remove();
  if (contacts?.length < 10) {
    document.querySelector('.btn__add-contact').removeAttribute('disabled');
  }
  if (contacts.length === 0) {
    document.querySelector('.add-social').classList.add('d-none');
    document.querySelector('.add__contact').classList.remove('add__contact-padding');
  }
};
