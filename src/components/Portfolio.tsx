import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
  { title: "Naturnahe Oasen", location: "Zürich", image: "https://images.pexels.com/photos/34239892/pexels-photo-34239892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { title: "Urbane Rückzugsorte", location: "Hamburg", image: "https://images.pexels.com/photos/18592487/pexels-photo-18592487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { title: "Himmelsarchitektur", location: "Aarau", image: "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { title: "Präzises Handwerk", location: "Zugersee", image: "https://images.pexels.com/photos/11082375/pexels-photo-11082375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".project-img", {
        scale: 1.2,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          scrub: 1
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-[var(--background)]" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-[var(--primary)] uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Masterpieces</h2>
            <h3 className="font-[var(--font-heading)] text-4xl md:text-5xl italic">Curated Estates</h3>
          </div>
          <button className="text-[10px] uppercase tracking-[0.2em] border-b border-[var(--primary)] pb-2 text-[var(--primary)]">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
                        <div key={idx} className="group relative overflow-hidden aspect-[16/10] bg-[var(--muted)]">
              <div className="absolute inset-0 z-10 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
              <div
                className="project-img absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-[10px] text-[var(--primary)] uppercase tracking-widest mb-2">{project.location}</p>
                <h4 className="font-[var(--font-heading)] text-2xl md:text-3xl italic translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
