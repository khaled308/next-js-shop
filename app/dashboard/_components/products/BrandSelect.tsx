"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Category } from "@prisma/client";
import Select from "../form/Select";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  value?: string | number;
}

const BrandSelect = ({ errors, register, value }: Props) => {
  const {
    data: brands,
    error,
    isLoading,
  } = useQuery<Category[]>({
    queryKey: ["brands"],
    queryFn: () => axios.get("/api/brands").then((res) => res.data),
    staleTime: 60 * 1000,
  });
  return (
    <Select
      id="brands"
      label="Brands"
      errors={errors}
      register={register}
      value={value}
      options={
        brands?.map((brand) => ({
          label: brand.name,
          value: brand.id,
        })) ?? []
      }
    />
  );
};

export default BrandSelect;
