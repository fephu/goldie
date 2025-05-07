import { cn } from "@/lib/utils";

interface CardProductProps {
  imgSrc: string;
  name: string;
  price: string;
  className?: string;
}

const CardProduct = ({ imgSrc, name, price, className }: CardProductProps) => {
  return (
    <div className={cn("w-full", className)}>
      <img src={imgSrc} alt="image product" className="w-full" />

      <div className="-mt-14 flex flex-col gap-y-1 items-center">
        <span className="text-sm tracking-tighter">{name}</span>

        <span className="text-sm tracking-tighter">{price} vnđ</span>
      </div>
    </div>
  );
};

export default CardProduct;
