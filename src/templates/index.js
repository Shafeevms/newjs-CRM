import { ItemOfSocialContacts } from './ItemOfSocialContacts';

export const itemsToRender = (array, component) => {
  return array.reduce((acc, item) => {
    return acc += component(item);
  }, '');
};

export const convertISO = iso => new Date(iso).toLocaleDateString();

export const convertISOToTime = iso => convertISO(iso).slice(0, 5);

// export const liFiller = (array, id) => {
//   return array.reduce((acc, element) => {
//     return acc += `<li class="social__item ${element.type} ${element.type}${id}"></li>`;
//   }, '');
// };

export const liFiller = (array, id) => {
  const newArray = array.reduce((acc, element, index) => {
    return acc += `<li class="social__item ${index > 3 ? 'd-none' : ''} ${element.type} ${element.type}${id}"></li>`;
  }, '');
  if (array.length <= 4) {
    return newArray;
  } else {
    return newArray + `<li class="social__item"><button data-action="unfold" class="additional">+${array.length - 4}</button></li>`;
  }
};

export const additionalContactsFiller = array => {
  return array.reduce((acc, element) => {
    return acc += `<li class="add-social__item">${ItemOfSocialContacts(element)}</li>`;
  }, '');
};
