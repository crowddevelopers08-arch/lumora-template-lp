import Link from "next/link";

export const metadata = { title: "Lumora Landing Pages" };

const BTN = "inline-flex items-center justify-center rounded-full font-bold py-[14px] px-[26px] text-[16px] [transition:all_.2s]";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-soft px-[18px] py-10">
      <div className="text-center">
        <h1 className="mb-6">Lumora Landing Pages</h1>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/with-map" className={`${BTN} bg-accent text-[#1a1200] hover:bg-accent-dark`}>With Map →</Link>
          <Link href="/without-map" className={`${BTN} bg-white text-brand border-2 border-brand`}>Without Map →</Link>
        </div>
      </div>
    </main>
  );
}
