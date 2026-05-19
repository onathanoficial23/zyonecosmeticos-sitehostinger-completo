import { BookOpen, Image, Share2, Video, Download, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import materialImage from '../assets/images/regenerated_image_1778214692875.png';

export default function SupportMaterials() {
  const materials = [
    { icon: <BookOpen />, title: 'Plano de Negócios', desc: 'Apresentação completa da oportunidade.' },
    { icon: <BookOpen />, title: 'Catálogo Oficial', desc: 'Versão em PDF e interativa.' },
    { icon: <Image />, title: 'Fotos e Vídeos', desc: 'Material de alta qualidade para redes sociais.' },
    { icon: <Video />, title: 'Treinamentos', desc: 'Vídeos tutoriais sobre produtos e vendas.' },
  ];

  return (
    <section id="materiais" className="py-24 bg-zyone-dark relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#D4B475 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none mb-8">
              MATERIAIS DE <br /><span className="text-zyone-gold">APOIO COMPLETOS</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium italic text-center">
              <span className="text-zyone-red">Não se preocupe se você está começando agora.</span> <br /> 
              Fornecemos todo o arsenal de marketing necessário para você brilhar.
            </p>

            {/* Image Component */}
            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
              className="block mb-10 w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group focus:outline-none focus:ring-2 focus:ring-zyone-gold"
            >
              <img 
                src={materialImage} 
                alt="Mostruário" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </a>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-white font-bold">
                <CheckCircle className="text-zyone-gold" size={20} />
                <span>Estratégias de Venda Validada</span>
              </div>
              <div className="flex items-center gap-3 text-white font-bold">
                <CheckCircle className="text-zyone-gold" size={20} />
                <span>Suporte via WhatsApp 24/7</span>
              </div>
              <div className="flex items-center gap-3 text-white font-bold">
                <CheckCircle className="text-zyone-gold" size={20} />
                <span>Comunidade Exclusiva</span>
              </div>
            </div>

            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
              className="inline-flex items-center justify-center px-10 py-5 bg-zyone-gold hover:bg-zyone-gold/80 text-zyone-dark rounded-2xl font-black text-lg transition-all shadow-xl shadow-zyone-gold/20"
            >
              QUERO ACESSAR O SISTEMA
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {materials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-zyone-gold/20 flex items-center justify-center text-zyone-gold mb-6">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm mb-6">{item.desc}</p>
                <div className="flex flex-col gap-3">
                  <a 
                    href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
                    className="flex items-center gap-2 text-zyone-gold text-xs font-black uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Baixar Agora <Download size={14} />
                  </a>
                  <a 
                    href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
                    className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-tighter opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Cadastre-se para acesso total →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
