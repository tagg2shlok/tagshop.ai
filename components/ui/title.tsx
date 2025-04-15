import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleVariants = cva(
  "text-white text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-bold text-center mx-auto max-w-[850px] mb-[20px]",
  {
    variants: {
      tag: {
        h1: "font-bold",
        h2: "font-bold",
        h3: "font-bold",
        h4: "font-bold",
        h5: "font-bold",
        h6: "font-bold",
      },
    },
    defaultVariants: {
      tag: "h1",
    },
  }
);

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, tag = "h1", children, ...props }, ref) => {
    const Tag = tag as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    
    return (
      <Tag className={cn(titleVariants({ tag }), className)} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

Title.displayName = "Title";

export { Title, titleVariants };