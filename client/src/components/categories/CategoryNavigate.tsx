import { Link } from "react-router";

interface CategoryNavigateProps {
  name: string;
  slug: string;
}

const CategoryNavigate = ({ name, slug }: CategoryNavigateProps) => {
  return (
    <Link to={`/product/${slug}`} className="text-sm tracking-tighter">
      {name}
    </Link>
  );
};

export default CategoryNavigate;
