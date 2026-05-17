import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Check } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

const packages = [
  {
    name: "Starter Reels",
    price: "₹999",
    unit: "/ video",
    bestFor: "Creators starting on Instagram or TikTok",
    features: [
      "Up to 30 seconds",
      "Basic cuts & transitions",
      "Beat sync editing",
      "Motion subtitles",
      "HD export",
      "2 revisions"
    ],
    delivery: "2–3 Days",
    cta: "Get Started"
  },
  {
    name: "Professional Content",
    price: "₹2,499",
    unit: "/ video",
    bestFor: "Influencers & personal brands",
    features: [
      "Up to 60 seconds",
      "Advanced cinematic transitions",
      "Color grading",
      "Sound design",
      "Motion graphics",
      "Premium subtitles",
      "Social media optimization",
      "3 revisions"
    ],
    delivery: "3–5 Days",
    cta: "Book Now",
    popular: true
  },
  {
    name: "YouTube Editing",
    price: "₹4,999",
    unit: "/ video",
    bestFor: "Long-form YouTube creators",
    features: [
      "Up to 10 minutes",
      "Storytelling edits",
      "Motion graphics",
      "Zoom cuts",
      "Audio cleanup",
      "Thumbnail guidance",
      "Retention-focused pacing",
      "4 revisions"
    ],
    delivery: "4–6 Days",
    cta: "Start Project"
  },
  {
    name: "Premium Brand Film",
    price: "From ₹9,999",
    unit: "",
    bestFor: "Brands, gyms, commercial campaigns",
    features: [
      "Cinematic commercial editing",
      "Advanced color grading",
      "Luxury visual treatment",
      "Sound design",
      "Creative direction",
      "Multiple aspect ratios",
      "Social ad versions",
      "Priority delivery",
      "Unlimited minor revisions"
    ],
    delivery: "Custom Timeline",
    cta: "Contact Me"
  }
];

const addons = [
  { name: "Thumbnail Design", price: "₹499" },
  { name: "Fast Delivery (24 Hours)", price: "₹999" },
  { name: "Motion Graphics", price: "₹1,499" },
  { name: "Instagram Carousel Design", price: "₹799" },
  { name: "Advanced Color Grading", price: "₹1,299" },
  { name: "YouTube Shorts Package (5 Shorts)", price: "₹3,999" }
];

export const Pricing = () => {
  return (
    <div className="bg-primary text-secondary pt-32 pb-16 bg-grid relative w-full overflow-hidden">
      <div className="noise-overlay pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="px-6 md:px-12 py-20 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h1 className="text-5xl md:text-8xl lg:text-[10vw] font-bold uppercase tracking-tighter leading-[0.9] mb-12">
              Cinematic Editing.<br />
              <span className="text-white/40 italic font-normal">Designed To Be Felt.</span>
            </h1>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={0.2}>
              <p className="text-white/70 text-lg md:text-2xl leading-relaxed max-w-lg">
                Professional video editing services for creators, brands, gyms, influencers, and businesses looking to build a premium online presence.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-6 md:justify-end items-start">
              <a href="#contact" className="bg-white text-primary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors flex items-center justify-center gap-3 w-full sm:w-auto shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
                Book a Project
              </a>
              <a href="#" className="border border-white/30 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors text-center w-full sm:w-auto">
                View Portfolio
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="px-6 md:px-12 py-20 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-16 text-white/50">[ Packages ]</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className={`relative h-full flex flex-col bg-[#111111] border ${pkg.popular ? 'border-white/50 shadow-[0_0_20px_rgba(255,255,255,0.05)]' : 'border-white/10'} p-8 hover:border-white/40 transition-colors duration-500 group`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-8 -translate-y-1/2 bg-white text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{pkg.name}</h3>
                    <div className="text-white/50 text-xs uppercase tracking-widest h-8">{pkg.bestFor}</div>
                  </div>
                  
                  <div className="mb-8 pb-8 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold tracking-tighter">{pkg.price}</span>
                      <span className="text-white/50 text-sm">{pkg.unit}</span>
                    </div>
                    <div className="text-xs uppercase tracking-widest mt-4 text-white/70">
                      Delivery: {pkg.delivery}
                    </div>
                  </div>
                  
                  <div className="flex-1 mb-8">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-sm text-white/80">
                          <Check size={16} className="mt-0.5 text-white/50" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${pkg.popular ? 'bg-white text-primary hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'border border-white/30 text-white hover:bg-white hover:text-primary'}`}>
                    {pkg.cta}
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="px-6 md:px-12 py-20 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] mb-12 text-white/50">[ Add-on Services ]</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((addon, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="flex justify-between items-center p-6 border border-white/10 bg-black/20 hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer">
                  <span className="text-sm font-medium tracking-wide">{addon.name}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/50">{addon.price}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="px-6 md:px-12 py-32 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-20 text-center">
              How The Process Works
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-white/10 z-0"></div>
            
            {[
              { num: "01", title: "Share Your Footage", desc: "Upload your raw files securely to a shared drive." },
              { num: "02", title: "Discuss Style & Vision", desc: "We align on the creative direction, pacing, and vibe." },
              { num: "03", title: "Editing & Review", desc: "I craft the edit and send it for your feedback." },
              { num: "04", title: "Final Delivery", desc: "You receive the polished, high-res cinematic final export." }
            ].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="relative z-10">
                <div className="bg-[#111111] border border-white/10 p-8 h-full">
                  <div className="text-3xl font-light text-white/30 mb-6">{step.num}</div>
                  <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ME & TESTIMONIALS */}
      <section className="px-6 md:px-12 py-32 relative z-10 border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12">
                Why Choose Me
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Cinematic storytelling",
                "Fast communication",
                "Social media optimized edits",
                "Trend-aware editing style",
                "Premium visual quality",
                "Detail-focused workflow"
              ].map((point, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-sm uppercase tracking-widest">{point}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12">
                What They Say
              </h2>
            </FadeIn>
            <div className="flex flex-col gap-6">
              {[
                "The edits looked extremely premium and boosted my engagement instantly.",
                "Fast delivery, clean transitions, and amazing cinematic feel.",
                "Exactly matched the vibe I wanted for my brand."
              ].map((review, idx) => (
                <FadeIn key={idx} delay={idx * 0.2}>
                  <div className="p-8 border border-white/10 bg-[#111111] italic text-white/80">
                    "{review}"
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 md:px-12 py-40 relative z-10 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-tight">
              Your Content Deserves Better Editing.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-white/70 text-lg md:text-2xl mb-16">
              Turn raw footage into cinematic content that grabs attention and builds your brand.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#contact" className="bg-white text-primary px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              Let's Work Together
            </a>
            <a href="https://www.instagram.com/_yashh_06_?igsh=bXkwZzk5Mm5laGl5" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
              DM on Instagram
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
