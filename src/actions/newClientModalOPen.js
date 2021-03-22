import { NewClientModal } from "../templates/NewClientModal";
import { render } from "./render";
import { addSaveListeners } from './addSaveListeners';

export const newClientModalOPen = (e) => {
  e.preventDefault();
  document.querySelector('.modal').classList.remove('d-none');
  render('.modal__body', NewClientModal());
  addSaveListeners(e);
}
