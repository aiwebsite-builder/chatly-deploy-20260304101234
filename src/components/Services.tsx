import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TreePine, LayoutGrid, Droplets, Scissors } from "lucide-react";

const services = [
  {
    title: "Gartenpflege",
    description: "Professioneller Unterhalt für Ihren Garten. Wir sorgen dafür, dass Ihre grüne Oase zu jeder Jahreszeit erstrahlt.",
    icon: Scissors
  },
  {
    title: "Gartenbau",
    description: "Neugestaltungen und Umänderungen mit hochwertigen Materialien und technischem Know-how.",
    icon: LayoutGrid
  },
  {
    title: "Bepflanzungen",
    description: "Stilsichere Konzepte für Beete, Rabatten und Sichtschutz – perfekt abgestimmt auf Ihren Standort.",
    icon: TreePine
  },
  {
    title: "Terrassengestaltung",
    description: "Individuelle Lösungen für Dachterrassen und Balkone, die Ihren Aussenbereich zum Wohnzimmer machen.",
    icon: Droplets
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

    return (
    <section id="services" ref={sectionRef} className="py-32 bg-[var(--background)] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-24 items-end border-b border-[var(--border)] pb-8">
          <h3 className="font-[var(--font-heading)] text-5xl md:text-7xl tracking-tighter">Capabilities</h3>
          <p className="text-[var(--primary)] font-mono text-xs mb-2">/ ZÜRICH • LUGANO • GENÈVE</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card group flex flex-col gap-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-[var(--primary)] font-mono text-xs">0{idx + 1}</span>
                <h4 className="font-[var(--font-heading)] text-3xl md:text-4xl tracking-tight uppercase">{service.title}</h4>
              </div>
              <p className="text-[var(--muted-foreground)] text-lg font-light leading-relaxed max-w-sm">
                {service.description}
              </p>
              <div className="h-px w-full bg-[var(--border)] group-hover:bg-[var(--primary)] transition-all duration-700 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
