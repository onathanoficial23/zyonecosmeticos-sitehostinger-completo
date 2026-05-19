import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserCheck } from 'lucide-react';

const NAMES = [
  "João Silva", "Maria Eduarda", "Lucas Oliveira", "Ana Beatriz", "Pedro Santos",
  "Mariana Costa", "Gabriel Pereira", "Julia Rodrigues", "Mateus Fernandes", "Larissa Souza",
  "Rafael Lima", "Beatriz Alves", "Guilherme Gomes", "Isabela Ribeiro", "Gustavo Carvalho",
  "Camila Martins", "Felipe Rocha", "Letícia Barbosa", "Thiago Melo", "Vitória Cardoso",
  "Bruno Teixeira", "Amanda Vieira", "Rodrigo Machado", "Manuela Freitas", "André Castro",
  "Sophia Mendes", "Leonardo Nunes", "Alice Jovem", "Daniel Ramos", "Valentina Lopes",
  "Eduardo Lima", "Heloísa Monteiro", "Cauã Ferreira", "Lorena Silva", "Murilo Batista",
  "Yasmin Miranda", "Davi Correia", "Clara Duarte", "Samuel Viana", "Cecília Paiva",
  "Heitor Santana", "Antonella Guimarães", "Bernardo Moraes", "Lavínia Fonseca", "Enzo Borges",
  "Maitê Rezende", "Lorenzo Caldeira", "Esther Moura", "Pietro Farias", "Sarah Nogueira",
  "Isaac Parente", "Antonina Lima", "Benício Antunes", "Ísis Prado", "Gael Figueiredo",
  "Aurora Peixoto", "Theo Lacerda", "Liz Bragança", "João Pedro", "Maria Luísa",
  "João Vitor", "Ana Clara", "Luiz Felipe", "Maria Fernanda", "Marcos Vinícius",
  "Ana Júlia", "Victor Hugo", "Maria Alice", "João Gabriel", "Ana Luísa",
  "Lucca Silva", "Maria Cecília", "Davi Lucca", "Ana Laura", "Felipe Augusto",
  "Maria Clara", "Luiz Henrique", "Ana Sophia", "João Lucas", "Maria Victória",
  "Arthur Miguel", "Helena Silva", "Bernardo Gomes", "Alice Santos", "Heitor Oliveira",
  "Laura Costa", "Ravi Pereira", "Manuela Rodrigues", "Miguel Souza", "Sophia Martins",
  "Theo Lima", "Isabella Alves", "Gabriel Rocha", "Luísa Barbosa", "Gael Melo",
  "Cecília Cardoso", "Samuel Teixeira", "Maitê Vieira", "João Alves", "Maria Eduarda",
  "Enzo Gabriel", "Ana Paula", "Carlos Eduardo", "Bruna Silva", "Paulo Henrique",
  "Fernanda Lima", "Ricardo Santos", "Patrícia Costa", "Marcelo Oliveira", "Juliana Rocha",
  "Antônio Carlos", "Renata Gomes", "Sérgio Pereira", "Daniela Martins", "Luiz Carlos",
  "Tatiane Alves", "Fernando Souza", "Priscila Barbosa", "José Roberto", "Vanessa Melo"
];

const STATES = [
  "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
];

export default function SocialProof() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: "", state: "" });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let audioCtx: AudioContext | null = null;

    const initAudio = () => {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
    };

    // Unlock audio on first interaction
    window.addEventListener('click', initAudio, { once: true });
    window.addEventListener('touchstart', initAudio, { once: true });

    const playSound = () => {
      try {
        if (!audioCtx || audioCtx.state === 'suspended') return;
        
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.type = 'sine';
        // Elegant "Success/Notification" blip
        oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        oscillator.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.1); // G5

        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);

        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.3);
      } catch (e) {
        console.warn("Audio playback delayed until interaction");
      }
    };

    const runCycle = () => {
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const randomState = STATES[Math.floor(Math.random() * STATES.length)];
      
      setData({ name: randomName, state: randomState });
      setVisible(true);
      playSound();

      // Hide after exactly 4 seconds
      timeoutId = setTimeout(() => {
        setVisible(false);
        
        // After hiding, wait exactly 8 seconds for the next one
        timeoutId = setTimeout(runCycle, 8000);
      }, 4000);
    };

    // Initial appearance after 3 seconds
    timeoutId = setTimeout(runCycle, 3000);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('click', initAudio);
      window.removeEventListener('touchstart', initAudio);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
          className="fixed bottom-6 left-6 z-[100] flex items-center gap-4 bg-white/95 backdrop-blur-sm p-4 pb-5 rounded-2xl shadow-2xl border border-gray-100 max-w-[280px] sm:max-w-xs ring-1 ring-black/5 overflow-hidden"
        >
          <div className="relative">
            <div className="w-12 h-12 bg-zyone-red/10 rounded-full flex items-center justify-center text-zyone-red">
              <UserCheck size={24} />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>

          <div className="flex-1">
            <p className="text-sm font-black text-zyone-dark leading-tight">
              {data.name}
            </p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mb-0.5">
              {data.state}
            </p>
            <p className="text-xs text-gray-500 font-medium">
              acabou de se cadastrar
            </p>
            <div className="mt-1 flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Verificado</span>
            </div>
          </div>

          <button 
            onClick={() => setVisible(false)}
            className="absolute top-2 right-2 text-gray-300 hover:text-gray-500 transition-colors"
          >
            <svg size={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>

          {/* Progress Bar (Regressive style) */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
            <motion.div 
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="h-full bg-zyone-red"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
