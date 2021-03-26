import { deleteClient } from '../../api/api';
import { renderAllClients, render } from '../render';
import { RemoveClient } from "../../templates/RemoveClient";
import { store } from '../../store';
import { thisClientId } from '../modalListeners';

export const removeClient = (e) => {
  e.preventDefault();
  thisClientId(e);
  document.querySelector('.modal').classList.remove('d-none');
  render('.modal__body', RemoveClient());
  document.querySelector('.body').addEventListener('click', clickButtonListeners);
}

const clickButtonListeners = (e) => {
  e.preventDefault();
  const target = e.target.classList;
    if (target.contains('btn__del-client')) {
      closeModal();
      document.querySelector('.body').removeEventListener('click', clickButtonListeners);
    } else if (target.contains('btn__save-client')) {
      onDelete(store.currentId).then(() => {
      renderAllClients();
      console.log('удален');
      document.querySelector('.body').removeEventListener('click', clickButtonListeners);
      delete store.currentId;
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
