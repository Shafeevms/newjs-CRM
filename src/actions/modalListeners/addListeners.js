import { store } from '../../store';

export const addListeners = (listeners, selector = '.modal') => {
  document.querySelector(selector).addEventListener('click', listeners);
  store.actions.clickButtonListeners = listeners;
};

