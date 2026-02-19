const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg font-semibold text-primary-foreground mb-1">
          Dr. Ewandro de Castro Ruck
        </p>
        <p className="font-body text-sm text-primary-foreground/60 mb-4">
          Infectologista · Reumatologista · Pneumologista
        </p>
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
