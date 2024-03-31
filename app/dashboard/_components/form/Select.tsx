import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  id: string;
  label: string;
  options: SelectOption[];
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  options,
  disabled,
  register,
  required,
  errors,
}) => {
  return (
    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
      <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-md">
        {label}
      </label>
      <div className="col-span-8 sm:col-span-4">
        <select
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          className={`
            block
            w-full
            h-12
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
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
