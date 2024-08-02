import AddToCartButton from "@/components/addtocartbutton";
import { Heading, Text, Button } from "@/components";
import {favorite} from "@/constants/product";

export default function App() {

  return (
    <main>
      <div className="ml-[15%] flex flex-col w-[70%] p-[30px]">
        <div className="w-full">
          <Heading size="4xl" as="h1" className="flex justify-center items-center">
            My Favorites
          </Heading>
        </div>
        <div className="flex flex-col p-[25px]">
          {favorite.map((item) => (
            <div key={item.id} className="flex flex-row justify-between bg-rose-200 m-[10px] p-[8px] rounded-[15px]">
              <div className="flex flex-row  items-center justify-between gap-[20px]">
                <img
                  src={item.src}
                  alt="image"
                  className="h-[54px] w-[64px] md:h-auto object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-start">
                  <Text className="items-center">{item.title}</Text>
                  <p>${item.price}</p>
                </div>
              </div>
              <div className="flex gap-3 p-[10px]">
                <AddToCartButton item={item} />
                <Button
                  color="gray_900_04"
                  shape="round"
                  rightIcon={<img src="/images/img_arrowright.svg" alt="arrow_right" />} // Ensure the path to the image is correct
                  className="gap-2 sm:px-5 font-manrope font-semibold min-w-[142px] rounded"
                >
                  Buy Now
                </Button>
                <img src="/images/img_heart.svg" alt="heart_one" className="h-[24px] w-[24px] mt-[6px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
