import { useEffect } from 'react';
import { motion } from 'motion/react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { 
  Instagram, 
  ArrowRight, 
  MessageCircle, 
  Package, 
  Clock, 
  ShieldCheck, 
  Headphones,
  MapPin,
  Truck,
  Check,
  Box,
  Smartphone
} from 'lucide-react';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as Element).closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          lenis.scrollTo(href);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-[100vh] bg-black text-white font-sans overflow-x-hidden flex flex-col relative select-none z-0">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-50px] left-[-50px] w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Navbar */}
      <header className="w-full z-10 border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-2xl font-black tracking-tighter italic uppercase text-white font-heading">
              STEEZ.QZ
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-white/60">
            <a href="#catalog" className="hover:text-white transition-colors">Каталог</a>
            <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
            <a href="#delivery" className="hover:text-white transition-colors">Доставка</a>
            <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
          </nav>

          <a 
            href="https://instagram.com/steez.catalog" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/5 transition-all text-white"
          >
            <Instagram size={16} />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center relative w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 pt-32 pb-16 lg:py-24 min-h-[calc(100vh-80px)]">
          
          {/* Hero Left - Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-8 z-10"
          >
            <div className="inline-block px-3 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-widest text-white/50 mb-6">
              Прямые поставки с фабрик
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight mb-4 uppercase">
                Любая пара — <br/>
                <span className="text-white/40">напрямую с фабрики</span>
              </h1>

              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white text-black px-4 py-2 rounded-full text-lg md:text-xl font-black italic">
                  8–14 ДНЕЙ
                </div>
                <span className="text-xl md:text-2xl font-light tracking-tight uppercase">Срок доставки</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/40 max-w-sm mb-10 leading-relaxed font-light">
              Редкие модели, проверенное качество и доставка по всему Казахстану.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href="https://instagram.com/steez.catalog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-black px-8 py-4 flex items-center justify-center rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/90 transition-all text-center gap-2"
              >
                <span>Перейти в каталог</span>
                <ArrowRight size={16} />
              </a>
              
              <a 
                href="#how-it-works"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all text-center text-white flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} className="text-white/70" />
                <span>Как это работает?</span>
              </a>
            </div>
          </motion.div>

          {/* Hero Right - Graphic Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 h-[400px] lg:h-[600px] flex items-center justify-center relative select-none"
          >
            {/* Floating Background Elements */}
            <div className="absolute w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] border border-white/5 rounded-full pointer-events-none"></div>
            <div className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] border border-white/5 rounded-full scale-110 pointer-events-none"></div>
            <div className="absolute text-[80px] md:text-[120px] lg:text-[150px] font-heading font-black text-white/[0.02] -rotate-12 pointer-events-none uppercase tracking-tighter self-center whitespace-nowrap">STEEZ.QZ</div>
            
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-md lg:max-w-lg transform -rotate-12 hover:rotate-0 transition-transform duration-700"
            >
              <div className="relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm aspect-square md:aspect-square drop-shadow-[0_50px_50px_rgba(255,255,255,0.15)]">
                 <img 
                  src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=1000" 
                  alt="Premium Sneaker Mockup" 
                  className="w-full h-full object-cover grayscale brightness-110 contrast-125 mix-blend-screen opacity-90 transition-opacity duration-700 hover:opacity-100"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Benefits */}
        <motion.footer 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full border-y border-white/10 bg-black/50 backdrop-blur-md z-10 relative"
        >
          <div className="max-w-[1440px] mx-auto min-h-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 md:px-12 py-8 lg:py-0">
            <div className="flex flex-col justify-center border-b sm:border-b-0 lg:border-r border-white/10 py-6 lg:py-0 first:pt-0 last:border-0 last:pb-0 lg:pr-6 cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <Package size={14} className="text-white/30" />
                <span className="text-[10px] uppercase text-white/40 tracking-[0.2em]">Доставка</span>
              </div>
              <span className="text-sm font-semibold uppercase tracking-tight text-white/90 group-hover:text-white transition-colors">По всему Казахстану</span>
            </div>

            <div className="flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 py-6 lg:py-0 lg:pl-10 cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={14} className="text-white/30" />
                <span className="text-[10px] uppercase text-white/40 tracking-[0.2em]">Срок</span>
              </div>
              <span className="text-sm font-semibold uppercase tracking-tight text-white/90 group-hover:text-white transition-colors">8–14 рабочих дней</span>
            </div>

            <div className="flex flex-col justify-center border-b sm:border-b-0 lg:border-r border-white/10 py-6 lg:py-0 lg:pl-10 cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={14} className="text-white/30" />
                <span className="text-[10px] uppercase text-white/40 tracking-[0.2em]">Гарантия</span>
              </div>
              <span className="text-sm font-semibold uppercase tracking-tight text-white/90 group-hover:text-white transition-colors">Проверенное качество</span>
            </div>

            <div className="flex flex-col justify-center py-6 lg:py-0 lg:pl-10 cursor-default">
              <div className="flex items-center gap-2 mb-2">
                <Headphones size={14} className="text-white/30" />
                <span className="text-[10px] uppercase text-white/40 tracking-[0.2em]">Поддержка</span>
              </div>
              <span className="text-sm font-semibold uppercase tracking-tight text-white/90 group-hover:text-white transition-colors underline underline-offset-4">Менеджер 24/7</span>
            </div>
          </div>
        </motion.footer>

        {/* Sections */}
        <div className="w-full flex-col z-10 bg-black relative">
          <section id="catalog" className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 min-h-[50vh] flex flex-col justify-center border-b border-white/10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">Каталог</h2>
            <div className="flex-1 flex flex-col items-center justify-center text-white/40 border border-dashed border-white/10 rounded-2xl p-12 hover:bg-white/[0.02] transition-colors">
              <p className="text-center mb-6">В каталоге представлены популярные модели из Instagram.</p>
              <a 
                href="https://instagram.com/steez.catalog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 flex items-center justify-center rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/90 transition-all text-center gap-2"
              >
                <span>Перейти в Instagram</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </section>

          <section id="reviews" className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 min-h-[50vh] flex flex-col justify-center border-b border-white/10">
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">Отзывы</h2>
            <div className="flex-1 flex items-center justify-center text-white/40 border border-dashed border-white/10 rounded-2xl p-12 hover:bg-white/[0.02] transition-colors">
              <p className="text-center">Рейтинг и отзывы наших клиентов представлены на официальной странице.</p>
            </div>
          </section>

          <section id="delivery" className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 min-h-[50vh] flex flex-col justify-center border-b border-white/10">
            <div className="flex flex-col items-center mb-16 text-center">
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">Доставка</h2>
              <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl">
                Мы отправляем быстро и удобным для вас способом
              </p>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 text-white/80">
              {/* Card 1: Almaty */}
              <div className="group border border-white/10 rounded-[2rem] p-8 lg:p-12 hover:bg-white/[0.02] transition-colors relative overflow-hidden flex flex-col bg-white/[0.01]">
                {/* subtle gradient glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl group-hover:bg-white/[0.04] transition-colors -translate-y-1/2 translate-x-1/2"></div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-widest text-white">По Алматы</h3>
                </div>

                <div className="space-y-8 flex-1">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-semibold">Доставка через:</p>
                    <div className="flex gap-2 flex-wrap text-sm font-medium">
                      <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/5">Yandex Go</span>
                      <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/5">InDrive</span>
                      <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/5">Uber</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-semibold">Можно оформить:</p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-white/70">До двери</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-white/70">До вашего текущего местоположения</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-white/50">
                    * Доставка возможна в день заказа (при наличии товара)
                  </p>
                </div>
              </div>

              {/* Card 2: Other Cities */}
              <div className="group border border-white/10 rounded-[2rem] p-8 lg:p-12 hover:bg-white/[0.02] transition-colors relative overflow-hidden flex flex-col bg-white/[0.01]">
                {/* subtle gradient glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl group-hover:bg-white/[0.04] transition-colors -translate-y-1/2 translate-x-1/2"></div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Truck size={24} className="text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-widest text-white break-words">Другие города Казахстана</h3>
                </div>

                <div className="space-y-8 flex-1">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-semibold">Отправляем через:</p>
                    <div className="flex gap-2 flex-wrap text-sm font-medium">
                      <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/5">InDrive</span>
                      <span className="px-4 py-2 rounded-xl border border-white/10 bg-white/5">Казпочта</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-3 font-semibold">Дополнительно:</p>
                    <ul className="space-y-4 text-white/70">
                      <li className="flex items-center gap-4">
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/5">
                          <Box size={18} />
                        </div>
                        <span>Надежная упаковка</span>
                      </li>
                      <li className="flex items-center gap-4">
                        <div className="p-2.5 bg-white/5 rounded-xl border border-white/5">
                          <Smartphone size={18} />
                        </div>
                        <span>Отправляем трек-номер</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center text-[10px] uppercase tracking-widest text-white/30 max-w-xl mx-auto">
              Стоимость доставки зависит от тарифа выбранного сервиса и расстояния. Оплата рассчитывается индивидуально.
            </div>
          </section>

          <section id="how-it-works" className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 min-h-[50vh] flex flex-col justify-center border-b border-white/10">
            <div className="flex flex-col items-center mb-16 text-center">
              <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">Как оформить заказ?</h2>
            </div>
            
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-white/80 mb-16">
              {/* Step 1 */}
              <div className="group border border-white/10 rounded-[2rem] p-8 lg:p-10 hover:bg-white/[0.02] transition-colors relative overflow-hidden flex flex-col bg-white/[0.01]">
                <div className="absolute -top-4 -right-4 p-8 text-7xl font-heading font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors -z-10 select-none">01</div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl font-heading font-bold mb-6 group-hover:bg-white group-hover:text-black transition-colors text-white">1</div>
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed">Отправьте фото или название модели</p>
              </div>

              {/* Step 2 */}
              <div className="group border border-white/10 rounded-[2rem] p-8 lg:p-10 hover:bg-white/[0.02] transition-colors relative overflow-hidden flex flex-col bg-white/[0.01]">
                <div className="absolute -top-4 -right-4 p-8 text-7xl font-heading font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors -z-10 select-none">02</div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl font-heading font-bold mb-6 group-hover:bg-white group-hover:text-black transition-colors text-white">2</div>
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed">Мы проверим наличие и сообщим точную цену</p>
              </div>

              {/* Step 3 */}
              <div className="group border border-white/10 rounded-[2rem] p-8 lg:p-10 hover:bg-white/[0.02] transition-colors relative overflow-hidden flex flex-col bg-white/[0.01]">
                <div className="absolute -top-4 -right-4 p-8 text-7xl font-heading font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors -z-10 select-none">03</div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl font-heading font-bold mb-6 group-hover:bg-white group-hover:text-black transition-colors text-white">3</div>
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed">Вносите предоплату 50–100%</p>
              </div>

              {/* Step 4 */}
              <div className="group border border-white/10 rounded-[2rem] p-8 lg:p-10 hover:bg-white/[0.02] transition-colors relative overflow-hidden flex flex-col bg-white/[0.01]">
                <div className="absolute -top-4 -right-4 p-8 text-7xl font-heading font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors -z-10 select-none">04</div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl font-heading font-bold mb-6 group-hover:bg-white group-hover:text-black transition-colors text-white">4</div>
                <p className="text-lg md:text-xl text-white font-medium leading-relaxed">Ожидаете доставку 8–14 дней</p>
              </div>
            </div>

            {/* CTA Block within the section */}
            <div className="flex flex-col lg:flex-row items-center justify-between p-10 lg:p-16 border border-white/10 rounded-[2rem] bg-white/[0.03] relative overflow-hidden group hover:bg-white/[0.04] transition-colors">
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-[100px] group-hover:bg-white/[0.05] transition-colors -translate-y-1/2 translate-x-1/3"></div>
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/[0.03] rounded-full blur-[100px] group-hover:bg-white/[0.04] transition-colors translate-y-1/2 -translate-x-1/3"></div>
               
               <div className="mb-8 lg:mb-0 z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-2">
                 <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold uppercase tracking-tight text-white mb-2">Ищешь редкую пару?</h3>
                 <p className="text-white/60 text-lg md:text-xl font-light max-w-md">Переходи в каталог и выбирай свою модель</p>
               </div>
               
               <a 
                 href="https://instagram.com/steez.catalog"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="bg-white text-black px-10 py-5 flex items-center justify-center rounded-xl font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform text-center gap-3 z-10 shrink-0 w-full lg:w-auto mt-4 lg:mt-0"
               >
                 <span>Перейти в каталог</span>
                 <ArrowRight size={18} />
               </a>
            </div>
          </section>

          <section id="contacts" className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-24 min-h-[50vh] flex flex-col justify-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8">Контакты</h2>
            <div className="flex-1 flex flex-col items-center justify-center gap-6 text-white/80 border border-dashed border-white/10 rounded-2xl p-12 hover:bg-white/[0.02] transition-colors">
              <p className="text-center text-white/40 max-w-md">Свяжитесь с нами для заказа или по любым вопросам. Мы готовы помочь круглосуточно.</p>
              <a 
                href="https://api.whatsapp.com/send/?phone=77052198855&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border border-white/20 font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Написать менеджеру</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Page Footer */}
      <footer className="w-full py-8 border-t border-white/10 text-center text-white/40 text-[10px] uppercase tracking-widest bg-black z-10 relative">
        &copy; {new Date().getFullYear()} STEEZ.QZ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
      </footer>
    </div>
  );
}
