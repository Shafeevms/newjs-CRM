import { NewClientModal } from '../../templates/NewClientModal';
import listeners from '../modalListeners/saveListeners';
import { addListeners } from '../modalListeners/addListeners';
import { store } from '../../store';
import { showModal } from '../modalListeners';

export const createClient = (e) => {
  e.preventDefault();
  showModal(NewClientModal());
  store.currentClient = { contacts: [] };
  addListeners(listeners);
};
