import { screen, waitFor } from '@testing-library/preact';

import { renderExample } from './utils';

describe('toggle', () => {
  test('toggle toggleButton', async () => {
    expect.assertions(2);
    const { toggleButton, dialog, user } = renderExample();

    await user.click(toggleButton);
    expect(dialog).toBeVisible();
    expect(toggleButton.getAttribute('aria-expanded')).toBe('true');
  });

  test('close on click', async () => {
    expect.assertions(2);
    const { toggleButton, dialog, user } = renderExample();

    await user.click(toggleButton);
    await user.click(toggleButton);
    expect(dialog).not.toBeVisible();
    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
  });

  test('close on ESC', async () => {
    expect.assertions(2);
    const { toggleButton, dialog, user } = renderExample();

    await user.click(toggleButton);
    await user.keyboard('{Escape}');
    expect(dialog).not.toBeVisible();
    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
  });

  test('close on select', async () => {
    expect.assertions(2);
    const { toggleButton, dialog, user } = renderExample();

    await user.click(toggleButton);
    const today = dialog.querySelector('.isToday');
    await user.click(today);
    expect(dialog).not.toBeVisible();
    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
  });

  test('close on close click', async () => {
    expect.assertions(2);
    const { toggleButton, dialog, user } = renderExample();
    await user.click(toggleButton);

    const closeButton = screen.getByText('Close');
    await user.click(closeButton);
    expect(dialog).not.toBeVisible();
    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
  });

  test('close on outside click', async () => {
    expect.assertions(2);
    const { toggleButton, dialog, user } = renderExample();

    await user.click(toggleButton);
    await user.click(document.body);
    expect(dialog).not.toBeVisible();
    expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
  });

  test('keep input focus if clicked outside of opened dialog but on input', async () => {
    const { user, toggleButton, input } = renderExample();

    await user.click(toggleButton);
    await user.click(input);

    expect(document.activeElement).toEqual(input);
  });
});
