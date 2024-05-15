

import { producttype } from "@/common.type";
import ProductDetails from "@/components/Productdeatails";
import { fetchProducts} from "@/util/api";
async function getproduct():Promise<producttype[]>{
  const product = await fetchProducts();  
return product;
}

export default async function Product({params}:{params:{id:string}}) {
    const product:producttype[] = await getproduct();
    let Product:producttype | undefined = product.find((item)=>item.id===Number(params.id));
    if(!Product){
          Product={
            id:0,
            src:"no",
            subtitle: "no",
            title:"no",
            price:0,
            qty:1,
            discription:""

          }
        }
    return (<>
    <ProductDetails product={Product} />

    </>
    )
}

