"use client";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import Button from "../Button";
import { usePathname, useRouter } from "next/navigation";

const TableLayout = ({ columns, data }) => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex flex-col w-full">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y  border-gray-700 divide-gray-700 py-5 px-4">
            <Button
              variant={"success"}
              onClick={() => router.push(`${pathname}/create`)}
            >
              + Nuevo
            </Button>
            <div className="overflow-hidden mt-4">
              <table className="min-w-full divide-y divide-gray-700 rounded-lg">
                <thead className=" bg-gray-700 ">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          className="px-6 py-3 text-center text-xs font-medium text-gray-200 uppercase"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y  divide-gray-700 text-center">
                  {table.getRowModel().rows.map((row) => (
                    <tr
                      key={row.id}
                      className="even:bg-gray-800 hover:bg-gray-800 text-center"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase "
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
