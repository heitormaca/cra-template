import { RouperClient, RouperProvider } from 'rouper-navigation';
import { axiosInstance } from './core/configs/axios';
import { MantineConfigProvider } from './core/configs/mantine';
import queryClient, { QueryClientProvider } from './core/configs/react-query';
import RouterSetting from './core/configs/routes';
import { AuthProvider, AuthStateTypes, Session } from './core/context/auth';

const rouperClient = new RouperClient({
  // storage: window.localStorage,
  // storageKeyClaims: 'MY_STORAGE_KEY',
});
function App() {
  function watchSession(session: Session | null, state: AuthStateTypes) {
    if (state === 'AUTHENTICATED') {
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${session?.tokens.accessToken}`;
    } else if (state === 'UNAUTHENTICATED') {
      axiosInstance.defaults.headers.common['Authorization'] = ``;
    }
  }

  return (
    <AuthProvider watchSession={watchSession}>
      <RouperProvider client={rouperClient}>
        <QueryClientProvider client={queryClient}>
          <MantineConfigProvider>
            <RouterSetting />
          </MantineConfigProvider>
        </QueryClientProvider>
      </RouperProvider>
    </AuthProvider>
  );
}

export default App;
