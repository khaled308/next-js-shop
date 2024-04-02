import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

interface FileProps {
  multiple?: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const File: React.FC<FileProps> = ({ label, multiple, onChange }) => {
  return (
    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 items-center">
      <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
        {label}
      </label>
      <div className="col-span-8 sm:col-span-4">
        <div className="w-full text-center">
          <div
            className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6 relative"
            role="presentation"
            tabIndex={0}
          >
            <input
              accept="image/*,.jpeg,.jpg,.png,.webp"
              multiple={multiple}
              onChange={onChange}
              type="file"
              className="absolute inset-0 opacity-0"
              tabIndex={-1}
            />
            <span className="mx-auto flex justify-center">
              <IoCloudUploadOutline className="dark:text-gray-500" />
            </span>
            <p className="text-sm mt-2 dark:text-gray-500">Drag here</p>
            <em className="text-xs text-gray-400">
              (Only *.jpeg, *.webp and *.png images will be accepted)
            </em>
          </div>
          <div className="text-emerald-500"></div>
          <aside className="flex flex-row flex-wrap mt-4"></aside>
        </div>
      </div>
    </div>
  );
};

export default File;
