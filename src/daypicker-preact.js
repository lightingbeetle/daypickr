import { html, render } from "htm/preact";

import Daypicker from "./components/Daypicker";

const daypickers = Array.from(document.querySelectorAll("[data-daypicker]"));

daypickers.map((daypicker) => {
  render(html`<${Daypicker} />`, daypicker);
});
