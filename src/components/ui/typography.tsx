import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const typographyVariants = cva(
  "break-words", {
  variants: {
    type: {
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      p: "text-base",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
    },
    tracking: {
      normal: "tracking-normal",
      tight: "tracking-tight",
      tighter: "tracking-tighter",
    },
  },
  defaultVariants: {
    type: 'p',
    weight: 'normal',
    tracking: 'normal',
  },
}
);

export interface TypographyProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ type = 'p', weight = 'normal', tracking = 'normal', className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'div';
    return (
      <Comp
        className={typographyVariants({ type, weight, tracking, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
