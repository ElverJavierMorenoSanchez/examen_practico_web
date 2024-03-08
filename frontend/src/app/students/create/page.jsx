"use client";
import { postStudent } from "@/libs/students.axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import StudentForm from "../components/StudentForm";

const CreateCourse = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    cedula: "",
    nombre: "",
    apellidos: "",
    grupo: "",
  });

  const onSubmit = async (data) => {
    const student = await postStudent(data);
    router.push("/students");
  };
  return (
    <StudentForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      title={"Crear Nuevo Estudiante"}
    />
  );
};

export default CreateCourse;
