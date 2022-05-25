import { renderExample } from './utils';

describe('Mouse navigation', () => {
  // mouse navigation
  test('disabled buttons are not clickable', async () => {
    const today = new Date();
    const { user, table, toggleButton, valueInput } = renderExample({
      disabledDayFn: (date) => today.getDay() === date.getDay(),
    });

    await user.click(toggleButton);
    const todayButton = table.querySelector('[tabindex="0"]');
    await user.click(todayButton);

    expect(valueInput).toHaveValue('');
  });
});
