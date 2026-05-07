import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { PromptInput } from "@/components/PromptInput";
import { Check, Download, Puzzle, Smartphone } from "lucide-react";
import eclipse from "@/assets/eclipse.jpg";
import researchMoon from "@/assets/research-moon.jpg";
import researchSwarm from "@/assets/research-swarm.jpg";
import researchVqa from "@/assets/research-vqa.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Moonshot AI — Seeking the optimal conversion from energy to intelligence" },
      { name: "description", content: "Moonshot AI builds Kimi, a natively multimodal model with powerful coding capabilities and Agent performance." },
    ],
  }),
});

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 glow-eclipse pointer-events-none" />
      <div className="relative w-full max-w-6xl flex flex-col items-center">
        <div className="relative w-full h-[420px] flex items-center justify-center scanlines overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glitch-stage whitespace-nowrap text-[120px] md:text-[200px] font-semibold tracking-tight leading-none select-none">
              <span className="layer layer-r">Moonshot AI&nbsp;&nbsp;Moonshot AI</span>
              <span className="layer layer-b">Moonshot AI&nbsp;&nbsp;Moonshot AI</span>
              <span className="relative text-white/85">Moonshot AI&nbsp;&nbsp;Moonshot AI</span>
              <span className="layer layer-slice">Moonshot AI&nbsp;&nbsp;Moonshot AI</span>
            </div>
          </div>
          <div className="relative z-10 w-[360px] h-[360px] rounded-full bg-black shadow-[0_0_120px_40px_rgba(255,255,255,0.35),inset_0_0_60px_rgba(255,255,255,0.05)]" />
        </div>
        <h1 className="mt-12 text-2xl md:text-4xl font-light text-foreground/90 text-center tracking-tight">
          Seeking the optimal conversion from energy to intelligence
        </h1>
        <div className="mt-12 w-full">
          <PromptInput />
        </div>
        <div className="mt-8 flex items-center gap-4">
          <button className="px-6 py-2.5 rounded-full border border-white/15 text-sm hover:bg-white/5 transition-colors">Try Kimi</button>
          <button className="px-6 py-2.5 rounded-full border border-white/15 text-sm hover:bg-white/5 transition-colors">Try API</button>
        </div>
      </div>
    </section>
  );
}

