"use client";

import { deleteStudent, getStudents } from "@/libs/students.axios";
import { useEffect, useState } from "react";
import StudentsTable from "./components/StudentsTable";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    _getStudents();
  }, []);

  const _getStudents = async () => {
    //const token = localStorage.getItem("token");
    const data = await getStudents();
    setStudents(data);
  };

  const hadleDelete = async (id) => {
    //const token = localStorage.getItem("token");
    const data = await deleteStudent(id);
    _getStudents();
  };

  return (
    <StudentsTable
      key={"students-table"}
      data={students}
      getData={_getStudents}
      handleDelete={hadleDelete}
    />
  );
};

export default Students;
