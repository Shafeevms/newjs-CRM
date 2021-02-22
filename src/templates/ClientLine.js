export const ClientLine = ({ id, surname, firstName, lastName }) => (
  `<li class="clients-item">
    <ul class="client__list row no-gutters">
      <li class="client__item col-md-1">
        <h2 class="client__title client__title-id">${id}</h2>
      </li>
      <li class="client__item col-md-3">
        <h2 class="client__title">${surname} ${firstName} ${lastName}</h2>
      </li>
      <li class="client__item  col-md-2">
        <h2 class="client__title">21.02.21</h2>
        <span class="time">12:02</span>
      </li>
      <li class="client__item col-md-2">
        <h2 class="client__title">21.02.21</h2>
        <span class="time">12:02</span>
      </li>
      <li class="client__item-social col-md-2">
        <ul class="social flex">
          <li class="social__item myButton"><img src="./img/vk.svg" alt="vk"></li>
          <li class="social__item myButton1"><img src="./img/fb.svg" alt="fb"></li>
          <li class="social__item"><img src="./img/phone.svg" alt="phone"></li>
          <li class="social__item"><img src="./img/mail.svg" alt="mail"></li>
          <li class="social__item"><img src="./img/mail-2.svg" alt="mail"></li>
          <li class="social__item"><img src="./img/vk.svg" alt="vk"></li>
          <li class="social__item"><img src="./img/fb.svg" alt="fb"></li>
          <li class="social__item"><img src="./img/phone.svg" alt="phone"></li>
          <li class="social__item"><img src="./img/mail.svg" alt="mail"></li>
          <li class="social__item"><img src="./img/mail-2.svg" alt="mail"></li>
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

// {
//   id: '1234567890', // ID клиента, заполняется сервером автоматически, после создания нельзя изменить
//   firstName: 'Василий', // * обязательное поле, имя клиента
//   surname: 'Пупкин', // * обязательное поле, фамилия клиента
//   lastName: 'Васильевич', // необязательное поле, отчество клиента
//   // контакты - необязательное поле, массив контактов
//   // каждый объект в массиве (если он передан) должен содержать непустые свойства type и value
//   contacts: [
//     {
//       type: 'Телефон',
//       value: '+71234567890'
//     },
//     {
//       type: 'Email',
//       value: 'abc@xyz.com'
//     },
//     {
//       type: 'Facebook',
//       value: 'https://facebook.com/vasiliy-pupkin-the-best'
//     }
//   ]
// }
