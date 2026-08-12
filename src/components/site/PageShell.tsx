import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Home-style: centred on both axes. Default is top-aligned, left-aligned. */
  center?: boolean;
  className?: string;
};

/**
 * Per-page alignment. The site layout is a server component and has no
 * pathname, so pages declare their own alignment rather than the layout
 * guessing from the route.
 *
 * `min-h-[68svh] lg:min-h-full`: a percentage min-height needs a definite
 * parent height, which only exists at lg where the shell is h-dvh. Below that,
 * svh (smallest viewport unit) centres without reflowing when the mobile URL
 * bar collapses.
 */
export function PageShell({ children, center = false, className = "" }: Props) {
  return (
    <div
      className={[
        "flex w-full flex-col",
        center
          ? "min-h-[68svh] lg:min-h-full items-center justify-center text-center"
          : "items-start",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
