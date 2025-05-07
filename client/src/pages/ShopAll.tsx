import CardProduct from "@/components/products/CardProduct";
import Wrapper from "@/components/Wrapper";
import img1 from "@/assets/collections/temporary/1.webp";
import img2 from "@/assets/collections/temporary/2.webp";
import img3 from "@/assets/collections/temporary/3.webp";
import img4 from "@/assets/collections/temporary/4.jpg";
import img5 from "@/assets/collections/temporary/5.webp";
import img6 from "@/assets/collections/temporary/6.webp";
import ProductNavbar from "@/components/ProductNavbar";
import LeftBarCategory from "@/components/products/LeftBarCategory";

const ShopAll = () => {
  return (
    <>
      <ProductNavbar />
      <Wrapper>
        <div className="grid grid-cols-4">
          <LeftBarCategory />
          <div className="col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-x-1 -mt-14">
            <CardProduct
              imgSrc={img1}
              name="TMPRARY BB SATIN SILK SHIRT"
              price="1,490,000"
            />

            <CardProduct
              imgSrc={img2}
              name="TMPRARY BLACK HOOD SHIRT"
              price="1,290,000"
            />

            <CardProduct
              imgSrc={img3}
              name="TMPRARY BRICK CUPRO SHIRT"
              price="1,490,000"
            />

            <CardProduct
              imgSrc={img4}
              name="TMPRARY BW CUPRO SHIRT"
              price="1,490,000"
            />

            <CardProduct
              imgSrc={img5}
              name="TMPRARY CRINKLE JACKET"
              price="1,390,000"
            />

            <CardProduct
              imgSrc={img6}
              name="TMPRARY CRINKLE POCKET WASHED PANTS"
              price="1,050,000"
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ShopAll;
