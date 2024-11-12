import { useEffect, useState } from "react";
import { getUsers } from "../../lib/api/methods";
import UsersTable from "./UsersTable";
import { User } from "./types";

const Container = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
      setIsLoading(false);
    };

    fetchUsers();
  }, []);
  return <UsersTable isLoading={isLoading} users={users} />;
};

export default Container;
