import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-[color,background-color,border-color,transform] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        red: "bg-red text-fg hover:bg-red-hot",
        outline:
          "border border-fg/55 bg-transparent text-fg hover:border-fg hover:bg-fg/5",
        ghost: "text-fg hover:text-red",
        dark: "bg-fg text-bg hover:bg-steel",
      },
      size: {
        sm: "h-10 px-4 text-xs uppercase",
        md: "h-12 px-6 text-sm uppercase",
        lg: "h-14 px-8 text-sm uppercase",
      },
    },
    defaultVariants: {
      variant: "red",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
