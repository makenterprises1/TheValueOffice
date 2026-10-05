import Link from "next/link";
import Section from "./Section";
import Flow from "./Flow";
import { Cta } from "./Cta";
import { T, Locale } from "@/lib/content";
import { SITE, BASE, INBOUND, NETWORK } from "@/lib/config";

const tile = "bg-paper dark:bg-black";
const grid = "grid gap-px bg-black/20 dark:bg-white/15";
const muted = "text-mute dark:text-white/65";

export default function Landing({ locale }: { locale: Locale }) {
  const t = T[locale];
  const f = (a: string[]) => a.map((x) => ({ t: x }));
  const Shot = ({ s, w }: { s: (typeof INBOUND)[number]; w: string }) => (
    <figure className={`${w} shrink-0 snap-start`}>
      <img src={`${BASE}/network/${s.src}.webp`} alt={s.alt[locale]} width={s.w} height={s.h} loading="lazy" decoding="async" className="w-full border border-black/20 dark:border-white/20" />
      {s.kind && <figcaption className={`mt-2 text-xs ${muted}`}>{s.kind === "dm" ? t.inbound.dm : t.inbound.invite}</figcaption>}
    </figure>
  );
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-30 flex h-14 items-center justify-between bg-black/90 px-6 text-paper backdrop-blur">
        <a href="#top" className="text-xs tracking-[0.22em]">THE VALUE OFFICE</a>
        <nav className="flex items-center gap-6 text-xs tracking-[0.18em]">
          <Link href={t.other.href} hrefLang={t.other.href === "/" ? "en" : "fr"} className="text-white/70 hover:text-white">{t.other.label}</Link>
          <a href={SITE.applicationUrl} target="_blank" rel="noopener noreferrer" className="hidden underline underline-offset-8 sm:block">{t.cta}</a>
        </nav>
      </header>

      <section id="top" className="dark flex min-h-[100svh] flex-col justify-center bg-black px-6 pb-16 pt-28 text-paper">
        <div className="mx-auto w-full max-w-6xl">
          <p className="hero-rise text-xs tracking-[0.2em] text-accentLight">{t.hero.label}</p>
          <p className="hero-rise mt-2 max-w-md text-xs tracking-[0.16em] text-white/55">{t.hero.cat}</p>
          <h1 className="hero-rise hero-rise-2 mt-10 max-w-4xl font-serif text-[2.6rem] leading-[1.05] md:text-[5.5rem]">{t.hero.h1}</h1>
          <p className="hero-rise hero-rise-2 mt-8 max-w-2xl font-serif text-xl leading-snug text-white/85 md:text-3xl">{t.hero.sub}</p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/65">{t.hero.body}</p>
          <div className="mt-10"><Cta dark label={t.cta} label2={t.cta2} /></div>
          <p className="mt-6 text-sm text-white/50">{t.hero.note}</p>
        </div>
      </section>

      {INBOUND.length > 0 && (
        <Section id="inbound" title={t.inbound.title}>
          <p className="max-w-2xl text-lg leading-relaxed">{t.inbound.sub}</p>
          <div className="scroller -mx-6 mt-10 flex snap-x items-start gap-4 overflow-x-auto px-6 pb-4" tabIndex={0} aria-label={t.inbound.title}>
            {INBOUND.map((s) => <Shot key={s.src} s={s} w="w-[72vw] max-w-[320px]" />)}
          </div>
          <p className={`mt-6 max-w-2xl text-sm leading-relaxed ${muted}`}>{t.inbound.note}</p>
        </Section>
      )}

      <Section dark n="01" title={t.gap}><span /></Section>

      <Section n="02" title={t.outcomesTitle}>
        <div className={`${grid} md:grid-cols-2`}>
          {t.outcomes.map(([a, b]) => (
            <article key={a} className={`${tile} p-7 md:p-10`}><h3 className="font-serif text-3xl">{a}</h3><p className={`mt-4 max-w-md leading-relaxed ${muted}`}>{b}</p></article>
          ))}
        </div>
      </Section>

      <Section dark n="03" title={t.productTitle}><Flow dark label={t.productTitle} items={f(t.valueFlow)} /></Section>

      <Section n="04" title={t.miningTitle}>
        <ul className={`${grid} sm:grid-cols-2 lg:grid-cols-3`}>{t.mining.map((m) => <li key={m} className={`${tile} p-6 font-serif text-xl`}>{m}</li>)}</ul>
        <p className="mt-10 max-w-xl font-serif text-2xl leading-snug">{t.miningQuote}</p>
      </Section>

      <Section dark n="05" title={t.dnaTitle}>
        <ul className="flex flex-wrap gap-3">{t.dna.map((d) => <li key={d} className="border border-white/30 px-5 py-3 font-serif text-xl">{d}</li>)}</ul>
      </Section>

      <Section n="06" title={t.armadaTitle}>
        <ul className={`${grid} sm:grid-cols-2 lg:grid-cols-3`}>{t.armada.map((a) => <li key={a} className={`${tile} p-6 font-serif text-2xl`}>{a}</li>)}</ul>
        <p className={`mt-6 ${muted}`}>{t.armadaLine}</p>
      </Section>

      <Section id="system" dark n="07" title={t.stagesTitle}>
        <Flow dark label={t.stagesTitle} items={t.stages.map(([a, d]) => ({ t: a, d }))} />
      </Section>

      <Section n="08" title={t.pipelineTitle}><Flow label={t.pipelineTitle} items={f(t.pipeline)} /></Section>

      <Section dark n="09" title={t.execTitle}>
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-serif text-2xl">{t.sat[0]}</p>
            <p className="mt-4 text-lg">{t.sat[1]}</p><p className="text-lg">{t.sat[2]}</p>
            <p className="mt-8 max-w-sm font-serif text-xl">{t.execQuote}</p>
          </div>
          <div><p className="mb-6 text-sm text-white/60">{t.loopLabel}</p><Flow dark label={t.loopLabel} items={f(t.loop)} /></div>
        </div>
      </Section>

      <Section id="network" n="10" title={t.networkTitle}>
        <p className="max-w-2xl text-lg leading-relaxed">{t.networkLine}</p>
        <div className="scroller -mx-6 mt-10 flex snap-x items-start gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0" tabIndex={0} aria-label={t.networkTitle}>
          {NETWORK.map((s) => <Shot key={s.src} s={s} w="w-[80vw] max-w-[420px] md:w-auto md:max-w-none" />)}
        </div>
        <p className={`mt-6 max-w-2xl text-sm leading-relaxed ${muted}`}>{t.networkNote}</p>
      </Section>

      <Section dark n="11" title={t.founderTitle}>
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <div><h3 className="font-serif text-3xl">Mohamed Amine Khiari</h3><p className="mt-3 text-white/60">{t.founderRole}</p></div>
          <dl className="border-t border-white/25">
            {t.stats.map(([v, l]) => (
              <div key={v} className="flex items-baseline gap-5 border-b border-white/25 py-4"><dt className="w-24 shrink-0 font-serif text-3xl">{v}</dt><dd className="text-white/65">{l}</dd></div>
            ))}
          </dl>
        </div>
      </Section>

      <Section n="12">
        <div className="grid gap-14 md:grid-cols-2">
          {[[t.forTitle, t.forYou, ""], [t.notTitle, t.notYou, "text-mute"]].map(([h, items, c]) => (
            <div key={h as string}><h2 className="font-serif text-3xl">{h as string}</h2>
              <ul className="mt-8 space-y-5">{(items as string[]).map((x) => <li key={x} className={`border-t border-black/25 pt-4 leading-relaxed ${c}`}>{x}</li>)}</ul></div>
          ))}
        </div>
      </Section>

      <Section dark n="13" title={t.cohortTitle}>
        <dl className={`${grid} sm:grid-cols-2 lg:grid-cols-4`}>
          {t.cohort.map(([a, b]) => <div key={a} className={`${tile} p-6`}><dt className="font-serif text-2xl">{a}</dt><dd className={`mt-2 ${muted}`}>{b}</dd></div>)}
        </dl>
        <p className="mt-6 text-sm text-white/55">{t.start}: {SITE.cohortDate}</p>
      </Section>

      <Section id="faq" title={t.faqTitle}>
        <div className="max-w-3xl border-t border-black/25">
          {t.faq.map(([q, a]) => (
            <details key={q} className="group border-b border-black/25 py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-xl marker:hidden">
                {q}<span aria-hidden className="mt-1 text-accent transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-mute">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="dark bg-black px-6 py-24 text-paper md:py-36">
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-2xl leading-snug text-white/80 md:text-3xl">{t.close[0]}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">{t.close[1]}</p>
          <h2 className="mt-14 font-serif text-4xl leading-tight md:text-6xl">{t.closeH}</h2>
          <div className="mt-12"><Cta dark label={t.cta} /></div>
          <p className="mt-6 text-sm text-white/50">{t.closeNote}</p>
        </div>
      </section>
      <footer className="bg-black px-6 pb-24 pt-6 text-xs tracking-wide text-white/50 md:pb-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 border-t border-white/15 pt-6">
          <span>THE VALUE OFFICE &middot; {t.hero.label}</span>
          <span className="flex gap-5"><a href={`mailto:${SITE.email}`} className="underline underline-offset-4">{SITE.email}</a><a href={SITE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">LinkedIn</a></span>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 bg-black/95 p-3 sm:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <a href={SITE.applicationUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-[48px] items-center justify-center bg-paper text-sm font-medium tracking-[0.14em] text-black">{t.cta}</a>
      </div>
    </main>
  );
}
