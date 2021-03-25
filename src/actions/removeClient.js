import { deleteClient } from '../api/api';
import { renderAllClients, render } from './render';
import { RemoveClient } from "../templates/RemoveClient";

let currentId;
export const removeClient = (e) => {
  e.preventDefault();
  const parent = e.target.closest('ul');
  currentId = parent.querySelector('.client__title-id').innerHTML;
  document.querySelector('.modal').classList.remove('d-none');
  render('.modal__body', RemoveClient());
  document.querySelector('.body').addEventListener('click', clickButtonListeners);
}

const clickButtonListeners = (e) => {
  e.preventDefault();
    if (e.target.classList.contains('btn__del-client')) {
      closeModal();
      document.querySelector('.body').removeEventListener('click', clickButtonListeners);
    } else if (e.target.classList.contains('btn__save-client')) {
      onDelete(currentId).then(() => {
      renderAllClients();
      console.log('удален');
      document.querySelector('.body').removeEventListener('click', clickButtonListeners);
      })
    }
}

  const onDelete = (currentId) => {
    closeModal();
    return deleteClient(currentId);
}

const closeModal = () => {
  document.querySelector('.modal').classList.add('d-none');
  document.querySelector('.modal').removeEventListener('click', clickButtonListeners);
}
