import { store } from '../../store';
// работает
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
  console.log(store.clients)
}


//! сделать сортироввку по фамилии
export const sortByString = elementName => {
  const { clients, sortedBy } = store;
  console.log('sortByString', elementName)

  console.log(store.clients)
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
  console.log(store.clients)
}

