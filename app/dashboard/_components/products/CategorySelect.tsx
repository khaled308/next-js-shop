"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Category } from "@prisma/client";
import Select from "../form/Select";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const CategorySelect = ({ errors, register }: Props) => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => axios.get("/api/categories").then((res) => res.data),
    staleTime: 60 * 1000,
  });
  return (
    <Select
      id="categories"
      label="Categories"
      errors={errors}
      register={register}
      options={
        categories?.map((category) => ({
          label: category.name,
          value: category.id,
        })) ?? []
      }
    />
  );
};

export default CategorySelect;
