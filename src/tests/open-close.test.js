import { html } from 'htm/preact';
import { render, screen, fireEvent, waitFor } from '@testing-library/preact';

import Daypicker from '../components/Daypicker';

const example = html`<${Daypicker} />`;

function getExample() {
  render(example);

  return {
    button: screen.getByText('Choose date'),
    dialog: screen.getByRole('dialog', { hidden: true }),
  };
}

describe('toggle', () => {
  test('toggle button', async () => {
    expect.assertions(2);
    const { button, dialog } = getExample();

    fireEvent.click(button);
    await waitFor(() => expect(dialog).toBeVisible());
    await waitFor(() => expect(button.getAttribute('aria-expanded')).toBe('true'));
  });

  test('close on click', async () => {
    expect.assertions(2);

    const { button, dialog } = getExample();
    fireEvent.click(button);
    fireEvent.click(button);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(button.getAttribute('aria-expanded')).toBe('false'));
  });

  test('close on ESC', async () => {
    expect.assertions(2);
    const { button, dialog } = getExample();

    fireEvent.click(button);
    fireEvent.keyDown(dialog, { key: 'Escape' });
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(button.getAttribute('aria-expanded')).toBe('false'));
  });

  test('close on select', async () => {
    expect.assertions(2);
    const { button, dialog } = getExample();
    fireEvent.click(button);

    const today = dialog.querySelector('.isToday');
    fireEvent.click(today);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(button.getAttribute('aria-expanded')).toBe('false'));
  });

  test('close on close click', async () => {
    expect.assertions(2);
    const { button, dialog } = getExample();

    fireEvent.click(button);
    const close = screen.getByText('Close');
    fireEvent.click(close);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(button.getAttribute('aria-expanded')).toBe('false'));
  });
});
