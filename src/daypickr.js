import { html, render } from 'htm/preact';

import Daypickr from './components/Daypickr';

function dayPickr(element, options) {
  render(html`<${Daypickr} ...${options} />`, element);
}

export default dayPickr;
