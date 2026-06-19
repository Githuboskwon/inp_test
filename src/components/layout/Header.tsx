import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Starter Kit
        </Link>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">홈</Link>
        </nav>
      </div>
    </header>
  );
}
