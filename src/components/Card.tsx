import React from "react";
import Image from "next/image";

export type CardBadge = {
  text: string;
  color?: "green" | "red" | "orange";
};

export type CardProps = {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt?: string;
  price?: string | number;
  badge?: CardBadge;
  href?: string;
  className?: string;
};

const badgeColorMap: Record<NonNullable<CardBadge["color"]>, string> = {
  green: "bg-[--color-green]/10 text-[--color-green]",
  red: "bg-[--color-red]/10 text-[--color-red]",
  orange: "bg-[--color-orange]/10 text-[--color-orange]",
};

export default function Card({
  title,
  description,
  imageSrc,
  imageAlt = "",
  price,
  badge,
  href = "#",
  className,
}: CardProps) {
  return (
    <article
      className={`group  rounded-xl bg-light-100 ring-1 ring-light-300 transition-color hover:ring-dark-500`}>
      <div className="relative aspect-square w-full overflow-hidden rounded-t-xl bg-light-200">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          sizes="(min-width: 1280px) 360px ,(min-with: 1024px) 300px,(min-width: 640px) 45vw ,90vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
      </div>

      <div className="space-y-1 p-4">
        <h3 className="text-base font-semibold text-[--color-dark-900]">{title}</h3>
        {description && (
          <p className="text-sm text-[--color-dark-700]">{description}</p>
        )}
        {price !== undefined && (
          <p className="pt-1 text-sm font-medium text-[--color-dark-900]">
            {typeof price === "number" ? `$${price.toFixed(2)}` : price}
          </p>
        )}
        <a
          href={href}
          aria-label={title}
          className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[--color-dark-900] underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]"
        >
          View details
        </a>
      </div>
    </article>
  );
}
