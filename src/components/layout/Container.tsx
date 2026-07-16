import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Render a different element, e.g. "section" for a page section wrapper */
  as?: "div" | "section" | "header" | "footer";
}

/**
 * Component: Container
 * Purpose: Centralises the site's content width (max-w-7xl) and
 * responsive side padding so every section lines up on the same grid.
 */
export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}