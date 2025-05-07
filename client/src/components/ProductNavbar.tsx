import logoImg from "@/assets/favicon.webp";
import Wrapper from "./Wrapper";
import { Link } from "react-router";
import SheetCart from "./products/SheetCart";
import { useAppSelector } from "@/hooks";
import { Search, User } from "lucide-react";
import { buttonVariants } from "./ui/button";

const ProductNavbar = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Wrapper>
      <div className="flex justify-between py-8 items-start">
        <Link to="/" className="px-4">
          <img src={logoImg} className="w-18" />
        </Link>

        <div className="flex items-center gap-2">
          {user ? (
            <User />
          ) : (
            <Link
              to="/login"
              className={buttonVariants({
                variant: "link",
                className: "text-sm tracking-tighter",
              })}
            >
              LOGIN
            </Link>
          )}
          <div className="flex items-center text-sm gap-1">
            SEARCH A PRODUCT <Search className="size-4" />
          </div>
          <SheetCart />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductNavbar;
