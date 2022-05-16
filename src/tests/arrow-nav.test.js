import { html } from 'htm/preact';
import { waitFor } from '@testing-library/preact';

import Daypicker from '../components/Daypicker';

import { renderExample } from './utils';
import { dateToYYYYMMDD } from '../utils/date';

const randomNumber = Math.floor(Math.random() * 100);

describe('arrow navigation', () => {
  test(`forward ${randomNumber} times`, async () => {
    const { table, valueInput, user, toggleButton } = renderExample();
    const today = new Date();
    const newDate = new Date(today);
    newDate.setDate(today.getDate() + randomNumber);
    const todayButton = table.querySelector(`[tabindex="0"]`);

    await user.click(toggleButton);

    todayButton.focus();

    await user.keyboard(
      Array(randomNumber)
        .fill(null)
        .map(() => `{ArrowRight}`)
        .join()
    );

    // for (const i of new Array(randomNumber).fill(null)) {
    //   await user.keyboard('{ArrowRight}');
    // }

    // the following promise somehow ensures all user interactions finish on time.
    await new Promise((res) => {
      setTimeout(() => {
        res(), 0;
      });
    });

    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(valueInput).toHaveValue(dateToYYYYMMDD(newDate));
    });
  });

  test(`backward ${randomNumber} times`, async () => {
    const { table, valueInput, user, toggleButton } = renderExample();
    const today = new Date();
    const newDate = new Date(today);
    newDate.setDate(today.getDate() - randomNumber);
    const todayButton = table.querySelector(`[tabindex="0"]`);

    await user.click(toggleButton);

    todayButton.focus();

    for (const i of new Array(randomNumber).fill(null)) {
      await user.keyboard('{ArrowLeft}');
    }

    // the following promise somehow ensures all user interactions finish on time.
    await new Promise((res) => {
      setTimeout(() => {
        res(), 0;
      });
    });

    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(valueInput).toHaveValue(dateToYYYYMMDD(newDate));
    });
  });
});
