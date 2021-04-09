import { store } from '../../store';

export const addListeners = (listeners) => {
  document.querySelector('.modal').addEventListener('click', listeners);
  store.actions['clickButtonListeners'] = listeners;
};

