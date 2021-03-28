const alert = 'заполните поле!';

export const inputValidation = (obj) => {
  const formValid = {
    isValid: true,
    surname: true,
    name: true,
    contacts:[]
  }
  if(!obj.surname || obj.surname === alert) {
    formValid.surname = false;
    formValid.isValid = false;
  }
  if(!obj.name || obj.name === alert) {
    formValid.name = false
    formValid.isValid = false;
  }
  if (obj.contacts) {
    obj.contacts.forEach((el, index) => {
      if (!el.value || el.value === alert) {
        formValid.contacts[index] = false;
        formValid.isValid = false;
      } else formValid.contacts[index] = true;
    })
  }
  // console.log(formValid);
  return formValid;
}

export const alertValidation = (obj, e) => {
  const parent = e.target.parentElement;
  if (!obj.surname) {
    parent.querySelector('#surname').value = alert;
    parent.querySelector('#surname').classList.add('alert');
  }
  if (!obj.name) {
    parent.querySelector('#name').value = alert;
    parent.querySelector('#name').classList.add('alert');
  }
  obj.contacts.forEach((el, index) => {
    if (!el) {
      document.querySelectorAll('.add-social__input')[index].value = alert;
      document.querySelectorAll('.add-social__input')[index].classList.add('alert');
    }
  })
}

export const clearAlert = (e) => {
  e.target.classList.remove('alert');
  e.target.value = '';
  e.target.nextElementSibling.classList.remove('d-none');
}
