import C from "./config";
import { WRAP, SECTION } from "./ui";

const ITEM = "bg-white border border-line rounded-[10px] py-2.5 px-[18px] font-semibold text-[14px] text-muted h-12 grid place-items-center";

export default function TrustLogos() {
  return (
    <section className={SECTION}>
      <div className={WRAP}>
        <div className="text-center max-w-[700px] mx-auto mb-[34px]">
          <h2 className="text-[24px]">{C.trustLogos.title}</h2>
        </div>
        <div className="flex flex-wrap gap-[14px] justify-center">
          {C.trustLogos.items.map((i) =>
            /^https?:/.test(i)
              ? <img key={i} className={ITEM} src={i} alt="partner" loading="lazy" />
              : <span key={i} className={ITEM}>{i}</span>
          )}
        </div>
      </div>
    </section>
  );
}
