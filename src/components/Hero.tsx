import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import drEwandro from "@/assets/dr-ewandro.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        {/* IMAGEM */}
        <img
          src={drEwandro}
          alt="Dr. Ewandro de Castro Ruck"
          className="w-full h-full object-cover object-right"
        />

        {/* GRADIENTE CONTROLADO (APENAS LADO ESQUERDO) */}
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-primary/95 via-primary/75 to-transparent" />

        {/* LEVE ESCURECIMENTO INFERIOR PARA CONTRASTE */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/80 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-3xl">

          {/* Especialidades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-sm font-body tracking-wide backdrop-blur-sm">
              Infectologista · Reumatologista · Pneumologista
            </span>
          </motion.div>

          {/* Nome */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Dr. Ewandro
            <br />
            <span className="text-gradient-gold">de Castro Ruck</span>
          </motion.h1>

          {/* Descrição principal */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-4 max-w-2xl"
          >
            Um dos poucos especialistas com atuação completa em infectologia, HIV e doenças complexas.
          </motion.p>

          {/* Subtexto */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-base text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl"
          >
            Atendimento particular com tempo de consulta ampliado e olhar integral sobre o paciente.
          </motion.p>

          {/* Botões */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-body font-semibold text-base shadow-lg transition-all hover:scale-[1.02] hover:brightness-110"
            >
              <Phone className="w-5 h-5" />
              Agendar Consulta
            </a>

            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg border border-primary-foreground/20 text-primary-foreground font-body font-medium text-base transition-all hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5" />
              Tirar Dúvida no WhatsApp
            </a>
          </motion.div>

        </div>
      </div>

      {/* Indicador Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40 animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>

    </section>
  );
};

export default Hero;
