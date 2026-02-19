import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atendimentos", label: "Atendimentos" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#agendamento", label: "Agendamento" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-lg shadow-premium border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-lg font-bold text-primary-foreground" style={{ color: scrolled ? 'hsl(var(--foreground))' : undefined }}>
          Dr. Ewandro
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-sm shadow-gold hover:brightness-110 transition-all"
          >
            <Phone className="w-4 h-4" />
            Agendar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-body text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/SEUNUMERO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-sm mt-2"
              >
                <Phone className="w-4 h-4" />
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
