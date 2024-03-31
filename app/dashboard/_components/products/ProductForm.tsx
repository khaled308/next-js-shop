"use client";

import { useForm } from "react-hook-form";
import Input from "../form/Input";
import Textarea from "../form/TextArea";
import CategorySelect from "./CategorySelect";
import BrandSelect from "./BrandSelect";
import { Product } from "@prisma/client";
import File from "../form/File";

const ProductForm = ({ product }: { product?: Product }) => {
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
        value={product?.name}
      />
      <Textarea
        label="Description"
        id="description"
        register={register}
        errors={errors}
        value={product?.description}
      />
      <Input
        label="Price"
        id="price"
        type="number"
        formatPrice
        register={register}
        errors={errors}
        value={product?.price}
      />
      <Input
        label="Stock"
        id="quantity"
        type="number"
        register={register}
        errors={errors}
        value={product?.quantity}
      />
      <CategorySelect
        register={register}
        errors={errors}
        value={product?.categoryId}
      />
      <BrandSelect
        register={register}
        errors={errors}
        value={product?.brandId}
      />
      <File label="Product Cover Image" />
      <File label="Product Gallery" multiple />
      <button className="btn bg-emerald-500 text-white">Add</button>
    </div>
  );
};

export default ProductForm;
