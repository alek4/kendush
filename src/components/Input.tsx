import { useField } from "formik";
import React, { ChangeEventHandler, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

export const Input: React.FC<InputProps> = ({ label, size: _, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <div>
      <input
        className={`w-full shadow-sm rounded-md border-2 border-zinc-400 py-1 px-3 focus:outline-none focus:border-zinc-700 placeholder:text-gray-400 ${error ? "border-red-500" : ""}`}
        {...props}
        {...field}
        placeholder={props.placeholder}
        id={field.name}
      />
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
    </div>
  );
};
