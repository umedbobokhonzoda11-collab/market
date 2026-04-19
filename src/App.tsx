import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Heart,
  Star,
  ArrowRight,
  Filter,
  Instagram,
  Facebook,
  Twitter,
  Truck,
  ShieldCheck,
  RotateCcw,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PRODUCTS = [
  {
    id: 1,
    name: "Куртаи миллии занона",
    price: 100,
    category: "Либос",
    image: "https://picsum.photos/seed/dress/800/1000",
    description: "Маҳсулот дар ҳолати хуб мебошад",
    rating: 5
  },
  {
    id: 2,
    name: "iPhone 13 Pro Max",
    price: 100,
    category: "Телефон ва Аксессуарҳо",
    image: "https://picsum.photos/seed/phone/800/1000",
    description: "Маҳсулот дар ҳолати хуб мебошад",
    rating: 5
  },
  {
    id: 3,
    name: "Toyota Camry 2022",
    price: 100,
    category: "Мошинҳо",
    image: "https://picsum.photos/seed/car/800/1000",
    description: "Маҳсулот дар ҳолати хуб мебошад",
    rating: 5
  },
  {
    id: 4,
    name: "Саги хушрӯй",
    price: 100,
    category: "Ҳайвонот",
    image: "https://picsum.photos/seed/dog/800/1000",
    description: "Маҳсулот дар ҳолати хуб мебошад",
    rating: 5
  },
  {
    id: 5,
    name: "Хонаи 3-ҳуҷрагӣ",
    price: 100,
    category: "Хонаҳо",
    image: "https://picsum.photos/seed/house/800/1000",
    description: "Маҳсулот дар ҳолати хуб мебошад",
    rating: 5
  }
];

const ALL_PRODUCTS = [
  ...PRODUCTS.map(p => ({ ...p, id: p.id + 100 })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + 200 })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + 300 })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + 400 })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + 500 })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + 600 })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + 700 })),
  ...PRODUCTS.map(p => ({ ...p, id: p.id + 800 })),
];

