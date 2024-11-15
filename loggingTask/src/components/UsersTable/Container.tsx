import { useGetUsers } from "./hooks/useGetUsers";
import UsersTable from "./UsersTable";

const Container = () => {
  const { users, isLoading } = useGetUsers();
  return <UsersTable users={users} isLoading={isLoading} />;
};

export default Container;
