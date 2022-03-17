import { html, render } from 'htm/preact';

import Daypicker from './components/Daypicker';

function dayPicker(element, options) {
  render(html`<${Daypicker} ...${options} />`, element);
}

export default dayPicker;
