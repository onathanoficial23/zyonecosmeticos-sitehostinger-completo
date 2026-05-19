import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function KitSection() {
  const features = [
    'Compre com 50% de desconto',
    'Escolha os produtos do seu kit',
    'Promoções exclusivas para revendedor',
    'Indique a Zyone e obtenha ganhos',
    'Plano de marketing binário'
  ];

  return (
    <section id="kits" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zyone-dark tracking-tighter uppercase">
            OPÇÕES DE <span className="text-zyone-red">KITS ZYONE</span>
          </h2>
          <p className="mt-4 text-gray-600 font-medium">Escolha o seu ponto de partida e comece sua jornada de sucesso.</p>
        </div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative"
          >
            {/* Header */}
            <div className="bg-zyone-dark p-8 pb-12 text-center text-white relative">
              <span className="absolute top-4 right-[-40px] bg-zyone-red text-white py-1 px-12 rotate-45 text-[10px] font-black uppercase tracking-widest shadow-lg">
                Opção 1
              </span>
              <p className="text-zyone-gold text-sm font-black uppercase tracking-[0.3em] mb-2">KIT 1</p>
              <h3 className="text-2xl font-bold uppercase tracking-tight">Empreendedor</h3>
            </div>

            {/* Price Tag */}
            <div className="relative -mt-8 flex justify-center px-8">
              <div className="bg-white px-10 py-6 rounded-2xl shadow-xl border border-gray-50 text-center">
                <p className="text-gray-400 text-xs font-bold uppercase mb-1">A partir de</p>
                <div className="flex items-start justify-center gap-1">
                  <span className="text-xl font-bold text-zyone-dark mt-2">R$</span>
                  <span className="text-6xl font-black text-zyone-dark tracking-tighter">110</span>
                  <span className="text-xl font-bold text-zyone-dark mt-2">,00</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="p-8 pt-10 px-10">
              <ul className="space-y-4 mb-10">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                    <div className="bg-green-500/10 p-1 rounded">
                      <Check size={14} className="text-green-500" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
                className="w-full py-5 bg-green-500 hover:bg-green-600 text-white rounded-2xl font-black text-sm tracking-widest uppercase transition-all shadow-xl shadow-green-500/20 flex items-center justify-center gap-3 group"
              >
                CADASTRE-SE E COMPRE AGORA
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </a>
              
              <p className="mt-6 text-center text-[10px] text-gray-400 uppercase font-bold tracking-widest leading-relaxed">
                * O Valor do kit é revertido integralmente em produtos à sua escolha.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
