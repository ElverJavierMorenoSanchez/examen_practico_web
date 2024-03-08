"use client";
import { useState, useEffect } from "react";
import { getStudent, putStudent } from "@/libs/students.axios";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import StudentForm from "../components/StudentForm";

const EditStudent = () => {
  const router = useRouter();
  const [student, setStudent] = useState({});
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm(student);

  useEffect(() => {
    _getStudent();
  }, []);

  const _getStudent = async () => {
    const _student = await getStudent(params.id);
    setValue("cedula", _student.cedula);
    setValue("nombre", _student.nombre);
    setValue("apellidos", _student.apellidos);
    setValue("grupo", _student.grupo);
    setStudent(_student);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const student = await putStudent(params.id, data);
    router.push("/students");
  };
  return (
    <StudentForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      title={"Editar Estudiante"}
    />
  );
};

export default EditStudent;
