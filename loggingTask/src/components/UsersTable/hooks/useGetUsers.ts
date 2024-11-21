import { useEffect, useRef, useState } from 'react';
import { getUsers } from '../../../lib/api/methods';
import { User } from '../../../types';

export const useGetUsers = (shouldFetch: boolean) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const abortControllerRef = useRef<AbortController | null>(null);
  const usersFetchedRef = useRef(false);

  useEffect(() => {
    if (!shouldFetch || usersFetchedRef.current) return;
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers(controller);
        setUsers(fetchedUsers);
        usersFetchedRef.current = true;
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error('Error fetching users: ', error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [shouldFetch]);

  return { users, isLoading };
};
