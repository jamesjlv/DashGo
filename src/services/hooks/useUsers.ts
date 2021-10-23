import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { api } from '../api';
import { makeServer } from '../mirage';

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  try {
    const { data, headers } = await api('users', { params: { page } });

    const totalCount = Number(headers['x-total-count']);
    const users = data.users.map((user: User & { created_at: string }) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.created_at).toLocaleDateString('pt-br', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
      };
    });
    return { users, totalCount };
  } catch (error) {
    return { users: [], totalCount: 0 };
  }
}

export function useUsers(page: number, options: UseQueryOptions) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10,
    ...options,
  }) as UseQueryResult<GetUsersResponse, unknown>;
}
