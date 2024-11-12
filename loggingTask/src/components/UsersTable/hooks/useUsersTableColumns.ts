import { ColumnDef } from "@tanstack/react-table";
import { User } from "../types";
import { useTranslation } from "react-i18next";

const useUsersTableColumns = (): ColumnDef<User>[] => {
  const { t } = useTranslation();

  return [
    {
      accessorKey: "name",
      header: t(`columns.name`),
      size: 300,
      cell: ({ row }) => row.original.name,
    },
    {
      accessorKey: "username",
      header: t(`columns.username`),
      size: 300,
      cell: ({ row }) => row.original.username,
    },
    {
      accessorKey: "email",
      header: t(`columns.email`),
      size: 300,
    },
    {
      accessorKey: "phone",
      header: t(`columns.phone`),
      size: 300,
    },
  ];
};

export { useUsersTableColumns };
