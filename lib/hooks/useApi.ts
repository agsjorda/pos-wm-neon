import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { apiClient } from '../services/api';

// Example: Fetch users
export function useUsers(options?: UseQueryOptions<any[], Error>) {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => apiClient.get<any[]>('/users'),
    ...options,
  });
}

// Example: Create user mutation
export function useCreateUser(options?: UseMutationOptions<any, Error, any>) {
  return useMutation({
    mutationFn: (userData: any) => apiClient.post('/users', userData),
    ...options,
  });
}

// Add more API hooks here as needed
