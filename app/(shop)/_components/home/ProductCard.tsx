import { Product as ProductType, Review } from "@prisma/client";
import Image from "next/image";
import Rating from "../ui/Rating";

interface Product extends ProductType {
  reviews: Review[];
}

const ProductCard = ({ product }: { product: Product }) => {
  const rating =
    product.reviews.length &&
    product.reviews.reduce((acc, review) => acc + review.rating, 0) /
      product.reviews.length;
  return (
    <div className="w-full md:w-[300px] p-6 space-y-2 bg-white border border-gray-200 rounded-lg shadow text-center text-sm transition hover:scale-105">
      <div className="aspect-square overflow-hidden relative w-full">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl">{product.name.slice(0, 10)}</h3>
      <Rating rating={rating} className="mx-auto" />
      <p>{product.reviews.length} reviews</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductCard;
