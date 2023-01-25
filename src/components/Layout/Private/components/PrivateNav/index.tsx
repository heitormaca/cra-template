import { Group, Navbar, Text, UnstyledButton } from '@mantine/core';
import { useRouperClient } from 'rouper-navigation';
import { useNavigate, useLocation } from 'react-router';

const PrivateNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const rouperClient = useRouperClient();

  const routes = rouperClient.getRoutes();

  const privateRoutes = routes.filter((item) => item.path === 'app')[0];

  return (
    <Navbar width={{ base: 250 }}>
      {privateRoutes.children?.map((route) => {
        const path = `/app/${route.path}`;

        return (
          <UnstyledButton
            key={path}
            onClick={() => navigate(path)}
            p="md"
            sx={(theme) => ({
              backgroundColor:
                location.pathname === path
                  ? theme.colorScheme === 'dark'
                    ? theme.colors.blue[9]
                    : theme.colors.blue[0]
                  : 'transparent',
            })}
          >
            <Group>
              {route.others?.icon}
              <Text>{route.others?.title}</Text>
            </Group>
          </UnstyledButton>
        );
      })}
    </Navbar>
  );
};

export default PrivateNav;
