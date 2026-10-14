import C from "./config";
import LeadForm from "./LeadForm";
import { WRAP, BTN_BASE, BTN_SIZE, BTN_PRIMARY, BTN_GHOST, Ticks } from "./ui";

function Banner() {
  const b = C.hero.banner || {};
  if (!b.enabled) return null;
  return (
    <div
      className="relative bg-[#7fd6d6] bg-center bg-cover bg-no-repeat min-h-[140px] sm:min-h-[200px] flex items-center overflow-hidden"
      style={b.image ? { backgroundImage: `url('${b.image}')` } : undefined}
    >
      <div className={`${WRAP} flex items-center justify-between gap-5 w-full py-[18px]`}>
        <div>
          {b.title && <h2 className="text-[clamp(20px,3.4vw,32px)] m-0 text-ink">{b.title}</h2>}
          {b.sub && <p className="text-ink opacity-85 mt-1 font-medium">{b.sub}</p>}
        </div>
        {b.side && <img className="hidden sm:block h-[clamp(120px,18vw,200px)] w-auto rounded-xl" src={b.side} alt="" />}
      </div>
    </div>
  );
}

export default function Hero() {
  const H = C.hero;
  return (
    <>
      <Banner />
      <section className="bg-[linear-gradient(135deg,var(--color-soft),#fff_60%)] pt-10 pb-14">
        <div className={`${WRAP} grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-9 items-center`}>
          <div>
            {H.badge && (
              <span
                className="inline-block bg-white border border-line py-1.5 px-[14px] rounded-full text-[13px] font-semibold text-brand mb-[14px]"
                dangerouslySetInnerHTML={{ __html: H.badge }}
              />
            )}
            <h1 dangerouslySetInnerHTML={{ __html: H.headline }} />
            <p className="text-muted text-[18px] mt-[14px] mb-[18px]">{H.sub}</p>
            <Ticks items={H.bullets} />
            <div className="flex gap-3 flex-wrap">
              <a href="#book" data-cta className={`${BTN_BASE} ${BTN_SIZE} ${BTN_PRIMARY}`}>{H.primaryCta} →</a>
              <a href={`tel:${C.clinic.phone}`} data-call className={`${BTN_BASE} ${BTN_SIZE} ${BTN_GHOST}`}>📞 Call Now</a>
            </div>
            {H.image && (
              <img className="mt-[22px] rounded-2xl aspect-video object-cover w-full bg-soft" src={H.image} alt={C.clinic.name} fetchPriority="high" />
            )}
          </div>
          <div id="book">
            <LeadForm id="form1" />
          </div>
        </div>
      </section>
    </>
  );
}
