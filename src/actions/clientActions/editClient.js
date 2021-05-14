import { ChangeModal } from '../../templates/ChangeModal';
import { store } from '../../store';
import listeners from '../modalListeners/changeListeners';
import { getClientId, showModal } from '../modalListeners/';
import { addListeners } from '../modalListeners/addListeners';

export const editClient = (e) => {
  e.preventDefault();
  store.currentId = getClientId(e);
  store.currentClient = JSON.parse(JSON.stringify(store.clients.find(el => el.id === store.currentId)));
  showModal(ChangeModal(store.currentClient));
  addListeners(listeners);
};
