import { Product } from "@/types";
import { ArrowUpRight, Globe, Leaf } from "lucide-react";
import Image from "next/image";

const EachProduct = (product: Product) => {
  return (
    <div className="group rounded-3xl h-full">
      <div className="bg-white relative rounded-2xl overflow-hidden border border-gray-200 hover-lift h-full flex flex-col items-start justify-between">
        <div className="relative overflow-hidden w-full">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* <div className="absolute top-6 right-6">
            <span className="bg-vgreen text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              {product.locate}
            </span>
          </div> */}
        </div>
        <div className="p-8 flex flex-col justify-between h-fit">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-bold text-vgbrown">
                {product.name}
              </h3>
              <div className="flex items-center space-x-2">
                <Leaf size={20} color="#679550" />
                <Globe size={20} color="#679550" />
              </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed text-base">
              {product.description}
            </p>
          </div>
          {/* <div className="mb-6">
            <h4 className="font-bold text-vgbrown mb-2 text-base">
              Key Features:
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center text-gray-700 text-sm"
                >
                  <MarkIcon />
                  {feature}
                </div>
              ))}
            </div>
          </div> */}
          {/* <div className="bg-orange-50 border-vgbrown border px-6 py-4 rounded-lg mb-6">
            <h4 className="font-bold text-gray-900 text-base mb-2">
              Specifications:
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-10 text-sm">
              {product.specification.map((spec, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600">{spec.title}:</span>
                  <span className="font-semibold text-gray-900">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div> */}
          <a
            className=" border border-vgreen text-lg text-vgreen px-8 py-4 rounded-lg hover:bg-vgreen transform hover:text-white transition-all duration-300 inline-flex items-center w-full justify-center gap-2"
            href="/contact"
          >
            Request Quote
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;

const MarkIcon = () => {
  return (
    <div className="w-4 h-4 bg-vgreen rounded-full flex items-center justify-center mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-check w-2.5 h-2.5 text-white"
      >
        <path d="M20 6 9 17l-5-5"></path>
      </svg>
    </div>
  );
};
