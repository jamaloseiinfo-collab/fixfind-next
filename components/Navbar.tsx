import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur border-b border-gray-100 z-30">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="FixFind" className="h-7" />
          <span className="font-extrabold">FixFind</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-gray-700">
          <Link href="/providers">Explore</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/support" className="px-3 py-2 border rounded-xl">Support</Link>
        </nav>
      </div>
    </header>
  );
}
