import { convertISO } from './index';

export const ClientLine = ({ id, surname, name, lastName, createdAt, updatedAt }) => (
  `<li class="clients-item">
    <ul class="client__list row no-gutters">
      <li class="client__item col-md-1">
        <h2 class="client__title client__title-id">${id}</h2>
      </li>
      <li class="client__item col-md-3">
        <h2 class="client__title">${surname} ${name} ${lastName}</h2>
      </li>
      <li class="client__item  col-md-2">
        <h2 class="client__title">${convertISO(createdAt).toLocaleDateString()}</h2>
        <span class="time">${convertISO(createdAt).toLocaleTimeString().slice(0, 5)}</span>
      </li>
      <li class="client__item col-md-2">
        <h2 class="client__title">${convertISO(updatedAt).toLocaleDateString()}</h2>
        <span class="time">${convertISO(updatedAt).toLocaleTimeString().slice(0, 5)}</span>
      </li>
      <li class="client__item-social col-md-2">
        <ul class="social flex">
          <li class="social__item fb myButton"></li>
          <li class="social__item myButton1"></li>
          <li class="social__item"></li>
          <li class="social__item"></li>
          <li class="social__item"></li>
          <li class="social__item"></li>
          <li class="social__item"></li>
          <li class="social__item"></li>
          <li class="social__item"></li>
          <li class="social__item vk"></li>
        </ul>
      </li>
      <li class="client__item col-md-1">
        <button class="edit"><span class="btn-icon"><img src="./img/edit.svg"></span> Изменить</button>
      </li>
      <li class="client__item col-md-1">
        <button class="cancel"><span class="btn-icon"><img src="./img/cancel.svg"></span>Удалить</button>
      </li>
    </ul>
  </li>`
)

{/* <li class="social__item myButton"><img src="./img/vk.svg" alt="vk"></li>
    <li class="social__item myButton1"><img src="./img/fb.svg" alt="fb"></li>
    <li class="social__item"><img src="./img/phone.svg" alt="phone"></li>
    <li class="social__item"><img src="./img/mail.svg" alt="mail"></li>
    <li class="social__item"><img src="./img/mail-2.svg" alt="mail"></li>
    <li class="social__item"><img src="./img/vk.svg" alt="vk"></li>
    <li class="social__item"><img src="./img/fb.svg" alt="fb"></li>
    <li class="social__item"><img src="./img/phone.svg" alt="phone"></li>
    <li class="social__item"><img src="./img/mail.svg" alt="mail"></li>
    <li class="social__item"><img src="./img/mail-2.svg" alt="mail"></li> */}
