import { Token } from '@/core/domains/auth/auth.types';
import jwtDecode from 'jwt-decode';

const getDecodeToken = () => {
  const token = localStorage.getItem('token');

  if (!token) return null;

  let decodedToken;

  try {
    decodedToken = jwtDecode<Token>(token);
  } catch (err) {
    return null;
  }

  return decodedToken;
};

export default getDecodeToken;
