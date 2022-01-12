import { html, render } from 'htm/preact';

import Daypicker from './components/Daypicker';

function dayPicker(element, options) {
  render(html`<${Daypicker} ...${options} />`, element);
}

export default dayPicker;

const daypickers = Array.from(document.querySelectorAll('[data-daypicker]'));

daypickers.map((element) => {
  dayPicker(element, {
    disabledDayFn: (date) => [6, 0].includes(date.getDay()),
  });
});
