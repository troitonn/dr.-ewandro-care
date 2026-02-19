import { motion } from "framer-motion";
import { Check } from "lucide-react";

const targets = [
  "Pacientes com diagnóstico recente de HIV",
  "Quem precisa iniciar ou ajustar tratamento",
  "Infecções recorrentes sem explicação",
  "Sintomas persistentes sem diagnóstico",
  "Doenças autoimunes em investigação",
  "Casos complexos que exigem olhar multidisciplinar",
  "Segunda opinião médica",
];

const patientPerks = [
  "Escuta sem pressa",
  "Investigação detalhada",
  "Explicação clara sobre exames e tratamentos",
  "Acompanhamento próximo",
  "Discrição e acolhimento em casos sensíveis",
];

const WhoIsItFor = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* For whom */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm tracking-widest uppercase text-accent font-semibold">
              Indicações
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
              Para quem é essa consulta?
            </h2>
            <ul className="space-y-4">
              {targets.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex items-start gap-3 font-body text-foreground"
                >
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Patient differential */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gradient-hero rounded-2xl p-10 flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-8">
              Diferencial percebido pelos pacientes
            </h3>
            <ul className="space-y-5">
              {patientPerks.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-center gap-4 font-body text-primary-foreground/90"
                >
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
