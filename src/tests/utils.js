import userEvent from '@testing-library/user-event/dist/index.mjs';
import { render, screen } from '@testing-library/preact';

export function renderExample(example) {
  render(example);

  return {
    valueInput: screen.getByTestId('example-value'),
    dialog: screen.getByRole('dialog', { hidden: true }),
    table: screen.getByRole('table', { hidden: true }),
    toggleButton: screen.getByText('Choose date'),
    user: userEvent.setup(),
  };
}
