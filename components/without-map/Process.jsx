import C from "./config";
import { WRAP, SECTION, G4, SectionHead, Cta } from "./ui";

export default function Process() {
  return (
    <section className={SECTION}>
      <div className={WRAP}>
        <SectionHead {...C.process} />
        <div className={G4}>
          {C.process.steps.map((s, i) => (
            <div key={s.title} className="relative pt-2">
              <div className="w-[42px] h-[42px] rounded-full bg-brand text-accent grid place-items-center font-extrabold mb-3">{i + 1}</div>
              <h3>{s.title}</h3>
              <p className="text-muted text-[15px]">{s.text}</p>
            </div>
          ))}
        </div>
        <Cta />
      </div>
    </section>
  );
}
