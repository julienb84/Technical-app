import type { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`border-input focus-visible:border-ring focus-visible:ring-brand-500/50 h-8 rounded-lg px-2.5 py-1 text-base transition-colors focus-visible:ring-3 md:text-sm placeholder:text-muted-foreground w-full min-w-0 outline-none ${className}`}
    />
  );
};

export default Input;
