"use client";

import { useForm } from "react-hook-form";
import Input from "../form/Input";
import Textarea from "../form/TextArea";
import CategorySelect from "./CategorySelect";
import BrandSelect from "./BrandSelect";
import { Product, ProductImage } from "@prisma/client";
import File from "../form/File";
import Image from "next/image";
import ProductImages from "./ProductImages";

interface ProductFormProps {
  product?: Product & { images: ProductImage[] };
}

const ProductForm = ({ product }: ProductFormProps) => {
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
      {product && (
        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
          <div className="col-span-4 sm:col-span-2"></div>
          <div className="col-span-8 sm:col-span-4">
            <Image
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded-md"
              width={80}
              height={80}
            />
          </div>
        </div>
      )}
      <File label="Product Gallery" multiple />
      {product && product.images.length > 0 && (
        <ProductImages
          images={product.images.map((image) => {
            return {
              url: image.url,
              alt: product.name,
            };
          })}
        />
      )}
      <button className="btn bg-emerald-500 text-white">
        {product ? "Update Product" : "Add Product"}
      </button>
    </div>
  );
};

export default ProductForm;
