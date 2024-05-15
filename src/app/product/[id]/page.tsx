import { producttype } from "@/common.type";
import ProductDetails from "@/components/Productdeatails";
import { fetchProducts } from "@/utils/api";

// Define generateStaticParams function
export async function generateStaticParams() {
  const posts:producttype[] = await fetch('http://localhost:3000/api/products/').then((res) => res.json())
 
  return posts.map((post) => ({
    id: post.id.toString(),
  }))
}

async function getproduct(): Promise<producttype[]> {
  return fetchProducts();
}

export default async function Product({params}:{params:{id:string}}) {
  const products: producttype[] = await getproduct();
  let Product: producttype | undefined = products.find((item) => item.id === Number(params.id));
  if (!Product) {
    Product = {
      id: 0,
      src: "no",
      subtitle: "no",
      title: "no",
      price: 0,
      qty: 1,
      discription: ""
    };
  }
  return (
    <>
      <ProductDetails product={Product} />
    </>
  );
}
