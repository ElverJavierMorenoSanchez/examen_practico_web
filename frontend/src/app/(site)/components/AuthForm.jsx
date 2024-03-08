"use client";
import InputForm from "@/components/InputForm";
import { signin } from "@/libs/auth.axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AuthForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = async (data) => {
    const token = await signin(data);

    if (token?.message) {
      toast.error(token.message);
      return;
    }

    localStorage.setItem("token", token.token);
    toast.success("Inicio de sesión exitoso!");
    router.push("/cursos");
  };

  return (
    <div className="w-1/3 border border-slate-500 py-10 px-5">
      <form className=" w-full flex flex-col gap-4">
        <InputForm id={"email"} register={register} />
        <InputForm id={"password"} register={register} />
        <button
          className="bg-slate-500 text-white py-2 rounded-md"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
