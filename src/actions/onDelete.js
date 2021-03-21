import { deleteClient } from '../api/api';
import { renderAllClients } from './render';

// доработать есть ошибки
export const onDelete = (e) => {
  const parent = e.target.closest('ul');
  const currentId = parent.querySelector('.client__title-id').innerHTML;
  deleteClient(currentId);
  renderAllClients();
}
