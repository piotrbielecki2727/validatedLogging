import { useEffect, useRef, useState } from "react";
import { User } from "../types";
import { getUsers } from "../../../lib/api/methods";

export const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers(controller);
        setUsers(fetchedUsers);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Error fetching users: ", error);
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
  }, []);

  return { users, isLoading };
};
