import C from "./config";
import { WRAP, SECTION, BTN_BASE, BTN_SIZE, BTN_PRIMARY, Ticks } from "./ui";

export default function Offer() {
  const O = C.offer;
  return (
    <section className={SECTION}>
      <div className={WRAP}>
        <div className="bg-[linear-gradient(135deg,var(--color-brand),var(--color-brand-dark))] text-white rounded-3xl p-[26px] md:p-9 grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-6 items-center">
          <div>
            <span className="inline-block bg-accent text-[#1a1200] font-bold text-[12px] py-1 px-3 rounded-full mb-2.5">{O.tag}</span>
            <h2>{O.title}</h2>
            <Ticks items={O.bullets} />
          </div>
          <div className="text-center">
            <div className="font-head text-[48px] font-extrabold text-accent">
              <s className="text-[22px] text-[#cbd5e1] mr-2.5 font-medium">{O.oldPrice}</s>{O.price}
            </div>
            <a href="#book" data-cta className={`${BTN_BASE} ${BTN_SIZE} ${BTN_PRIMARY} mt-3`}>{O.cta} →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
