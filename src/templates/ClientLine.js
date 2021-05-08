import { convertISO, convertISOToTime, liFiller } from './index';

export const ClientLine = ({ id, surname, name, lastName, createdAt, updatedAt, contacts }) => (
  `<li class="clients-item">
    <ul class="client__list row no-gutters">
      <li class="client__item col-sm-1 client__id">
        <h2 class="client__title client__title-id">${id}</h2>
      </li>
      <li class="client__item col-sm-3">
        <h2 class="client__title">${surname} ${name} ${lastName}</h2>
      </li>
      <li class="client__item  col-sm-2">
        <h2 class="client__title">${convertISO(createdAt)}</h2>
        <span class="time">${convertISOToTime(createdAt)}</span>
      </li>
      <li class="client__item col-sm-2">
        <h2 class="client__title">${convertISO(updatedAt)}</h2>
        <span class="time">${convertISOToTime(updatedAt)}</span>
      </li>
      <li class="client__item-social col-sm-2">
        <ul class="social flex">
          ${liFiller(contacts, id)}
        </ul>
      </li>
      <li class="client__item col-sm-1 client__actions">
        <button class="edit" data-action="edit-client"><span class="btn-icon-edit"></span> Изменить</button>
        <button class="cancel" data-action="delete-client"><span class="btn-icon-delete"></span>Удалить</button>
      </li>
    </ul>
  </li>`
);

