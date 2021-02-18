import './css/grid.css'
import './css/index.css'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { getClients, changeClient, deleteClient, addClient } from './api';

// !вынести куда-то tippy!
tippy('.myButton', {
  content: 'My tooltip!',
});
tippy('.myButton1', {
  content: 'My tooltip1!',
});


// по ховеру изменить путь к картинке в кнопке "Изменить"

// добавить клиента

// fetch('//localhost:3000/api/clients', {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'Max',
//     surname: 'Shafeev',
//     lastName: 'LAstname',
//     contacts: [
//       {
//         type: 'tel',
//         value: '7896655'
//       }
//     ]
//   })
// })

// изменить клиента

// fetch('//localhost:3000/api/clients/1613646405526', {
//   method: 'PATCH',
//   body: JSON.stringify({
//     name: 'Lena',
//     surname: 'Shafeeva',
//     lastName: 'LAstname',
//     contacts: [
//       {
//         type: 'vk',
//         value: 'asd'
//       }
//     ]
//   })
// })

// удалить клиента

// fetch('//localhost:3000/api/clients/1613645308105', {
//   method: 'DELETE',
// })

// получить клиентов

// fetch('//localhost:3000/api/clients')
//   .then(resp => resp.json())
//   .then(resp => console.log(resp))

const masha = {
      name: 'Masha',
      surname: 'Shafeeva',
      lastName: 'LAstname',
      contacts: [
        {
          type: 'fb',
          value: 'asdasd'
        }
      ]
    }

    deleteClient(1613648924166)

getClients().then(resp => console.log(resp))
