import { useState } from "react";
import {
  CoreOptions,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { TableColumnVisibilityMenu } from "@components/general/TableColumnVisibilityMenu/TableColumnVisibilityMenu";
import { TableSortButton } from "@components/general/TableSortButton/TableSortButton";
import { TableCell } from "@components/general/TableCell/TableCell";
import { TableHeaderCell } from "@components/general/TableHeaderCell/TableHeaderCell";

type Props<T> = {
  columns: CoreOptions<T>["columns"];
  data: T[];
  defaultSorting?: SortingState;
  onRowClick?: (item: T) => void;
};

export const Table = <T,>({
  columns,
  data,
  defaultSorting,
  onRowClick,
}: Props<T>) => {
  const [sorting, setSorting] = useState<SortingState>(defaultSorting ?? []);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  return (
    <table className="w-full rounded-sm overflow-hidden shadow-normal text-sm leading-[24px]">
      <thead className="bg-primaryLight text-textInverted text-left">
        {table.getHeaderGroups().map((group) => (
          <tr className="text-textInverted" key={group.id}>
            {group.headers.map(({ id, column, getContext }) => {
              const { meta, header } = column.columnDef;
              const sortable = column.getCanSort();
              const label = flexRender(header, getContext());
              const sortColumnId = table.getState().sorting[0]?.id;
              const descending = table.getState().sorting[0]?.desc;

              return (
                <TableHeaderCell key={id} align={meta?.align}>
                  {sortable ? (
                    <TableSortButton
                      columnId={column.id}
                      sortColumnId={sortColumnId ?? ""}
                      descending={descending ?? false}
                      label={label}
                      onClick={() => column.toggleSorting(!descending)}
                    />
                  ) : (
                    label
                  )}
                </TableHeaderCell>
              );
            })}
            <th className="text-right">
              <TableColumnVisibilityMenu
                items={table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => ({
                    id: column.id,
                    label: column.columnDef.header,
                    visible: column.getIsVisible(),
                    onClick: ({ visible }) => column.toggleVisibility(!visible),
                  }))}
              />
            </th>
          </tr>
        ))}
      </thead>
      <tbody>
        {table
          .getRowModel()
          .rows.map(({ id: rowId, original, getVisibleCells }) => (
            <tr
              className="bg-white text-text border-t hover:bg-gray-50 cursor-pointer"
              key={rowId}
              onClick={() => onRowClick?.(original)}
            >
              {getVisibleCells().map(({ id: cellId, column, getContext }) => (
                <TableCell key={cellId} align={column.columnDef.meta?.align}>
                  {flexRender(column.columnDef.cell, getContext())}
                </TableCell>
              ))}
              <td />
            </tr>
          ))}
      </tbody>
    </table>
  );
};
