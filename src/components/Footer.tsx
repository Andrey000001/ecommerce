import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const columns: { heading: string; links: string[] }[] = [
    { heading: "Featured", links: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"] },
    {
      heading: "Shoes",
      links: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
    },
    {
      heading: "Clothing",
      links: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"],
    },
    {
      heading: "Kids",
      links: [
        "Infant & Toddler Shoes",
        "Kids' Shoes",
        "Kids' Jordan Shoes",
        "Kids' Basketball Shoes",
      ],
    },
  ];

  return (
    <footer className="mt-16 bg-dark-900 text-light-100">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Image
              src="/logo.svg"
              alt="Nike"
              width={100}
              height={50}
            />
          </div>

          <div className="md:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <nav key={col.heading} aria-labelledby={`footer-${col.heading}`} className="space-y-3">
                <h3 id={`footer-${col.heading}`} className="text-xl font-semibold">
                  {col.heading}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-sm text-dark-500 transition-colors hover:text-light-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-light-100"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="md:col-span-1 flex items-start justify-start gap-3 md:justify-end">
            <Link aria-label="X / Twitter" href="#" className="rounded-full border border-dark-700 p-2 hover:border-light-100 bg-light-100">
              <Image src="/x.svg" alt="X" width={18} height={18} />
            </Link>
            <Link aria-label="Facebook" href="#" className="rounded-full border border-dark-700 p-2 hover:border-light-100 bg-light-100">
              <Image src="/facebook.svg" alt="Facebook" width={18} height={18} />
            </Link>
            <Link aria-label="Instagram" href="#" className="rounded-full border border-dark-700 p-2 hover:border-light-100 bg-light-100">
              <Image src="/instagram.svg" alt="Instagram" width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-4 text-[--color-light-400] md:flex-row md:items-center md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/globe.svg" alt="" width={16} height={16} className="invert" />
            <span className="text-sm">Croatia</span>
            <span className="mx-2">© {new Date().getFullYear()} Nike, Inc. All Rights Reserved</span>
          </div>
          <ul className="flex flex-wrap items-center gap-6">
            {["Guides", "Terms of Sale", "Terms of Use", "Nike Privacy Policy"].map((l) => (
              <li key={l}>
                <Link href="#" className="text-sm hover:text-[--color-light-100]">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
