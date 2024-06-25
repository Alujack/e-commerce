"use server"
import { producttype } from "@/common.type";
import ProductDetails from "@/components/Productdeatails";
import { fetchProducts } from "@/utils/api";

// Define generateStaticParams function
export async function generateStaticParams() {
  try {
    const posts: producttype[] = await fetch('http://localhost:3000/api/products/').then((res) => res.json());
    return posts.map((post) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching products for static params:", error);
    return [];
  }
}

async function getproduct(): Promise<producttype[]> {
  try {
    return await fetchProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Product({ params }: { params: { id: string } }) {
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
