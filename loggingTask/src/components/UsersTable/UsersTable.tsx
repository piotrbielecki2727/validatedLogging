import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSection from "./components/FilterSection";
import { User } from "./types";
import { FilterValues } from "./components/FilterSection/types";
import useTable from "./hooks/useTable";
import { filterUsers, setFilterValues } from "../../lib/store/usersSlice";
import Table from "../ui/Table";
import { selectFilteredData } from "../../lib/store/selectors";
import { useUsersTableColumns } from "./hooks/useUsersTableColumns";

type UsersTableProps = {
  users: User[];
};

const UsersTable = ({ users }: UsersTableProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "users/setUsers", payload: users });
  }, [users, dispatch]);

  const tableColumns = useUsersTableColumns();
  const columns = useMemo(() => tableColumns, []);

  const { filteredUsers, filterValues } = useSelector(selectFilteredData);

  const handleFilterChange = (newFilterValues: FilterValues) => {
    dispatch(setFilterValues(newFilterValues));
    dispatch(filterUsers());
  };

  const { columnDefs, table } = useTable<User>({
    columns,
    data: filteredUsers,
  });

  return (
    <Table>
      <Table.Header>
        <FilterSection
          setFilterValues={(updater) => {
            const newFilterValues = updater(filterValues);
            handleFilterChange(newFilterValues);
          }}
          filterValues={filterValues}
        />
      </Table.Header>
      <Table.Content table={table} columnDefs={columnDefs} />
    </Table>
  );
};

export default UsersTable;
