import {
  Cell,
  ColumnDef,
  flexRender,
  Row,
  Table as TanStackTable,
} from "@tanstack/react-table";
import * as S from "./styled";

type ContentProps<T> = {
  table: TanStackTable<T>;
  columnDefs: ColumnDef<T>[];
  isLoading?: boolean;
  className?: string;
};

const Content = <T,>({ table, columnDefs, isLoading }: ContentProps<T>) => {
  const renderTableRows = (row: Row<T>) =>
    row
      .getVisibleCells()
      .map((cell: Cell<T, unknown>) => (
        <S.StyledCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </S.StyledCell>
      ));

  const emptyResults = () => (
    <S.StyledTableBodyRow>
      <S.StyledCell colSpan={columnDefs.length}>
        <S.StyledEmptyState title="Empty results..." />
      </S.StyledCell>
    </S.StyledTableBodyRow>
  );

  const renderLoader = () => (
    <tr>
      <S.StyledLoaderCell colSpan={columnDefs.length}>
        <S.StyledLoaderDiv>
          <S.StyledLoader /> Loading...
        </S.StyledLoaderDiv>
      </S.StyledLoaderCell>
    </tr>
  );

  return (
    <>
      <S.StyledTable>
        <S.StyledTableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <S.StyledTableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <S.StyledHeaderCell
                  key={header.id}
                  style={{
                    minWidth: header.column.columnDef.size,
                    maxWidth: header.column.columnDef.size,
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </S.StyledHeaderCell>
              ))}
            </S.StyledTableRow>
          ))}
        </S.StyledTableHeader>
        <tbody>
          {!isLoading
            ? table.getRowModel().rows?.length
              ? table
                  .getRowModel()
                  .rows.map((row) => (
                    <S.StyledTableBodyRow key={row.id}>
                      {renderTableRows(row)}
                    </S.StyledTableBodyRow>
                  ))
              : emptyResults()
            : renderLoader()}
        </tbody>
      </S.StyledTable>
    </>
  );
};

export default Content;
