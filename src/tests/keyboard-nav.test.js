import { waitFor } from '@testing-library/preact';

import { renderExample } from './utils';
import { dateToYYYYMMDD, getFirstDayOfWeek, getLastDayOfWeek, getMonth } from '../utils/date';

const randomNumber = Math.floor(Math.random() * 100);

describe('keyboard navigation', () => {

  test(`'Enter' key sends a date to input value`, async () => {
    const { user, table, toggleButton, valueInput } = renderExample();
    const todayButton = table.querySelector('[tabindex="0"]')
    
    await user.click(toggleButton);
    
    todayButton.focus();
    const today = new Date();
    
    await user.keyboard('{Enter}');

    await finishInteractions();

    await waitFor(() => {
      expect(valueInput).toHaveValue(dateToYYYYMMDD(today))
    })
  });

  test(`arrow forward ${randomNumber} times`, async () => {
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

    await finishInteractions();

    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(valueInput).toHaveValue(dateToYYYYMMDD(newDate));
    });
  });

  test(`arrow backward ${randomNumber} times`, async () => {
    const { table, valueInput, user, toggleButton } = renderExample();
    const today = new Date();
    const newDate = new Date(today);
    newDate.setDate(today.getDate() - randomNumber);
    const todayButton = table.querySelector(`[tabindex="0"]`);

    await user.click(toggleButton);

    todayButton.focus();

    await user.keyboard(
      Array(randomNumber)
        .fill(null)
        .map(() => `{ArrowLeft}`)
        .join()
    );

    await finishInteractions();

    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(valueInput).toHaveValue(dateToYYYYMMDD(newDate));
    });
  });

  test(`'PageUp' key navigates to last month and same day`, async () => {
    const example = renderExample();
    const { valueInput } = example;

    const today = new Date();
    const lastMonthDate = getMonth(today, today.getMonth() - 1);
    await focusAndSelectDate('{PageUp}', example);

    await waitFor(() => {
      expect(valueInput).toHaveValue(dateToYYYYMMDD(lastMonthDate));
    });
  });

  test(`'PageUp' + 'Shift' key navigates to last year and same day`, async () => {
    const example = renderExample();
    const { valueInput } = example;

    const today = new Date();
    const newDate = new Date(today);
    newDate.setFullYear(today.getFullYear() - 1);
    await focusAndSelectDate('{Shift>}{PageUp}{/Shift}', example);

    await waitFor(() => {
      expect(valueInput).toHaveValue(dateToYYYYMMDD(newDate));
    });
  });

  test(`'PageDown' key navigates to next month and same day`, async () => {
    const example = renderExample();
    const { valueInput } = example;

    const today = new Date();
    const nextMonthDate = getMonth(today, today.getMonth() + 1);
    await focusAndSelectDate('{PageDown}', example);

    await waitFor(() => {
      expect(valueInput).toHaveValue(dateToYYYYMMDD(nextMonthDate));
    });
  });

  test(`'PageDown' + 'Shift' key navigates to next year and same day`, async () => {
    const example = renderExample();
    const { valueInput } = example;

    const today = new Date();
    const newDate = new Date(today);
    newDate.setFullYear(today.getFullYear() + 1);
    await focusAndSelectDate('{Shift>}{PageDown}{/Shift}', example);

    await waitFor(() => {
      expect(valueInput).toHaveValue(dateToYYYYMMDD(newDate));
    });
  });

  describe('Monday is first day of the week', () => {
    const firstDayOfWeek = 1;

    test(`'Home' key navigates to first day of the week`, async () => {
      const example = renderExample({ firstDayOfWeek });
      const { valueInput } = example;

      const firstDayOfWeekDate = getFirstDayOfWeek(new Date(), firstDayOfWeek);
      await focusAndSelectDate('{Home}', example);

      await waitFor(() => {
        expect(valueInput).toHaveValue(dateToYYYYMMDD(firstDayOfWeekDate));
      });
    });

    test(`'End' key navigates to last day of the week`, async () => {
      const example = renderExample({ firstDayOfWeek });
      const { valueInput } = example;

      const lastDayOfWeekDate = getLastDayOfWeek(new Date(), firstDayOfWeek);
      await focusAndSelectDate('{End}', example);

      await waitFor(() => {
        expect(valueInput).toHaveValue(dateToYYYYMMDD(lastDayOfWeekDate));
      });
    });
  });

  describe('Sunday is first day of the week', () => {
    const firstDayOfWeek = 0;

    test(`'Home' key navigates to first day of the week`, async () => {
      const example = renderExample({ firstDayOfWeek });
      const { valueInput } = example;

      const firstDayOfWeekDate = getFirstDayOfWeek(new Date(), firstDayOfWeek);
      await focusAndSelectDate('{Home}', example);

      await waitFor(() => {
        expect(valueInput).toHaveValue(dateToYYYYMMDD(firstDayOfWeekDate));
      });
    });

    test(`'End' key navigates to last day of the week`, async () => {
      const example = renderExample({ firstDayOfWeek });
      const { valueInput } = example;

      const lastDayOfWeekDate = getLastDayOfWeek(new Date(), firstDayOfWeek);
      await focusAndSelectDate('{End}', example);

      await waitFor(() => {
        expect(valueInput).toHaveValue(dateToYYYYMMDD(lastDayOfWeekDate));
      });
    });
  });

  describe('Disabled dates', () => {
    test('disabled date has aria-disabled and is unselectable', async () => {
      expect.assertions(2);
      const today = new Date();

      const { user, table, toggleButton, valueInput } = renderExample({
        disabledDayFn: (date) => today.getDay() === date.getDay(),
      });
      
      const todayButton = table.querySelector(`[tabindex="0"]`);
      
      await user.click(toggleButton);
      todayButton.focus();
      
      await finishInteractions()

      await user.keyboard("{Enter}")

      expect(todayButton).toHaveAttribute('aria-disabled');
      await waitFor(() => {        
        expect(valueInput).toHaveValue('');
      })
    })
  });
});

// the following promise somehow ensures all user interactions finish on time.
async function finishInteractions() {
  await new Promise((res) => {
    setTimeout(() => {
      res(), 0;
    });
  });
}

async function focusAndSelectDate(key, { table, user, toggleButton }) {
  const todayButton = table.querySelector(`[tabindex="0"]`);

  await user.click(toggleButton);
  todayButton.focus();
  await user.keyboard(key);
  await finishInteractions()
  await user.keyboard('{Enter}');
}
