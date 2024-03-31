import Skeleton from "react-loading-skeleton";
import Heading from "../../_components/Heading";
import TableHeader from "../../_components/TableHeader";
import { TBody, THead, Table, Td } from "../../_components/table";

export default function Loading() {
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
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
              <Td>
                <Skeleton />
              </Td>
              <Td>
                <Skeleton />
              </Td>
              <Td>
                <Skeleton />
              </Td>
              <Td>
                <Skeleton />
              </Td>
              <Td>
                <Skeleton />
              </Td>
              <Td>
                <Skeleton />
              </Td>
            </tr>
          ))}
        </TBody>
      </Table>
    </>
  );
}
