import { Link } from "react-router";
import { buttonVariants } from "./ui/button";

const NavigatateMenu = () => {
  return (
    <div className="flex flex-wrap">
      <Link
        to="/shop-all"
        className={buttonVariants({
          variant: "link",
          className: "text-sm tracking-tighter",
        })}
      >
        STORE
      </Link>

      <Link
        to="/sale"
        className={buttonVariants({
          variant: "link",
          className: "text-sm tracking-tighter",
        })}
      >
        SALE
      </Link>

      <Link
        to="/sale"
        className={buttonVariants({
          variant: "link",
          className: "text-sm tracking-tighter",
        })}
      >
        STORIES
      </Link>

      <Link
        to="/about-us"
        className={buttonVariants({
          variant: "link",
          className: "text-sm tracking-tighter",
        })}
      >
        ABOUT
      </Link>
      <Link
        to="/about-us"
        className={buttonVariants({
          variant: "link",
          className: "text-sm tracking-tighter",
        })}
      >
        ADMIN
      </Link>
    </div>
  );
};

export default NavigatateMenu;
