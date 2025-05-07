import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("mx-auto w-full px-6 h-full", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
