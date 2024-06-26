import prisma from "@/prisma/db";
import Heading from "../../_components/Heading";
import TableHeader from "../../_components/TableHeader";
import { TBody, THead, Table, Td } from "../../_components/table";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  return (
    <>
      <Heading title="Products" />
      <TableHeader />
      <Table>
        <THead>
          <tr>
            <Td>Name</Td>
            <Td>Image</Td>
            <Td>Category</Td>
            <Td>Price</Td>
            <Td>Stock</Td>
            <Td>Actions</Td>
          </tr>
        </THead>
        <TBody>
          {products.map((product) => (
            <tr key={product.id}>
              <Td>{product.name.slice(0, 10)}</Td>
              <Td>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                />
              </Td>
              <Td>{product.category.name}</Td>
              <Td>${product.price}</Td>
              <Td>{product.quantity}</Td>
              <Td>
                <Link
                  href={`/dashboard/products/edit/${product.id}`}
                  className="inline-block text-xl mr-2"
                >
                  <FaRegEdit />
                </Link>
                <Link
                  href={`/dashboard/products/${product.id}`}
                  className="inline-block text-xl mr-2"
                >
                  <MdOutlineRemoveRedEye />
                </Link>
                <button className="text-xl">
                  <RiDeleteBinLine />
                </button>
              </Td>
            </tr>
          ))}
        </TBody>
      </Table>
    </>
  );
}
