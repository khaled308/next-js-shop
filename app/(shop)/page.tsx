import Slider from "@/components/ui/Slider";

export default function Home() {
  const images = ["/banner01.jpeg", "/banner02.webp", "/banner03.jpg"];
  return (
    <div>
      <Slider images={images} />
      <div className="container"></div>
    </div>
  );
}
