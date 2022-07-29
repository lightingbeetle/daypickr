const render = require('preact').render;
const Daypickr = require('./components/Daypickr');

function dayPickr(element, options) {
  render(<Daypickr {...options} />, element);
}

module.exports = dayPickr;
