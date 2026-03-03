import { motion, useScroll, useTransform } from "motion/react";
import {
  CheckCircle2,
  ChevronRight,
  MapPin,
  Star,
  ThermometerSnowflake,
  ShieldCheck,
  ShoppingBag,
  Menu,
  X,
  Lock,
  CreditCard,
  Truck,
  FileCheck,
  ShieldAlert
} from "lucide-react";
import { useState, useRef } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div ref={containerRef} className="relative min-h-screen">

      {/* Top Bar */}
      <div className="bg-gold text-charcoal text-center text-xs sm:text-sm font-semibold py-2 px-4 uppercase tracking-widest relative z-50">
        Lote semanal limitado: 30 piezas.
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 glass-dark border-b border-white/5">
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-white uppercase">
            Raza Nuestra
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10 lg:gap-16">
          {["La Diferencia", "El Lote", "Cómo Funciona", "Reseñas"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-").replace("ñ", "n").replace("ó", "o")}`}
              className="text-xs uppercase tracking-[0.2em] font-medium text-white/70 hover:text-gold transition-colors block py-2"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#el-lote" className="px-6 py-3 bg-white text-charcoal text-xs font-bold uppercase tracking-widest border border-white hover:bg-gold hover:border-gold transition-all duration-300 shadow-lg cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none">
            Reservar Lote
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-gold transition-colors cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Alternar menú"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-30 pt-24 pb-8 px-6 bg-charcoal/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 md:hidden text-center"
        >
          <nav className="flex flex-col gap-8 w-full">
            {["La Diferencia", "El Lote", "Cómo Funciona", "Reseñas"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-").replace("ñ", "n").replace("ó", "o")}`}
                className="text-sm uppercase tracking-[0.3em] font-light text-white hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="w-12 h-px bg-white/20 mt-4 mb-4" />
          <a
            href="#el-lote"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-4 bg-gold text-charcoal text-xs font-bold uppercase tracking-[0.2em] w-full max-w-xs transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
          >
            Reservar Lote
          </a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1920&auto=format&fit=crop"
            alt="Marmoleo Premium Picaña Argentina"
            className="w-full h-full object-cover"
          />
          {/* Darker gradient overlay to make typography pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif leading-[1] text-white mb-6 drop-shadow-2xl text-balance">
              Picaña Argentina <br />
              <span className="italic text-white/90 font-light">Premium en Piura.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 font-sans font-light leading-relaxed mb-12 drop-shadow-md text-balance">
              Selección limitada para quienes entienden la calidad. 30 piezas por semana, curadas personalmente por nuestro Maestro Parrillero.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button className="group relative px-8 py-4 bg-white text-charcoal font-sans text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all duration-300 hover:bg-gold flex items-center gap-3 cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none w-full sm:w-auto justify-center">
                <span>👉 Reservar por WhatsApp</span>
              </button>

              <a href="#visitanos" className="flex items-center justify-center gap-3 px-8 py-4 text-white/90 transition-all duration-300 hover:bg-white/10 uppercase tracking-[0.2em] text-xs font-bold group border border-white/20 cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none w-full sm:w-auto backdrop-blur-sm">
                <MapPin size={16} className="text-white/60 group-hover:text-gold transition-colors" />
                <span>📍 Ubicación y Horarios</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar (Señales de Confianza) */}
      <section className="border-b border-white/5 bg-[#141414] relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 text-center divide-x-0 md:divide-x md:divide-white/10">
            {[
              { icon: <FileCheck className="text-gold w-6 h-6 md:w-8 md:h-8 mb-4 mx-auto" />, title: "Criterio Profesional de Selección" },
              { icon: <ThermometerSnowflake className="text-gold w-6 h-6 md:w-8 md:h-8 mb-4 mx-auto" />, title: "Cadena de Frío Garantizada" },
              { icon: <ShoppingBag className="text-gold w-6 h-6 md:w-8 md:h-8 mb-4 mx-auto" />, title: "Venta por Pieza Completa" },
              { icon: <ShieldCheck className="text-gold w-6 h-6 md:w-8 md:h-8 mb-4 mx-auto" />, title: "Garantía de Reemplazo Inmediato" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col items-center px-2 sm:px-4"
              >
                {item.icon}
                <h3 className="text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] text-white/90 leading-relaxed max-w-[160px] mx-auto text-balance">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* La Diferencia (Narrativa de Lujo) */}
      <section id="la-diferencia" className="py-24 md:py-40 px-6 bg-charcoal relative border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] mb-6 inline-block border-b border-gold/30 pb-3">Nuestra Promesa</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-10 leading-tight">
              No vendemos volumen. <br className="hidden sm:block" />
              <span className="italic text-white/80 font-light">Seleccionamos piezas.</span>
            </h2>
            <div className="w-px h-16 bg-gradient-to-b from-gold/50 to-transparent mx-auto mb-10" />
            <p className="text-lg md:text-2xl text-white/70 font-sans font-light leading-relaxed mx-auto text-balance">
              Cada picaña es elegida bajo un estándar innegociable. No trabajamos con sobrestock de supermercado. <strong className="text-white font-normal block mt-4">Si una pieza no cumple con nuestro estricto nivel de marmoleo y frescura, simplemente no llega a tu parrilla.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* La Oferta (Escasez Real) */}
      <section id="el-lote" className="py-24 md:py-40 px-6 bg-[#161616] relative flex items-center justify-center">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl w-full mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-gold/20 bg-charcoal/80 p-10 md:p-24 text-center backdrop-blur-sm"
          >
            <span className="inline-block px-4 py-1 border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-10 bg-black/40">
              Inventario Cerrado
            </span>

            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
              El Lote Semanal
            </h2>

            <p className="text-xl md:text-2xl text-white/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Cada semana abrimos un lote de solo <span className="text-gold border-b border-gold/40 pb-1">30 piezas</span> de picaña argentina premium. <br className="hidden md:block mt-8" />
            </p>

            <div className="text-2xl md:text-4xl text-white/90 mb-14 font-light">
              Precio por pieza completa: <br className="md:hidden mt-2" /> <span className="font-serif italic text-white ml-2">S/ 150</span>
            </div>

            <div className="flex flex-col items-center gap-6">
              <button className="px-10 py-5 bg-gold text-charcoal font-bold text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none w-full sm:w-auto">
                <span>👉 Consultar disponibilidad ahora</span>
              </button>

              <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] text-white/40 mt-4 max-w-sm text-balance leading-relaxed font-semibold">
                Nota: Cuando el lote se agota, cerramos pedidos hasta la siguiente semana sin excepción.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section id="como-funciona" className="py-24 md:py-40 px-6 bg-charcoal border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Operativa Transparente</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Cómo Funciona</h2>
            <div className="w-px h-12 bg-white/20 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {[
              {
                step: "Paso Uno",
                icon: <CheckCircle2 className="w-8 h-8 text-white/80" />,
                title: "Reserva tu pieza del lote",
                desc: "Separa una de las exclusivas 30 piezas semanales respondiendo directamente a nuestro WhatsApp oficial."
              },
              {
                step: "Paso Dos",
                icon: <ThermometerSnowflake className="w-8 h-8 text-white/80" />,
                title: "Empaque y Frío Ininterrumpido",
                desc: "Tu pieza se mantiene cruda, rigurosamente sellada al vacío, garantizando cero alteración en el marmoleo y frescura."
              },
              {
                step: "Paso Tres",
                icon: <Truck className="w-8 h-8 text-white/80" />,
                title: "Recoge o Recibe en Casa",
                desc: "Pasa por nuestra tienda en Piura o recibe tu pedido con nuestro empaque térmico especial directamente en tu puerta."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative z-10 flex flex-col items-start border-l border-white/10 pl-8 pb-8"
              >
                <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-6 block">
                  {item.step}
                </span>
                <div className="mb-6 opacity-80">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-4 leading-tight">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prueba Social (La Mesa Raza Nuestra) */}
      <section id="resenas" className="py-24 md:py-40 px-6 bg-[#121212] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">La Mesa Raza Nuestra</h2>
            <div className="w-24 h-px bg-gold/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                text: "La mejor carne que he probado en años. La suavidad superior de la picaña se nota al primer corte. Una experiencia verdaderamente premium en Piura.",
                author: "Cliente Frecuente"
              },
              {
                text: "La perfección del empaque y la cadena de frío me dieron absoluta confianza. Cuando llegó a mi casa, la pieza estaba impecable, lista para la parrilla.",
                author: "Entusiasta Parrillero"
              },
              {
                text: "Excelente atención del Maestro Parrillero. Se nota que no es un speech de ventas. Te explican exactamente el perfil de lo que estás comprando.",
                author: "Cliente Premium"
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-charcoal p-10 md:p-12 border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(5)].map((_, star) => (
                      <Star key={star} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-lg text-white/90 font-serif italic leading-relaxed mb-10">
                    "{review.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">{review.author}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-2">Comprador Verificado</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visítanos */}
      <section id="visitanos" className="py-24 md:py-40 px-6 bg-[#161616] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Contacto & Ubicación</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-12">Visítanos.</h2>

            <div className="space-y-10 mb-12">
              <div className="flex items-start gap-6">
                <MapPin className="text-white/50 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-3">Dirección</h4>
                  <p className="text-white/70 font-light leading-relaxed">Av. Los Cocos 123, Urb. Santa Isabel<br />Piura, Perú.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <CheckCircle2 className="text-white/50 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-3">Horarios de Atención</h4>
                  <p className="text-white/70 font-light leading-relaxed">Martes a Sábado: 10:00 am - 8:00 pm<br />Domingos: 10:00 am - 2:00 pm</p>
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed border-l-2 border-gold/40 pl-6 py-2 text-white/60 font-serif italic max-w-lg">
              "También contamos con cortes seleccionados de cerdo, pollo y nacionales bajo el mismo estándar innegociable."
            </p>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] md:aspect-square w-full bg-charcoal border border-white/10 flex items-center justify-center p-3 relative z-10">
              <div className="w-full h-full bg-black/60 relative flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Av.+Los+Cocos+123,+Urb.+Santa+Isabel,+Piura,+Per%C3%BA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 absolute inset-0 md:grayscale md:contrast-125 md:opacity-80 md:hover:grayscale-0 md:hover:opacity-100 transition-all duration-500"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Ubicación Raza Nuestra"
                />
              </div>
            </div>
            {/* Background design element */}
            <div className="absolute -inset-10 bg-gold/5 blur-[80px] -z-10 rounded-full" />
          </div>
        </div>
      </section>

      {/* Fat Footer & Captura de Leads */}
      <footer className="bg-charcoal pt-24 pb-12 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto mb-32">
          <div className="border border-white/10 p-10 md:p-16 text-center relative bg-[#111]">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6">Únete a La Mesa Raza Nuestra</h3>
            <p className="text-white/60 font-light mb-12 text-sm md:text-base leading-relaxed text-balance">
              Recibe acceso prioritario a nuevos lotes exclusivos antes de que se agoten.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Nombre Completo"
                aria-label="Nombre Completo"
                className="w-full bg-transparent border-b border-white/20 px-2 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors text-sm font-light"
              />
              <input
                type="tel"
                placeholder="Teléfono / WhatsApp"
                aria-label="Teléfono WhatsApp"
                className="w-full bg-transparent border-b border-white/20 px-2 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors text-sm font-light"
              />
              <input
                type="email"
                placeholder="Correo Electrónico"
                aria-label="Email"
                className="w-full bg-transparent border-b border-white/20 px-2 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors text-sm font-light"
              />
              <button className="w-full py-6 flex items-center justify-center gap-3 bg-white text-charcoal font-bold text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-colors duration-300 mt-10 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none">
                Quiero acceso prioritario <ChevronRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links & Trust Icons */}
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-xl md:text-2xl font-serif text-white uppercase tracking-widest block mb-6">
              Raza Nuestra
            </span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              © 2024 Raza Nuestra. Calidad innegociable.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-white/30">
            <div className="flex items-center gap-3" title="Conexión Segura SSL">
              <Lock size={18} />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">SSL Secure</span>
            </div>
            <div className="flex items-center gap-3" title="Pagos Seguros">
              <CreditCard size={18} />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Pagos Seguros</span>
            </div>
            <div className="flex items-center gap-3" title="Garantía de Calidad">
              <ShieldAlert size={18} />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Garantía Total</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end gap-6 md:gap-10">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/30 hover:text-gold transition-colors">Privacidad</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/30 hover:text-gold transition-colors">Términos</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white/30 hover:text-gold transition-colors">Reemplazos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
