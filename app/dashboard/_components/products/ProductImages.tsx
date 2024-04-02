"use client";
import Image from "next/image";
import { RiCloseCircleLine } from "react-icons/ri";

type Props = {
  images: {
    url: string;
    alt: string;
  }[];
};

const ProductImages = ({ images }: Props) => {
  return (
    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-10 items-center">
      <div className="col-span-4 sm:col-span-2"></div>
      <div className="col-span-8 sm:col-span-4">
        <div className="flex flex-row flex-wrap mt-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-20 h-20 mr-2">
              <Image
                src={image.url}
                alt={image.alt}
                className="object-cover rounded-md"
                width={80}
                height={80}
              />
              <button className="absolute top-0 right-0 -mt-1 -mr-1 p-1 bg-white rounded-full">
                <RiCloseCircleLine size={20} color="red" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
