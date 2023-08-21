import React, { ChangeEventHandler } from "react";

type InputProps = {
  placeholder: string;
  type: "text" | "email";
  name: string;
  id: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLElement>;
};

export default function Input({
  id,
  name,
  placeholder,
  type,
  value,
  onChange
}: InputProps) {
  return (
    <input
      className="w-full shadow-sm rounded-md border-2 border-zinc-400 py-1 px-3 focus:outline-none focus:border-zinc-700 placeholder:text-gray-400"
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    />
  );
}
