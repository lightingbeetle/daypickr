import { renderExample } from './utils';

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

  test('renders SVG with children 3 levels deep', () => {
    const { toggleButton } = renderExample({
      calendarIcon: {
        type: 'svg',
        width: '10',
        height: '10',
        children: [
          {
            type: 'g',
            transform: 'rotate(180)',
            children: [
              {
                type: 'g',
                transform: 'rotate(180)',
                children: [
                  {
                    type: 'rect',
                    width: 10,
                    height: 10,
                  },
                ],
              },
            ],
          },
        ],
      },
    });

    expect(toggleButton.querySelector('svg')).toBeInTheDocument();
  });
});
