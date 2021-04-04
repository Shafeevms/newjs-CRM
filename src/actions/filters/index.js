import { store } from '../../store';
import { render } from '../render';
import { itemsToRender } from '../../templates';
import { ClientLine } from '../../templates/ClientLine';
import { tooltipsInit } from '../tooltipsInit';

export const sortBy = elementName => {
  const { clients, sortedBy } = store;
  console.log('sortBy', elementName)
  if (sortedBy[elementName] === null || sortedBy[elementName] === 'reverse') {
    clients.sort((a, b) => a[elementName] - b[elementName]);
    store.sortedBy[elementName] = 'straight';
  } else {
    clients.sort((a, b) => b[elementName] - a[elementName]);
    store.sortedBy[elementName] = 'reverse';
  }
  render('.clients-list', itemsToRender(store.clients, ClientLine));
  tooltipsInit(store);
}

export const sortByString = elementName => {
  const { clients, sortedBy } = store;
  console.log('sortByString', elementName)
  if (sortedBy[elementName] === null || sortedBy[elementName] === 'reverse') {
    clients.sort((a, b) => b[elementName].localeCompare(a[elementName]));
    store.sortedBy[elementName] = 'straight';
  } else {
    store.sortedBy[elementName] = 'reverse';
    clients.sort((a, b) => a[elementName].localeCompare(b[elementName]));
  }
  render('.clients-list', itemsToRender(store.clients, ClientLine));
  tooltipsInit(store);
}

const asTimelaps = str => new Date(str).getTime();
// кажется работает - нужно проверить, когда будет работать updatedAt
export const sortByTime = (elementName) => {
  const { clients, sortedBy } = store;
  console.log('sortByTime')
  if (sortedBy[elementName] === null || sortedBy[elementName] === 'reverse') {
    clients.sort((a, b) => asTimelaps(a[elementName]) - asTimelaps(b[elementName]));
    store.sortedBy[elementName] = 'straight';
  } else {
    clients.sort((a, b) => asTimelaps(b[elementName]) - asTimelaps(a[elementName]));
    store.sortedBy[elementName] = 'reverse';
  }
  render('.clients-list', itemsToRender(store.clients, ClientLine));
  tooltipsInit(store);
}

