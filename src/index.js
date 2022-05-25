import { render } from 'preact';

import Daypicker from './components/Daypicker';

function dayPicker(element, options) {
  render(<Daypicker {...options} />, element);
}

module.exports = dayPicker;
