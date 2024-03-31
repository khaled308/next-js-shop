import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
      <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-md">
        {label}
      </label>
      <div className="col-span-8 sm:col-span-4 relative">
        {formatPrice && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <BiDollar className="text-gray-400" />
          </span>
        )}
        <input
          id={id}
          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
          type={type}
          placeholder={label}
          required={required}
          disabled={disabled}
          {...register(id, { required })}
        />
      </div>
    </div>
  );
};

export default Input;
