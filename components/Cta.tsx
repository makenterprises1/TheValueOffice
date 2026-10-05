import { SITE } from "@/lib/config";
export function Cta({ dark = false, secondary = true }: { dark?: boolean; secondary?: boolean }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
      <a href={SITE.applicationUrl} className={`inline-flex min-h-[52px] items-center justify-center px-8 text-sm font-medium tracking-[0.14em] transition-colors ${dark ? "bg-paper text-black hover:bg-white" : "bg-black text-paper hover:bg-accent"}`}>
        REQUEST AN INVITATION
      </a>
      {secondary && (
        <a href="#system" className={`inline-flex min-h-[52px] items-center justify-center text-sm tracking-[0.14em] underline underline-offset-8 decoration-1 ${dark ? "text-white/80 hover:text-white" : "text-black/70 hover:text-black"}`}>
          SEE THE SYSTEM
        </a>
      )}
    </div>
  );
}
