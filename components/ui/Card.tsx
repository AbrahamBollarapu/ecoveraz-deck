import * as React from "react";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  desc?: string;
  children?: React.ReactNode;
};

export function Card({ title, desc, children, className, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={`rounded-2xl border border-line bg-surface shadow-card p-5 ${className ?? ""}`}
    >
      <div className="text-sm font-semibold">{title}</div>
      {desc ? <div className="mt-1 text-sm text-sub leading-relaxed">{desc}</div> : null}
      {children ? <div className="mt-3">{children}</div> : null}
    </div>
  );
}
