export const store = {
  actions: {
    DOMContentLoaded: null,
    createClient: null,
  },
  clients: [
    {
    id: '1234567890',
    name: 'Василий',
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
    },
    {
      id: '1234567890',
      name: 'Сергей',
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
    }
  ],
  currentClient: {
    contacts: []
  },
  clientToADD: {},
  maxLength: 5,
}

