import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./ui/Button";
import { Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2
      })
      .from(".hero-sub", {
        opacity: 0,
        y: 20,
        duration: 0.8
      }, "-=0.6")
      .from(".hero-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6
      }, "-=0.4");

      gsap.to(".hero-bg", {
        scale: 1.1,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="hero-section relative h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with Dark Overlay */}
                        <div className="hero-bg absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)] z-10" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="w-full h-full bg-[url('https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-cover bg-center grayscale-[20%] opacity-60" />
      </div>

            <div className="relative z-20 w-full px-6 md:px-12 grid md:grid-cols-12 gap-8 items-end pb-24">
        <div className="md:col-span-8">
          <h1 className="hero-line font-[var(--font-heading)] text-6xl md:text-[9rem] mb-6 leading-[0.85] tracking-tighter uppercase">
            Wohntraum <br />
            <span className="italic font-light text-[var(--primary)] lowercase">Im Freien.</span>
          </h1>
        </div>

        <div className="md:col-span-4 space-y-8 hero-sub">
          <div className="h-[1px] w-12 bg-[var(--primary)]" />
          <p className="text-lg text-[var(--foreground)] leading-snug font-light max-w-sm">
            Ihr Partner für Garten- und Landschaftsbau. Wir gestalten, pflegen und erhalten Ihren persönlichen Rückzugsort mit Schweizer Präzision.
          </p>
          <div className="hero-btn flex flex-col items-start gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-medium"
            >
              <span className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)] transition-all">
                →
              </span>
              Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-12 bg-[var(--primary)]" />
      </div>
    </section>
  );
}
