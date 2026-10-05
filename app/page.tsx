import Section from "@/components/Section";
import Flow from "@/components/Flow";
import { Cta } from "@/components/Cta";
import { SITE, FOUNDER_STATS, PROOF } from "@/lib/config";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const outcomes = [
  { t: "Wealth", d: "More valuable conversations with potential clients, partners and decision-makers. More commercial opportunity, more leverage, more freedom." },
  { t: "Relationships", d: "A network that compounds instead of a pile of random connections. Closer ties with the clients and followers who matter, and a community built on shared values and problems." },
  { t: "Status", d: "A public identity that matches the level you have actually earned. Easier to understand, remember, trust, refer and take seriously. We do not manufacture status. We make earned authority legible." },
  { t: "Legacy", d: "Years of work turned into intellectual and market assets. History becomes knowledge, execution becomes proof, point of view becomes authority." },
];
const valueFlow = ["Experience", "Knowledge", "Positioning", "Authority", "Visibility", "Relationships", "Opportunities", "Commercial value"].map((t) => ({ t }));
const mining = ["History", "Execution and projects", "Successes and failures", "Lessons and mistakes", "Relationships and brands", "Turning points and ambitions"];
const dna = [
  ["Positioning", "Where you stand, and for whom."], ["Proof", "What you have actually done."], ["Point of view", "What you believe that others do not."],
  ["Expertise", "What you know deeply."], ["Stories", "The moments that show it."], ["Voice", "How you sound when you are most yourself."], ["Signature", "What people remember you for."],
];
const armada = [["A story", "what happened"], ["A lesson", "what it taught you"], ["A point of view", "what you now believe"], ["A framework", "how you repeat it"], ["A case study", "proof it works"], ["A conversation", "where it turns commercial"]];
const stages = [
  { t: "Position", d: "Make your value clear and legible." }, { t: "Connect", d: "Find the right people." }, { t: "Communicate", d: "Make your expertise visible and credible." },
  { t: "Converse", d: "Turn connections into meaningful relationships." }, { t: "Convert", d: "Turn relevant relationships into qualified commercial opportunities." }, { t: "Compound", d: "Turn proof, relationships and results into an asset that keeps growing." },
];
const pipeline = ["Target", "Connect", "Engage", "Converse", "Qualify", "Opportunity", "Deal"].map((t) => ({ t }));
const loop = ["Learn", "Build", "Execute", "Measure", "Review", "Pass or rework"].map((t) => ({ t }));
const forYou = ["You have built real expertise, a company or a track record, and the market sees only part of it.", "You want better conversations with clients, partners and decision-makers, not more noise.", "You are willing to execute every week and bring the evidence back.", "You prefer a few serious peers to a large anonymous crowd."];
const notYou = ["You want followers, virality or influencer status.", "You are looking for shortcuts, tricks or a guaranteed result.", "You want recorded lessons to watch at your own pace.", "You expect introductions to specific people. You build your own network here."];

