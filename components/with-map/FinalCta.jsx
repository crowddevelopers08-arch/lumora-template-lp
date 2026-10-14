import C from "./config";
import LeadForm from "./LeadForm";
import { WRAP, SECTION, BTN_BASE, BTN_SIZE, BTN_BRAND, BTN_PRIMARY, Ticks } from "./ui";

function MapEmbed() {
  const src = C.clinic.mapEmbed || `https://maps.google.com/maps?q=${encodeURIComponent(C.clinic.name + " " + C.clinic.address)}&z=15&output=embed`;
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-card border border-line min-h-[320px] lg:min-h-[420px] bg-[#e5e7eb] order-2 lg:order-none">
      <iframe className="absolute inset-0 w-full h-full border-0" src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen title="Clinic location map" />
    </div>
  );
}

function NoMap() {
  return (
    <div className="self-center">
      <h2>{C.finalCta.title}</h2>
      <p className="text-muted mb-4">{C.finalCta.text}</p>
      <Ticks items={["Free first consultation", "Expert, caring therapists", "Call back within 30 minutes"]} />
      <a href={`tel:${C.clinic.phone}`} data-call className={`${BTN_BASE} ${BTN_SIZE} ${BTN_BRAND}`}>📞 Call Now</a>
    </div>
  );
}

const LS_ITEM = "flex items-center gap-2.5 text-[14px] leading-[1.4]";
const LS_LABEL = "block text-[12px] opacity-80 font-semibold uppercase tracking-[.05em]";
const LS_BTN = "py-[11px] px-5 text-[14px] flex-1 lg:flex-initial";

export default function FinalCta() {
  return (
    <section className={`${SECTION} bg-soft`} id="location">
      <div className={WRAP}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-7 items-stretch">
          {C.finalCta.showMap === false ? <NoMap /> : <MapEmbed />}
          <div><LeadForm id="form2" /></div>
        </div>

        <div className="mt-6 bg-brand text-white rounded-2xl py-[18px] px-[22px] flex flex-wrap flex-col items-start lg:flex-row lg:items-center gap-x-7 gap-y-4 justify-between">
          <div className={LS_ITEM}>
            <span className="text-[22px]">📍</span>
            <div><b className={LS_LABEL}>Visit Us</b><a className="text-white" href={C.clinic.mapLink} target="_blank" rel="noopener">{C.clinic.address}</a></div>
          </div>
          <div className={LS_ITEM}>
            <span className="text-[22px]">📞</span>
            <div><b className={LS_LABEL}>Call</b><a className="text-white" href={`tel:${C.clinic.phone}`} data-call>{C.clinic.phoneDisplay}</a></div>
          </div>
          {C.clinic.hours && (
            <div className={LS_ITEM}>
              <span className="text-[22px]">🕒</span>
              <div><b className={LS_LABEL}>Hours</b>{C.clinic.hours}</div>
            </div>
          )}
          <div className="flex gap-2.5 flex-wrap w-full lg:w-auto">
            <a href={`tel:${C.clinic.phone}`} data-call className={`${BTN_BASE} ${BTN_PRIMARY} ${LS_BTN}`}>📞 Call Now</a>
            <a href={C.clinic.mapLink} target="_blank" rel="noopener" className={`${BTN_BASE} bg-transparent text-white border-2 border-white ${LS_BTN}`}>Get Directions →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
