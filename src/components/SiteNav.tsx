import { Link } from "@tanstack/react-router";

export function SiteNav() {
  const items = ["Kimi", "API", "Research", "Download", "Careers"];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-white/40 relative overflow-hidden">
          <div className="absolute inset-1 rounded-full bg-black" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/40" />
        </div>
        <span className="text-lg font-medium tracking-tight">Moonshot AI</span>
      </Link>
      <nav className="hidden md:flex items-center gap-10 text-sm text-foreground/90">
        {items.map((i) => (
          <a key={i} href="#" className="hover:text-white transition-colors">{i}</a>
        ))}
      </nav>
      <div className="nav-pill rounded-full px-1 py-1 flex items-center text-xs">
        <button className="px-3 py-1 rounded-full bg-white/10 text-white">EN</button>
        <button className="px-3 py-1 rounded-full text-foreground/70">中文</button>
      </div>
    </header>
  );
}
