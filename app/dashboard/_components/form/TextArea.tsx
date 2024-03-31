import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextareaProps {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  rows?: number;
  value?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  disabled,
  register,
  required,
  errors,
  rows = 3,
  value,
}) => {
  return (
    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
      <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-md">
        {label}
      </label>
      <div className="col-span-8 sm:col-span-4">
        <textarea
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder={label}
          rows={rows}
          className={`
            block
            w-full
            border
            px-3
            py-1
            text-sm
            focus:outline-none
            dark:text-gray-300
            leading-5
            rounded-md
            bg-gray-100
            focus:bg-white
            dark:focus:bg-gray-700
            focus:border-gray-200
            border-gray-200
            dark:border-gray-600
            dark:focus:border-gray-500
            dark:bg-gray-700
            ${errors[id] ? "border-rose-500" : "border-neutral-300"}
            ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
          `}
        >
          {value}
        </textarea>
      </div>
    </div>
  );
};

export default Textarea;