function KimiSection() {
  const modes = [
    { name: "K2.6 Instant", desc: "Quick response", active: true },
    { name: "K2.6 Thinking", desc: "Deep thinking for complex…" },
    { name: "K2.6 Agent", desc: "Research, slides, website…" },
    { name: "K2.6 Agent Swarm", desc: "Large-scale search, long-form…" },
  ];
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            Simply smarter
          </h2>
          <p className="mt-6 text-foreground/60 max-w-2xl mx-auto">
            AI Models is capability. Code, analyze, sheets and slides — simplify complex work with the latest flagship model.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative pl-6 border-l border-white/10">
            <h3 className="text-5xl font-semibold tracking-tight">Kimi K2.6</h3>
            <p className="mt-6 text-foreground/60 max-w-md leading-relaxed">
              K2.6 is a natively multimodal model, powerful coding capabilities, and Agent performance — multiple modes, your choice.
            </p>
            <button className="mt-10 px-6 py-2.5 rounded-full border border-white/15 text-sm hover:bg-white/5 transition-colors">
              Explore Features
            </button>
          </div>
          <div className="relative">
            <div className="input-pill rounded-2xl p-6 transform rotate-[-2deg] shadow-2xl">
              {modes.map((m) => (
                <div key={m.name} className="py-3 border-b border-white/5 last:border-0 flex items-start justify-between">
                  <div>
                    <div className="text-lg font-medium">{m.name}</div>
                    <div className="text-xs text-foreground/50 mt-0.5">{m.desc}</div>
                  </div>
                  {m.active && <Check className="w-4 h-4 text-blue-400 mt-1.5" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchSection() {
  const items = [
    { date: "2026-04-20", title: "Kimi K2.6", img: researchMoon },
    { date: "2026-02-09", title: "Agent Swarm", img: researchSwarm },
    { date: "2026-02-03", title: "WorldVQA", img: researchVqa },
  ];
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Latest Research</h2>
            <p className="mt-4 text-foreground/60 max-w-xl">
              Our research team works toward AGI while sharing the latest research with the global open-source community.
            </p>
          </div>
          <button className="px-6 py-2.5 rounded-full border border-white/15 text-sm hover:bg-white/5 transition-colors">Get More</button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.title} className="rounded-2xl border border-white/10 overflow-hidden bg-card hover:border-white/20 transition-colors group">
              <div className="aspect-[4/3] overflow-hidden bg-black">
                <img src={it.img} alt={it.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="text-xs text-foreground/50">{it.date}</div>
                <h3 className="mt-2 text-lg font-medium">{it.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoodlesSection() {
  const doodles = [
    { month: "April · Earth Day", desc: "A Fauvist forest honoring Matisse's cut-outs. Let this Doodle remind you: log off and step into spring.", colors: "from-amber-100 via-rose-200 to-emerald-200" },
    { month: "March · Music Release Anniversary", desc: "Honoring a legend. Kimi Doodle is ready—feel the warmth in every vinyl groove, even years later.", colors: "from-zinc-300 via-zinc-100 to-zinc-400" },
    { month: "February · Spring Festival of the Year", desc: "Happy Chinese New Year 2026! Four legendary horses, four eras, four spirits — all on your Kimi homepage.", colors: "from-red-500 via-orange-400 to-yellow-400" },
  ];
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Discover Kimi doodles</h2>
          <p className="mt-4 text-foreground/60">Explore doodles for holidays, events, and trends — each one a small surprise.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {doodles.map((d) => (
            <article key={d.month} className="rounded-2xl border border-white/10 bg-card overflow-hidden">
              <div className={`aspect-[4/3] bg-gradient-to-br ${d.colors} flex items-center justify-center`}>
                <span className="text-6xl font-bold tracking-tighter text-black/80 mix-blend-overlay">KIMI</span>
              </div>
              <div className="p-5">
                <h3 className="font-medium">{d.month}</h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FutureSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[400px] grid-floor opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-[400px] grid-floor opacity-50 rotate-180" />
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center relative animate-float">
          <span className="text-5xl font-bold">K</span>
          <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-500" />
        </div>
        <h2 className="mt-12 text-3xl md:text-5xl font-semibold tracking-tight">Built for the future. Available today.</h2>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium flex items-center gap-2 hover:bg-white/90"><Smartphone className="w-4 h-4" />APP</button>
          <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium flex items-center gap-2 hover:bg-white/90"><Puzzle className="w-4 h-4" />Plugin</button>
          <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium flex items-center gap-2 hover:bg-white/90"><Download className="w-4 h-4" />Desktop</button>
        </div>
        <div className="mt-16 w-full max-w-2xl">
          <PromptInput placeholder="Try Kimi" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Products", items: ["Kimi", "Open Platform", "Kimi Code", "Pricing"] },
    { title: "Features", items: ["Agent", "Agent Swarm", "Website", "Document", "Slides", "Excel", "Deep Research", "Kimi Claw"] },
    { title: "Resources", items: ["Hermes Agent Overview", "Hermes API"] },
    { title: "Company", items: ["Terms of Service", "Privacy Policy"] },
  ];
  return (
    <footer className="px-6 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-white to-white/40 relative overflow-hidden">
              <div className="absolute inset-1 rounded-full bg-black" />
            </div>
            <span className="text-base font-medium">Moonshot AI</span>
          </div>
          <p className="mt-8 text-xs text-foreground/50 leading-relaxed">
            Copyright © 2023-2026 Moonshot AI. All Rights Reserved.<br />
            Co-created with Kimi K2.6
          </p>
          <div className="mt-6 flex gap-3">
            {["X", "IG", "DC", "RD", "GH"].map((s) => (
              <a key={s} href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-xs text-foreground/60 hover:text-white hover:border-white/30">{s}</a>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm text-foreground/50 mb-4">{c.title}</h4>
            <ul className="space-y-3">
              {c.items.map((i) => (
                <li key={i}><a href="#" className="text-sm hover:text-white text-foreground/90">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <KimiSection />
        <ResearchSection />
        <DoodlesSection />
        <FutureSection />
      </main>
      <Footer />
    </div>
  );
}
