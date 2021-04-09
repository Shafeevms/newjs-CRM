import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export const tooltipsInit = ({ clients }) => {
  clients.forEach(client => {
    client?.contacts.forEach(contact => {
      tippy(`.${contact.type}${client.id}`, {
        content: contact.value,
      });
    });
  });
};
