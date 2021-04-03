import { ChangeModal } from "../../templates/ChangeModal";
import { render } from "../render";
import { store } from '../../store';
import { addChangeListeners } from '../modalListeners/addChangeListeners';
import { thisClientId } from '../modalListeners/';

export const editClient = (e) => {
  e.preventDefault();
  thisClientId(e);
  store.currentClient = JSON.parse(JSON.stringify(store.clients.find(el => el.id === store.currentId)));
  document.querySelector('.modal').classList.remove('d-none');
  render('.modal__body', ChangeModal(store.currentClient));
  addChangeListeners();
  console.log(store.currentClient)
}
