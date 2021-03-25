import { store } from "../store";

const URL = '//localhost:3000/api/clients';

export const addClient = (clientToADD) => {
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify(clientToADD)
  })
}

export const changeClient = (newClient) => {
  return fetch(`${URL}/${newClient.id}`, {
    method: 'PATCH',
    body: JSON.stringify(newClient)
  })
}

export const deleteClient = (id) => {
  return fetch(`${URL}/${id}`, {
    method: 'DELETE',
  })
}

export const getClients = () => {
  return fetch(URL)
  .then(resp => resp.json())
  .then(resp => {store.clients = [...resp]})
}
