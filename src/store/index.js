import { ClientLine } from "../templates/ClientLine";

export const clients = [{
  id: '1234567890', // ID клиента, заполняется сервером автоматически, после создания нельзя изменить
  firstName: 'Василий', // * обязательное поле, имя клиента
  surname: 'Пупкин', // * обязательное поле, фамилия клиента
  lastName: 'Васильевич', // необязательное поле, отчество клиента
  // контакты - необязательное поле, массив контактов
  // каждый объект в массиве (если он передан) должен содержать непустые свойства type и value
  contacts: [
    {
      type: 'Телефон',
      value: '+71234567890'
    },
    {
      type: 'Email',
      value: 'abc@xyz.com'
    },
    {
      type: 'Facebook',
      value: 'https://facebook.com/vasiliy-pupkin-the-best'
    }
  ]
}];


export const itemsToRender = clients => {
  console.log(clients);
  return clients.reduce((acc, item) => {
    console.log(acc, item);
    return acc += ClientLine(item);
  }, '')
}

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
