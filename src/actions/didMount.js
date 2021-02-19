import { getClients } from "../api/api";
import { clients } from '../store'
import { ClientLine } from '../templates/ClientLine';
import { render } from '../actions/render';

export const didMount = () => {
  document.addEventListener("DOMContentLoaded", () => {
    getClients().then(resp => [...clients, ...resp]);
    render('.clients-list', ClientLine())
  });
}

// рендер для строки будет перезаписывать всё - нужно сделать универсальнее, либо еще один
