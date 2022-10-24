import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ asChild, children }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className="py-4 px-3 rounded w-full bg-cyan-500 text-gray-800 text-md transition-colors hover:bg-cyan-300">
      {children}
    </Comp>
  );
}
