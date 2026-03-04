import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <section id="contact" className="py-24 bg-[var(--secondary)] relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
                            <h2 className="text-[var(--primary)] uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Kontakt</h2>
              <h3 className="font-[var(--font-heading)] text-4xl md:text-6xl italic">Lassen Sie uns planen.</h3>
              <p className="text-[var(--muted-foreground)] mt-6 text-lg font-light leading-relaxed max-w-md">
                Wir freuen uns darauf, Ihr Gartenprojekt gemeinsam mit Ihnen zu realisieren. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--border)] group-hover:border-[var(--primary)] transition-colors">
                  <Phone className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">Telephone</div>
                  <div className="text-lg">+41 (0) 44 800 22 11</div>
                </div>
              </div>
                            <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--border)] group-hover:border-[var(--primary)] transition-colors">
                  <Mail className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">Email</div>
                  <div className="text-lg">info@gartenspezialist.ch</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center border border-[var(--border)] group-hover:border-[var(--primary)] transition-colors">
                  <MapPin className="w-5 h-5 text-[var(--primary)]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">Standort</div>
                  <div className="text-lg">Steinackerstrasse 2, 8902 Urdorf</div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={formRef}
            className="p-10 bg-[var(--background)] border border-[var(--border)] gold-glow relative"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Name</label>
                  <input type="text" className="w-full bg-[var(--muted)] border border-[var(--border)] px-4 py-3 outline-none focus:border-[var(--primary)] transition-colors text-sm" placeholder="Hans Muster" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Email</label>
                  <input type="email" className="w-full bg-[var(--muted)] border border-[var(--border)] px-4 py-3 outline-none focus:border-[var(--primary)] transition-colors text-sm" placeholder="hans@muster.ch" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Interest</label>
                <select className="w-full bg-[var(--muted)] border border-[var(--border)] px-4 py-3 outline-none focus:border-[var(--primary)] transition-colors text-sm appearance-none">
                  <option>Landscape Architecture</option>
                  <option>Garden Maintenance</option>
                  <option>Tree Care</option>
                  <option>Aquatic Design</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)]">Your Vision</label>
                <textarea rows={4} className="w-full bg-[var(--muted)] border border-[var(--border)] px-4 py-3 outline-none focus:border-[var(--primary)] transition-colors text-sm resize-none" placeholder="Describe your estate and requirements..." />
              </div>
              <Button className="w-full">Submit Enquiry</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
