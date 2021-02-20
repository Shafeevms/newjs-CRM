import './css/grid.css'
import './css/index.css'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { didMount } from './actions/didMount';


// !вынести куда-то tippy!
tippy('.myButton', {
  content: 'My tooltip!',
});
tippy('.myButton1', {
  content: 'My tooltip1!',
});

didMount()
// по ховеру изменить путь к картинке в кнопке "Изменить"

// все функции работы с api проверены

// можно начать получать данные из модального окна или сначала его запустить))

// уязвимости innerHTML, какой-то маркдаун
