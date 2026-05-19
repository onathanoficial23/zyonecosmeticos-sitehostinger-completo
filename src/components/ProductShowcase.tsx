import { motion } from 'motion/react';

import imgMasculino from '../assets/images/regenerated_image_1778210964782.jpg';
import imgFeminino from '../assets/images/regenerated_image_1778210965903.jpg';
import imgArabe1 from '../assets/images/regenerated_image_1778210966549.jpg';
import imgArabe2 from '../assets/images/regenerated_image_1778210967752.jpg';
import imgBodySplash from '../assets/images/regenerated_image_1778210968952.jpg';
import imgHidratante from '../assets/images/regenerated_image_1778210969817.jpg';

const products = [
  {
    category: 'Perfumes Masculinos',
    image: imgMasculino,
    description: 'Zayan, Strong, Lord, Champion e muito mais.',
    brand: 'PREMIUM LINE'
  },
  {
    category: 'Perfumes Femininos',
    image: imgFeminino,
    description: 'Malirah, Noble, Magic, Love It e outras fragrâncias.',
    brand: 'PREMIUM LINE'
  },
  {
    category: 'Linha Árabe - Rubi/Dunes',
    image: imgArabe1,
    description: 'Luxo e exclusividade com a tradição cultural árabe.',
    brand: 'ORIENTAL LINE'
  },
  {
    category: 'Linha Árabe - Golden',
    image: imgArabe2,
    description: 'Fragrâncias intensas com aura de mistério e charme.',
    brand: 'ORIENTAL LINE'
  },
  {
    category: 'Body Splash',
    image: imgBodySplash,
    description: 'Refrescância e fragrância para o dia a dia.',
    brand: 'SOFT TOUCH'
  },
  {
    category: 'Hidratantes',
    image: imgHidratante,
    description: 'Toque sedoso e pele perfumada por mais tempo.',
    brand: 'SKIN CARE'
  }
];

export default function ProductShowcase() {
  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-zyone-dark tracking-tighter uppercase leading-none">
              NOSSOS <span className="text-zyone-red">PRODUTOS</span>
            </h2>
            <p className="mt-4 text-gray-600 font-medium">
              Confira nossa linha completa de perfumaria fina e cuidados pessoais inspirada nas tendências internacionais.
            </p>
          </div>
          <a 
            href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
            className="px-8 py-3 border-2 border-zyone-dark text-zyone-dark font-black text-xs tracking-widest uppercase hover:bg-zyone-dark hover:text-white transition-all text-center"
          >
            VER CATÁLOGO COMPLETO
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <a 
              key={product.category}
              href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.category}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/800x1200/1A1A1A/FFFFFF?text=${encodeURIComponent(product.category)}`;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zyone-dark/90 via-zyone-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase rounded border border-white/20">
                      {product.brand}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-2xl font-black uppercase tracking-tight leading-tight">{product.category}</h3>
                      <p className="text-xs text-white/70 font-medium leading-relaxed line-clamp-2 max-w-[240px]">
                        {product.description}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-zyone-gold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                        Clique para saber mais <span>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>

        {/* Feature bar */}
        <div className="mt-20 bg-zyone-dark rounded-3xl p-1 px-1 flex flex-col md:flex-row items-stretch gap-1">
          {[
            { label: 'MAIS DE 100 MIL', sub: 'CONSULTORES CADASTRADOS' },
            { label: '+ DE 700', sub: 'PONTOS DE APOIO NO BRASIL' },
            { label: 'LUCRO DE ATÉ', sub: '200% EM CADA PRODUTO' }
          ].map((stat, i) => (
            <div key={i} className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center text-white border border-white/5">
              <p className="text-2xl font-black mb-1">{stat.label}</p>
              <p className="text-[10px] font-bold text-zyone-gold uppercase tracking-[0.2em]">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
