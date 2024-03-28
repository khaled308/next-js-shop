import { PrismaClient } from "@prisma/client";
import { brands, categories, productImages, products } from "./data";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: categories.map((name) => ({ name })),
  });
  await prisma.brand.createMany({ data: brands.map((name) => ({ name })) });
  await prisma.product.createMany({ data: products });
  await prisma.productImage.createMany({ data: productImages });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
