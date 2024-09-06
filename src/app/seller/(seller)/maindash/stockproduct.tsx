
import { Img, Heading } from "@/components";
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  categories: string;
  product_id: string;
}

export default function Stockpro({ product }: { product: Product }) {
  return (
    <div className="ml-7 flex flex-row justify-between items-center mb-[10px] ">
      
      <div className="w-[35%] flex gap-5 ">
         <div className="h-[64px] w-[31%]">
        <Img src={`http://localhost:8000/${product.image}`} alt="headphone" className="object-cover" /></div>
        <Heading as="h1" className="mt-5 text-center">
          {product.name}
        </Heading>
      </div>
      <div className="ml-[10%] flex w-[65%] justify-between gap-5 p-3 px-9 bg-slate-100 rounded">
        <Heading as="h4" className="top-0 self-end !font-bold">
          {product.product_id}
        </Heading>
        <Heading as="h5" className="self-end !font-bold">
          {product.price}
        </Heading>
        <Heading as="p" className="self-end !font-bold md:mr-0">
          45
        </Heading>
      </div>
    </div>
  );
}
