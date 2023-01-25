import { HomePage, LoginPage } from '@/pages/Public';
import { RouteObjectPermission } from 'rouper-navigation';

export default [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
] as RouteObjectPermission[];
