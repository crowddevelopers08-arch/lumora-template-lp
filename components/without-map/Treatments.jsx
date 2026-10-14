"use client";

import { useEffect, useRef } from "react";
import C from "./config";
import { WRAP, SECTION, CARD, CARD_P, THUMB, ICON, G3, BTN_BASE, BTN_PRIMARY, SectionHead, Cta } from "./ui";

const SL_BTN = "hidden sm:block absolute top-[38%] z-[3] w-11 h-11 rounded-full border-0 bg-white text-brand text-[28px] leading-none cursor-pointer shadow-[0_6px_18px_rgba(0,0,0,.2)] hover:bg-accent";

function Media({ item }) {
  return item.image
    ? <img className={THUMB} loading="lazy" src={item.image} alt={item.title} />
    : <div className={ICON}>{item.icon || "✚"}</div>;
}

function Slider({ items }) {
  const trackRef = useRef(null);
  const sliderRef = useRef(null);

  const go = (dir) => {
    const tr = trackRef.current;
    if (!tr) return;
    const s = tr.querySelector("article");
    const step = s ? s.getBoundingClientRect().width + 20 : 300;
    const max = tr.scrollWidth - tr.clientWidth;
    if (dir > 0 && tr.scrollLeft >= max - 4) tr.scrollTo({ left: 0 });
    else if (dir < 0 && tr.scrollLeft <= 4) tr.scrollTo({ left: max });
    else tr.scrollBy({ left: dir * step });
  };

  /* autoplay every 4s, paused on hover / touch / focus */
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const sl = sliderRef.current;
    let paused = false;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    const on = ["mouseenter", "touchstart", "focusin"], off = ["mouseleave", "touchend", "focusout"];
    on.forEach((ev) => sl.addEventListener(ev, pause, { passive: true }));
    off.forEach((ev) => sl.addEventListener(ev, resume, { passive: true }));
    const timer = setInterval(() => { if (!paused && !document.hidden) go(1); }, 4000);
    return () => {
      clearInterval(timer);
      on.forEach((ev) => sl.removeEventListener(ev, pause));
      off.forEach((ev) => sl.removeEventListener(ev, resume));
    };
  }, []);

  return (
    <div className="relative" ref={sliderRef}>
      <button className={`${SL_BTN} -left-[14px]`} aria-label="Previous services" onClick={() => go(-1)}>&#8249;</button>
      <div
        ref={trackRef}
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pt-1.5 px-1 pb-[18px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-webkit-overflow-scrolling:touch]"
      >
        {items.map((i) => (
          <article
            key={i.title}
            className={`${CARD} shrink-0 grow-0 basis-[84%] sm:basis-[calc((100%_-_20px)/2)] lg:basis-[calc((100%_-_40px)/3)] snap-start flex flex-col`}
          >
            <Media item={i} />
            <h3>{i.title}</h3>
            <p className={`${CARD_P} mb-[14px]`}>{i.text}</p>
            <a href="#book" data-cta className={`${BTN_BASE} ${BTN_PRIMARY} mt-auto py-2.5 px-[18px] text-[14px] self-start`}>Book Now</a>
          </article>
        ))}
      </div>
      <button className={`${SL_BTN} -right-[14px]`} aria-label="Next services" onClick={() => go(1)}>&#8250;</button>
    </div>
  );
}

export default function Treatments() {
  const T = C.treatments;
  return (
    <section className={`${SECTION} bg-soft`} id="treatments">
      <div className={WRAP}>
        <SectionHead {...T} />
        {T.slider ? (
          <>
            <Slider items={T.items} />
            <p className="text-center text-muted text-[13px] mt-1">Swipe or use the arrows to see all {T.items.length} services</p>
          </>
        ) : (
          <div className={G3}>
            {T.items.map((i) => (
              <div key={i.title} className={CARD}>
                <Media item={i} />
                <h3>{i.title}</h3>
                <p className={CARD_P}>{i.text}</p>
              </div>
            ))}
          </div>
        )}
        <Cta text={T.cta} />
      </div>
    </section>
  );
}
