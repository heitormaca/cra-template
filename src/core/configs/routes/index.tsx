import { LayoutConfig } from '@/components/Layout';
import publicRoutes from './collections/public.routes';
import privateRoutes from './collections/private.routes';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useWithRouter } from 'rouper-navigation';

const RouterSetting = () => {
  const router = createBrowserRouter(
    useWithRouter([
      {
        path: '/',
        element: <LayoutConfig type="public" />,
        children: publicRoutes,
      },
      {
        path: 'app',
        element: <LayoutConfig type="private" />,
        children: privateRoutes,
      },
    ]),
  );

  return <RouterProvider router={router} />;
};

export default RouterSetting;
