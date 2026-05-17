import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Pricing } from './Pricing';

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white"
      >
        <div className="flex justify-between items-center px-6 py-8 md:px-12 border-b border-white/20">
          <div className="flex items-center gap-4">
            <button 
              className="hover:opacity-70 transition-opacity md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
          <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-medium">
            <a href="#philosophy" className="hover:opacity-70 transition-opacity">Approach</a>
            <a href="#about" className="hover:opacity-70 transition-opacity">Work</a>
            <a href="#services" className="hover:opacity-70 transition-opacity">Skills</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#111111] z-[60] flex flex-col p-6 md:hidden">
          <div className="flex justify-between items-center py-2 border-b border-white/20 mb-12">
            <button 
              className="text-white hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-white text-4xl uppercase tracking-tighter font-bold">
            <a href="#philosophy" onClick={() => setIsOpen(false)} className="hover:opacity-70">Approach</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:opacity-70">Work</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:opacity-70">Skills</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:opacity-70">Contact</a>
          </div>
        </div>
      )}
    </>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#e5e5e5] text-primary">
      {/* LAYER 1: Background Wall & Original Image */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/main.png" 
          alt="Hero background" 
          className="w-full h-full object-contain object-center grayscale contrast-125 brightness-110 p-8 md:p-16"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#e5e5e5] opacity-60"></div>
      </motion.div>
      
      {/* LAYER 2: Text (In front of wall, behind person cutout) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-10 px-4 drop-shadow-sm">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] leading-none font-bold tracking-tighter text-center uppercase text-[#111111]"
        >
          Yugal
          <br />
          <span className="italic font-normal">Chaudhari</span>
        </motion.h1>
      </div>

      {/* LAYER 3: Person Cutout (In front of text) */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-20 pointer-events-none">
        <img 
          src="/main-removebg.png" 
          alt="Hero person foreground" 
          className="w-full h-full object-contain object-center grayscale contrast-125 brightness-110 p-8 md:p-16 drop-shadow-2xl"
        />
      </motion.div>

      <div className="absolute bottom-12 left-6 md:left-12 z-20 max-w-sm mix-blend-difference text-white">
        <FadeIn delay={0.8}>
          <p className="text-sm md:text-base font-medium mb-6 leading-relaxed">
            Turning raw footage into compelling stories.
          </p>
          <a href="#contact" className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/30 px-6 py-3 rounded-full text-xs tracking-widest uppercase hover:bg-white/20 transition-colors">
            [ Contact ]
          </a>
        </FadeIn>
      </div>

      <div className="absolute bottom-12 right-6 md:right-12 z-20 max-w-xs text-right mix-blend-difference text-white hidden md:block">
        <FadeIn delay={1}>
          <p className="text-sm font-medium leading-relaxed">
            — It is safe to trust your vision here, I bring concepts to reality.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section id="philosophy" className="relative bg-primary text-secondary py-32 px-6 md:px-12 border-t border-white/10 bg-grid">
    <div className="noise-overlay"></div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
      <div className="md:col-span-3">
        <FadeIn>
          <span className="text-xs uppercase tracking-widest text-white/50">[ Approach ]</span>
        </FadeIn>
      </div>
      <div className="md:col-span-9">
        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[1.1] mb-12">
            You don't just need cuts.<br />
            You need a rhythm that tells a story.
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn delay={0.3}>
            <p className="text-white/70 text-lg leading-relaxed">
              My work is not just "editing", but crafting: pacing the action, finding the perfect sync, adding visual effects, and delivering high-energy montages. The main tool is my creative vision.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="flex justify-start md:justify-end items-start">
            <button className="bg-white text-primary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors">
              [ Process ]
            </button>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="bg-primary text-secondary py-32 px-6 md:px-12 bg-grid relative border-t border-white/10">
    <div className="noise-overlay"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
        {[
          { title: "High-Energy Montages", img: "/pic2.jpg", delay: 0 },
          { title: "Cinematic Color Grading", img: "/pic3.jpg", delay: 0.2 },
          { title: "Seamless Transitions", img: "/pic4.jpg", delay: 0.4 },
          { title: "VFX & Compositing", img: "/main.png", delay: 0.6 },
        ].map((item, idx) => (
          <FadeIn key={idx} delay={item.delay} className="group cursor-pointer">
            <div className="relative overflow-hidden aspect-[3/4] mb-4 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out border border-white/10">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const VideoSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videos = [
    "/vid1.mp4",
    "/vid2.mp4",
    "/0409.mp4",
    "/5.mp4",
    "/6.mp4"
  ];

  return (
    <section id="about" className="bg-primary py-32 px-6 md:px-12 bg-grid relative border-t border-white/10 overflow-hidden">
      <div className="noise-overlay"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row h-[70vh] w-full gap-2 md:gap-4">
          {videos.map((vid, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex-1 hover:flex-[4] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border border-white/10 overflow-hidden group cursor-pointer bg-[#111111]"
            >
              <video 
                src={vid} 
                autoPlay 
                loop 
                muted={hoveredIndex !== idx}
                playsInline
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              ></video>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
              
              <div className="absolute bottom-6 left-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-100 pointer-events-none">
                <span className="text-white text-xs font-bold tracking-widest uppercase bg-black/50 px-3 py-1.5 backdrop-blur-sm border border-white/20">
                  Project 0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Resources = () => (
  <section id="resources" className="bg-primary text-secondary py-32 px-6 md:px-12 bg-grid relative border-t border-white/10">
    <div className="noise-overlay"></div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
      <div className="md:col-span-3">
        <FadeIn>
          <span className="text-xs uppercase tracking-widest text-white/50">[ Gear & Process ]</span>
        </FadeIn>
      </div>
      <div className="md:col-span-9">
        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[1.1] mb-12">
            Investment in high-quality visual storytelling.
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn delay={0.3}>
            <p className="text-white/70 text-lg leading-relaxed">
              Every frame is meticulously crafted. In this section, you can explore the breakdown of my projects and the techniques I use to elevate your content.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="flex justify-start md:justify-end items-start">
            <a href="#pricing" className="bg-white text-primary px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors flex items-center gap-3 group">
              [ Breakdown ]
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-primary text-secondary py-12 px-6 md:px-12 border-t border-white/20 relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-xs tracking-widest uppercase text-white/50">© 2026 Visual Impact.</p>
      <div className="flex gap-8 text-xs tracking-widest uppercase">
        <a href="https://www.instagram.com/_yashh_06_?igsh=bXkwZzk5Mm5laGl5" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Instagram</a>
        <a href="mailto:yugalchaudharixa@gmail.com" className="hover:text-white/70 transition-colors">Email</a>
      </div>
    </div>
  </footer>
);

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing'>('home');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleHash = () => {
      if (window.location.hash === '#pricing') {
        setCurrentPage('pricing');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };
    
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className="bg-primary min-h-screen font-body selection:bg-white selection:text-primary">
      <Navbar />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Philosophy />
            <Services />
            <VideoSection />
            <Resources />
          </>
        ) : (
          <Pricing />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
