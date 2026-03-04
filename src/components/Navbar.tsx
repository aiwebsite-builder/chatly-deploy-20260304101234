import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../lib/utils";
import { Menu, X, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const showAnim = gsap.from(navRef.current, {
      yPercent: -100,
      paused: true,
      duration: 0.3
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      }
    });
  }, []);

    const navLinks = [
    { name: "Über Uns", id: "philosophy" },
    { name: "Leistungen", id: "services" },
    { name: "Galerie", id: "portfolio" },
    { name: "Kontakt", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-300 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]"
    >
            <div className="flex items-center gap-4">
        <div className="flex flex-col leading-none">
          <span className="font-[var(--font-heading)] text-2xl font-medium tracking-tighter">REISS & REBER</span>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-4 h-[1px] bg-[var(--primary)]" />
            <span className="text-[9px] tracking-[0.5em] uppercase text-[var(--muted-foreground)]">Zürich • 1988</span>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollTo(link.id)}
            className="text-xs uppercase tracking-[0.2em] hover:text-[var(--primary)] transition-colors"
          >
            {link.name}
          </button>
        ))}
        <button
          onClick={() => scrollTo('contact')}
          className="px-6 py-2 border border-[var(--primary)] text-[var(--primary)] text-xs uppercase tracking-[0.2em] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-all"
        >
          Enquire
        </button>
      </div>

      <button className="md:hidden text-[var(--primary)]" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-[var(--background)] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollTo(link.id)}
            className="text-2xl font-[var(--font-heading)] text-[var(--foreground)]"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
