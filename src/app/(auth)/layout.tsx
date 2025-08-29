import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <aside className="relative hidden md:block bg-[--color-dark-900] text-[--color-light-100]">
        <div className="p-8 flex h-full flex-col justify-between">
          <div className="flex items-center">
            <div className="h-9 w-9 rounded-xl bg-[--color-light-100] flex items-center justify-center">
              <Image src="/logo.svg" alt="" width={20} height={20} />
            </div>
          </div>

          <div className="space-y-4 max-w-md">
            <h2 className="text-4xl md:text-5xl font-semibold">Just Do It</h2>
            <p className="text-[--color-dark-500]">
              Join millions of athletes and fitness enthusiasts who trust Nike for their performance needs.
            </p>
            <div className="flex gap-2 pt-4">
              <span className="h-2 w-2 rounded-full bg-[--color-light-300]" />
              <span className="h-2 w-2 rounded-full bg-[--color-light-300]" />
              <span className="h-2 w-2 rounded-full bg-[--color-light-300]" />
            </div>
          </div>

          <p className="text-xs text-[--color-dark-700]">© {new Date().getFullYear()} Nike. All rights reserved.</p>
        </div>
      </aside>

      <main className="flex items-center justify-center p-6">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
