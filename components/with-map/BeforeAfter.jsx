import C from "./config";
import { WRAP, SECTION, G3, SectionHead, Cta } from "./ui";

const CAPTION = "absolute left-2 bottom-2 bg-black/65 text-white text-[12px] py-[3px] px-2.5 rounded-full";
const IMG = "aspect-square object-cover w-full bg-soft";

export default function BeforeAfter() {
  const B = C.beforeAfter;
  if (!B.items.length) return null;
  return (
    <section className={`${SECTION} bg-soft`} id="results">
      <div className={WRAP}>
        <SectionHead {...B} />
        <div className={G3}>
          {B.items.map((i, n) => (
            <div key={n} className="relative rounded-2xl overflow-hidden border border-line bg-white">
              <div className="grid grid-cols-2">
                <figure className="relative"><img className={IMG} loading="lazy" src={i.before} alt="Before" /><figcaption className={CAPTION}>Before</figcaption></figure>
                <figure className="relative"><img className={IMG} loading="lazy" src={i.after} alt="After" /><figcaption className={CAPTION}>After</figcaption></figure>
              </div>
              <div className="py-3 px-4 text-[14px] text-muted">{i.caption || ""}</div>
            </div>
          ))}
        </div>
        <p className="text-[12px] text-muted text-center mt-[18px]">{B.disclaimer}</p>
        <Cta />
      </div>
    </section>
  );
}
