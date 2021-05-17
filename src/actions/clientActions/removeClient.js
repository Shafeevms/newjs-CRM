import { deleteClient } from '../../api';
import { render, renderAllClients } from '../render';
import { RemoveClient } from '../../templates/RemoveClient';
import { store } from '../../store';
import { getClientId, showModal } from '../modalListeners';
import { addListeners } from '../modalListeners/addListeners';
import { NotFound } from '../../templates/NotFound';
import { Loader } from '../../templates/Loader';

export const removeClient = (e) => {
  e.preventDefault();
  if (!store.currentClient) {
    store.currentId = getClientId(e);
  }
  showModal(RemoveClient());
  addListeners(clickButtonListeners, '.body');
  document.querySelector('.body').addEventListener('click', clickButtonListeners);
};

const clickButtonListeners = (e) => {
  e.preventDefault();
  const target = e.target.dataset;
  if (target.remove === 'cancel') {
    closeModal();
    document.querySelector('.body').removeEventListener('click', clickButtonListeners);
  } else if (target.remove === 'del') {
    onDelete(store.currentId)
      .then(() => {
        render('.clients-list', Loader());
        renderAllClients();
        document.querySelector('.body').removeEventListener('click', clickButtonListeners);
        delete store.currentId;
      })
      .catch(() => {
        render('.clinets-list', NotFound());
      });
  }
};

const onDelete = (currentId) => {
  closeModal();
  return deleteClient(currentId);
};

const closeModal = () => {
  document.querySelector('.modal').classList.add('d-none');
  document.querySelector('.modal').removeEventListener('click', clickButtonListeners);
};
