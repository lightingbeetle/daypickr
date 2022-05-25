import { screen, fireEvent, waitFor } from '@testing-library/preact';

import { renderExample } from './utils';

describe('toggle', () => {
  test('toggle toggleButton', async () => {
    expect.assertions(2);
    const { toggleButton, dialog, user } = renderExample();

    await user.click(toggleButton);
    await waitFor(() => expect(dialog).toBeVisible());
    await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toBe('true'));
  });

  test('close on click', async () => {
    expect.assertions(2);
    const { toggleButton, dialog, user } = renderExample();

    await user.click(toggleButton);
    await user.click(toggleButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toBe('false'));
  });

  test('close on ESC', async () => {
    expect.assertions(2);
    const { toggleButton, dialog, user } = renderExample();

    await user.click(toggleButton);
    await user.keyboard('{Escape}');
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toBe('false'));
  });

  test('close on select', async () => {
    expect.assertions(2);
    const { toggleButton, dialog, user } = renderExample();

    await user.click(toggleButton);
    const today = dialog.querySelector('.isToday');
    await user.click(today);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toBe('false'));
  });

  test('close on close click', async () => {
    expect.assertions(2);
    const { toggleButton, dialog, user } = renderExample();
    await user.click(toggleButton);

    const closeButton = screen.getByText('Close');
    await user.click(closeButton);
    await waitFor(() => expect(dialog).not.toBeVisible());
    await waitFor(() => expect(toggleButton.getAttribute('aria-expanded')).toBe('false'));
  });
});
