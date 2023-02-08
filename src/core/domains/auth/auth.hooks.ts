import { useAuth } from '@/core/context/auth';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { useRouperClaimsState } from 'rouper-navigation';
import authServices from './auth.services';
import { AuthRequestParams, AuthResponse, Token } from './auth.types';

export function useAuthLogin() {
  const [, setClaims] = useRouperClaimsState();

  const navigate = useNavigate();

  const { setSession } = useAuth();

  return useMutation<AuthResponse, AxiosError, AuthRequestParams>(
    authServices.access,
    {
      onSuccess(response) {
        localStorage.setItem('token', response.token);

        const token = jwtDecode<Token>(response.token);

        setClaims(token.permissions);

        setSession({
          user: { id: token.sub, name: token.name, email: token.email },
          tokens: {
            accessToken: response.token,
            refreshToken: response.token,
            tokenType: 'Bearer',
            expirateAt: token.exp,
            idToken: null,
          },
        });

        navigate('/app');
      },
      onError(error) {
        console.log(error);
      },
    },
  );
}
