// FRAMEWORKS COMPONENTS & HOOKS //
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
};

const PageLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <div
      className={twMerge(
        `min-h-[calc(100dvh-136px)] flex flex-col relative largephone:min-h-[calc(100dvh-176px)] ${className}`,
      )}
    >
      {children}
    </div>
  );
};

export default PageLayout;
