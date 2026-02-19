import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

const faqData: FAQItem[] = [
  {
    category: "HIV e infectologia",
    question: "O HIV tem tratamento?",
    answer: "Sim. Hoje o tratamento permite qualidade de vida normal e controle total da carga viral quando acompanhado corretamente.",
    keywords: ["hiv", "tratamento", "cura", "antirretroviral"],
  },
  {
    category: "HIV e infectologia",
    question: "Quem tem HIV precisa ir ao infectologista sempre?",
    answer: "Sim. O acompanhamento regular garante controle da saúde e prevenção de complicações.",
    keywords: ["hiv", "infectologista", "acompanhamento", "regular"],
  },
  {
    category: "HIV e infectologia",
    question: "Fiz exame e deu positivo. O que fazer?",
    answer: "O primeiro passo é manter calma e iniciar acompanhamento com infectologista para confirmação e início do tratamento.",
    keywords: ["positivo", "exame", "diagnóstico", "hiv"],
  },
  {
    category: "HIV e infectologia",
    question: "Tenho medo de ir ao médico e ser julgado.",
    answer: "O atendimento é sigiloso, acolhedor e profissional. O foco é sua saúde e qualidade de vida.",
    keywords: ["medo", "julgamento", "sigilo", "acolhimento"],
  },
  {
    category: "Infectologia geral",
    question: "Estou sempre doente, pode ser imunidade baixa?",
    answer: "Sim. Infecções recorrentes precisam de investigação detalhada.",
    keywords: ["imunidade", "baixa", "doente", "recorrente", "infecção"],
  },
  {
    category: "Infectologia geral",
    question: "Febre constante sem diagnóstico?",
    answer: "A infectologia é uma das principais áreas para investigar febres persistentes.",
    keywords: ["febre", "constante", "diagnóstico", "persistente"],
  },
  {
    category: "Reumatologia",
    question: "Dor no corpo pode ser doença autoimune?",
    answer: "Pode. Dores persistentes, cansaço e inflamações devem ser investigados.",
    keywords: ["dor", "corpo", "autoimune", "cansaço", "inflamação"],
  },
  {
    category: "Reumatologia",
    question: "Quando procurar um reumatologista?",
    answer: "Quando há dores articulares frequentes, rigidez, inflamações ou suspeita de doença autoimune.",
    keywords: ["reumatologista", "articular", "rigidez", "inflamação"],
  },
  {
    category: "Pneumologia",
    question: "Tosse há meses é normal?",
    answer: "Não. Tosse persistente precisa de avaliação especializada.",
    keywords: ["tosse", "crônica", "meses", "persistente"],
  },
  {
    category: "Pneumologia",
    question: "Falta de ar frequente?",
    answer: "Pode ter diversas causas, incluindo pulmonares e infecciosas.",
    keywords: ["falta", "ar", "respiração", "dispneia"],
  },
];

const searchExamples = [
  "HIV tem cura?",
  "Dor no corpo pode ser autoimune?",
  "Febre frequente o que pode ser?",
  "IST sintomas",
  "Imunidade baixa",
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const filteredFAQ = useMemo(() => {
    if (!searchTerm.trim()) return faqData;
    const terms = searchTerm.toLowerCase().split(/\s+/);
    return faqData.filter((item) =>
      terms.some(
        (term) =>
          item.question.toLowerCase().includes(term) ||
          item.answer.toLowerCase().includes(term) ||
          item.keywords.some((k) => k.includes(term)) ||
          item.category.toLowerCase().includes(term)
      )
    );
  }, [searchTerm]);

  const categories = useMemo(() => {
    const cats: Record<string, FAQItem[]> = {};
    filteredFAQ.forEach((item) => {
      if (!cats[item.category]) cats[item.category] = [];
      cats[item.category].push(item);
    });
    return cats;
  }, [filteredFAQ]);

  const handleExampleClick = (example: string) => {
    setSearchTerm(example);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-section" ref={faqRef}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm tracking-widest uppercase text-accent font-semibold">
            Dúvidas
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Digite sua dúvida ou sintoma e encontre a resposta.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-6"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Digite sua dúvida ou sintoma..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-card border border-border shadow-premium font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
        </motion.div>

        {/* Example chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14 max-w-2xl mx-auto"
        >
          {searchExamples.map((ex) => (
            <button
              key={ex}
              onClick={() => handleExampleClick(ex)}
              className="px-3 py-1.5 rounded-full text-xs font-body font-medium bg-secondary text-secondary-foreground border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {ex}
            </button>
          ))}
        </motion.div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-8">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-display text-lg font-semibold text-foreground mb-4 border-b border-border pb-2">
                {category}
              </h3>
              <div className="space-y-2">
                {items.map((item) => {
                  const globalIdx = faqData.indexOf(item);
                  const isOpen = openIndex === globalIdx;
                  return (
                    <div
                      key={item.question}
                      className="rounded-xl border border-border bg-card overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                        className="w-full flex items-center justify-between p-5 font-body font-medium text-foreground text-left hover:bg-muted/50 transition-colors"
                      >
                        <span>{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 font-body text-muted-foreground leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredFAQ.length === 0 && (
            <p className="text-center font-body text-muted-foreground py-8">
              Nenhuma pergunta encontrada. Tente outro termo ou{" "}
              <a href="https://wa.me/SEUNUMERO" className="text-accent underline">
                envie sua dúvida no WhatsApp
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
