const ALERT_MESSAGE = 'заполните поле!';

export const inputValidation = (obj) => {
  const formValid = {
    isValid: true,
    surname: true,
    name: true,
    contacts: []
  };
  if (!obj.surname || obj.surname === ALERT_MESSAGE) {
    formValid.surname = false;
    formValid.isValid = false;
  }
  if (!obj.name || obj.name === ALERT_MESSAGE) {
    formValid.name = false;
    formValid.isValid = false;
  }
  if (obj.contacts) {
    obj.contacts.forEach((el, index) => {
      if (!el.value || el.value === ALERT_MESSAGE) {
        formValid.contacts[index] = false;
        formValid.isValid = false;
      } else formValid.contacts[index] = true;
    });
  }
  return formValid;
};

export const alertValidation = (obj, e) => {
  const parent = e.target.parentElement;
  if (!obj.surname) {
    parent.querySelector('#surname').value = ALERT_MESSAGE;
    parent.querySelector('#surname').classList.add('alert');
  }
  if (!obj.name) {
    parent.querySelector('#name').value = ALERT_MESSAGE;
    parent.querySelector('#name').classList.add('alert');
  }
  obj.contacts.forEach((el, index) => {
    if (!el) {
      document.querySelectorAll('.add-social__input')[index].value = ALERT_MESSAGE;
      document.querySelectorAll('.add-social__input')[index].classList.add('alert');
    }
  });
};

export const clearAlert = (e) => {
  e.target.classList.remove('alert');
  e.target.value = '';
  e.target.nextElementSibling.classList.remove('d-none');
};
