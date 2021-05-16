import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

function prefix(type) {
  let str = null;
  if (type === 'tel') {
    str = 'tel:';
  } else if (type.includes('mail')) {
    str = 'mailto:';
  } else {
    str = '';
  }
  return str;
}

export const tooltipsInit = ({ clients }) => {
  clients.forEach(client => {
    client?.contacts.forEach(contact => {
      const str = prefix(contact.type);
      tippy(`.${contact.type}${client.id}`, {
        content: `<a href="${str}${contact.value}" style="color:white">${contact.type}: ${contact.value}</a>`,
        allowHTML: true,
        interactive: true,
      });
    });
  });
};
