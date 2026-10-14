import C from "./config";
import Header from "./Header";
import Hero from "./Hero";
import Stats from "./Stats";
import Treatments from "./Treatments";
import WhyUs from "./WhyUs";
import BeforeAfter from "./BeforeAfter";
import Process from "./Process";
import Doctor from "./Doctor";
import Offer from "./Offer";
import Testimonials from "./Testimonials";
import TrustLogos from "./TrustLogos";
import Faq from "./Faq";
import FinalCta from "./FinalCta";
import Footer from "./Footer";
import StickyBar from "./StickyBar";
import ScrollToTop from "./ScrollToTop";
import LeadModal from "./LeadModal";
import ClickTracking from "./ClickTracking";

/* section order — a section renders only when CONFIG[key].enabled is true */
const SECTIONS = [
  ["hero", Hero],
  ["stats", Stats],
  ["treatments", Treatments],
  ["why", WhyUs],
  ["beforeAfter", BeforeAfter],
  ["process", Process],
  ["doctor", Doctor],
  ["offer", Offer],
  ["testimonials", Testimonials],
  ["trustLogos", TrustLogos],
  ["faq", Faq],
  ["finalCta", FinalCta],
];

export const metadata = {
  title: C.meta.title,
  description: C.meta.description,
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": C.meta.schemaType,
    name: C.clinic.name,
    telephone: C.clinic.phone,
    address: C.clinic.address,
    openingHours: C.clinic.hours,
    ...(C.meta.url ? { url: C.meta.url } : {}),
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: C.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export default function LandingPage() {
  return (
    <>
      <Header />
      <main id="top">
        {SECTIONS.filter(([key]) => C[key] && C[key].enabled).map(([key, Section]) => <Section key={key} />)}
        <Footer />
      </main>
      <StickyBar />
      <ScrollToTop />
      <LeadModal />
      <JsonLd />
      <ClickTracking />
    </>
  );
}
