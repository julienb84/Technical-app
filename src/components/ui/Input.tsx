// FRAMEWORKS COMPONENTS & HOOKS //
import { twMerge } from "tailwind-merge";

// TYPES //
import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={twMerge(
        `border-input focus-visible:border-ring focus-visible:ring-brand-500 h-9 caret-brand-500 rounded-lg px-2.5 py-1 text-base transition-colors focus-visible:ring-3 md:text-sm placeholder:text-muted-foreground w-full min-w-0 outline-none ${className}`,
      )}
    />
  );
};

export default Input;
