import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors transition-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-b from-[rgba(68,17,251,1)] to-[rgba(55,142,246,1)] text-white hover:from-[rgba(55,142,246,1)] hover:to-[rgba(68,17,251,1)]",
        outline: "border border-input bg-transparent text-white hover:bg-white hover:text-black",
        secondary: "bg-white text-black hover:bg-gray-200",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-46 px-4 py-2",
        sm: "h-36 px-4 py-2",
        lg: "px-5 py-3",
        icon: "h-10 w-10",
      },
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }