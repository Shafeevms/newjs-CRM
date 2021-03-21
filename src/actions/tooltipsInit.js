import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export const tooltipsInit = ({ clients }) => {
  const randomNum = () => Math.floor(Math.random() * 1000)
  clients.forEach(client => {
    client?.contacts.forEach(contact => {
      tippy(`.${contact.type}${client.id}`, {
        content: contact.value,
      })
    })
  })
}
