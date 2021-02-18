const URL = '//localhost:3000/api/clients';

export const addClient = (client) => {
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify(client)
  })
}

export const changeClient = (id, newClient) => {
  fetch(`${URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(newClient)
  })
}

export const deleteClient = id => {
  fetch(`${URL}/${id}`, {
    method: 'DELETE',
  })
}

export const getClients = () => fetch(URL).then(resp => resp.json()); // возвращает промис
