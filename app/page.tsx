import Image from "next/image";

export default function Page() {
  return (
    <main className="relative isolate">
      <TopBar />
      <Hero />
      <Marquee />
      <Problem />
      <Receipt />
      <Architecture />
      <Stack />
      <Roadmap />
      <FooterCta />
    </main>
  );
}

/* ───────── TOP BAR ───────── */
function TopBar() {
  return (
    <header className="relative z-20 px-6 md:px-10 pt-6 md:pt-8">
      <div className="flex items-end justify-between gap-6 border-b border-[var(--color-rule)] pb-5">
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] leading-tight flex items-center gap-3">
          <LogoMark />
          <div>
            <div>Mira / Vol. 01 / Issue 0001</div>
            <div className="mt-1 hidden md:block">A submission to the Swiggy Builders Club</div>
          </div>
        </div>
        <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] leading-tight text-right">
          <div>Apr 26 · 2026</div>
          <div className="mt-1 hidden md:block text-[var(--color-stamp)]">Pre-access · prototype</div>
        </div>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 16 C 7 8, 11 8, 12 12 C 13 16, 17 16, 19 8" stroke="var(--color-stamp)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ───────── HERO ───────── */
function Hero() {
  return (
    <section className="relative z-10 px-6 md:px-10 pt-10 md:pt-14 pb-20 md:pb-32 overflow-hidden">
      {/* glow blobs */}
      <div className="glow-orange w-[60vw] h-[60vw] -top-[20vw] -right-[15vw]" />
      <div className="glow-warm w-[40vw] h-[40vw] top-[40vh] -left-[10vw]" />

      {/* watermark */}
      <div className="absolute inset-0 -z-0 pointer-events-none flex items-center justify-end pr-[-10vw] overflow-hidden">
        <div className="huge-mark opacity-[0.12] -mr-[12vw] mt-[12vw]">mira</div>
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-10 relative">
        {/* LEFT ·copy */}
        <div className="col-span-12 lg:col-span-7">
          <div className="idx mb-5 rise">01 · A meal concierge</div>
          <h1
            className="rise font-display text-[14vw] md:text-[9.5vw] lg:text-[7.6vw] leading-[0.92] tracking-[-0.02em] text-[var(--color-ink)]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
          >
            What are you{" "}
            <em
              className="italic font-medium"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
            >
              eating
            </em>{" "}
            <span className="dotted-under">this week</span>?
          </h1>
          <p className="rise-1 mt-8 max-w-[58ch] font-serif text-lg md:text-xl text-[var(--color-ink-soft)] leading-[1.55]">
            Mira is an AI meal concierge built on Swiggy&rsquo;s MCP platform.
            One conversation plans the whole week. Groceries from Instamart
            on the days you cook, delivery from Food on the busy ones, a table
            at Dineout on Saturday. Then it places the orders. You stay in the
            loop. No money moves without a yes.
          </p>

          <div className="rise-2 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#receipt"
              className="group font-mono text-xs tracking-[0.2em] uppercase bg-[var(--color-ink)] text-[var(--color-paper)] px-5 py-3.5 hover:bg-[var(--color-stamp)] transition-colors inline-flex items-center gap-3"
            >
              See a week with Mira
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#architecture"
              className="font-mono text-xs tracking-[0.2em] uppercase border border-[var(--color-ink)] text-[var(--color-ink)] px-5 py-3.5 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
            >
              Read the system design
            </a>
          </div>

          {/* counters strip */}
          <div className="rise-3 mt-14 grid grid-cols-3 max-w-xl border-t border-[var(--color-rule)]">
            {[
              ["3", "Swiggy surfaces"],
              ["1", "conversation"],
              ["0", "apps to switch"],
            ].map(([n, l]) => (
              <div key={l} className="border-r last:border-r-0 border-[var(--color-rule)] py-4 pr-4">
                <div className="font-display text-5xl md:text-6xl tabular leading-none tracking-tight">{n}</div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ·phone mockup with floating chips */}
        <div className="col-span-12 lg:col-span-5 relative min-h-[560px] lg:min-h-[680px] mt-10 lg:mt-0">
          {/* Stamp & meta ·top-right */}
          <div className="absolute -top-2 right-4 stamp text-[var(--color-stamp-deep)] font-mono text-xs px-4 py-2 select-none z-10">
            BETA · 0001
          </div>

          {/* secondary back card */}
          <div
            className="absolute right-2 top-16 w-[78%] h-[420px] card rounded-2xl shadow-[0_30px_60px_-40px_rgba(26,22,18,0.4)]"
            style={{ transform: "rotate(4deg)" }}
          >
            <div className="p-5">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">Receipt · preview</div>
              <div className="mt-3 font-display text-2xl">This week, planned.</div>
              <div className="mt-4 font-mono text-[11px] leading-relaxed text-[var(--color-ink-soft)]">
                MON · cook · paneer bhurji<br />
                TUE · cook · chickpea pulao<br />
                WED · in · Behrouz biryani<br />
                THU · cook · egg curry<br />
                FRI · in · Faasos wraps<br />
                SAT · out · Truffles 8pm<br />
                SUN · cook · paneer pizza
              </div>
              <div className="mt-4 border-t border-dotted border-[var(--color-rule)] pt-3 flex items-baseline justify-between">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">total est.</span>
                <span className="font-display text-2xl tabular">₹2,540</span>
              </div>
            </div>
          </div>

          {/* phone */}
          <div
            className="phone absolute left-0 lg:-left-6 top-0 w-[300px] sm:w-[340px] lg:w-[360px]"
            style={{ transform: "rotate(-5deg)" }}
          >
            <div className="phone-notch" />
            <div className="phone-screen px-4 pt-12 pb-4 h-[560px] flex flex-col">
              {/* chat header */}
              <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[var(--color-stamp)] grid place-items-center text-[var(--color-ink)] font-display text-sm font-bold">M</div>
                  <div className="leading-tight">
                    <div className="font-display text-[15px] text-[var(--color-card)]">Mira</div>
                    <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-[var(--color-muted)] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      online
                    </div>
                  </div>
                </div>
                <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[var(--color-muted)]">22:14</div>
              </div>

              {/* messages */}
              <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
                <div className="bubble bubble-user">Plan my week, ₹3000, high-protein, lazy on Wednesdays.</div>

                <div className="bubble bubble-mira flex items-center gap-1.5 w-fit">
                  <span className="dot-a w-1.5 h-1.5 rounded-full bg-[var(--color-card)]/60" />
                  <span className="dot-b w-1.5 h-1.5 rounded-full bg-[var(--color-card)]/60" />
                  <span className="dot-c w-1.5 h-1.5 rounded-full bg-[var(--color-card)]/60" />
                </div>

                <div className="bubble bubble-mira">
                  <div>Plan ready. 7 meals across Food, Instamart, Dineout.</div>
                  <div className="plan-card mt-2">
                    MON · cook · ₹420<br />
                    WED · in &nbsp;· ₹380<br />
                    SAT · out · ₹1100<br />
                    <span className="text-[var(--color-stamp-deep)]">+4 more</span>
                  </div>
                  <div className="mt-2 text-[11px] opacity-80">Confirm to place orders.</div>
                </div>

                <div className="bubble bubble-user">yes</div>

                <div className="bubble bubble-mira">
                  Done. Mon 9am drop. Sat 8pm Truffles.<br />
                  Calendar invite sent.
                </div>
              </div>

              {/* input bar */}
              <div className="mt-3 rounded-full bg-white/5 border border-white/10 px-3.5 py-2 flex items-center gap-2 text-[var(--color-muted-soft)]">
                <span className="font-mono text-[11px]">Message Mira…</span>
                <span className="ml-auto w-6 h-6 rounded-full bg-[var(--color-stamp)] grid place-items-center text-[var(--color-ink)]">↑</span>
              </div>
            </div>
          </div>

          {/* floating chips */}
          <div className="absolute top-[60%] -left-2 lg:-left-12 float-a" style={{ ["--r" as never]: "-6deg" }}>
            <div className="chip">
              <span className="dot" />
              7 meals planned
            </div>
          </div>
          <div className="absolute top-[18%] right-0 lg:-right-6 float-b" style={{ ["--r" as never]: "6deg" }}>
            <div className="chip chip-dark">
              <span className="dot" />
              ₹2,540 / week
            </div>
          </div>
          <div className="absolute bottom-[10%] right-2 lg:right-10 float-a" style={{ ["--r" as never]: "-3deg" }}>
            <div className="chip">
              <span className="dot" />
              Sat 20:00 · Truffles
            </div>
          </div>
          <div className="absolute bottom-[28%] -left-2 lg:left-10 float-b" style={{ ["--r" as never]: "4deg" }}>
            <div className="chip">
              <span className="dot" />
              Mon 09:00 · grocery drop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── MARQUEE ───────── */
function Marquee() {
  const items = [
    "FOOD ·order in",
    "INSTAMART ·restock",
    "DINEOUT ·book a table",
    "MIRA ·one conversation",
    "FOOD ·order in",
    "INSTAMART ·restock",
    "DINEOUT ·book a table",
    "MIRA ·one conversation",
  ];
  return (
    <div className="relative z-10 border-y border-[var(--color-rule)] bg-[var(--color-paper-deep)] overflow-hidden">
      <div className="marquee flex whitespace-nowrap py-3">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="font-mono text-xs tracking-[0.22em] uppercase text-[var(--color-ink)] px-8 flex items-center gap-8"
          >
            <span className={i % 4 === 3 ? "text-[var(--color-stamp)]" : ""}>{t}</span>
            <span className="text-[var(--color-rule)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────── PROBLEM ───────── */
function Problem() {
  const apps = [
    {
      label: "Swiggy Food",
      tag: "delivery",
      ask: "What do I want for dinner?",
      icon: <BowlIcon />,
    },
    {
      label: "Swiggy Instamart",
      tag: "groceries",
      ask: "What am I out of?",
      icon: <BagIcon />,
    },
    {
      label: "Swiggy Dineout",
      tag: "reservations",
      ask: "Where should we eat Saturday?",
      icon: <TableIcon />,
    },
  ];

  return (
    <section className="relative z-10 px-6 md:px-10 py-20 md:py-28 overflow-hidden">
      <div className="glow-warm w-[40vw] h-[40vw] top-1/3 -right-[15vw]" />

      <div className="idx mb-5">02 · The problem</div>
      <h2
        className="font-display text-5xl md:text-7xl leading-[0.95] tracking-[-0.015em] max-w-[18ch]"
        style={{ fontVariationSettings: "'opsz' 96, 'SOFT' 100" }}
      >
        Three apps. Three decisions. <em className="italic font-normal">Three times a day.</em>
      </h2>
      <p className="mt-8 max-w-[58ch] font-serif text-lg text-[var(--color-ink-soft)] leading-[1.55]">
        Right now Food, Instamart, and Dineout each ask their own question.
        You hold the meal plan in your head. Mira treats food as one continuous
        problem and stitches the surfaces together ·because Swiggy is the only
        platform that has all three.
      </p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {apps.map((a, i) => (
          <div key={a.label} className="card p-7 md:p-8 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 opacity-[0.08] text-[var(--color-ink)]">{a.icon}</div>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">
              {String(i + 1).padStart(2, "0")} · {a.tag}
            </div>
            <div className="mt-4 font-display text-3xl md:text-4xl leading-tight">
              {a.label}
            </div>
            <div className="mt-6 font-serif italic text-[var(--color-ink-soft)] text-lg leading-snug">
              &ldquo;{a.ask}&rdquo;
            </div>
            <div className="mt-8 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-stamp)]" />
              one decision
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-12 gap-6 items-stretch">
        <div className="col-span-12 md:col-span-1 font-mono text-3xl text-[var(--color-stamp)] md:text-center md:flex md:items-center md:justify-center">
          ↓
        </div>
        <div className="col-span-12 md:col-span-11 espresso-card p-10 md:p-14 pl-12 md:pl-16">
          <div className="relative grid grid-cols-12 gap-8 md:gap-12 items-center">
            {/* LEFT — copy */}
            <div className="col-span-12 md:col-span-7 lg:col-span-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--color-stamp)] grid place-items-center text-[var(--color-espresso)] font-display text-base font-bold">M</div>
                <div className="font-mono text-sm tracking-[0.22em] uppercase text-[var(--color-stamp)]">
                  Mira · agent
                </div>
              </div>
              <div
                className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.015em] max-w-[24ch]"
                style={{ fontVariationSettings: "'opsz' 96, 'SOFT' 100" }}
              >
                One conversation, planned across all three.{" "}
                <em className="italic text-[var(--color-stamp)]">Then ordered.</em>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 max-w-xl">
                {[
                  ["Food", "delivery"],
                  ["Instamart", "groceries"],
                  ["Dineout", "reservations"],
                ].map(([s, t]) => (
                  <div
                    key={s}
                    className="border border-[var(--color-paper)]/15 bg-[var(--color-paper)]/[0.04] backdrop-blur-sm px-4 py-3 rounded-md"
                  >
                    <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-stamp)]">{s}</div>
                    <div className="mt-1 font-serif text-base text-[var(--color-paper)]/85">{t}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — stat + sample */}
            <div className="col-span-12 md:col-span-5 lg:col-span-4 md:border-l md:border-[var(--color-paper)]/15 md:pl-10">
              <div className="font-mono text-sm tracking-[0.22em] uppercase text-[var(--color-paper)]/55">
                One input
              </div>
              <div
                className="mt-3 font-display text-[10rem] md:text-[12rem] leading-[0.78] tracking-[-0.06em] text-[var(--color-paper)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
              >
                <em className="italic text-[var(--color-stamp)]">1</em>
              </div>
              <div className="mt-2 font-serif text-lg text-[var(--color-paper)]/80 leading-snug">
                prompt, instead of switching three apps, three times a day.
              </div>

              {/* mini chat blip */}
              <div className="mt-7 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[var(--color-paper)]/[0.06] border border-[var(--color-paper)]/15">
                <span className="font-mono text-xs tracking-[0.22em] uppercase text-[var(--color-paper)]/70">user</span>
                <span className="font-serif italic text-base text-[var(--color-paper)]">yes</span>
                <span className="text-[var(--color-stamp)]">✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── RECEIPT (DEMO) ───────── */
function Receipt() {
  type Row = {
    day: string;
    mode: "COOK" | "IN" | "OUT";
    item: string;
    via: "INSTAMART" | "FOOD" | "DINEOUT";
    cost: string;
  };
  const rows: Row[] = [
    { day: "MON", mode: "COOK", item: "paneer bhurji + rotis",  via: "INSTAMART", cost: "₹420" },
    { day: "TUE", mode: "COOK", item: "chickpea pulao",         via: "INSTAMART", cost: "incl." },
    { day: "WED", mode: "IN",   item: "Behrouz biryani",        via: "FOOD",      cost: "₹380" },
    { day: "THU", mode: "COOK", item: "egg curry + rice",       via: "INSTAMART", cost: "incl." },
    { day: "FRI", mode: "IN",   item: "Faasos wraps",           via: "FOOD",      cost: "₹290" },
    { day: "SAT", mode: "OUT",  item: "Truffles, 8pm, table 2", via: "DINEOUT",   cost: "₹1100" },
    { day: "SUN", mode: "COOK", item: "paneer tikka pizza",     via: "INSTAMART", cost: "₹350" },
  ];

  return (
    <section id="receipt" className="relative z-10 px-6 md:px-10 py-20 md:py-32 overflow-hidden">
      {/* watermark */}
      <div className="absolute -left-[8vw] top-10 huge-mark opacity-[0.06]">order</div>

      <div className="grid grid-cols-12 gap-10 items-start relative">
        <div className="col-span-12 md:col-span-4 md:sticky md:top-10">
          <div className="idx mb-5">03 · A week with Mira</div>
          <h2
            className="font-display text-5xl md:text-6xl leading-[1.0] tracking-[-0.01em]"
            style={{ fontVariationSettings: "'opsz' 96, 'SOFT' 100" }}
          >
            One prompt.<br />
            <em className="italic">Seven dinners.</em>
          </h2>
          <p className="mt-6 font-serif text-lg text-[var(--color-ink-soft)] leading-relaxed">
            A real conversation, printed on a real-feeling ticket. The agent
            picks the right Swiggy surface for each day, builds a plan, and waits
            for a yes before any rupee moves.
          </p>
          <div className="mt-8 font-mono text-sm tracking-[0.16em] uppercase text-[var(--color-muted)] space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[var(--color-stamp)]">↳</span>
              <span>groceries via Instamart</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--color-stamp)]">↳</span>
              <span>delivery via Food</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--color-stamp)]">↳</span>
              <span>reservation via Dineout</span>
            </div>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 px-4 py-2.5 border border-[var(--color-rule)] rounded-full bg-[var(--color-card)] font-mono text-xs tracking-[0.18em] uppercase">
            <span className="w-2 h-2 rounded-full bg-[var(--color-stamp)]" style={{ boxShadow: "0 0 0 4px rgba(252,128,25,0.18)" }} />
            7 meals · 1 prompt
          </div>
        </div>

        {/* Stacked tickets */}
        <div className="col-span-12 md:col-span-8 relative">
          {/* Background polaroid */}
          <div
            className="absolute -top-6 -right-3 w-[80%] h-[260px] polaroid"
            style={{ transform: "rotate(4deg)" }}
          >
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] mb-2">draft / plan</div>
            <div className="font-display text-2xl">This week ·quick look</div>
            <div className="mt-3 font-mono text-[11px] leading-relaxed text-[var(--color-ink-soft)] columns-2 gap-6">
              MON · cook<br />TUE · cook<br />WED · in<br />THU · cook<br />FRI · in<br />SAT · out<br />SUN · cook
            </div>
          </div>

          <div className="bg-[var(--color-card)] border border-[var(--color-rule)] shadow-[0_30px_60px_-40px_rgba(26,22,18,0.45)] relative">
            {/* tape */}
            <div className="tape -top-3 left-10 -rotate-3" />
            <div className="tape -top-3 right-14 rotate-2" />

            {/* header */}
            <div className="px-6 md:px-9 pt-7 pb-4 flex items-end justify-between">
              <div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">
                  Ticket / 0001
                </div>
                <div className="font-display text-2xl mt-1">Mira · Kitchen</div>
              </div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-right text-[var(--color-muted)]">
                <div>Cover · 1</div>
                <div>Apr 26 · 22:14</div>
              </div>
            </div>

            <DashedDivider />

            {/* User msg */}
            <div className="px-6 md:px-9 py-6">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-stamp)]">
                You
              </div>
              <p className="mt-2 font-mono text-sm md:text-base leading-relaxed">
                Plan me a week under <span className="tabular">₹3000</span>,
                high-protein, mostly veg. I&rsquo;ll cook on Sunday and Wednesday.
              </p>
            </div>

            <DashedDivider />

            {/* Mira plan */}
            <div className="px-6 md:px-9 py-6">
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink)]">
                  Mira · plan ready
                </div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">
                  7 entries
                </div>
              </div>

              <table className="mt-5 w-full font-mono text-[13px] md:text-sm">
                <thead>
                  <tr className="text-[var(--color-muted)]">
                    <th className="text-left font-normal py-1">Day</th>
                    <th className="text-left font-normal py-1">Mode</th>
                    <th className="text-left font-normal py-1">Meal</th>
                    <th className="text-left font-normal py-1">Via</th>
                    <th className="text-right font-normal py-1 tabular">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.day} className="border-t border-dotted border-[var(--color-rule)]">
                      <td className="py-2 text-[var(--color-ink)]">{r.day}</td>
                      <td className="py-2"><ModeChip mode={r.mode} /></td>
                      <td className="py-2">{r.item}</td>
                      <td className="py-2"><ViaChip via={r.via} /></td>
                      <td className="py-2 text-right tabular">{r.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 flex items-end justify-between border-t-2 border-double border-[var(--color-rule)] pt-4">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">
                  Total estimated
                </div>
                <div className="font-display text-3xl tabular tracking-tight">₹2,540</div>
              </div>

              <div className="mt-4 font-serif italic text-[var(--color-ink-soft)]">
                Confirm to place orders.
              </div>
            </div>

            <DashedDivider />

            <div className="px-6 md:px-9 py-6">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-stamp)]">You</div>
              <p className="mt-2 font-mono text-sm md:text-base">yes</p>
            </div>

            <DashedDivider />

            <div className="px-6 md:px-9 py-6">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-ink)]">Mira · done</div>
              <ul className="mt-3 font-mono text-sm md:text-base leading-relaxed space-y-1">
                <li>↳ Groceries scheduled, Mon 9:00.</li>
                <li>↳ Saturday table held, 8:00 pm, Truffles.</li>
                <li>↳ Calendar invites sent.</li>
                <li>↳ I&rsquo;ll ping you when the courier&rsquo;s on the way.</li>
              </ul>
            </div>

            <div className="px-6 md:px-9 pt-2 pb-7 flex items-center justify-between">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">★ thank you ★</div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">end of ticket</div>
            </div>
          </div>

          {/* Floating sticky chip */}
          <div className="absolute -bottom-6 -left-4 chip chip-dark float-b" style={{ ["--r" as never]: "-4deg" }}>
            <span className="dot" />
            human-in-the-loop
          </div>
        </div>
      </div>
    </section>
  );
}

