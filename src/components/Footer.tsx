import { Facebook, Instagram, Youtube, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zyone-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-20">
          {/* Brand Info */}
          <div className="mb-12">
            <span className="text-4xl font-black tracking-tighter mb-6 block">
              ZYONE
            </span>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              A maior rede de perfumes e cosméticos do Brasil. Transformando vidas através do empreendedorismo e produtos de alta qualidade.
            </p>
          </div>

          {/* New Call to Action Button */}
          <div className="w-full max-w-sm">
            <a 
              href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
              className="block w-full py-6 bg-zyone-red hover:bg-zyone-red-dark text-white rounded-2xl font-black text-xl tracking-widest uppercase transition-all shadow-2xl shadow-zyone-red/40 hover:scale-105"
            >
              FAÇA PARTE DO TIME
            </a>
            <p className="mt-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
              Junte-se a milhares de consultores agora
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center md:text-left">
            © {currentYear} ZYONE PERFUMES E COSMÉTICOS. TODOS OS DIREITOS RESERVADOS. - Criado por Nathan Oliveira @onathanoficial
          </p>
          <div className="flex items-center gap-6 opacity-30 grayscale brightness-200">
            {/* Certifications Placeholders */}
            <div className="h-6 w-12 bg-white/50 rounded" />
            <div className="h-6 w-16 bg-white/50 rounded" />
            <div className="h-6 w-10 bg-white/50 rounded" />
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.link/skxrhs"
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl text-white hover:scale-110 transition-transform animate-pulse"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </footer>
  );
}
