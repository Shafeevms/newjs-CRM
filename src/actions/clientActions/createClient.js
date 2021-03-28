import { NewClientModal } from "../../templates/NewClientModal";
import { render } from "../render";
import { addSaveListeners } from '../modalListeners/addSaveListeners';
import { store } from "../../store";

export const createClient = (e) => {
  e.preventDefault();
  document.querySelector('.modal').classList.remove('d-none');
  render('.modal__body', NewClientModal());
  addSaveListeners(e);
}
