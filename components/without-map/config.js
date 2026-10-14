/* =====================================================================
   CONFIG — the only part you edit for each client / treatment page
   Set a section to enabled:false to hide it.
   Colours live in app/globals.css (@theme).
   ===================================================================== */
const CONFIG = {
  meta: {
    title: "Skin & Hair Clinic in Viluppuram | Lumora Skin and Hair",
    description: "Advanced skin and hair treatments in Viluppuram: acne, melasma, PRP, laser, hair fall control and hair transplantation. Book a free consultation.",
    schemaType: "MedicalClinic",
    url: "",
  },
  clinic: {
    name: "Lumora Skin and Hair",
    logo: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Lumora_Logo-2.png",
    phone: "+919360209743",
    phoneDisplay: "+91 93602 09743",
    whatsapp: "919360209743",
    whatsappMsg: "Hi, I'd like to book a consultation at Lumora Skin and Hair.",
    address: "No.46, Second Floor, Glam Studios Upstair, KK Road, Viluppuram, Tamil Nadu 605602",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Lumora+Skin+and+Hair+KK+Road+Viluppuram",
    mapEmbed: "",
    hours: "",
    email: "lumoraclinic@gmail.com",
  },
  popup: { enabled: true, delaySeconds: 20, timerTitle: "Book Your Free Consultation", timerKicker: "Limited slots today", exitTitle: "Wait! Get a Free Consultation", exitKicker: "Before you go" },
  tracking: { webhookUrl: "", thankYouUrl: "", metaPixelEvent: "Lead" },

  hero: {
    enabled: true,
    banner: { enabled: false, image: "", title: "", sub: "", side: "" },
    badge: "✨ Skin & Hair Clinic • Viluppuram",
    headline: "Glowing Skin. <u>Healthy Hair.</u>",
    sub: "Advanced treatments, tailored to you.",
    bullets: ["Skin & hair experts under one roof", "Personalised treatment plans", "Free consultation"],
    image: "",
    primaryCta: "Book Free Consultation",
  },

  form: {
    title: "Book Free Consultation",
    note: "We'll call you in 30 mins",
    button: "Book Appointment →",
    concernLabel: "Select your concern",
    concerns: ["Acne / Acne Scars", "Pigmentation / Melasma", "Anti-Ageing / Glow", "Laser Treatment", "Hair Fall / Thinning", "Hair Transplant", "Dandruff / Scalp", "Other"],
    askCity: false,
    askMessage: false,
    privacyText: "🔒 Your details are safe and never shared.",
  },

  stats: { enabled: false, items: [] },

  treatments: {
    enabled: true, slider: true, eyebrow: "Our Services", title: "All Our Skin & Hair Services", sub: "Swipe through everything we offer.", cta: "Find My Treatment",
    items: [
      { title: "PRP Skin Treatment", text: "Natural rejuvenation for brighter, healthier skin.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/PRP-Skin-Treatment.png" },
      { title: "Glutathione IV", text: "Skin-brightening drip therapy, doctor supervised.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Glutathione-IV-1.png" },
      { title: "Oxygeno Facial", text: "A refreshing facial for a clean, radiant glow.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Oxygeno-Facial.png" },
      { title: "Double Chin Reduction", text: "Contour the jawline and reduce under-chin fullness.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Double-Chin-Reduction.png" },
      { title: "Botox & Fillers", text: "Smooth, natural-looking facial refinement.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Botox-and-Fillers.png" },
      { title: "Microdermabrasion", text: "Gentle exfoliation for smoother, fresher skin.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Microdermabrasion.png" },
      { title: "Anti-Acne Treatments", text: "Targeted care for active acne and marks.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Anti-Acne-Treatments.png" },
      { title: "MNRF & Meso Glow", text: "Skin renewal and glow boosting in one plan.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/MNRF-Meso-Glow.png" },
      { title: "Melasma Treatment", text: "Reduce pigmentation and even out skin tone.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Melasma-Treatment.png" },
      { title: "Microneedling RF", text: "Improve texture, scars and skin firmness.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Microneedling-Rf.png" },
      { title: "Mesoglow", text: "Hydrating treatment for dull, tired skin.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Mesoglow.png" },
      { title: "Q-Switch Laser", text: "Laser care for pigmentation and skin clarity.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Q-Switch-Laser.png" },
      { title: "Hairfall Control & Regrowth", text: "Find the cause and treat hair fall early.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Hairfall-Contro.png" },
      { title: "PRP Hair Treatment", text: "Support thicker, stronger hair growth.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/PRP-Hair-Treatment-1.png" },
      { title: "Excell GFC", text: "Growth-factor therapy for thinning hair.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Excell-GFC.png" },
      { title: "Scalp Rejuvenation", text: "Revive scalp health for stronger hair roots.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Scalp-Rejuvenation.png" },
      { title: "Laser Hair Therapy", text: "Non-surgical therapy for thinning hair.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Laser-Hair-Therapy.png" },
      { title: "Hair Transplantation", text: "Permanent, natural-looking hair restoration.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Hair-Transplantation.png" },
      { title: "Dandruff Treatment", text: "Clear flakes and soothe an irritated scalp.", image: "https://lumoraskinandhair.com/wp-content/uploads/2025/07/Dandruff-Treatment-1.png" },
    ],
  },

  why: {
    enabled: true, eyebrow: "Why Lumora", title: "Care That Feels Personal",
    items: [
      { icon: "✨", title: "Skin + Hair, One Clinic", text: "Complete care for both, with one trusted team." },
      { icon: "🎯", title: "Personalised Plans", text: "No one-size-fits-all. Treatment built around you." },
      { icon: "🩺", title: "Consultation First", text: "We assess your concern before recommending anything." },
      { icon: "🔬", title: "Advanced Treatments", text: "PRP, laser, GFC, microneedling RF and more." },
      { icon: "🧼", title: "Safe & Hygienic", text: "A clean, comfortable clinic environment." },
      { icon: "💬", title: "Easy Booking", text: "Book by form, call or WhatsApp." },
    ],
  },

  beforeAfter: { enabled: false, eyebrow: "Results", title: "Real Patients. Real Results.", items: [], disclaimer: "Results vary from person to person." },

  process: {
    enabled: true, eyebrow: "How It Works", title: "Your Journey in 4 Steps",
    steps: [
      { title: "Book", text: "Fill the form, call or WhatsApp us." },
      { title: "Consult", text: "Our team assesses your skin or hair." },
      { title: "Plan", text: "You get a clear treatment plan and cost." },
      { title: "Treat & Review", text: "Treatment with regular follow-ups." },
    ],
  },

  doctor: { enabled: false, eyebrow: "Doctor", name: "", role: "", image: "", quote: "", points: [], cta: "" },
  offer: { enabled: false, tag: "", title: "", oldPrice: "", price: "", bullets: [], cta: "" },
  testimonials: { enabled: false, eyebrow: "Reviews", title: "What Patients Say", videos: [], reviews: [] },
  trustLogos: { enabled: false, title: "", items: [] },

  faq: {
    enabled: true, eyebrow: "FAQ", title: "Common Questions",
    items: [
      { q: "What treatments do you offer for skin and hair?", a: "We offer PRP therapy, anti-ageing facials, acne solutions, hair fall control, laser hair therapy and hair transplantation, all tailored to your needs." },
      { q: "Do I need a consultation before booking a treatment?", a: "Yes. A consultation helps us understand your concern and suggest the right treatment. Your first consultation is free." },
      { q: "How soon can I see results?", a: "It depends on the treatment and your skin or hair condition. Your doctor will explain the expected timeline during consultation." },
      { q: "Are the treatments safe?", a: "Treatments are performed by trained professionals in a hygienic clinic. Your doctor will explain the procedure and any precautions." },
      { q: "Where is the clinic?", a: "No.46, Second Floor, Glam Studios Upstair, KK Road, Viluppuram, Tamil Nadu 605602." },
    ],
  },

  finalCta: { enabled: true, showMap: false, title: "Ready for Your Best Skin & Hair?", text: "Book today. Our team will call you within 30 minutes." },

  footer: {
    about: "Advanced skin and hair care in Viluppuram.",
    links: [["Privacy Policy", "#"], ["Terms & Conditions", "#"]],
    legal: "Disclaimer: Information on this page is for general awareness and is not a substitute for medical advice. Individual results may vary.",
  },
};

export default CONFIG;
