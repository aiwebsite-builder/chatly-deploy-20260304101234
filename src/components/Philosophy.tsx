import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="py-24 md:py-40 bg-[var(--background)] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] overflow-hidden bg-[var(--secondary)]">
             <div className="absolute inset-0 bg-gradient-to-tr from-[var(--background)] to-transparent opacity-60 z-10" />
                                                    <img
               src="https://images.pexels.com/photos/27015454/pexels-photo-27015454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
               className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
               alt="Architektonische Planung"
             />
          </div>

                    <div className="space-y-12">
            <div className="flex items-center gap-4">
              <span className="text-[var(--primary)] text-xs font-mono">01.</span>
              <h2 className="reveal-text text-xs uppercase tracking-[0.4em] font-medium">Der Spezialist</h2>
            </div>
            <h3 className="reveal-text font-[var(--font-heading)] text-5xl md:text-7xl leading-[0.9] tracking-tighter">
              Qualität & <br />
              <span className="italic text-[var(--primary)]">Zuverlässigkeit.</span>
            </h3>
            <div className="grid grid-cols-1 gap-8 max-w-md">
              <p className="reveal-text text-[var(--muted-foreground)] text-lg font-light leading-relaxed">
                Als führender Gartenspezialist in der Region legen wir höchsten Wert auf individuelle Beratung und nachhaltige Gestaltung. Ihr Garten ist unsere Leidenschaft.
              </p>
              <p className="reveal-text text-[var(--muted-foreground)] text-base font-light leading-relaxed italic border-l border-[var(--border)] pl-6">
                "Ein schöner Garten ist kein Zufall, sondern das Ergebnis von Fachwissen und sorgfältiger Planung."
              </p>
            </div>
            <div className="reveal-text pt-6">
              <div className="flex gap-12">
                <div>
                  <div className="text-3xl font-[var(--font-heading)] text-[var(--primary)]">35+</div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">Years Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-[var(--font-heading)] text-[var(--primary)]">1200+</div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">Estates Crafted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
