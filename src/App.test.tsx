import { render, screen } from '@testing-library/react';

import App from './App';

vi.mock('axios', async () => {
  const actual = await vi.importActual('axios');

  return {
    ...actual,
    get: vi.fn(),
  };
});

describe('App', () => {
  it('Default', () => {
    render(<App />);

    expect(screen.getByText('App')).toBeInTheDocument();
  });
});
