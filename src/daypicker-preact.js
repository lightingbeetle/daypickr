import { html, render } from 'htm/preact';

import Daypicker from './components/Daypicker';

const daypickers = Array.from(document.querySelectorAll('[data-daypicker]'));

daypickers.map((daypicker) => {
  render(
    html`<${Daypicker}
      disabledDayFn=${(date) => [5, 6].includes(date.getDay())}
      inputEl=${document.querySelector('#daypicker-input')}
    />`,
    daypicker
  );
});
