import userEvent from '@testing-library/user-event/dist/index.mjs';
import { render, screen } from '@testing-library/preact';
import { h } from 'preact';

import Daypickr from '../components/Daypickr';

export function renderExample(props = {}) {
  const { container } = render(<Daypickr id="example" test-id="example" {...props} />);

  return {
    input: screen.getByTestId('example-input'),
    valueInput: screen.getByTestId('example-value'),
    dialog: screen.getByRole('dialog', { hidden: true }),
    table: screen.getByRole('table', { hidden: true }),
    toggleButton: screen.getByRole('button'),
    user: userEvent.setup(),
    container,
  };
}

// the following promise somehow ensures all user interactions finish on time.
export async function finishInteractions() {
  await new Promise((res) => {
    setTimeout(() => {
      res(), 0;
    });
  });
}