export default function Page() {
  const proof = PROOF.filter((p) => p.show);
  return (
    <main>
      <header className="fixed inset-x-0 top-0 z-30 flex h-14 items-center justify-between bg-black/90 px-6 text-paper backdrop-blur">
        <a href="#top" className="text-xs tracking-[0.22em]">THE VALUE OFFICE</a>
        <a href={SITE.applicationUrl} className="hidden text-xs tracking-[0.18em] underline underline-offset-8 sm:block">REQUEST AN INVITATION</a>
      </header>

      {/* 01 HERO */}
      <section id="top" className="dark flex min-h-[100svh] flex-col justify-center bg-black px-6 pb-16 pt-28 text-paper">
        <div className="mx-auto w-full max-w-6xl">
          <p className="hero-rise text-xs tracking-[0.2em] text-accentLight">COHORT 0</p>
          <p className="hero-rise mt-2 max-w-md text-xs tracking-[0.16em] text-white/55">HIGH-VALUE RELATIONSHIP &amp; MARKET ACCESS OPERATING SYSTEM</p>
          <h1 className="hero-rise hero-rise-2 mt-10 max-w-4xl font-serif text-[2.6rem] leading-[1.05] md:text-[5.5rem]">You have already spent years becoming valuable.</h1>
          <p className="hero-rise hero-rise-2 mt-8 max-w-2xl font-serif text-xl leading-snug text-white/85 md:text-3xl">Now build the system that makes that value visible, trusted and connected to opportunity.</p>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/65">A high-touch 3-month execution environment for 10 Tunisian founders, CEOs and experts who are ready to turn accumulated expertise, reputation and knowledge into visibility, relationships, opportunities and eventually commercial value.</p>
          <div className="mt-10"><Cta dark /></div>
          <p className="mt-6 text-sm text-white/50">Invite-only. Recommendation-based.</p>
        </div>
      </section>

      {/* 02 GAP */}
      <Section n="01" title="You may already have the value. The market may not see all of it.">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="max-w-md text-lg leading-relaxed">Years of decisions, projects, failures and results sit in your head and your history. Most of it never reaches the people who could hire you, partner with you or refer you.</p>
          <p className="max-w-md text-lg leading-relaxed">That is a translation gap. It is not a talent gap. The Value Office exists to close it: to turn what you have earned into something the market can understand, trust and reach.</p>
        </div>
      </Section>

      {/* 03 OUTCOMES */}
      <Section dark n="02" title="What changes when the market can see your value.">
        <div className="grid gap-px bg-white/15 md:grid-cols-2">
          {outcomes.map((o) => (
            <article key={o.t} className="bg-black p-7 md:p-10">
              <h3 className="font-serif text-3xl">{o.t}</h3>
              <p className="mt-4 max-w-md leading-relaxed text-white/70">{o.d}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 04 REAL PRODUCT */}
      <Section n="03" title="LinkedIn is the infrastructure. It is not the product.">
        <p className="max-w-xl text-lg leading-relaxed">We do not promise followers, virality or a bigger audience. Those are indicators, not the goal. The product is the path from what you have earned to what you can build with it.</p>
        <div className="mt-14"><Flow label="The value flow" items={valueFlow} /></div>
      </Section>

      {/* 05 KNOWLEDGE MINING */}
      <Section id="system" dark n="04" title="Before we teach you what to publish, we study you.">
        <p className="max-w-xl text-lg leading-relaxed text-white/75">Every participant starts with a structured intake of their own record. From it we build a private Knowledge Base: the raw material for everything that follows.</p>
        <ul className="mt-12 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {mining.map((m) => <li key={m} className="bg-black p-6 font-serif text-xl">{m}</li>)}
        </ul>
        <p className="mt-10 max-w-xl font-serif text-2xl leading-snug">We don&rsquo;t manufacture authority. We extract, architect and activate the authority you have already earned.</p>
      </Section>

      {/* 06 DNA */}
      <Section n="05" title="Your Personal Brand DNA, in your own voice.">
        <p className="max-w-xl text-lg leading-relaxed">From the Knowledge Base we extract seven elements, then build a Voiceprint. The goal is not to make you sound like us. It is to make you sound more like yourself.</p>
        <dl className="mt-12 grid border-t border-black/25 sm:grid-cols-2">
          {dna.map(([t, d]) => (
            <div key={t} className="border-b border-black/25 py-5 sm:pr-8">
              <dt className="font-serif text-2xl">{t}</dt><dd className="mt-1 text-mute">{d}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* 07 ARMADA */}
      <Section dark n="06" title="You stop starting from zero every Monday.">
        <p className="max-w-xl text-lg leading-relaxed text-white/75">Your history becomes the raw material. One real experience can become all of this. We call the system Content Armada&trade;: your years of experience, working as an engine for authority and visibility.</p>
        <ul className="mt-12 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {armada.map(([a, b]) => (
            <li key={a} className="bg-black p-6"><p className="font-serif text-2xl">{a}</p><p className="mt-1 text-white/60">{b}</p></li>
          ))}
        </ul>
      </Section>

      {/* 08 SIX STAGES */}
      <Section n="07" title="One operating system, six stages.">
        <Flow label="The six-stage system" items={stages} />
      </Section>

      {/* 09 RELATIONSHIP ENGINE */}
      <Section dark n="08" title="A repeatable mechanism for high-value relationships.">
        <p className="max-w-xl text-lg leading-relaxed text-white/75">We teach you how to identify, approach, engage and develop relationships with high-value people relevant to your market. You build your own network. The value is the mechanism, not a promise of introductions.</p>
        <div className="mt-14"><Flow dark label="The relationship pipeline" items={pipeline} /></div>
      </Section>

      {/* 10 EXECUTION */}
      <Section n="09" title="You don&rsquo;t pass because you watched the lesson. You move forward because you executed it.">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-serif text-2xl">Every Saturday</p>
            <p className="mt-4 text-lg">17:00 to 18:00: Masterclass</p>
            <p className="text-lg">18:00 to 19:00: Workshop</p>
            <p className="mt-6 max-w-sm leading-relaxed text-mute">Plus clinics and a weekly review. Each week has an objective, deliverables, deadlines, metrics and evidence, so you leave knowing exactly what happens next.</p>
            <p className="mt-6 max-w-sm font-serif text-xl">A task without a deadline is a wish. A metric without a target is only data.</p>
          </div>
          <div><p className="mb-6 text-sm text-mute">The weekly loop</p><Flow label="The weekly loop" items={loop} /></div>
        </div>
      </Section>

      {/* 11 NETWORK PROOF */}
      <Section dark id="network" n="10" title="The network behind the system.">
        <p className="max-w-2xl text-lg leading-relaxed text-white/75">Over years of deliberate relationship-building, Mohamed Amine Khiari has built a network spanning founders, executives, investors and international business leaders. The point is not who you can name-drop. The point is learning how to build meaningful professional relationships at a higher level.</p>
        <div className="scroller -mx-6 mt-12 flex snap-x gap-4 overflow-x-auto px-6 pb-4" tabIndex={0} aria-label="LinkedIn connection screenshots, scrollable">
          {proof.map((p) => (
            <figure key={p.src} className="w-[82vw] max-w-[460px] shrink-0 snap-start">
              <img src={`${BASE}/network/${p.src}`} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" className="w-full border border-white/20" />
            </figure>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/50">Screenshots of Mohamed Amine Khiari&rsquo;s own first-degree LinkedIn connections. They show his relationship-building track record. They do not imply endorsement of Cohort 0, client relationships, or introductions.</p>
      </Section>

      {/* 12 FOUNDER */}
      <Section n="11" title="Built by someone who has done this at scale.">
        <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
          <div>
            <h3 className="font-serif text-3xl">Mohamed Amine Khiari</h3>
            <p className="mt-3 text-mute">Founder, The Value Office</p>
            <p className="mt-6 max-w-sm leading-relaxed">Founder-operator across entrepreneurship, finance, advisory and venture capital, with an international network built through consistent, deliberate relationship-building.</p>
          </div>
          <dl className="border-t border-black/25">
            {FOUNDER_STATS.map((s) => (
              <div key={s.v} className="flex items-baseline gap-5 border-b border-black/25 py-4">
                <dt className="w-24 shrink-0 font-serif text-3xl">{s.v}</dt><dd className="text-mute">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* 13-14 FIT */}
      <Section dark n="12">
        <div className="grid gap-14 md:grid-cols-2">
          <div><h2 className="font-serif text-3xl">Who this is for</h2>
            <ul className="mt-8 space-y-5">{forYou.map((x) => <li key={x} className="border-t border-white/20 pt-4 leading-relaxed text-white/80">{x}</li>)}</ul></div>
          <div><h2 className="font-serif text-3xl">Who this is not for</h2>
            <ul className="mt-8 space-y-5">{notYou.map((x) => <li key={x} className="border-t border-white/20 pt-4 leading-relaxed text-white/60">{x}</li>)}</ul></div>
        </div>
      </Section>

      {/* 15 COHORT 0 */}
      <Section n="13" title="Cohort 0.">
        <dl className="grid gap-px bg-black/20 sm:grid-cols-2 lg:grid-cols-4">
          {[["10", "Tunisian founders, CEOs and experts"], ["3 months", "of weekly, execution-led work"], ["Invite-only", "every seat is considered individually"], ["Recommendation-based", "the room is built through trust"]].map(([a, b]) => (
            <div key={a} className="bg-paper p-6"><dt className="font-serif text-2xl">{a}</dt><dd className="mt-2 text-mute">{b}</dd></div>
          ))}
        </dl>
        <p className="mt-6 text-sm text-mute">Start: {SITE.cohortDate}</p>
      </Section>

      {/* 16-17 CLOSE */}
      <section className="dark bg-black px-6 py-24 text-paper md:py-36">
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-2xl leading-snug text-white/80 md:text-3xl">Your experience is an asset. Your knowledge is an asset. Your reputation, your relationships and your stories are assets.</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">The question is whether all of them are working together. The Value Office helps you architect the system that connects them.</p>
          <h2 className="mt-14 font-serif text-4xl leading-tight md:text-6xl">Turn accumulated value into market value.</h2>
          <div className="mt-12"><Cta dark secondary={false} /></div>
          <p className="mt-6 text-sm text-white/50">Invite-only. Recommendation-based. Applications are reviewed individually.</p>
        </div>
      </section>
      <footer className="bg-black px-6 pb-24 pt-6 text-xs tracking-wide text-white/40 md:pb-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 border-t border-white/15 pt-6">
          <span>THE VALUE OFFICE &middot; COHORT 0</span><span>{SITE.email} &middot; {SITE.linkedinUrl}</span>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 bg-black/95 p-3 sm:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <a href={SITE.applicationUrl} className="flex min-h-[48px] items-center justify-center bg-paper text-sm font-medium tracking-[0.14em] text-black">REQUEST AN INVITATION</a>
      </div>
    </main>
  );
}
