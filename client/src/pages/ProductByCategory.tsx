import ProductNavbar from "@/components/ProductNavbar";
import LeftBarCategory from "@/components/products/LeftBarCategory";
import Wrapper from "@/components/Wrapper";
import { useParams } from "react-router";

const ProductByCategory = () => {
  const params = useParams();
  const slug = params.slug;
  return (
    <>
      <ProductNavbar />
      <Wrapper>
        <div className="grid grid-cols-4 h-screen">
          <LeftBarCategory />
          <div>{slug}</div>
        </div>
      </Wrapper>
    </>
  );
};

export default ProductByCategory;
