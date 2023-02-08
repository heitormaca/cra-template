import { githubAxiosInstance, GITHUB_BASE_URL } from '@/core/configs/axios';
import { Follower } from './follower.types';

const URL_CONTROLLER = `${GITHUB_BASE_URL}/users`;

export default {
  async list(user: string) {
    const result = await githubAxiosInstance.get<Follower[]>(
      `${URL_CONTROLLER}/${user}/followers`,
    );

    return result.data;
  },
};
