import { motion } from "framer-motion";
import { Bug, Bone, Wind } from "lucide-react";

const services = [
  {
    icon: Bug,
    title: "Infectologia",
    color: "primary",
    items: [
      "HIV (diagnóstico e acompanhamento)",
      "ISTs (sífilis, HPV, herpes, gonorreia etc.)",
      "Infecções recorrentes",
      "Febre sem diagnóstico",
      "Infecções pulmonares",
      "Infecções virais e bacterianas",
      "Investigação de imunidade baixa",
    ],
  },
  {
    icon: Bone,
    title: "Reumatologia",
    color: "accent",
    items: [
      "Doenças autoimunes",
      "Dores articulares crônicas",
      "Lúpus",
      "Artrite reumatoide",
      "Vasculites",
      "Síndromes inflamatórias",
    ],
  },
  {
    icon: Wind,
    title: "Pneumologia",
    color: "teal",
    items: [
      "Falta de ar",
      "Tosse crônica",
      "Infecções respiratórias",
      "Avaliação pulmonar completa",
      "Sequelas pós-infecção",
    ],
  },
];

const Services = () => {
  return (
    <section id="atendimentos" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm tracking-widest uppercase text-accent font-semibold">
            Áreas de atuação
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            Principais Atendimentos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-card rounded-2xl border border-border/50 shadow-premium overflow-hidden"
            >
              <div className="bg-gradient-hero p-6">
                <service.icon className="w-8 h-8 text-gold-light mb-3" />
                <h3 className="font-display text-2xl font-bold text-primary-foreground">
                  {service.title}
                </h3>
              </div>
              <ul className="p-6 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
