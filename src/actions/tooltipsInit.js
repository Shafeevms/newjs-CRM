import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export const tooltipsInit = () => {
  tippy('.myButton', {
    content: 'My tooltip!',
  })
  tippy('.myButton1', {
    content: 'My tooltip1!',
  })
}



