import { useField } from "formik";
import React, { ChangeEventHandler, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  name: string;
};

export const InputArea: React.FC<InputProps> = ({ label, ...props }) => {
  const [field, { error }] = useField(props);

  return (
    <div>
      <textarea
        className="resize-none h-24 w-full shadow-sm rounded-md border-2 border-zinc-400 py-1 px-3 focus:outline-none focus:border-zinc-700 placeholder:text-gray-400"
        {...props}
        {...field}
        placeholder={props.placeholder}
        id={field.name}
      />
      {error ? <div style={{ color: "red" }}>{error}</div> : null}
    </div>
  );
};
