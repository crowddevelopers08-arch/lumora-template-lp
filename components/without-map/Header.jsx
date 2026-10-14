import C from "./config";
import { WRAP, BTN_BASE, BTN_PRIMARY, BTN_GHOST } from "./ui";

export default function Header() {
  const nav = [
    ["treatments", "Treatments", C.treatments],
    ["why", "Why Us", C.why],
    ["results", "Results", C.beforeAfter],
    ["doctor", "Doctor", C.doctor],
    ["reviews", "Reviews", C.testimonials],
    ["faq", "FAQ", C.faq],
  ].filter(([id, , o]) => o.enabled && (id !== "results" || o.items.length));

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <div className={`${WRAP} flex items-center justify-between h-[62px] gap-3`}>
        <a href="#top" className="font-head font-extrabold text-[20px] text-brand flex items-center gap-2">
          {C.clinic.logo ? <img src={C.clinic.logo} alt={C.clinic.name} className="h-[50px] w-auto" /> : C.clinic.name}
        </a>
        <nav className="hidden lg:flex gap-[22px] font-semibold text-[14px] text-muted">
          {nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <div className="flex gap-2">
          <a href={`tel:${C.clinic.phone}`} data-call className={`${BTN_BASE} ${BTN_GHOST} py-[9px] px-4 text-[14px] hidden xs:inline-flex`}>📞 Call</a>
          <a href="#book" data-cta className={`${BTN_BASE} ${BTN_PRIMARY} py-[9px] px-4 text-[14px]`}>Book Now</a>
        </div>
      </div>
    </header>
  );
}
