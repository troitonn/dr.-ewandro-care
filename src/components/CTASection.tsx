import { motion } from "framer-motion";
import { Phone, Clock, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section id="agendamento" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-hero rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Agende sua consulta
            </h2>
            <p className="font-body text-primary-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Atendimento médico completo, investigativo e humano, voltado para pacientes que buscam diagnóstico preciso, acompanhamento contínuo e segurança em cada etapa do tratamento.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 font-body text-primary-foreground/80 text-sm">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                Consulta com tempo ampliado
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                Atendimento particular
              </span>
            </div>

            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-accent text-accent-foreground font-body font-bold text-lg shadow-gold transition-all hover:scale-[1.03] hover:brightness-110"
            >
              <Phone className="w-5 h-5" />
              Agendar Consulta no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
