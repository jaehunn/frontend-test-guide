import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from './routes';

const memoryRouter = createMemoryRouter(routes);

export const MemoryRouterProvider = () => {
  return <RouterProvider router={memoryRouter} />;
};
