import { html } from 'htm/preact';

import Daypicker from '../components/Daypicker';
import { renderExample } from './utils';

const example = html`<${Daypicker} />`;

describe('render', () => {
  test('initial', () => {
    const { container } = renderExample();
    expect(container).toBeInTheDocument();
  });

  test('dialog', () => {
    const { dialog } = renderExample();
    expect(dialog).toBeInTheDocument();
  });

  test('default day is today', () => {
    expect.assertions(2);
    const { table } = renderExample();
    const todayButton = table.querySelector('.isToday');

    expect(todayButton.getAttribute('aria-label')).toBe(new Date().toLocaleDateString());
    expect(todayButton.getAttribute('tabindex')).toBe('0');
  });
});
