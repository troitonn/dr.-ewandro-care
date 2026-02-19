import { motion } from "framer-motion";
import { ClipboardList, Microscope, HeartHandshake, Layers } from "lucide-react";

const differentials = [
  {
    icon: ClipboardList,
    title: "Consulta aprofundada e investigativa",
    description: "Cada paciente é avaliado de forma completa, considerando histórico clínico, exames e estilo de vida.",
  },
  {
    icon: Microscope,
    title: "Especialista em casos complexos",
    description: "Pacientes que passam por vários médicos sem diagnóstico claro encontram uma investigação minuciosa.",
  },
  {
    icon: HeartHandshake,
    title: "Referência em HIV e infectologia",
    description: "Acompanhamento completo e humanizado para pacientes com HIV e infecções crônicas.",
  },
  {
    icon: Layers,
    title: "Visão integrativa",
    description: "Atuação em reumatologia e pneumologia permite correlacionar sintomas e doenças de forma mais ampla.",
  },
];

const Differentials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-widest uppercase text-accent font-semibold">
            Diferencial
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Por que escolher o Dr. Ewandro?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group p-8 rounded-2xl bg-card border border-border/50 shadow-premium hover:shadow-gold transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-500">
                <item.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
