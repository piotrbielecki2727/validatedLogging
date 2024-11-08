import { useEffect, useState } from "react";
import { getUsers } from "../../lib/api/methods";
import UsersTable from "./UsersTable";
import { User } from "./types";

const Container = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);
  return <UsersTable users={users} />;
};

export default Container;
