import { getClients } from "../api/api";
import { clients, itemsToRender } from '../store'
import { ClientLine } from '../templates/ClientLine';
import { render } from '../actions/render';

export const didMount = () => {
  document.addEventListener("DOMContentLoaded", () => {
    getClients().then(resp => [...clients, ...resp]);
    render('.clients-list', itemsToRender())
  });
}

// рендер для строки будет перезаписывать всё - нужно сделать универсальнее, либо еще один
