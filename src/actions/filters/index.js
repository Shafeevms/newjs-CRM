import { store } from '../../store';
import { render } from '../render';
import { itemsToRender } from '../../templates';
import { ClientLine } from '../../templates/ClientLine';
import { tooltipsInit } from '../tooltipsInit';

export const sortBy = elementName => {
  const { clients, sortedBy } = store;
  if (sortedBy[elementName] === null || sortedBy[elementName] === 'reverse') {
    clients.sort((a, b) => a[elementName] - b[elementName]);
    store.sortedBy[elementName] = 'straight';
  } else {
    clients.sort((a, b) => b[elementName] - a[elementName]);
    store.sortedBy[elementName] = 'reverse';
  }
  render('.clients-list', itemsToRender(store.clients, ClientLine));
  tooltipsInit(store);
};

export const sortByString = elementName => {
  const { clients, sortedBy } = store;
  if (sortedBy[elementName] === null || sortedBy[elementName] === 'reverse') {
    clients.sort((a, b) => b[elementName].localeCompare(a[elementName]));
    store.sortedBy[elementName] = 'straight';
  } else {
    store.sortedBy[elementName] = 'reverse';
    clients.sort((a, b) => a[elementName].localeCompare(b[elementName]));
  }
  render('.clients-list', itemsToRender(store.clients, ClientLine));
  tooltipsInit(store);
};

const asTimelaps = str => new Date(str).getTime();
// кажется работает - нужно проверить, когда будет работать updatedAt
export const sortByTime = (elementName) => {
  const { clients, sortedBy } = store;
  console.log('sortByTime');
  if (sortedBy[elementName] === null || sortedBy[elementName] === 'reverse') {
    clients.sort((a, b) => asTimelaps(a[elementName]) - asTimelaps(b[elementName]));
    store.sortedBy[elementName] = 'straight';
  } else {
    clients.sort((a, b) => asTimelaps(b[elementName]) - asTimelaps(a[elementName]));
    store.sortedBy[elementName] = 'reverse';
  }
  render('.clients-list', itemsToRender(store.clients, ClientLine));
  tooltipsInit(store);
};

export const findClients = (str) => {
  const { clients } = store;
  const filteredClients = clients.filter(obj => (
    obj.name.toLowerCase() +
    obj.surname.toLowerCase() +
    obj.lastName.toLowerCase()).includes(str.toLowerCase()));
    render('.clients-list', itemsToRender(filteredClients, ClientLine));
    tooltipsInit(store);
};

let timerID;
export const onSearch = () => {
  const input = document.querySelector('.header__input');
  clearTimeout(timerID);
  timerID = setTimeout(() => {
    findClients(input.value);
  }, 400);
};
