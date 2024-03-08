import React from "react";

const InputForm = ({ id, label, register, defaultValue }) => {
  return (
    <div className="w-full py-2">
      <label htmlFor={id} className="text-white">
        {label}
      </label>
      <input
        className="w-full px-4 py-2 border text-white bg-gray-500 border-slate-500 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent mt-1"
        id={id}
        {...register(id)}
        type="text"
        placeholder={label}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputForm;
