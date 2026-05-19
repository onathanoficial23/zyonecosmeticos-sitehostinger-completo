import SocialProof from './components/SocialProof';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EarningsEstimator from './components/EarningsEstimator';
import ProductShowcase from './components/ProductShowcase';
import KitSection from './components/KitSection';
import SupportMaterials from './components/SupportMaterials';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import { Smartphone, Layout, Users, Star, BarChart3, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import appImage from './assets/images/regenerated_image_1778256702150.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-zyone-red selection:text-white">
      <Navbar />
      <SocialProof />
      
      <main>
        <Hero />
        
        {/* Why choose Zyone - Quick Feature Section */}
        <section className="py-12 bg-white border-y border-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-black tracking-tighter text-xl">100% ESSÊNCIA</div>
              <div className="flex items-center gap-2 font-black tracking-tighter text-xl">ALTA FIXAÇÃO</div>
              <div className="flex items-center gap-2 font-black tracking-tighter text-xl">SISTEMA ÚNICO</div>
              <div className="flex items-center gap-2 font-black tracking-tighter text-xl">TREINAMENTOS</div>
            </div>
          </div>
        </section>

        <ProductShowcase />
        
        {/* Income Opportunity Banner */}
        <section className="py-20 bg-zyone-red relative overflow-hidden group cursor-pointer transition-all hover:bg-zyone-red-dark">
          <a 
            href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D" 
            className="absolute inset-0 z-20"
            aria-label="Cadastrar-se agora"
          />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6 group-hover:scale-105 transition-transform duration-500">
              TORNE-SE UM <span className="text-zyone-dark">REVENDEDOR ZYONE</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 font-medium">
              A ZYONE Perfumes e Cosméticos oferece uma oportunidade única para quem deseja empreender com liberdade, autonomia e alto potencial de ganhos.
            </p>
            <div className="inline-flex items-center justify-center px-10 py-5 bg-white text-zyone-red rounded-2xl font-black text-lg shadow-2xl transition-all group-hover:bg-zyone-dark group-hover:text-white">
              CADASTRAR-SE AGORA
            </div>
          </div>
        </section>

        <EarningsEstimator />
        <SupportMaterials />
        <VideoSection />

        {/* App Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1 bg-zyone-red/10 text-zyone-red text-xs font-black tracking-widest rounded-full mb-6">
                  <Smartphone size={14} /> EXCLUSIVIDADE
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-zyone-dark tracking-tighter uppercase leading-none mb-6">
                  TUDO O QUE VOCÊ PRECISA <br /> <span className="text-zyone-red">NA PALMA DA MÃO</span>
                </h2>
                <p className="text-gray-600 font-medium mb-10 leading-relaxed">
                  Com o Aplicativo Zyone, você gerencia suas vendas, faz pedidos rápidos, acessa materiais de apoio e acompanha seu crescimento em tempo real.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                  {[
                    { icon: <Layout size={20} />, label: 'Catálogo Digital' },
                    { icon: <Users size={20} />, label: 'Gestão de Rede' },
                    { icon: <BarChart3 size={20} />, label: 'Relatórios de Ganhos' },
                    { icon: <Globe size={20} />, label: 'Treinamentos Online' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-zyone-red border border-gray-100">
                        {item.icon}
                      </div>
                      <span className="font-bold text-zyone-dark text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
                    className="h-12 w-36 bg-zyone-dark rounded-lg flex items-center justify-center text-white gap-2 cursor-pointer hover:bg-black transition-colors"
                  >
                    <span className="text-[10px] font-bold text-left leading-none uppercase">Get it on <br /><span className="text-sm font-black">Google Play</span></span>
                  </a>
                  <a 
                    href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
                    className="h-12 w-36 bg-zyone-dark rounded-lg flex items-center justify-center text-white gap-2 cursor-pointer hover:bg-black transition-colors"
                  >
                    <span className="text-[10px] font-bold text-left leading-none uppercase">Download on <br /><span className="text-sm font-black">App Store</span></span>
                  </a>
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute -inset-10 bg-zyone-gold/10 rounded-full blur-3xl opacity-50" />
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative group"
                >
                  <a 
                    href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative cursor-pointer"
                  >
                    <img 
                      src={appImage}
                      alt="Zyone Gestão"
                      className="w-full max-w-md h-auto rounded-3xl shadow-2xl border-4 border-white/10 transition-all duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 rounded-3xl" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <KitSection />

        {/* Registration Guide Section */}
        <section id="cadastro-passo-a-passo" className="py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center px-4 py-1 bg-zyone-red/10 text-zyone-red text-[10px] font-black tracking-widest rounded-full mb-6 uppercase">
                  Passo a Passo
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-zyone-dark tracking-tighter uppercase leading-tight mb-6">
                  Como realizar seu <span className="text-zyone-red">cadastro na Zyone?</span>
                </h2>
                <p className="text-gray-600 text-lg italic mb-8 border-l-4 border-zyone-red pl-4">
                  Para integrar-se à Zyone, é necessário realizar o cadastro no site oficial da empresa.
                </p>

                <div className="space-y-6 text-gray-700 font-medium mb-10">
                  <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                    <span className="text-zyone-red text-2xl shrink-0">👉</span>
                    <div>
                      <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Passo Inicial</p>
                      <p className="mb-2">Acesse o link e faça seu cadastro agora mesmo:</p>
                      <a 
                        href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-zyone-red underline break-all font-black text-sm hover:text-zyone-dark transition-colors"
                      >
                        escritorio.zyone.com.br/cadastro
                      </a>
                    </div>
                  </div>
                  
                  <p className="leading-relaxed">
                    Após concluir o cadastro, você receberá seu login e senha para acessar o Escritório Virtual, onde poderá gerenciar suas atividades.
                  </p>
                  <p className="leading-relaxed">
                    Em seguida, será possível adquirir o Kit Inicial Zyone e iniciar sua trajetória conosco.
                  </p>
                  <p className="text-zyone-dark font-black text-xl uppercase tracking-tighter pt-4 leading-tight">
                    Não deixe para depois. Faça seu cadastro hoje e comece a usufruir das oportunidades que a Zyone oferece!
                  </p>
                </div>

                <a 
                  href="https://escritorio.zyone.com.br/cadastro#?id=onathanoficial&convite=MjA0MDc%3D"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-5 bg-zyone-red text-white rounded-2xl font-black text-lg shadow-xl hover:bg-zyone-dark hover:scale-105 transition-all duration-300 w-full lg:w-auto uppercase tracking-tighter"
                >
                  Faça seu cadastro e tenha acesso ao Escritório Virtual
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-zyone-red/20 to-zyone-gold/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative aspect-video rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl shadow-black/5 ring-1 ring-gray-100">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/WrMHx2cobrg?start=55" 
                    title="Como realizar seu cadastro na Zyone"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 flex items-center justify-center gap-4 text-gray-400 group-hover:text-zyone-red transition-colors">
                  <div className="w-12 h-px bg-current opacity-20" />
                  <span className="text-[10px] uppercase font-black tracking-widest">Tutorial de Cadastro</span>
                  <div className="w-12 h-px bg-current opacity-20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

