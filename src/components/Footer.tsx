export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start leading-none">
            <span className="font-[var(--font-heading)] text-2xl font-bold tracking-tighter">REISS & REBER</span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[var(--primary)]">Gartenbau Schweiz</span>
          </div>

          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">Pinterest</a>
          </div>

                    <div className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Gartenspezialist Reiss & Reber AG. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
}
