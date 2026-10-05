// Architectural flow diagram: vertical rail on mobile, horizontal on desktop.
type Item = { t: string; d?: string };
export default function Flow({ items, dark = false, label }: { items: Item[]; dark?: boolean; label: string }) {
  const line = dark ? "border-white/25" : "border-black/25";
  return (
    <ol aria-label={label} className={`grid gap-0 md:grid-flow-col md:auto-cols-fr border-l md:border-l-0 md:border-t ${line}`}>
      {items.map((it, i) => (
        <li key={it.t} className={`relative pl-6 pb-7 md:pl-0 md:pt-6 md:pr-4 md:pb-0 ${dark ? "" : ""}`}>
          <span aria-hidden className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full md:left-0 md:-top-[5px] ${dark ? "bg-accentLight" : "bg-accent"}`} />
          <p className="font-serif text-xl leading-tight">{it.t}</p>
          {it.d && <p className={`mt-1.5 text-sm leading-relaxed ${dark ? "text-white/65" : "text-mute"}`}>{it.d}</p>}
          <span className="sr-only">{i < items.length - 1 ? " then" : ""}</span>
        </li>
      ))}
    </ol>
  );
}
