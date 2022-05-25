const render = require('preact').render;
const Daypicker = require('./components/Daypicker');

function dayPicker(element, options) {
  render(<Daypicker {...options} />, element);
}

module.exports = dayPicker;
