import { html } from 'htm/preact';
import { render } from '@testing-library/preact';

import Daypicker from '../components/Daypicker';
import { isToday } from '../utils/date';

test('renders', () => {
  const { container } = render(`<${Daypicker} />`);
  expect(container).toBeInTheDocument();
});
