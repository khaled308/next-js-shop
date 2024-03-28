import ProductCard from "@/components/shop/home/ProductCard";
import Slider from "@/components/ui/Slider";
import prisma from "@/prisma/db";

export default async function Home() {
  const images = ["/banner01.jpeg", "/banner02.webp", "/banner03.jpg"];
  const products = await prisma.product.findMany({
    include: {
      reviews: true,
    },
  });

  return (
    <div>
      <Slider images={images} />
      <div className="container py-10 flex gap-3 flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
