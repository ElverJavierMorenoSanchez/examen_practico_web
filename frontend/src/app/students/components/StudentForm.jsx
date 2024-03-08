"use client";

import Button from "@/components/Button";
import InputForm from "@/components/InputForm";
import { useRouter } from "next/navigation";

const StudentForm = ({ title, register, handleSubmit, onSubmit }) => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <h2 className="py-4 font-bold text-2xl">{title}</h2>
      <form className="w-1/2 px-5 py-4 border">
        <InputForm id={"cedula"} register={register} label={"Cédula"} />
        <InputForm id={"nombre"} register={register} label={"Nombres"} />
        <InputForm id={"apellidos"} register={register} label={"Apellidos"} />
        <InputForm id={"grupo"} register={register} label={"Grupo"} />
        <div className=" mt-2">
          <Button variant={"success"} onClick={handleSubmit(onSubmit)}>
            Guardar
          </Button>
          <Button
            variant={"danger"}
            className="mx-3"
            onClick={(e) => e.preventDefault() || router.push("/students")}
          >
            Regresar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
