import { ItemOfSocialContacts } from './ItemOfSocialContacts';

export const itemsToRender = (array, component) => {
  return array.reduce((acc, item) => {
    return acc += component(item);
  }, '');
};

export const convertISO = iso => new Date(iso);

export const liFiller = (array, id) => {
  return array.reduce((acc, element) => {
    return acc += `<li class="social__item ${element.type} ${element.type}${id}"></li>`;
  }, '');
};

export const additionalContactsFiller = array => {
  return array.reduce((acc, element) => {
    return acc += `<li class="add-social__item">${ItemOfSocialContacts(element)}</li>`;
  }, '');
};
