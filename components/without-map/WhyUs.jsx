import C from "./config";
import { WRAP, SECTION, CARD, CARD_P, ICON, G3, SectionHead, Cta } from "./ui";

export default function WhyUs() {
  return (
    <section className={SECTION} id="why">
      <div className={WRAP}>
        <SectionHead {...C.why} />
        <div className={G3}>
          {C.why.items.map((i) => (
            <div key={i.title} className={CARD}>
              <div className={ICON}>{i.icon}</div>
              <h3>{i.title}</h3>
              <p className={CARD_P}>{i.text}</p>
            </div>
          ))}
        </div>
        <Cta />
      </div>
    </section>
  );
}
