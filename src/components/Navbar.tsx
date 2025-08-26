"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[--color-dark-900]">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6"
      >
        <Link href="#" className="flex items-center gap-2" aria-label="Home">
          <Image
            src="/logo.svg"
            alt="Nike Logo"
            width={32}
            height={32}
            className="invert"
            priority
          />
        </Link>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded md:hidden"
          aria-label="Toggle Navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-[--color-light-100]"></span>
            <span className="block h-0.5 w-6 bg-[--color-light-100]"></span>
            <span className="block h-0.5 w-6 bg-[--color-light-100]"></span>
          </div>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-sm font-medium text-[--color-light-100] transition-colors hover:text-[--color-light-200] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-light-100]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 md:flex">
          <button className="text-sm text-[--color-light-100] hover:text-[--color-light-200]">
            Search
          </button>
          <button
            className="text-sm font-medium text-[--color-light-100] hover:text-[--color-light-200]"
            aria-label="Open cart"
          >
            My Cart (2)
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden">
          <ul className="space-y-2 px-4 py-4">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="block rounded px-2 py-2 text-[--color-light-100] hover:bg-[--color-dark-700] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-light-100]"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-6 px-2">
              <button className="text-sm text-[--color-light-100]">Search</button>
              <button
                className="text-sm font-medium text-[--color-light-100]"
                aria-label="Open cart"
              >
                My Cart (2)
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