function DashedDivider() {
  return (
    <div
      className="h-px"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, var(--color-rule) 0 6px, transparent 6px 12px)",
      }}
    />
  );
}

function ModeChip({ mode }: { mode: "COOK" | "IN" | "OUT" }) {
  const styles = {
    COOK: "bg-[var(--color-paper-deep)] text-[var(--color-ink)]",
    IN: "bg-[var(--color-stamp)]/20 text-[var(--color-stamp-deep)]",
    OUT: "bg-[var(--color-ink)] text-[var(--color-paper)]",
  } as const;
  return (
    <span
      className={`inline-block px-2 py-[2px] text-[10px] tracking-[0.18em] ${styles[mode]}`}
    >
      {mode}
    </span>
  );
}

function ViaChip({ via }: { via: "INSTAMART" | "FOOD" | "DINEOUT" }) {
  return (
    <span className="text-[var(--color-muted)] tracking-[0.12em] text-[11px]">{via}</span>
  );
}

/* ───────── ARCHITECTURE ───────── */
function Architecture() {
  const plates = [
    {
      n: "I",
      title: "Architecture",
      desc:
        "How the pieces connect. Channels feed a Next.js app, the agent loop talks to OpenRouter for the LLM and to Swiggy's MCP servers for actions, with Supabase and Langfuse handling data and tracing.",
      src: "/swiggy_1.svg",
      alt: "High-level architecture diagram",
    },
    {
      n: "II",
      title: "Conversation Flow",
      desc:
        "What actually happens when a user chats with Mira. The agent loops between the LLM and the MCP servers to build a plan, then stops at a confirmation gate before any orders go through.",
      src: "/swiggy_2.svg",
      alt: "Conversation sequence diagram",
    },
    {
      n: "III",
      title: "System Design",
      desc:
        "The full picture with data models. Redis for sessions and caching, Postgres for plans and orders, Inngest for delivery polling and weekly plan regeneration. The agent core is the band in the middle.",
      src: "/swiggy_3.svg",
      alt: "Full system design with data models",
    },
  ];

  return (
    <section
      id="architecture"
      className="relative z-10 px-6 md:px-10 py-20 md:py-32 bg-[var(--color-paper-deep)] border-y border-[var(--color-rule)] overflow-hidden"
    >
      <div className="absolute inset-0 graph-paper opacity-50 pointer-events-none" />
      <div className="absolute -right-[8vw] top-10 huge-mark opacity-[0.06]">build</div>

      <div className="relative">
        <div className="idx mb-5">04 · How it works</div>
        <h2
          className="font-display text-4xl md:text-6xl leading-[1.0] tracking-[-0.015em] max-w-[24ch]"
          style={{ fontVariationSettings: "'opsz' 96, 'SOFT' 100" }}
        >
          Three plates from the engineering notebook.
        </h2>
        <p className="mt-6 max-w-[60ch] font-serif text-lg text-[var(--color-ink-soft)] leading-relaxed">
          Drawn for the people who&rsquo;ll review this. Solid arrows are
          requests, dashed are responses or telemetry.
        </p>

        <div className="mt-14 space-y-16">
          {plates.map((p) => (
            <figure key={p.n} className="grid grid-cols-12 gap-6 md:gap-10 items-start">
              <figcaption className="col-span-12 md:col-span-3">
                <div className="font-display text-7xl md:text-8xl leading-none tracking-tight text-[var(--color-stamp)]">
                  {p.n}
                </div>
                <div className="mt-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">
                  Plate {p.n}
                </div>
                <div className="mt-1 font-display text-2xl md:text-3xl leading-tight">
                  {p.title}
                </div>
                <p className="mt-4 font-serif text-[var(--color-ink-soft)] leading-relaxed">
                  {p.desc}
                </p>
              </figcaption>
              <div className="col-span-12 md:col-span-9 plate p-3 md:p-4">
                <div className="bg-[var(--color-card)]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={1600}
                    height={1100}
                    unoptimized
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── STACK ───────── */
function Stack() {
  const items: [string, string][] = [
    ["App", "Next.js (App Router). UI and API routes in one codebase, streaming friendly."],
    ["Runtime", "Railway, EC2, or Render. Node and Postgres, whichever ends up cheapest at scale."],
    ["DB & Auth", "Supabase. Postgres, auth, and Swiggy OAuth token storage in one place."],
    ["Cache", "Redis (Upstash). Sessions, rate limits, hot user prefs, chat memory window."],
    ["Models", "OpenRouter is model-agnostic. Claude, Grok, GPT, Gemini, swap by string."],
    ["MCP", "@modelcontextprotocol/sdk. Official SDK, no wrapper, full control of the tool loop."],
    ["Jobs", "Inngest. Delivery polling, weekly plan regen, retry on failures."],
    ["Tracing", "Langfuse traces every agent turn. Non-negotiable when the agent spends real money."],
    ["v2 channels", "Twilio for WhatsApp, Slack Bolt for Slack. Both feed the same agent."],
  ];
  return (
    <section className="relative z-10 px-6 md:px-10 py-20 md:py-28 overflow-hidden">
      <div className="glow-warm w-[40vw] h-[40vw] -top-[10vw] -left-[10vw]" />
      <div className="grid grid-cols-12 gap-10 relative">
        <div className="col-span-12 md:col-span-4">
          <div className="idx mb-5">05 · Built with</div>
          <h2
            className="font-display text-4xl md:text-5xl leading-[1.0] tracking-[-0.01em]"
            style={{ fontVariationSettings: "'opsz' 96, 'SOFT' 100" }}
          >
            Built with what works,<br />
            <em className="italic">not what trends.</em>
          </h2>
          <p className="mt-6 font-serif text-[var(--color-ink-soft)] leading-relaxed">
            One small team should be able to ship and operate this. Plain Node,
            plain Postgres, plain SDK. The interesting work is in the agent loop
            and the MCP integration, not the infra.
          </p>
        </div>

        <div className="col-span-12 md:col-span-8">
          <ul className="border-t border-[var(--color-rule)]">
            {items.map(([k, v]) => (
              <li
                key={k}
                className="grid grid-cols-12 gap-6 border-b border-[var(--color-rule)] py-5 hover:bg-[var(--color-paper-deep)] transition-colors"
              >
                <div className="col-span-12 md:col-span-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-stamp)] pt-[2px]">
                  {k}
                </div>
                <div className="col-span-12 md:col-span-9 font-serif text-lg text-[var(--color-ink-soft)] leading-snug">
                  {v}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────── ROADMAP ───────── */
function Roadmap() {
  const plan = [
    {
      v: "v1",
      when: "Four weeks from access grant",
      bullets: [
        "Web chat with streaming responses",
        "Swiggy OAuth account linking",
        "Meal planning across Food, Instamart, Dineout",
        "Order placement with explicit confirm",
        "Order tracking via webhooks",
      ],
    },
    {
      v: "v2",
      when: "Channel expansion",
      bullets: [
        "WhatsApp adapter (Twilio)",
        "Slack adapter (Slack Bolt)",
        "Group ordering ·dinner for 4 friends",
      ],
    },
    {
      v: "v3",
      when: "Personalisation",
      bullets: [
        "Past-order memory, learns cuisines and restaurants from your Swiggy history",
        "Pantry tracking and auto-restock for Instamart staples",
        "Household profiles, plan for the whole family with one Swiggy account",
      ],
    },
  ];
  return (
    <section className="relative z-10 px-6 md:px-10 py-20 md:py-28 bg-[var(--color-paper-deep)] border-y border-[var(--color-rule)] overflow-hidden">
      <div className="absolute inset-0 graph-paper opacity-30 pointer-events-none" />
      <div className="relative">
        <div className="idx mb-5">06 · What gets shipped</div>
        <h2
          className="font-display text-4xl md:text-6xl leading-[1.0] tracking-[-0.015em] max-w-[20ch]"
          style={{ fontVariationSettings: "'opsz' 96, 'SOFT' 100" }}
        >
          Web first. <em className="italic">Channels next. Memory last.</em>
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plan.map((p, i) => (
            <div
              key={p.v}
              className="card p-7 relative"
              style={{ transform: i === 1 ? "rotate(-0.5deg)" : i === 2 ? "rotate(0.5deg)" : "none" }}
            >
              <div className="flex items-baseline justify-between">
                <div className="font-display text-5xl tracking-tight">{p.v}</div>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] text-right max-w-[10rem]">
                  {p.when}
                </div>
              </div>
              <ul className="mt-6 space-y-3 font-serif text-[var(--color-ink-soft)] leading-snug">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="text-[var(--color-stamp)] font-mono">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {/* badge sticker */}
              <div className="absolute -top-3 -right-3 stamp text-[var(--color-stamp-deep)] font-mono text-[10px] px-3 py-1 select-none">
                stage · {p.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── FOOTER CTA ───────── */
function FooterCta() {
  return (
    <section className="relative z-10 px-6 md:px-10 pt-24 pb-12 bg-[var(--color-ink)] text-[var(--color-paper)] overflow-hidden">
      {/* watermark */}
      <div className="absolute -right-[6vw] -bottom-[6vw] huge-mark opacity-[0.10]" style={{ WebkitTextStroke: "1.5px rgba(252,128,25,0.6)" }}>mira</div>

      <div className="grid grid-cols-12 gap-10 items-end relative">
        <div className="col-span-12 md:col-span-8">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-stamp)]">
            Last word
          </div>
          <h2
            className="mt-4 font-display text-5xl md:text-7xl leading-[0.98] tracking-[-0.015em] max-w-[20ch]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
          >
            We&rsquo;d like to <em className="italic text-[var(--color-stamp)]">cook</em> on Swiggy.
          </h2>
          <p className="mt-6 font-serif text-lg text-[var(--color-paper)]/80 leading-relaxed max-w-[58ch]">
            Currently applying to the Swiggy Builders Club. Happy to share a
            working prototype with the review team within two weeks of getting
            MCP keys.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:builders@swiggy.in?subject=Mira%20%E2%80%94%20Builders%20Club%20application"
              className="font-mono text-xs tracking-[0.2em] uppercase bg-[var(--color-stamp)] text-[var(--color-ink)] px-5 py-3.5 hover:bg-[var(--color-paper)] transition-colors inline-flex items-center gap-3"
            >
              builders@swiggy.in
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 md:text-right font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-paper)]/60 leading-relaxed">
          <div className="text-[var(--color-paper)] mb-2">Filed by</div>
          <div>yrevash</div>
          <div className="mt-3 text-[var(--color-paper)] mb-2">For</div>
          <div>Swiggy Builders Club</div>
          <div className="mt-3 text-[var(--color-paper)] mb-2">Status</div>
          <div>Pre-access · prototype in 2 weeks</div>
        </div>
      </div>

      <hr className="my-12 border-0 h-px bg-[var(--color-paper)]/15" />

      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-paper)]/55">
        <div>Mira · Vol. 01 · Issue 0001</div>
        <div>An independent submission ·unaffiliated with Swiggy Limited.</div>
        <div>© 2026 yrevash</div>
      </div>
    </section>
  );
}

/* ───────── ICONS (decorative line art) ───────── */
function BowlIcon() {
  return (
    <svg width="160" height="160" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M8 30 H56 A24 22 0 0 1 8 30 Z" />
      <ellipse cx="32" cy="30" rx="24" ry="3" />
      <path d="M22 16 c2 -3 6 -3 8 0 M28 12 c2 -3 6 -3 8 0 M36 16 c2 -3 6 -3 8 0" />
    </svg>
  );
}
function BagIcon() {
  return (
    <svg width="160" height="160" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M14 22 L18 18 H46 L50 22 V52 a4 4 0 0 1 -4 4 H18 a4 4 0 0 1 -4 -4 Z" />
      <path d="M22 22 V14 a10 10 0 0 1 20 0 V22" />
    </svg>
  );
}
function TableIcon() {
  return (
    <svg width="160" height="160" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <rect x="6" y="22" width="52" height="6" rx="1" />
      <path d="M12 28 V52 M52 28 V52" />
      <path d="M20 14 V22 M44 14 V22" />
      <circle cx="32" cy="38" r="3" />
    </svg>
  );
}
function FoldedNapkinIcon() {
  return (
    <svg width="220" height="220" viewBox="0 0 64 64" fill="none" stroke="var(--color-stamp)" strokeWidth="1.2" strokeLinecap="round">
      <rect x="10" y="10" width="44" height="44" />
      <path d="M10 10 L54 54 M54 10 L10 54 M32 10 V54 M10 32 H54" />
    </svg>
  );
}
