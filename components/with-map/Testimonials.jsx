import C from "./config";
import { WRAP, SECTION, CARD, G3, SectionHead, Cta } from "./ui";

export default function Testimonials() {
  const T = C.testimonials;
  return (
    <section className={`${SECTION} bg-soft`} id="reviews">
      <div className={WRAP}>
        <SectionHead {...T} />
        {T.videos.length > 0 && (
          <div className="grid grid-flow-col auto-cols-[minmax(220px,260px)] gap-4 overflow-x-auto snap-x snap-mandatory pb-2.5 mb-6 [&>*]:snap-start">
            {T.videos.map((v) => (
              <div key={v} className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-black">
                <iframe className="absolute inset-0 w-full h-full border-0" loading="lazy" src={v} allowFullScreen title="Patient story" />
              </div>
            ))}
          </div>
        )}
        <div className={G3}>
          {T.reviews.map((r, i) => (
            <div key={i} className={CARD}>
              <div className="text-[#f59e0b] tracking-[2px]">★★★★★</div>
              <p className="italic text-ink text-[15px] mt-1.5">“{r.text}”</p>
              <div className="mt-3 text-[14px] text-muted">
                <b>{r.name}</b> • {r.meta} • <span className="text-brand">Verified</span>
              </div>
            </div>
          ))}
        </div>
        <Cta />
      </div>
    </section>
  );
}
