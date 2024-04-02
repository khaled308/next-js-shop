import Heading from "@/app/dashboard/_components/Heading";
import ProductForm from "@/app/dashboard/_components/products/ProductForm";
import prisma from "@/prisma/db";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function EditPage({ params }: Props) {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
    },
    include: {
      images: true,
    },
  });

  if (!product) return notFound();

  return (
    <>
      <Heading title="Create Product" />
      <ProductForm product={product} />
    </>
  );
}
