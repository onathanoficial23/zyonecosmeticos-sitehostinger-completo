import { motion } from 'motion/react';
import { ShoppingBag, TrendingUp, CheckCircle2 } from 'lucide-react';
import earningsImage from '../assets/images/regenerated_image_1778212985182.png';

export default function EarningsEstimator() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-zyone-dark tracking-tighter uppercase">
            SIMULAÇÃO DE <span className="text-zyone-red">VENDAS EM 30 DIAS</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Veja quanto você pode ganhar revendendo os perfumes Zyone dependendo do seu esforço diário.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sales Image Block */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square group"
          >
            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
              className="block w-full h-full"
            >
              <img 
                src={earningsImage} 
                alt="Vendas Zyone" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
            </a>
          </motion.div>

          {/* Static Results / Promotion Block */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <a 
                href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
                className="flex items-center gap-4 mb-6 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-zyone-red/10 rounded-xl flex items-center justify-center text-zyone-red group-hover:bg-zyone-red group-hover:text-white transition-colors">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-zyone-dark tracking-tight uppercase group-hover:text-zyone-red transition-colors">Potencial de Lucro</h3>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Alto poder de lucro na revenda</p>
                </div>
              </a>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="font-bold text-gray-700">Lucros de 100% até 260% na Revenda</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="font-bold text-gray-700">Baixo investimento inicial</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span className="font-bold text-gray-700">Treinamentos exclusivos de venda</span>
                </div>
              </div>

              <a 
                href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
                className="w-full py-5 bg-zyone-red text-white rounded-xl font-black text-lg tracking-widest uppercase hover:bg-zyone-red-dark transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-zyone-red/20 flex items-center justify-center gap-3"
              >
                CADASTRE-SE E COMECE AGORA
              </a>
            </div>

            <div className="bg-zyone-dark p-8 rounded-2xl text-white relative overflow-hidden group">
              <ShoppingBag className="absolute -right-8 -bottom-8 text-white/5 group-hover:scale-110 transition-transform duration-1000" size={160} />
              <p className="font-mono text-[10px] text-zyone-gold uppercase tracking-[0.2em] mb-2">OPORTUNIDADE EXCLUSIVA</p>
              <h4 className="text-2xl font-black tracking-tighter uppercase mb-4">
                Construa sua Independência <br /> <span className="text-zyone-gold">Financeira</span>
              </h4>
              <p className="text-white/60 text-sm leading-relaxed relative z-10">
                A Zyone oferece um sistema único para você crescer e conquistar seus objetivos com produtos premium.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Baixo Investimento', bold: 'ALTO RETORNO' },
            { label: 'Suporte Completo', bold: 'PARA REVENDEDORES' },
            { label: 'Produtos de', bold: 'ALTA ACEITAÇÃO' },
            { label: 'Comunidade Exclusiva', bold: 'DE REVENDEDORES' }
          ].map((item, i) => (
            <div key={i} className="text-center p-4">
              <p className="text-[10px] text-gray-400 uppercase tracking-tighter mb-1 leading-none">{item.label}</p>
              <p className="text-xs font-black text-zyone-dark tracking-tighter leading-none">{item.bold}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