const CategoryCard = ({ name, image }: { name: string, image: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
  >
    <img 
      src={image} 
      alt={name} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
    <div className="absolute bottom-0 left-0 p-8">
      <h3 className="text-white text-2xl font-serif mb-2">{name}</h3>
      <motion.div 
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        className="h-px bg-white"
      />
    </div>
  </motion.div>
);

const ProductCard = ({ product }: { 
  product: typeof PRODUCTS[0], 
  key?: string | number 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group"
  >
    <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-900 hover:text-white transition-colors">
          <Heart size={18} />
        </button>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-900 hover:text-white transition-colors">
          <ShoppingBag size={18} />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <button className="w-full bg-white/90 backdrop-blur-sm py-3 text-xs font-bold uppercase tracking-widest hover:bg-emerald-900 hover:text-white transition-colors">
          Намоиши зуд
        </button>
      </div>
    </div>
    <div className="mt-4 flex justify-between items-start">
      <div>
        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="font-serif text-lg">{product.name}</h3>
        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} fill={i < Math.floor(product.rating) ? "#FFD700" : "transparent"} color="#FFD700" />
          ))}
        </div>
        <p className="text-[10px] text-zinc-400 mt-2">{product.description}</p>
      </div>
      <p className="font-medium text-emerald-900">{product.price} смн</p>
    </div>
  </motion.div>
);

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'userStore'>('home');
  
  // Product State
  const [productList, setProductList] = useState(() => [
    ...PRODUCTS.map(p => ({ ...p, id: p.id + 100 })),
    ...PRODUCTS.map(p => ({ ...p, id: p.id + 200 })),
    ...PRODUCTS.map(p => ({ ...p, id: p.id + 300 })),
    ...PRODUCTS.map(p => ({ ...p, id: p.id + 400 })),
    ...PRODUCTS.map(p => ({ ...p, id: p.id + 500 })),
    ...PRODUCTS.map(p => ({ ...p, id: p.id + 600 })),
    ...PRODUCTS.map(p => ({ ...p, id: p.id + 700 })),
    ...PRODUCTS.map(p => ({ ...p, id: p.id + 800 })),
  ]);

  // Form State
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Либос",
    image: "",
    description: ""
  });

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price) {
      alert("Лутфан ном ва нархи маҳсулотро ворид кунед");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      price: parseInt(formData.price),
      category: formData.category,
      image: formData.image || `https://picsum.photos/seed/${Date.now()}/800/1000`,
      description: formData.description || "Маҳсулот дар ҳолати хуб мебошад",
      rating: 5
    };

    setProductList(prev => [newProduct, ...prev]);
    setShowForm(false);
    setFormData({ name: "", price: "", category: "Либос", image: "", description: "" });
    setCurrentView('products');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrollY > 50 || currentView === 'products' ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <button onClick={() => setIsMenuOpen(true)} className={`${scrollY > 50 || currentView === 'products' ? 'text-zinc-900' : 'text-white'} hover:text-emerald-700 transition-colors`}>
              <Menu size={24} />
            </button>
            <div className={`hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest h-full items-center ${scrollY > 50 || currentView === 'products' ? 'text-zinc-900' : 'text-white'}`}>
              <button onClick={() => setCurrentView('home')} className="hover:text-emerald-700 transition-colors uppercase">Асосӣ</button>
              <button className="hover:text-emerald-700 transition-colors uppercase">Танзимот</button>
              <a href="#" className="hover:text-emerald-700 transition-colors uppercase">Дар бораи мо</a>
            </div>
          </div>
          
          <h1 
            onClick={() => setCurrentView('home')}
            className={`text-2xl font-serif tracking-widest italic font-bold cursor-pointer ${scrollY > 50 || currentView === 'products' ? 'text-emerald-950' : 'text-white'}`}
          >
            ТОҶИКИСТОН
          </h1>

          <div className={`flex items-center gap-6 ${scrollY > 50 || currentView === 'products' ? 'text-zinc-900' : 'text-white'}`}>
            <button className="hover:text-emerald-700 transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <button className="hover:text-emerald-700 transition-colors hidden sm:block">
              <Heart size={20} />
            </button>
            <button className="relative group" onClick={() => setCartCount(prev => prev + 1)}>
              <ShoppingBag size={20} className="group-hover:text-emerald-700 transition-colors" />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-emerald-800 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-emerald-950 text-white flex"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center hover:rotate-90 transition-transform"
            >
              <X size={32} />
            </button>
            
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center"
            >
              <nav className="flex flex-col gap-8 text-4xl md:text-6xl font-serif italic">
                <button 
                  onClick={() => {
                    setCurrentView('home');
                    setIsMenuOpen(false);
                  }}
                  className="hover:text-emerald-400 transition-colors w-fit text-left italic"
                >
                  Асосӣ
                </button>
                <button className="hover:text-emerald-400 transition-colors w-fit text-left italic">
                  Танзимот
                </button>
                <button className="hover:text-emerald-400 transition-colors w-fit text-left italic">
                  Дар бораи мо
                </button>
              </nav>
            </motion.div>
            
            <div className="hidden md:block w-1/2 overflow-hidden">
              <motion.img 
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src="https://picsum.photos/seed/menu/1000/1500"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <header className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald-950">
              <motion.div 
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.4, scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0"
              >
                <img 
                  src="https://picsum.photos/seed/luxury/1920/1080" 
                  alt="Hero Background" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div className="relative z-10 text-center text-white px-6">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs font-bold uppercase tracking-[0.4em] mb-4"
                >
                  Баҳор-Тобистон 2026
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-6xl md:text-9xl font-serif italic mb-8"
                >
                  Умед Мағоза
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-col items-center gap-4"
                >
                  <button 
                    onClick={() => {
                      setCurrentView('products');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group px-10 py-4 bg-white text-emerald-950 font-bold uppercase text-xs tracking-widest hover:bg-emerald-800 hover:text-white transition-all overflow-hidden relative w-64"
                  >
                    <span className="relative z-10">Ҳама маҳсулот</span>
                    <motion.div 
                      className="absolute inset-0 bg-emerald-700 -translate-x-full group-hover:translate-x-0 transition-transform"
                    />
                  </button>

                  <button 
                    onClick={() => {
                      setCurrentView('userStore');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group px-10 py-4 bg-transparent border border-white/30 text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-emerald-950 transition-all overflow-hidden relative w-64"
                  >
                    <span className="relative z-10">Маҳсулоти Ман</span>
                  </button>
                </motion.div>
              </div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-12 text-white/50 flex flex-col items-center"
              >
                    <div className="w-px h-16 bg-white/20 mx-auto" />
                    <p className="text-[10px] uppercase tracking-widest mt-4 [writing-mode:vertical-rl]">Ҳаракат</p>
                  </motion.div>
                </header>

                {/* Features Rail */}
                <section className="bg-white py-12 border-b border-zinc-100">
                  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {[
                      { icon: Truck, title: "Расондан Ройгон", desc: "Дохили шаҳри Душанбе ройгон, дигар шаҳрҳо худпардохт" },
                      { icon: ShieldCheck, title: "Пардохти Бехатар", desc: "Кафолати амнияти маблағҳои шумо" },
                      { icon: RotateCcw, title: "Бозпас то 3 рӯз", desc: "Бо беҳтарин ҳолат ва сифати аслӣ!" }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center text-center gap-2">
                        <div className="relative h-12 flex items-center justify-center">
                        {item.icon === Truck && (
                          <div className="absolute -left-6 flex gap-1">
                            {[1, 2, 3, 4, 5, 6].map((s) => (
                              <motion.div
                                key={s}
                                animate={{ 
                                  x: [-2, -50], 
                                  y: [0, -8 - Math.random() * 8], 
                                  scale: [0.4, 2], 
                                  opacity: [0, 0.5, 0] 
                                }}
                                transition={{ 
                                  repeat: Infinity, 
                                  duration: 1.2, 
                                  delay: s * 0.2,
                                  ease: "easeOut" 
                                }}
                                className="absolute w-2 h-2 bg-zinc-800/60 rounded-full blur-[2px]"
                              />
                            ))}
                          </div>
                        )}
                        
                        <motion.div
                          className="relative z-10"
                          animate={
                            item.icon === Truck 
                              ? { x: [-1, 1, -1], y: [0, -1, 0] } 
                              : item.icon === ShieldCheck
                              ? { 
                                  scale: [1, 1.1, 1],
                                  filter: ["drop-shadow(0 0 0px #10b981)", "drop-shadow(0 0 8px #10b981)", "drop-shadow(0 0 0px #10b981)"]
                                }
                              : { rotate: [0, -360] }
                          }
                          transition={{ 
                            repeat: Infinity, 
                            duration: item.icon === RotateCcw ? 4 : 2,
                            ease: item.icon === RotateCcw ? "linear" : "easeInOut"
                          }}
                        >
                          <item.icon size={28} className="text-emerald-900 mb-2" />
                        </motion.div>
                        </div>
                        <h4 className="text-sm font-bold uppercase tracking-widest leading-tight">{item.title}</h4>
                        <p className="text-[10px] text-zinc-500 max-w-[150px] mx-auto leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <FooterSection />
              </motion.div>
        ) : currentView === 'products' ? (
          <motion.div
            key="products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24 bg-white min-h-screen"
          >
            <div className="max-w-[1600px] mx-auto px-6">
              <div className="mb-16 text-center md:text-left">
                <button 
                  onClick={() => setCurrentView('home')}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-800 mb-8 mx-auto md:mx-0 hover:gap-4 transition-all"
                >
                  <ChevronLeft size={14} /> Бозгашт ба асосӣ
                </button>
                <h2 className="text-6xl font-serif italic mb-4">Ҳамаи маҳсулот</h2>
                <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-zinc-200 pb-8">
                  <p className="text-zinc-500 font-light max-w-xl">Маҷмӯаи пурраи маҳсулоти эксклюзивии моро кашф кунед. Ҷадвали 4-сутуна бо ҳаракати амудӣ.</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mt-4 md:mt-0">{productList.length} МАҲСУЛОТ</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-zinc-200 w-full mb-12">
                {productList.map((product, idx) => (
                  <div key={`${product.id}-${idx}`} className="border-r border-b border-zinc-200 p-4 md:p-8 hover:bg-zinc-50 transition-colors group">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              
              <div className="mt-16 text-center mb-24">
                <p className="text-zinc-400 text-xs uppercase tracking-widest italic">Маҳсулоти нав ба таври худкор боргузорӣ мешаванд</p>
                <div className="mt-4 flex justify-center gap-2">
                  {[1, 2, 3].map(n => (
                    <div key={n} className="w-1.5 h-1.5 rounded-full bg-emerald-900 animate-pulse" style={{ animationDelay: `${n * 0.2}s` }} />
                  ))}
                </div>
              </div>
              
              <FooterSection />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="userStore"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="pt-32 pb-24 bg-zinc-50 min-h-screen"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="bg-white p-12 md:p-24 shadow-2xl border border-zinc-200 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-900" />
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <ShoppingBag size={48} className="mx-auto text-emerald-900 mb-8" />
                  <h2 className="text-5xl md:text-7xl font-serif italic mb-6">Мағозаи Ман</h2>
                  <p className="text-emerald-900 font-bold uppercase tracking-[0.4em] mb-12 italic text-sm">Хуш омадед ба маҷмӯаи шахсии шумо</p>
                  
                  <div className="w-24 h-px bg-zinc-300 mx-auto mb-16" />
                  
                  {!showForm ? (
                    <div className="py-20 border-2 border-dashed border-zinc-200 rounded-lg flex flex-col items-center justify-center group hover:border-emerald-800 transition-colors cursor-pointer bg-zinc-50/50">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                        <Plus size={32} className="text-emerald-900" />
                      </div>
                      <h3 className="text-xl font-serif mb-2">Мағозаи шумо холӣ аст</h3>
                      <p className="text-sm text-zinc-500 mb-8 max-w-xs mx-auto">Аввалин маҳсулоти худро илова кунед ва ба фурӯш оғоз намоед</p>
                      <button 
                        onClick={() => setShowForm(true)}
                        className="px-8 py-3 bg-emerald-900 text-white font-bold uppercase text-[10px] tracking-widest hover:bg-emerald-800 transition-colors"
                      >
                        Маҳсулоти худро гузоред
                      </button>
                    </div>
                  ) : (
                    <motion.form 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      onSubmit={handleAddProduct}
                      className="max-w-xl mx-auto text-left bg-zinc-50 p-8 border border-zinc-200 shadow-sm"
                    >
                      <h3 className="text-2xl font-serif italic mb-8 border-b border-zinc-200 pb-4">Иловаи маҳсулоти нав</h3>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Номи маҳсулот</label>
                          <input 
                            required
                            type="text"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-emerald-800"
                            placeholder="Мисол: iPhone 15 Pro"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Нарх (смн)</label>
                            <input 
                              required
                              type="number"
                              value={formData.price}
                              onChange={e => setFormData({...formData, price: e.target.value})}
                              className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-emerald-800"
                              placeholder="100"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Категория</label>
                            <select 
                              value={formData.category}
                              onChange={e => setFormData({...formData, category: e.target.value})}
                              className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-emerald-800"
                            >
                              <option>Либос</option>
                              <option>Телефон ва Аксессуарҳо</option>
                              <option>Мошинҳо</option>
                              <option>Ҳайвонот</option>
                              <option>Хонаҳо</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Истиноди акс (URL)</label>
                          <input 
                            type="text"
                            value={formData.image}
                            onChange={e => setFormData({...formData, image: e.target.value})}
                            className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-emerald-800"
                            placeholder="https://example.com/image.jpg"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2">Дар бораи маҳсулот</label>
                          <textarea 
                            rows={4}
                            value={formData.description}
                            onChange={e => setFormData({...formData, description: e.target.value})}
                            className="w-full bg-white border border-zinc-200 px-4 py-3 focus:outline-none focus:border-emerald-800"
                            placeholder="Маълумоти васеъ дар бораи маҳсулот..."
                          />
                        </div>

                        <div className="flex gap-4 pt-4">
                          <button 
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="flex-1 px-8 py-4 border border-zinc-200 font-bold uppercase text-[10px] tracking-widest hover:bg-zinc-100 transition-colors"
                          >
                            Лағв кардан
                          </button>
                          <button 
                            type="submit"
                            className="flex-1 px-8 py-4 bg-emerald-900 text-white font-bold uppercase text-[10px] tracking-widest hover:bg-emerald-800 transition-colors"
                          >
                            Гузоштан
                          </button>
                        </div>
                      </div>
                    </motion.form>
                  )}

                  <div className="mt-20 flex flex-col items-center gap-6">
                    <p className="text-zinc-500 text-sm font-light italic">Суроғаи мағозаи шумо: emeraldluxe.tj/store/my-collection</p>
                    <button 
                      onClick={() => setCurrentView('home')}
                      className="px-12 py-5 bg-emerald-950 text-white font-bold uppercase text-xs tracking-widest hover:bg-emerald-800 transition-all shadow-xl"
                    >
                      Бозгашт ба саҳифаи асосӣ
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const FooterSection = () => (
  <footer className="bg-zinc-950 text-white py-24 px-6 mt-auto">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-1">
        <h2 className="text-3xl font-serif italic font-bold mb-8">ТОҶИКИСТОН</h2>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
            <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
            <Facebook size={18} />
          </a>
          <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
            <Twitter size={18} />
          </a>
        </div>
      </div>
      
      <div>
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6">Хидматрасонӣ ба мизоҷон</h4>
        <ul className="flex flex-col gap-4 text-sm text-zinc-500 font-light">
          <li><a href="#" className="hover:text-white transition-colors">Тамос бо мо</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Пайгирии фармоишҳо</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Интиқол ва баргардонидан</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Усулҳои пардохт</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Баҳо додан</a></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-zinc-600">
      <p>© 2026 Emerald Luxe Boutique. Ҳамаи ҳуқуқҳо ҳифз шудаанд.</p>
      <div className="flex gap-8">
        <span className="flex items-center gap-2 italic">Барои беҳтарин будан сохта шудааст</span>
      </div>
    </div>
  </footer>
);
