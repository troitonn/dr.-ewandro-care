import { motion } from "framer-motion";
import { Stethoscope, Heart, Search, Brain, Shield } from "lucide-react";

const aboutItems = [
  { icon: Stethoscope, label: "Infectologia clínica" },
  { icon: Heart, label: "HIV e ISTs" },
  { icon: Shield, label: "Doenças autoimunes" },
  { icon: Brain, label: "Pneumologia clínica" },
  { icon: Search, label: "Investigação diagnóstica" },
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-sm tracking-widest uppercase text-accent font-semibold">
              Sobre o médico
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Dr. Ewandro de Castro Ruck
            </h2>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Médico especialista com ampla experiência, reconhecido por pacientes e colegas pela abordagem detalhada, escuta ativa e investigação aprofundada de cada caso.
              </p>
              <p>
                Possui experiência no acompanhamento de pacientes com doenças crônicas, infecções recorrentes e quadros de difícil diagnóstico.
              </p>
              <p>
                Presença em plataformas médicas como{" "}
                <span className="text-foreground font-medium">Doctoralia</span> e{" "}
                <span className="text-foreground font-medium">BoaConsulta</span>, onde recebe avaliações positivas pelo cuidado e precisão diagnóstica.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {aboutItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`flex items-center gap-4 p-5 rounded-xl bg-card shadow-premium border border-border/50 ${
                  i === aboutItems.length - 1 ? "sm:col-span-2 sm:max-w-[50%]" : ""
                }`}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
