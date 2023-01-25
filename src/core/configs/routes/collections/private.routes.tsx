import { FallowersPage, RepositoriesPage } from '@/pages/Private';
import { RiGitRepositoryLine, RiGroupLine } from 'react-icons/ri';
import { RouteObjectPermission } from 'rouper-navigation';

export default [
  {
    index: true,
    element: <RepositoriesPage />,
  },
  {
    path: 'repositories',
    element: <RepositoriesPage />,
    others: {
      title: 'Repositórios',
      icon: <RiGitRepositoryLine />,
    },
  },
  {
    path: 'followers',
    element: <FallowersPage />,
    others: { title: 'Seguidores', icon: <RiGroupLine /> },
  },
] as RouteObjectPermission[];
