import * as React from "react";
import Link from "next/link";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  children,
  variant = "primary",
  asChild,
  href,
  onClick
}: {
  children: React.ReactNode;
  variant?: Variant;
  asChild?: boolean;
  href?: string;
  onClick?: () => void;
}) {
  const className = clsx(
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition",
    "focus:outline-none focus:ring-2 focus:ring-evz-green/30 focus:ring-offset-0",
    variant === "primary" && "bg-evz-green text-white hover:bg-evz-green/90",
    variant === "secondary" && "bg-ink/5 text-ink hover:bg-ink/10 border border-line",
    variant === "ghost" && "bg-transparent text-sub hover:text-ink hover:bg-ink/5"
  );

  if (asChild && href) return <Link className={className} href={href}>{children}</Link>;
  return <button className={className} onClick={onClick}>{children}</button>;
}
