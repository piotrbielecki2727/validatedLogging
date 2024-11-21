import { ColumnDef } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';
import { TRANSLATIONS } from '../../../languages/translationKeys';
import { User } from '../../../types';

const useUsersTableColumns = (): ColumnDef<User>[] => {
  const { t } = useTranslation();

  return [
    {
      accessorKey: 'name',
      header: t(TRANSLATIONS.COLUMNS.NAME),
      size: 300,
      cell: ({ row }) => row.original.name,
    },
    {
      accessorKey: 'username',
      header: t(TRANSLATIONS.COLUMNS.USERNAME),
      size: 300,
      cell: ({ row }) => row.original.username,
    },
    {
      accessorKey: 'email',
      header: t(TRANSLATIONS.COLUMNS.EMAIL),
      size: 300,
    },
    {
      accessorKey: 'phone',
      header: t(TRANSLATIONS.COLUMNS.PHONE),
      size: 300,
    },
  ];
};

export { useUsersTableColumns };
