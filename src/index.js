import { render, h } from 'preact';
import { unmountComponentAtNode } from 'preact/compat';
import Daypickr from './components/Daypickr';
import Placeholder from './components/Placeholder';

function dayPickr(element, options) {
  render(<Daypickr {...options} />, element);

  return {
    destroy() {
      unmountComponentAtNode(element);
      render(<Placeholder {...options} />, element);
    },
  };
}

export default dayPickr;
