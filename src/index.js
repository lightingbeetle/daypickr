import { render } from 'preact';

import Daypickr from './components/Daypickr';

function dayPickr(element, options) {
  render(<Daypickr {...options} />, element);
}

export default dayPickr;
