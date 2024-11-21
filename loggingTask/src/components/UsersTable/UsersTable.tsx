import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilterSection from './components/FilterSection';
import useTable from './hooks/useTable';
import { filterUsers, setFilterValues } from '../../lib/store/usersSlice';
import Table from '../ui/Table';
import { selectFilteredData } from '../../lib/store/selectors';
import { useUsersTableColumns } from './hooks/useUsersTableColumns';
import { FilterValues, User } from '../../types';

type UsersTableProps = {
  users: User[];
  isLoading: boolean;
};

const UsersTable = ({ users, isLoading }: UsersTableProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'users/setUsers', payload: users });
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
      <Table.Content
        isLoading={isLoading}
        table={table}
        columnDefs={columnDefs}
      />
    </Table>
  );
};

export default UsersTable;
