import { render, screen } from '@testing-library/react';

import { MemoryRouterProvider } from './testHelpers';

describe('routes', () => {
  const renderMemoryRouter = () => {
    render(<MemoryRouterProvider />);
  };

  beforeEach(() => {
    renderMemoryRouter();
  });

  test('초기 페이지는 Home 이다.', () => {
    screen.getByText('Home');
  });
});
