"use client";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterSection from "./components/FilterSection";
import { User } from "./types";
import { FilterValues } from "./components/FilterSection/types";
import { usersTableColumns } from "./UsersTableColumns";
import useTable from "./hooks/useTable";
import { filterUsers, setFilterValues } from "../../lib/store/usersSlice";
import Table from "../ui/Table";
import { selectFilteredData } from "../../lib/store/selectors";

type UsersTableProps = {
  users: User[];
};

const UsersTable = ({ users }: UsersTableProps) => {
  const dispatch = useDispatch();

  useMemo(() => {
    dispatch({ type: "users/setUsers", payload: users });
  }, [users, dispatch]);

  const { filteredUsers, filterValues } = useSelector(selectFilteredData);

  const columns = useMemo(() => usersTableColumns, []);

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
