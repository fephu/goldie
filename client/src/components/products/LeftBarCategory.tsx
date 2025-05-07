import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { Category } from "@/types/category";
import { fetchCategories } from "@/api/category";
import { Loader2 } from "lucide-react";
import CategoryNavigate from "../categories/CategoryNavigate";

const LeftBarCategory = () => {
  const { data, error, isLoading, isError } = useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) {
    return <Loader2 className="animate-spin" />;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="flex flex-col items-start">
      <Button
        variant={"link"}
        className="text-sm tracking-tighter font-semibold"
      >
        NEW ARRIVALS
      </Button>

      <div className="flex flex-col">
        <Button
          variant={"link"}
          className="text-sm tracking-tighter font-semibold"
        >
          ALL PRODUCTS
        </Button>
        <div className="pl-6 text-sm">Sort by</div>
      </div>

      <div>
        <Button
          variant={"link"}
          className="text-sm tracking-tighter font-semibold"
        >
          CLOTHES
        </Button>

        <div className="pl-6 flex flex-col items-start gap-2">
          {data &&
            data.map((category) => (
              <CategoryNavigate
                key={category.value}
                name={category.name}
                slug={category.value}
              />
            ))}
        </div>
      </div>

      <div>
        <Button
          variant={"link"}
          className="text-sm tracking-tighter font-semibold"
        >
          COLLECTIONS
        </Button>

        <div className="pl-6 flex flex-col items-start gap-2">
          <Button
            variant={"link"}
            className="p-0 h-fit text-sm tracking-tighter"
          >
            TEMPORARY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeftBarCategory;
