import { Link } from "react-router";
import Wrapper from "./Wrapper";
import logoImg from "@/assets/favicon.webp";
import SheetCart from "./products/SheetCart";
import { User } from "lucide-react";
import NavigatateMenu from "./NavigatateMenu";
import { buttonVariants } from "./ui/button";
import { useAppSelector } from "@/hooks";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Wrapper className="h-screen bg-[url('/src/assets/home_slider_image_1.webp')] px-8 bg-cover opacity-100">
      <div className="flex flex-col justify-between py-8">
        <Link to="/" className="px-4">
          <img src={logoImg} className="w-18" />
        </Link>

        <div className="flex flex-col mt-2 max-w-sm">
          <NavigatateMenu />

          <div>
            <SheetCart />
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
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
