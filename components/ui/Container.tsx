import { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/** Centered max-w-1480 wrapper with the responsive horizontal padding from the spec. */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-container px-4 md:px-7 lg:px-8",
        className
      )}
    >
      {children}
    </Tag>
  );
}
