import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('shows 6 products by default', async () => {
  render(<App />);

  const titles = await screen.findAllByRole('heading');
  //   console.log('titles: ', titles);
  //   screen.debug();    see the view the virtually rendered DOM
  expect(titles).toHaveLength(6);
});

test('clicking on the Load More button loads 6 more products', async () => {
  render(<App />);

  const button = await screen.findByRole('button', { name: /load more/i });
  user.click(button);

  await waitFor(async () => {
    const titles = await screen.findAllByRole('heading');
    expect(titles).toHaveLength(12);
  });
});
