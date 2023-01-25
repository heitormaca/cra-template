import { Box, Stack } from '@mantine/core'
import { Outlet } from 'react-router'

const LayoutPublic: React.FC = () => {
  // const { state } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (state === AuthState.AUTHENTICATED) {
  //     navigate('/app');
  //   }
  // }, [state]);

  // if (state === AuthState.AUTHENTICATED || state === AuthState.LOADING)
  //   return null;

  return (
    <Stack align="center" justify="center" style={{ height: '100vh' }}>
      <Box>
        <Outlet />
      </Box>
    </Stack>
  )
}

export default LayoutPublic
