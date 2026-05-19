import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export default function VideoSection() {
  return (
    <section id="apresentacao" className="py-24 bg-zyone-dark relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-zyone-red/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-zyone-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-zyone-gold/10 text-zyone-gold text-xs font-black tracking-widest rounded-full mb-4">
            <Play size={14} fill="currentColor" /> VÍDEO OFICIAL
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            APRESENTAÇÃO <br />
            <span className="text-zyone-red">ZYONE COSMÉTICOS 2026</span>
          </h2>
          <div className="w-24 h-1.5 bg-zyone-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto aspect-video rounded-[2rem] overflow-hidden border-8 border-white/5 shadow-2xl group"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/pRocVyreJbE?start=1413"
            title="Apresentação Zyone"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          
          {/* Overlay glow */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2rem]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <p className="text-gray-400 font-medium max-w-2xl mx-auto mb-10">
            Descubra todos os detalhes do nosso modelo de negócio e como transformamos vidas através da perfumaria de alta qualidade.
          </p>

          <a 
            href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
            className="inline-flex items-center justify-center px-12 py-5 bg-zyone-red text-white font-black text-xl rounded-2xl shadow-[0_0_40px_-5px_rgba(196,39,45,0.5)] hover:bg-white hover:text-zyone-red transition-all duration-300 scale-100 hover:scale-105 active:scale-95 uppercase tracking-tighter"
          >
            QUERO ME CADASTRAR AGORA
          </a>
        </motion.div>
      </div>
    </section>
  );
}
