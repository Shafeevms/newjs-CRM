import { ChangeModal } from "../templates/ChangeModal";
import { render, renderAllClients } from "./render";
import { store } from '../store';

export const changeModalOPen = (e) => {
  e.preventDefault();
  document.querySelector('.modal').classList.remove('d-none');
  render('.modal__body', ChangeModal(thisClient(e)));
  // addListeners(e);
}

const thisClient = e => {
  const parent = e.target.closest('ul');
  const lineId = parent.querySelector('.client__title-id').innerHTML;
  return store.clients.find(el => el.id === lineId)}
