"use client";

import { useForm } from "react-hook-form";
import Input from "../form/Input";
import Textarea from "../form/TextArea";
import CategorySelect from "./CategorySelect";
import BrandSelect from "./BrandSelect";

const ProductForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex flex-col gap-3 py-5">
      <Input
        label="Product Name"
        id="name"
        register={register}
        errors={errors}
      />
      <Textarea
        label="Description"
        id="description"
        register={register}
        errors={errors}
      />
      <Input
        label="Price"
        id="price"
        type="number"
        formatPrice
        register={register}
        errors={errors}
      />
      <Input
        label="Stock"
        id="quantity"
        type="number"
        register={register}
        errors={errors}
      />
      <CategorySelect register={register} errors={errors} />
      <BrandSelect register={register} errors={errors} />
      <button className="btn bg-emerald-500 text-white">Add</button>
    </div>
  );
};

export default ProductForm;
