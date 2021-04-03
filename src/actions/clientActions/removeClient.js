import { deleteClient } from '../../api/api';
import { renderAllClients, render } from '../render';
import { RemoveClient } from "../../templates/RemoveClient";
import { store } from '../../store';
import { thisClientId } from '../modalListeners';

export const removeClient = (e) => {
  e.preventDefault();
  if (!store.currentClient) thisClientId(e); //! почему-то здесь не работает возможность !store.currentClient && thisClientId(e)
  document.querySelector('.modal').classList.remove('d-none');
  render('.modal__body', RemoveClient());
  document.querySelector('.body').addEventListener('click', clickButtonListeners);
}

//! когда дублировались классы всё не работало - значит не удаляется eventlistener!

const clickButtonListeners = (e) => {
  e.preventDefault();
  const target = e.target.dataset;
    if (target.remove === 'cancel') {
      closeModal();
      document.querySelector('.body').removeEventListener('click', clickButtonListeners);
    } else if (target.remove === 'del') {
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
