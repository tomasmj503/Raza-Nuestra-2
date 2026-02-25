/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  CheckCircle2, 
  ChevronRight, 
  Instagram, 
  MapPin, 
  MessageCircle, 
  Star, 
  ThermometerSnowflake, 
  ShieldCheck, 
  ShoppingBag 
} from "lucide-react";
import { useRef } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-amber-accent/30">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 glass-dark">
        <div className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-serif tracking-widest text-white uppercase">
            Raza Nuestra
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-12">
          {["La Diferencia", "El Lote", "La Mesa"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-xs uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="px-6 py-2.5 bg-amber-accent text-charcoal text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all duration-500 shadow-lg shadow-amber-accent/20">
          Reservar Lote
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1920&auto=format&fit=crop"
            alt="Premium Grilled Meat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-charcoal" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-[8vw] font-serif leading-[0.9] tracking-tighter text-white mb-8 text-balance">
              Picaña Argentina <br />
              <span className="italic font-light opacity-90">Premium en Piura.</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12 text-balance">
              Selección limitada para quienes entienden la calidad. 30 piezas por semana, seleccionadas personalmente. Cuando se agotan, cerramos pedidos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group relative px-8 py-4 bg-amber-accent text-charcoal font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 flex items-center gap-3">
                <MessageCircle size={20} />
                <span>Reservar por WhatsApp</span>
              </button>
              
              <a href="#ubicacion" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold group">
                <MapPin size={16} className="group-hover:text-amber-accent transition-colors" />
                <span>Ver ubicación y horarios</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">Deslizar</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* Section: La Diferencia */}
      <section id="la-diferencia" className="py-24 md:py-40 px-6 md:px-12 bg-charcoal">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-amber-accent text-xs font-bold uppercase tracking-[0.4em] mb-6 block">La Excelencia</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              No vendemos volumen. <br />
              <span className="italic font-light">Seleccionamos piezas.</span>
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed mb-12 max-w-xl">
              Cada picaña es elegida bajo criterio profesional. No trabajamos con sobrestock. No bajamos estándares. Si una pieza no cumple, no se vende.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <CheckCircle2 className="text-amber-accent" />, title: "Selección pieza por pieza." },
                { icon: <ThermometerSnowflake className="text-amber-accent" />, title: "Cadena de frío garantizada." },
                { icon: <ShoppingBag className="text-amber-accent" />, title: "Venta por pieza completa." },
                { icon: <ShieldCheck className="text-amber-accent" />, title: "Garantía real: reemplazo inmediato." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl flex flex-col gap-4 hover:bg-white/10 transition-colors"
                >
                  {item.icon}
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass p-4">
              <img 
                src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop"
                alt="Raw Premium Cut"
                className="w-full h-full object-cover rounded-[1.5rem]"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-accent/10 blur-[80px] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Section: La Oferta */}
      <section id="el-lote" className="py-24 md:py-40 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass p-12 md:p-20 rounded-[3rem] text-center overflow-hidden border-amber-accent/20"
          >
            {/* Scarcity Glow */}
            <div className="absolute inset-0 bg-radial from-amber-accent/5 to-transparent opacity-50" />
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-accent/10 border border-amber-accent/20 text-amber-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                Disponibilidad Limitada
              </span>
              
              <h2 className="text-4xl md:text-7xl font-serif text-white mb-8">
                Lote limitado semanal
              </h2>
              
              <p className="text-xl md:text-2xl text-white/70 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                Cada semana abrimos un lote de <span className="text-white font-medium border-b border-amber-accent/40">30 piezas</span> de picaña argentina premium. <br />
                Precio por pieza completa: <span className="text-amber-accent font-serif text-3xl md:text-4xl ml-2">150 soles</span>
              </p>

              <div className="flex flex-col items-center gap-6">
                <button className="px-12 py-5 bg-amber-accent text-charcoal font-bold uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-transform duration-500 shadow-2xl shadow-amber-accent/30 flex items-center gap-3">
                  <ChevronRight size={20} />
                  <span>Consultar disponibilidad ahora</span>
                </button>
                
                <p className="text-xs uppercase tracking-widest text-white/40 italic">
                  Cuando el lote se agota, cerramos pedidos hasta la siguiente semana.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section: Prueba Social */}
      <section id="la-mesa" className="py-24 md:py-40 px-6 md:px-12 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">La Mesa Raza Nuestra</h2>
            <div className="w-24 h-px bg-amber-accent/40 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass p-10 rounded-3xl relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, star) => (
                    <Star key={star} size={14} className="fill-amber-accent text-amber-accent" />
                  ))}
                </div>
                <p className="text-lg text-white/80 font-light italic leading-relaxed mb-8">
                  "La mejor carne que he probado en años. Se nota la selección en cada corte. Una experiencia verdaderamente premium en Piura."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10" />
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-white">Cliente Premium</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">Verificado</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-24 pb-12 px-6 md:px-12 glass-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          {/* Col 1: Visítanos */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-8">Compra en tienda o reserva por WhatsApp</h3>
            <div className="aspect-video w-full rounded-3xl overflow-hidden glass mb-8 grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://picsum.photos/seed/piuramap/800/450?blur=2" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass p-4 rounded-full">
                  <MapPin className="text-amber-accent" size={32} />
                </div>
              </div>
            </div>
            <div className="space-y-4 text-white/60 font-light">
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-amber-accent" />
                <span>Av. Los Tallanes 123, Piura, Perú</span>
              </p>
              <p className="text-sm leading-relaxed">
                También contamos con cortes argentinos, nacionales, cerdo y pollo seleccionados bajo el mismo estándar de calidad.
              </p>
            </div>
          </div>

          {/* Col 2: Lead Capture */}
          <div className="glass p-10 md:p-12 rounded-[2.5rem]">
            <h3 className="text-3xl font-serif text-white mb-4">Únete a La Mesa</h3>
            <p className="text-white/60 font-light mb-10">Recibe acceso prioritario a nuevos lotes y eventos exclusivos.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-amber-accent/50 transition-colors"
                />
                <input 
                  type="tel" 
                  placeholder="Teléfono" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-amber-accent/50 transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-amber-accent/50 transition-colors"
                />
              </div>
              <button className="w-full py-5 bg-white text-charcoal font-bold uppercase tracking-widest rounded-2xl hover:bg-amber-accent transition-colors duration-500">
                👉 Quiero acceso prioritario
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-8">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/20">
            © 2024 Raza Nuestra. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/40 hover:text-amber-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-white/40 hover:text-amber-accent transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
