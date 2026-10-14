import C from "./config";
import { WRAP } from "./ui";

export default function Stats() {
  return (
    <div className="bg-brand text-white py-[30px]">
      <div className={`${WRAP} grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center`}>
        {C.stats.items.map((s, i) => (
          <div key={i}>
            <b className="text-accent block font-head text-[clamp(26px,4vw,38px)]">{s.value}</b>
            <span className="text-[14px] opacity-90">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
