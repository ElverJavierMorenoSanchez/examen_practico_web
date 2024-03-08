"use client";

import Button from "@/components/Button";
import TableLayout from "@/components/Table/TableLayout";
import { useRouter } from "next/navigation";
import { MdDelete, MdEdit } from "react-icons/md";

const StudentsTable = ({ data, handleDelete }) => {
  const router = useRouter();

  const columns = [
    { accessorKey: "cedula", header: "Cédula" },
    { accessorKey: "nombre", header: "Nombres" },
    { accessorKey: "apellidos", header: "Apellidos" },
    { accessorKey: "grupo", header: "grupo" },
    {
      accessorKey: "id",
      header: "Opciones",
      cell: (row) => {
        return (
          <div className="w-full flex flex-row justify-center items-center gap-2">
            <Button
              variant={"warning"}
              onClick={() => router.push(`/students/${row?.row?.original?.id}`)}
            >
              <MdEdit size={"1.5rem"} />
            </Button>
            <Button
              variant={"danger"}
              onClick={() => handleDelete(row?.row?.original?.id)}
            >
              <MdDelete size={"1.5rem"} />
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className=" w-full flex flex-col gap-5 justify-start">
      <TableLayout columns={columns} data={data} />
    </div>
  );
};

export default StudentsTable;
