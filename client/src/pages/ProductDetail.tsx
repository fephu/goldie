import Wrapper from "@/components/Wrapper";
import { useParams } from "react-router";

const ProductDetail = () => {
  const params = useParams();

  return (
    <Wrapper>
      <div>
        <span>Product {params.name} </span>
      </div>
    </Wrapper>
  );
};

export default ProductDetail;
