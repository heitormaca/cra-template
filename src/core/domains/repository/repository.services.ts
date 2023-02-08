import { githubAxiosInstance } from '@/core/configs/axios';
import { Repository } from './repository.types';

export default {
  async list(user: string) {
    const result = await githubAxiosInstance.get<Repository[]>(
      `/users/${user}/repos`,
    );

    return result.data;
  },
};
