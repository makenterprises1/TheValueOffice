import { ReactNode } from "react";
export default function Section({ id, n, title, dark = false, children }: { id?: string; n?: string; title?: ReactNode; dark?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={`${dark ? "dark bg-black text-paper" : ""} px-6 py-20 md:py-28`}>
      <div className="mx-auto max-w-6xl">
        {n && <p className={`mb-6 text-xs tracking-[0.2em] ${dark ? "text-accentLight" : "text-accent"}`}>{n}</p>}
        {title && <h2 className="max-w-3xl font-serif text-[2rem] leading-[1.12] md:text-5xl">{title}</h2>}
        <div className={title ? "mt-10 md:mt-14" : ""}>{children}</div>
      </div>
    </section>
  );
}
