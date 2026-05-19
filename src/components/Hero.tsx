import { TrendingUp, Star, Package, Zap, ChevronRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const benefits = [
    {
      icon: <TrendingUp className="text-zyone-gold" size={32} />,
      title: 'Lucro Alto',
      items: [
        'Ganhe de 100% a 200% de lucro na revenda.',
        'Compre com 50% de desconto já no primeiro pedido.'
      ]
    },
    {
      icon: <Star className="text-zyone-gold" size={32} />,
      title: 'Produto Premium',
      items: [
        'Perfumes com 25% de essência importada nobre.',
        'Fixação poderosa: mais de 12 horas na pele.'
      ]
    },
    {
      icon: <Package className="text-zyone-gold" size={32} />,
      title: 'Variedade que Vende',
      items: [
        'Perfumes de 15ml, 28ml e 100ml.',
        'Hidratantes e Body Splash exclusivos.'
      ]
    },
    {
      icon: <Zap className="text-zyone-gold" size={32} />,
      title: 'Fácil de Começar',
      items: [
        'Cadastro rápido e sem burocracia.',
        'Suporte e treinamentos para acelerar suas vendas.'
      ]
    }
  ];

  return (
    <section className="pt-24 lg:pt-32 pb-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zyone-dark leading-tight tracking-tighter uppercase">
              SEJA UM <span className="text-zyone-red leading-none block">CONSULTOR ZYONE</span>
            </h1>
            <div className="mt-6 space-y-4 text-lg text-gray-600 leading-relaxed max-w-xl">
              <p>
                Você está pronto para mudar de vida? A Zyone Perfumes e Cosméticos oferece uma oportunidade única para quem deseja empreender com liberdade, autonomia e alto potencial de ganhos!
              </p>
              <p>
                Com um modelo de vendas diretas aliado ao Marketing Multinível, a Zyone possibilita que você inicie seu próprio negócio com baixo investimento e alcance uma excelente renda revendendo produtos de altíssima qualidade.
              </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D" 
                className="inline-flex items-center justify-center px-8 py-4 bg-zyone-red hover:bg-zyone-red-dark text-white rounded-lg font-bold text-lg shadow-xl shadow-zyone-red/20 transition-all hover:-translate-y-1 group"
              >
                QUERO ME CADASTRAR AGORA
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.link/skxrhs" 
                className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-bold text-lg shadow-xl shadow-green-500/20 transition-all hover:-translate-y-1 group"
              >
                FALE COM UM CONSULTOR
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <MessageCircle className="ml-2" size={20} />
                </motion.span>
              </a>
            </div>

            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
              className="mt-12 bg-zyone-red p-6 rounded-2xl text-white relative overflow-hidden group block hover:bg-zyone-red-dark transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-zyone-red/30"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Zap size={20} className="fill-white" />
                  Comece agora na Zyone
                </h3>
                <p className="mt-2 text-sm opacity-90">
                  Cadastre-se hoje e dê o primeiro passo para transformar sua renda.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                <TrendingUp size={100} />
              </div>
            </a>
          </motion.div>

          {/* Right Column: Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-zyone-dark mb-3">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-500 leading-snug flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-zyone-red mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
