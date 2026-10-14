import C from "./config";
import { WRAP, SECTION, CARD, BTN_BASE, BTN_SIZE, BTN_BRAND, Ticks } from "./ui";

export default function Doctor() {
  const D = C.doctor;
  return (
    <section className={`${SECTION} bg-soft`} id="doctor">
      <div className={`${WRAP} grid grid-cols-1 md:grid-cols-[.8fr_1.2fr] gap-9 items-center`}>
        <div>
          {D.image
            ? <img className="rounded-2xl w-full aspect-[4/5] object-cover bg-soft" loading="lazy" src={D.image} alt={D.name} />
            : <div className={`${CARD} aspect-[4/5] grid place-items-center text-[64px]`}>👨‍⚕️</div>}
        </div>
        <div>
          <span className="inline-block text-gold font-bold text-[13px] tracking-[.08em] uppercase mb-2">{D.eyebrow}</span>
          <h2>{D.name}</h2>
          <p className="text-brand font-bold">{D.role}</p>
          <p className="border-l-4 border-accent pl-[14px] my-[14px] italic text-muted">“{D.quote}”</p>
          <Ticks items={D.points} />
          <a href="#book" data-cta className={`${BTN_BASE} ${BTN_SIZE} ${BTN_BRAND}`}>{D.cta} →</a>
        </div>
      </div>
    </section>
  );
}
