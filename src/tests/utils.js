import { html } from 'htm/preact';
import userEvent from '@testing-library/user-event/dist/index.mjs';
import { render, screen } from '@testing-library/preact';

import Daypicker from '../components/Daypicker';

export function renderExample(props = {}) {
  const { container } = render(html`<${Daypicker} id="example" ...${props} />`);

  return {
    valueInput: screen.getByTestId('example-value'),
    dialog: screen.getByRole('dialog', { hidden: true }),
    table: screen.getByRole('table', { hidden: true }),
    toggleButton: screen.getByText('Choose date'),
    user: userEvent.setup(),
    container,
  };
}
