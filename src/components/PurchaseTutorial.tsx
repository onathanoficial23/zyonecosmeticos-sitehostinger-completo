import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  PlayCircle, 
  CheckCircle, 
  Wallet, 
  CreditCard, 
  FileText, 
  Star, 
  Plus, 
  Minus, 
  HelpCircle 
} from 'lucide-react';

import erlissonImage from '../assets/images/regenerated_image_1781464003150.jpg';
import nathanImage from '../assets/images/regenerated_image_1781464003908.jpg';
import miriamImage from '../assets/images/regenerated_image_1781464004671.jpg';
import ygorImage from '../assets/images/regenerated_image_1781464118218.jpg';

// ==========================================
// TUTORIAL DE COMPRA E PAGAMENTOS
// ==========================================
export default function PurchaseTutorial() {
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  useEffect(() => {
    if (activeHighlight) {
      const timer = setTimeout(() => {
        setActiveHighlight(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeHighlight]);

  const scrollToVideo = (id: string) => {
    setActiveHighlight(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const paymentMethods = [
    { 
      id: 'video-pix', 
      label: 'Pagamento VIA PIX', 
      icon: <Wallet size={18} />, 
      color: 'hover:text-emerald-400',
      glowColor: '#10b981',
      bgColor: 'group-hover/btn:bg-emerald-500/10',
      videoUrl: 'https://www.youtube.com/embed/JVItnZaGJpA?start=22'
    },
    { 
      id: 'video-cartao', 
      label: 'Cartão de Crédito/Débito', 
      icon: <CreditCard size={18} />, 
      color: 'hover:text-blue-400',
      glowColor: '#3b82f6',
      bgColor: 'group-hover/btn:bg-blue-500/10',
      videoUrl: 'https://www.youtube.com/embed/YWJLkjJeDk8'
    },
    { 
      id: 'video-boleto', 
      label: 'Boleto Bancário', 
      icon: <FileText size={18} />, 
      color: 'hover:text-orange-400',
      glowColor: '#f97316',
      bgColor: 'group-hover/btn:bg-orange-500/10',
      videoUrl: 'https://www.youtube.com/embed/aKMeupClD_g'
    }
  ];

  return (
    <section id="tutorial-primeira-compra" className="py-24 bg-zyone-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-zyone-red/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-zyone-gold/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-zyone-red text-white text-[10px] font-black tracking-[0.2em] rounded-full mb-6 uppercase"
          >
            <PlayCircle size={14} className="animate-pulse" /> Conteúdo Exclusivo
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight lg:leading-[0.9] text-balance mb-8"
          >
            Primeira Compra na Zyone <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zyone-gold via-white to-zyone-gold">
              Tutorial Completo 2026
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto font-medium"
          >
            Descubra o passo a passo exato para realizar seu primeiro pedido com segurança, 
            aproveitando todos os benefícios e promoções exclusivas da sua nova jornada Zyone.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Vídeo de Apresentação Principal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 group"
          >
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border-[1px] border-white/20 shadow-[0_0_50px_rgba(196,39,45,0.15)] ring-1 ring-white/5 bg-black">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/JO1scwtc9zU?start=18" 
                title="Tutorial Primeira Compra Zyone 2026"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute top-6 left-6 pointer-events-none">
                <div className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="text-[10px] text-white font-black uppercase tracking-widest">Guia de Ativação</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                "Ativação Imediata",
                "Logística Prioritária",
                "Suporte Premium"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-white/60 text-xs font-bold">
                  <CheckCircle size={12} className="text-zyone-gold" />
                  {benefit}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formas de pagamento */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 relative overflow-hidden group"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-zyone-gold/10 blur-3xl rounded-full" />
              
              <h3 className="text-white font-black text-xl uppercase tracking-tighter mb-8 flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-zyone-red flex items-center justify-center text-lg shadow-lg shadow-zyone-red/20 uppercase">
                    <Wallet size={20} />
                  </span>
                  Formas de Pagamentos
                </div>
                <span className="text-[10px] text-zyone-gold font-bold tracking-widest ml-13 italic opacity-85">(selecione a melhor opção)</span>
              </h3>
              
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <motion.button 
                    key={method.id}
                    onClick={() => scrollToVideo(method.id)}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-4 text-gray-400 p-5 rounded-[2rem] w-full text-left transition-all border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] group/btn font-bold text-sm shadow-lg hover:shadow-zyone-gold/5 ${method.color}`}
                  >
                    <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zyone-gold transition-all duration-500 group-hover/btn:scale-110 ${method.bgColor}`}>
                      {method.icon}
                    </div>
                    <span className="text-base tracking-tight">{method.label}</span>
                    <ArrowRight size={18} className="ml-auto opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-2 transition-all duration-300" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-[2.5rem] bg-gradient-to-br from-zyone-gold/20 to-transparent border border-zyone-gold/20"
            >
              <p className="text-zyone-gold font-black text-[10px] uppercase tracking-[0.3em] mb-3 text-center">Aviso Importante</p>
              <p className="text-white/70 text-xs text-center font-medium leading-relaxed italic">
                "Escolha o método que melhor se adapta à sua necessidade para uma ativação rápida e segura."
              </p>
            </motion.div>
          </div>
        </div>

        {/* Tutoriais Específicos por Meio de Pagamento */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-24 border-t border-white/5"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Tutoriais Detalhados</h3>
            <div className="w-20 h-1 bg-zyone-red mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {paymentMethods.map((method, index) => {
              const isHighlighted = activeHighlight === method.id;
              
              return (
                <motion.div 
                  key={method.id}
                  id={method.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-4 bg-zyone-gold/5 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  
                  <motion.div 
                    animate={isHighlighted ? {
                      boxShadow: [`0 0 0 rgba(0,0,0,0)`, `0 0 50px ${method.glowColor}44`, `0 0 0 rgba(0,0,0,0)`],
                      scale: [1, 1.05, 1],
                      borderColor: ['rgba(255,255,255,0.1)', method.glowColor, 'rgba(255,255,255,0.1)']
                    } : {}}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black mb-6 group-hover:border-zyone-gold/40 transition-all"
                  >
                    <iframe 
                      className="w-full h-full"
                      src={method.videoUrl} 
                      title={method.label}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2rem]" />
                  </motion.div>
                  
                  <div className="text-center space-y-2">
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-lg text-[10px] text-white/40 font-black uppercase tracking-widest border border-white/5 group-hover:border-zyone-gold/30 group-hover:text-zyone-gold transition-colors">
                      Passo a Passo
                    </span>
                    <h4 className="text-white font-black uppercase tracking-tighter text-lg leading-none">
                      {method.label}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ==========================================
// DEPOIMENTOS DE LÍDERES E PARCEIROS
// ==========================================
export function Testimonials() {
  const testimonials = [
    {
      name: "Erlisson Oliveira",
      role: "Revendedor Diamante",
      image: erlissonImage,
      content: "Conhecemos a ZYONE Cosméticos através da internet no ano de 2020, inicialmente com o objetivo de consumir seus produtos, principalmente os famosos perfumes de bolso, que logo conquistaram nossa preferência pela qualidade e praticidade.",
      rating: 5
    },
    {
      name: "Nathan Oliveira",
      role: "Ponto de Apoio Zyone - Caieiras",
      image: nathanImage,
      content: "Fazer parte da ZYONE Cosméticos é ter a oportunidade de transformar vidas através de produtos incríveis, reconhecimento, participação nos lucros e viagens inesquecíveis.",
      rating: 4
    },
    {
      name: "Míriam Menezes",
      role: "Líder de Equipe",
      image: miriamImage,
      content: "Além do lucro nas vendas, o crescimento pessoal que tive aqui não tem preço. Grata por fazer parte dessa família.",
      rating: 5
    },
    {
      name: "Ygor Santos",
      role: "Revendedor e Líder de Equipe",
      image: ygorImage,
      content: "As fragrâncias têm uma fixação absurda! Meus clientes compram uma vez e viram fiéis na mesma hora.",
      rating: 4
    },
    {
      name: "Juliana Mendes",
      role: "Esteticista",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
      content: "Consigo conciliar perfeitamente com meu salão. Os produtos complementam meu trabalho e geram uma renda extra excelente.",
      rating: 5
    },
    {
      name: "Paulo Henrique",
      role: "Consultor Independente",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
      content: "O suporte e material de apoio da Zyone são de alto nível. Qualquer pessoa, mesmo sem experiência, consegue começar.",
      rating: 4
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    setActiveIndex(index);
    const container = document.getElementById('testimonials-scroll-container');
    if (container) {
      const card = container.children[index] as HTMLElement;
      if (card) {
        container.scrollTo({
          left: card.offsetLeft - container.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="depoimentos" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-zyone-red/10 text-zyone-red text-xs font-black tracking-widest rounded-full mb-4 uppercase">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-zyone-dark tracking-tighter uppercase leading-none">
            O que as pessoas estão <br /> <span className="text-zyone-red">dizendo da Zyone</span>
          </h2>
        </div>

        <div 
          id="testimonials-scroll-container"
          className="flex overflow-x-auto gap-6 sm:gap-8 pb-12 snap-x snap-mandatory scroll-smooth no-scrollbar select-none cursor-grab active:cursor-grabbing px-4"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:border-zyone-red/30 transition-all group snap-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-zyone-red rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity" />
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                </div>
                <div>
                  <h3 className="font-black text-zyone-dark text-lg leading-tight uppercase">{item.name}</h3>
                  <p className="text-zyone-red text-xs font-bold uppercase tracking-wider">{item.role}</p>
                </div>
              </div>

              {/* Contagem e Estrelas Intercaladas */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => {
                    const isFilled = i < item.rating;
                    return (
                      <Star 
                        key={i} 
                        size={14} 
                        className={isFilled ? "fill-zyone-red text-zyone-red" : "text-zyone-red fill-transparent"} 
                      />
                    );
                  })}
                </div>
                <span className="text-xs font-black text-zyone-red bg-zyone-red/10 px-2 py-0.5 rounded-full">
                  {item.rating}/5
                </span>
              </div>

              <p className="text-gray-600 font-medium leading-relaxed italic">
                "{item.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-3 mt-4">
          {testimonials.map((_, index) => (
            <button
               key={index}
               onClick={() => scrollTo(index)}
               className={`h-2 transition-all duration-300 rounded-full ${
                 index === activeIndex 
                   ? 'w-12 bg-zyone-red' 
                   : 'w-2 bg-gray-300 hover:bg-gray-400'
               }`}
               aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// PERGUNTAS FREQUENTES (FAQ)
// ==========================================
export function FAQ() {
  const faqs = [
    {
      question: "Como faço para começar na Zyone?",
      answer: "O primeiro passo é realizar seu cadastro através do link oficial. Em seguida, você poderá adquirir seu Kit Inicial diretamente no Escritório Virtual e já começar suas vendas e prospecção."
    },
    {
      question: "Preciso de experiência com vendas?",
      answer: "Não! A Zyone oferece treinamento completo e material de apoio para que você aprenda desde as técnicas básicas de venda até o desenvolvimento de liderança e gestão de equipe."
    },
    {
      question: "Qual o valor do investimento inicial?",
      answer: "Trabalhamos com diferentes opções de Kits Iniciais que se adaptam ao seu perfil empreendedor. Você pode escolher o que melhor cabe no seu bolso para dar o primeiro passo."
    },
    {
      question: "Qual a margem de lucro nos produtos?",
      answer: "A Zyone oferece uma margem de lucro competitiva, chegando de 100% até 260% na revenda direta, além de diversos bônus por produtividade e formação de equipe."
    },
    {
      question: "As fragrâncias são originais?",
      answer: "Nossos produtos são de fabricação própria, garantindo controle total de qualidade. Trabalhamos com essências inspiradas nas grandes grifes mundiais, produzidas com os mais altos padrões de fixação, garantindo uma experiência premium aos clientes."
    },
    {
      question: "Como recebo meus bônus e comissões?",
      answer: "Todas as suas comissões por vendas e bônus de rede são creditadas em seu Escritório Virtual e podem ser transferidos para sua conta bancária seguindo o calendário financeiro da empresa."
    },
    {
      question: "A Zyone entrega em todo o Brasil?",
      answer: "Sim, realizamos entregas em todo o território nacional através de parcerias logísticas eficientes, garantindo que seus produtos cheguem com segurança até você."
    },
    {
      question: "Posso vender pela internet?",
      answer: "Sim! Você terá acesso a ferramentas digitais, catálogos online e materiais de marketing para divulgar seu trabalho em redes sociais e aplicativos de mensagens."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-zyone-red/10 text-zyone-red text-xs font-black tracking-widest rounded-full mb-4 uppercase">
            <HelpCircle size={14} /> Dúvidas Frequentes
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-zyone-dark tracking-tighter uppercase leading-none">
            Perguntas <span className="text-zyone-red">Comuns</span>
          </h2>
          <p className="mt-6 text-gray-500 font-medium max-w-xl mx-auto">
            Tire suas principais dúvidas e comece sua jornada na Zyone com total clareza e segurança.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-3xl transition-all duration-300 flex items-center justify-between border ${
                  openIndex === index 
                    ? 'bg-zyone-dark border-zyone-dark text-white shadow-xl translate-y-[-2px]' 
                    : 'bg-white border-gray-100 text-zyone-dark hover:border-zyone-red/30'
                }`}
              >
                <span className="font-black text-lg uppercase tracking-tight pr-8">
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? 'bg-zyone-red text-white rotate-180' : 'bg-gray-50 text-gray-400'
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pb-4 text-gray-600 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-6">Ainda tem dúvidas?</p>
          <a 
            href="https://wa.link/skxrhs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] border-2 border-[#25D366] rounded-full font-black text-white hover:bg-[#20ba5a] hover:border-[#20ba5a] transition-all transform hover:scale-105 shadow-xl shadow-green-500/20"
          >
            FALAR COM SUPORTE NO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
