import * as React from "react";

export function HeadlineBlock({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 text-sm leading-relaxed text-sub md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
