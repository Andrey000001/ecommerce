import React from "react";
import Image from "next/image";

type Props = { onGoogle?: () => void; onApple?: () => void };

export default function SocialProviders({ onGoogle, onApple }: Props) {
  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={onGoogle}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-[--color-light-300] bg-[--color-light-100] px-4 text-sm font-medium hover:bg-[--color-light-200] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]"
        aria-label="Continue with Google"
      >
        <Image src="/icons/google.svg" alt="" width={18} height={18} />
        Continue with Google
      </button>
      <button
        type="button"
        onClick={onApple}
        className="flex h-12 w-full items-center justify-center gap-3 rounded-full border border-[--color-light-300] bg-[--color-light-100] px-4 text-sm font-medium hover:bg-[--color-light-200] focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-dark-900]"
        aria-label="Continue with Apple"
      >
        <Image src="/icons/apple.svg" alt="" width={18} height={18} />
        Continue with Apple
      </button>
    </div>
  );
}
