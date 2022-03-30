import { html } from 'htm/preact';
import { render, screen } from '@testing-library/preact';

import Daypicker from '../components/Daypicker';

describe('render', () => {
  const example = html`<${Daypicker} />`;

  test('initial', () => {
    const { container } = render(example);
    expect(container).toBeInTheDocument();
  });

  test('dialog', () => {
    render(example);
    const dialog = screen.getByRole('dialog', { hidden: true });
    expect(dialog).toBeInTheDocument();
  });

  test('default day is today', () => {
    expect.assertions(2);
    const { container } = render(example);
    const todayButton = container.querySelector('.isToday');

    expect(todayButton.getAttribute('aria-label')).toBe(new Date().toLocaleDateString());
    expect(todayButton.getAttribute('tabindex')).toBe('0');
  });
});
