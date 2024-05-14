import CheckoutClientComponent from "./[id]/page";
import product from "@/components/constant";

interface Params {
  id: string;
}

export async function generateStaticParams() {
  const ids = product.map((item) => item.id);
  return ids.map((id) => ({ id: id.toString() }));
}

export default function CheckoutServerComponent({
  params,
}: {
  params: Params;
}) {
  let product_one = product.find((n) => n.id === Number(params.id)) || {
    id: 0,
    src: "",
    subtitle: "",
    title: "",
    price: 0,
    qty: 1,
    discription: "",
  };

  // Pass the product as a prop to the client component
  return <CheckoutClientComponent product={product_one} />;
}
