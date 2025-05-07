import { Ghost } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link } from "react-router";
import { buttonVariants } from "../ui/button";

const SheetCart = () => {
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          variant: "link",
          className: "text-sm tracking-tighter",
        })}
      >
        BAG (0)
      </SheetTrigger>
      <SheetContent className="px-0">
        <div className="flex flex-col items-center justify-center py-10 w-full h-full gap-4">
          <Ghost className="size-14" />
          <span className="">No products in the cart.</span>
          <Link
            to={"/shop-all"}
            className={buttonVariants({
              className:
                "rounded-none uppercase font-normal text-sm gap-2 border-gray-900",
              size: "sm",
            })}
            reloadDocument
          >
            Continue shopping
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetCart;
