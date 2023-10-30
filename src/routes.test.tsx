import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import routes from './routes';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');

  return {
    ...actual!,
  };
});

vi.mock('zod', async () => {
  const actual = await vi.importActual('zod');

  return {
    ...actual!,
  };
});

describe('routes', () => {
  /** Path 에 정의된 페이지를 렌더링하도록 한다. */
  const renderMemoryRouter = (path: string) => {
    const memoryRouter = createMemoryRouter(routes, {
      initialEntries: [path],
    });

    render(
      <>
        <RouterProvider router={memoryRouter} />
      </>
    );
  };

  it('/ 로 접근하면, Products 을 렌더링한다.', async () => {
    renderMemoryRouter('/products');

    await waitFor(() => {
      screen.getByText('Products');
    });
  });

  it('/about 로 접근하면, About 페이지를 렌더링한다.', async () => {
    renderMemoryRouter('/about');

    await waitFor(() => {
      screen.getByText('About');
    });
  });

  it('/products 로 접근하면, Products 페이지를 렌더링한다.', async () => {
    renderMemoryRouter('/products');

    await waitFor(() => {
      screen.getByText('Products');
    });
  });

  it('/products/:NaN 으로 접근하면, Products 페이지를 렌더링한다.', async () => {
    renderMemoryRouter('/products/aaa');

    await waitFor(() => {
      screen.getByText('Products');
    });
  });

  it('/products/:number 로 접근하면, ProductDetail 페이지를 렌더링한다.', async () => {
    renderMemoryRouter('/products/12');

    await waitFor(() => {
      screen.getByText('ProductDetail');
    });
  });

  it('정의되지 않은 path 로 접근하면, Products 페이지를 렌더링한다.', async () => {
    renderMemoryRouter('/');

    await waitFor(() => {
      screen.getByText('Products');
    });
  });
});
