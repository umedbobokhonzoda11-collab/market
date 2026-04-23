import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Heart,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Plus,
  User,
  Mail,
  Camera,
  CheckCircle2,
  Trash2,
  Truck,
  Sparkles,
  Smartphone,
  Shirt,
  Hammer,
  Lamp,
  Utensils,
  Car,
  Home as HomeIcon,
  LayoutGrid,
  Share,
  ShoppingBag,
  Home,
  Layers,
  Monitor,
  Languages,
  Maximize
} from 'lucide-react';
import { motion, AnimatePresence, Reorder } from 'motion/react';

const TRANSLATIONS = {
  tg: {
    home: "Асосӣ",
    settings: "Танзимот",
    about: "Дар бораи мо",
    all_products: "Ҳама маҳсулот",
    my_products: "Маҳсулоти Ман",
    advertising: "Реклама",
    categories: "Категорияҳо",
    cart: "Сабад",
    profile: "Профил",
    screen_size: "Андозаи экран",
    language: "Забон",
    add_image: "Иловаи акс",
    from_gallery: "Аз галерия",
    delete: "Нест кардан",
    save: "Захира кардан",
    back: "Бозгашт",
    ready: "Тайёр",
    buy: "Харидан",
    add_to_cart: "Ба сабад",
    profile_setup: "Танзими Профил",
    new_product: "Маҳсулоти нав",
    quick_view: "Намоиши зуд",
    verified_store: "Мағозаи Тасдиқшуда",
    all_rights: "Ҳамаи ҳуқуқҳо ҳифз шудаанд"
  },
  ru: {
    home: "Главная",
    settings: "Настройки",
    about: "О нас",
    all_products: "Все товары",
    my_products: "Мои товары",
    advertising: "Реклама",
    categories: "Категории",
    cart: "Корзина",
    profile: "Профиль",
    screen_size: "Размер экрана",
    language: "Язык",
    add_image: "Добавить фото",
    from_gallery: "Из галереи",
    delete: "Удалить",
    save: "Сохранить",
    back: "Назад",
    ready: "Готово",
    buy: "Купить",
    add_to_cart: "В корзину",
    profile_setup: "Настройка профиля",
    new_product: "Новый товар",
    quick_view: "Быстрый просмотр",
    verified_store: "Проверенный магазин",
    all_rights: "Все права защищены"
  },
  en: {
    home: "Home",
    settings: "Settings",
    about: "About Us",
    all_products: "All Products",
    my_products: "My Products",
    advertising: "Advertising",
    categories: "Categories",
    cart: "Cart",
    profile: "Profile",
    screen_size: "Screen Scale",
    language: "Language",
    add_image: "Add Image",
    from_gallery: "From Gallery",
    delete: "Delete",
    save: "Save",
    back: "Back",
    ready: "Done",
    buy: "Buy Now",
    add_to_cart: "To Cart",
    profile_setup: "Profile Setup",
    new_product: "New Product",
    quick_view: "Quick View",
    verified_store: "Verified Store",
    all_rights: "All rights reserved"
  }
};

const PRODUCTS = [
  {
    id: 1,
    name: "Куртаи миллии занона",
    price: 100,
    category: "Либос",
    image: "https://pngimg.com/uploads/dress/dress_PNG162.png",
    description: "Маҳсулот дар ҳолати хуб мебошад",
    rating: 5
  },
  {
    id: 2,
    name: "iPhone 13 Pro Max",
    price: 100,
    category: "Телефон ва Аксессуарҳо",
    image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG1.png",
    description: "Маҳсулот дар ҳолати хуб мебошад",
    rating: 5
  },
  {
    id: 3,
    name: "Toyota Camry 2022",
    price: 100,
    category: "Мошинҳо",
    image: "https://pngimg.com/uploads/car/car_PNG22570.png",
    description: "Маҳсулот дар ҳолати хуб мебошад",
    rating: 5
  },
  {
    id: 4,
    name: "Саги хушрӯй",
    price: 100,
    category: "Ҳайвонот",
    image: "https://pngimg.com/uploads/dog/dog_PNG50348.png",
    description: "Маҳсулот дар ҳолати хуб мебошад",
    rating: 5
  },
  {
    id: 5,
    name: "Хонаи 3-ҳуҷрагӣ",
    price: 100,
    category: "Хонаҳо",
    image: "https://pngimg.com/uploads/house/house_PNG63.png",
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

const ProductPromo = ({ items }: { items: { id: string | number, image: string }[] }) => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (items.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <div className="relative h-[600px] w-full max-w-4xl flex items-center justify-center pointer-events-none overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center p-8"
        >
          <motion.img
            key={items[index]?.image}
            src={items[index]?.image}
            alt="Product"
            className="max-w-[85%] max-h-[85%] object-contain pointer-events-auto"
            referrerPolicy="no-referrer"
            style={{ 
              filter: 'contrast(1.05)',
              backgroundColor: 'transparent'
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ProductDetailView = ({ product, language, onBack, onAddToCart }: { 
  product: typeof PRODUCTS[0], 
  language: 'tg' | 'ru'| 'en', 
  onBack: () => void,
  onAddToCart: () => void 
}) => {
  const t = TRANSLATIONS[language];
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[200] bg-white text-zinc-900 flex flex-col"
    >
      {/* Header / Nav */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10 pointer-events-none">
        <button 
          onClick={onBack}
          className="w-10 h-10 bg-black/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-black/20 pointer-events-auto transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button className="w-10 h-10 bg-black/10 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-black/20 pointer-events-auto transition-colors">
          <Share size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pb-40">
        {/* Large Product Image */}
        <div className="relative aspect-square bg-emerald-950/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain p-12 drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
          
          {/* Heart Button */}
          <button className="absolute bottom-6 right-6 w-12 h-12 bg-white text-zinc-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <Heart size={20} />
          </button>

          {/* Pagination dots indicator (mock) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 items-center">
            <div className="w-6 h-2 bg-emerald-500 rounded-full" />
            <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
            <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
            <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
            <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full" />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="px-6 pt-8">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">{product.category}</p>
              <h1 className="text-xl font-bold leading-tight text-zinc-900">{product.name}</h1>
            </div>
            <div className="bg-emerald-50 p-2 rounded-lg">
              <Maximize size={18} className="text-emerald-600" />
            </div>
          </div>

          <div className="flex items-center gap-6 mb-8 mt-4 border-b border-zinc-100 pb-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-red-50 text-red-500 rounded-full">
                <Truck size={12} />
              </div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Продажа 2467</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-emerald-50 text-emerald-500 rounded-full">
                <Heart size={12} fill="currentColor" />
              </div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Выкуп 27%</span>
            </div>
          </div>

          <div className="mb-10">
            <p className="text-3xl font-black text-zinc-900 mb-2">{product.price} TJS</p>
          </div>

          {/* Review Mock */}
          <div className="mb-10 p-6 bg-zinc-50 rounded-2xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-4">Отвиз гузоштан</h3>
            <p className="text-xs text-zinc-400 italic">У продукта пока нет комментариев</p>
          </div>

          {/* Product Info Section */}
          <div className="mb-20">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-900 mb-6 flex items-center gap-2">
              Информация о продукте
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-50 pb-4">
                <span className="text-xs text-zinc-400">Место</span>
                <span className="text-xs font-medium text-zinc-900">Вэньчжоу, Чжэцзян</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed pt-2">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="fixed bottom-0 left-0 w-full p-6 bg-white/80 backdrop-blur-xl border-t border-zinc-100 flex items-center gap-3 z-20">
        <button 
          onClick={onAddToCart}
          className="flex-1 py-5 bg-emerald-600 text-white font-bold uppercase text-[10px] tracking-[0.2em] rounded-2xl shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all active:scale-95"
        >
          {t?.buy || "Харидан"}
        </button>
        <button 
          onClick={onAddToCart}
          className="flex-1 py-5 bg-white border-2 border-emerald-600 text-emerald-600 font-bold uppercase text-[10px] tracking-[0.2em] rounded-2xl hover:bg-emerald-50 transition-all active:scale-95"
        >
          {t?.add_to_cart || "Ба сабад"}
        </button>
        <button 
          onClick={onAddToCart}
          className="w-16 h-16 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center relative hover:bg-zinc-50 transition-colors"
        >
          <ShoppingBag size={20} className="text-emerald-600" />
          <span className="absolute top-3 right-3 w-4 h-4 bg-red-500 text-white text-[8px] font-black rounded-full flex items-center justify-center border-2 border-white">7</span>
        </button>
      </div>
    </motion.div>
  );
};

const ProductCard = ({ product, language, onClick }: { 
  product: typeof PRODUCTS[0], 
  language: 'tg' | 'ru' | 'en',
  onClick: () => void,
  key?: string | number 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group cursor-pointer"
    onClick={onClick}
  >
    <div className="relative aspect-[3/4] overflow-hidden bg-emerald-900/20 rounded-2xl p-4 flex items-center justify-center">
      <img 
        src={product.image} 
        alt={product.name} 
        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
        referrerPolicy="no-referrer"
      />
      <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <button className="w-full bg-white text-emerald-950 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-emerald-50 transition-colors rounded-xl shadow-2xl">
          {TRANSLATIONS[language]?.quick_view || "Намоиши зуд"}
        </button>
      </div>
    </div>
    <div className="mt-4 flex justify-between items-start">
      <div>
        <p className="text-[10px] text-emerald-400 uppercase tracking-widest mb-1 font-bold">{product.category}</p>
        <h3 className="font-serif text-lg text-white font-medium italic">{product.name}</h3>
        <div className="flex gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} fill={i < Math.floor(product.rating) ? "#34d399" : "transparent"} color="#34d399" />
          ))}
        </div>
        <p className="text-[10px] text-emerald-100/40 mt-2 line-clamp-2">{product.description}</p>
      </div>
      <p className="font-serif italic text-emerald-400 text-lg">{product.price} {language === 'en' ? 'TJS' : 'смн'}</p>
    </div>
  </motion.div>
);

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState<'menu' | 'promo' | 'scale' | 'lang' | 'categories'>('menu');
  const [cartCount, setCartCount] = useState(0);
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'userStore' | 'productDetail'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

  // Scale and Language States
  const [screenScale, setScreenScale] = useState(() => {
    if (typeof window !== 'undefined') {
      return parseInt(localStorage.getItem('emerald_luxe_scale') || '100');
    }
    return 100;
  });
  const [language, setLanguage] = useState<'tg' | 'ru' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('emerald_luxe_lang') as any) || 'tg';
    }
    return 'tg';
  });

  // Categories State
  const [categories, setCategories] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('emerald_luxe_categories');
      return saved ? JSON.parse(saved) : [
        { id: 'clothing', label: 'Либос', img: "https://pngimg.com/uploads/tshirt/tshirt_PNG5438.png", dataCat: 'Либос' },
        { id: 'phone', label: 'Телефон', img: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG1.png", dataCat: 'Телефон ва Аксессуарҳо' },
        { id: 'construction', label: 'Сохтумони', img: "https://pngimg.com/uploads/hammer/hammer_PNG3890.png", dataCat: 'Сохтумон' },
        { id: 'home_goods', label: 'Маҳсулоти хона', img: "https://pngimg.com/uploads/sofa/sofa_PNG6642.png", dataCat: 'Хона' },
        { id: 'food', label: 'Хӯрока', img: "https://pngimg.com/uploads/apple/apple_PNG12451.png", dataCat: 'Хӯрока' },
        { id: 'car', label: 'Мошин', img: "https://pngimg.com/uploads/bmw/bmw_PNG1702.png", dataCat: 'Мошинҳо' },
        { id: 'house', label: 'Хона', img: "https://pngimg.com/uploads/house/house_PNG63.png", dataCat: 'Хонаҳо' }
      ];
    }
    return [];
  });

  const updateCategoryImg = (id: string, newImg: string) => {
    setCategories(prev => prev.map(c => c.id === id ? { ...c, img: newImg } : c));
  };

  const t = TRANSLATIONS[language];

  // Promo Images State
  const [promoItems, setPromoItems] = useState<{ id: string | number, image: string }[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('emerald_luxe_promo_items');
      return saved ? JSON.parse(saved) : [
        { id: 'tshirt', image: "https://pngimg.com/uploads/tshirt/tshirt_PNG5438.png" },
        { id: 'pants', image: "https://pngimg.com/uploads/pants/pants_PNG102046.png" },
        { id: 'shoes', image: "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5823.png" },
        { id: 'iphone', image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG1.png" },
        { id: 'samsung', image: "https://pngimg.com/uploads/samsung/samsung_PNG43.png" },
        { id: 'rolex', image: "https://pngimg.com/uploads/watches/watches_PNG9866.png" },
        { id: 'casio', image: "https://pngimg.com/uploads/watches/watches_PNG9894.png" },
        { id: 'white-sofa', image: "https://pngimg.com/uploads/sofa/sofa_PNG6642.png" },
        { id: 'red-sofa', image: "https://pngimg.com/uploads/sofa/sofa_PNG6645.png" },
        { id: 'bmw', image: "https://pngimg.com/uploads/bmw/bmw_PNG1702.png" },
        { id: 'mercedes', image: "https://pngimg.com/uploads/mercedes/mercedes_PNG8014.png" },
        { id: 'house', image: "https://pngimg.com/uploads/house/house_PNG63.png" }
      ];
    }
    return [];
  });
  
  // Product State
  const [productList, setProductList] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('emerald_luxe_user_products');
      const userAdded = saved ? JSON.parse(saved) : [];
      return [...userAdded, ...ALL_PRODUCTS];
    }
    return ALL_PRODUCTS;
  });

  // Profile State
  const [isProfileSetup, setIsProfileSetup] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('emerald_luxe_is_setup') === 'true';
    }
    return false;
  });
  
  const [userProfile, setUserProfile] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('emerald_luxe_profile');
      return saved ? JSON.parse(saved) : { name: "", email: "", avatar: "" };
    }
    return { name: "", email: "", avatar: "" };
  });

  const [profileFormData, setProfileFormData] = useState({
    name: "",
    email: "",
    avatar: ""
  });

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
      rating: 5,
      isUserProduct: true
    };

    setProductList(prev => [newProduct, ...prev]);
    setShowForm(false);
    setFormData({ name: "", price: "", category: "Либос", image: "", description: "" });
    setCurrentView('userStore'); // Stay in store after adding, so they can see it in their list
    window.scrollTo(0, 0);
  };

  const handleDeleteProduct = (id: number) => {
    if (window.confirm("Оё шумо мутмаин ҳастед, ки мехоҳед ин маҳсулотро нест кунед?")) {
      setProductList(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profileFormData.name || !profileFormData.email) {
      alert("Лутфан ном ва почтаи худро ворид кунед");
      return;
    }
    setUserProfile(profileFormData);
    setIsProfileSetup(true);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('emerald_luxe_is_setup', isProfileSetup.toString());
    localStorage.setItem('emerald_luxe_profile', JSON.stringify(userProfile));
  }, [isProfileSetup, userProfile]);

  useEffect(() => {
    const userOnly = productList.filter(p => (p as any).isUserProduct);
    localStorage.setItem('emerald_luxe_user_products', JSON.stringify(userOnly));
  }, [productList]);

  useEffect(() => {
    localStorage.setItem('emerald_luxe_promo_items', JSON.stringify(promoItems));
  }, [promoItems]);

  useEffect(() => {
    localStorage.setItem('emerald_luxe_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('emerald_luxe_scale', screenScale.toString());
    (document.documentElement.style as any).zoom = `${screenScale}%`;
  }, [screenScale]);

  useEffect(() => {
    localStorage.setItem('emerald_luxe_lang', language);
  }, [language]);

  const [newPromoUrl, setNewPromoUrl] = useState("");
  const [longPressId, setLongPressId] = useState<string | number | null>(null);
  const longPressTimer = React.useRef<any>(null);
  const promoFileInputRef = React.useRef<HTMLInputElement>(null);
  const productFileInputRef = React.useRef<HTMLInputElement>(null);
  const avatarFileInputRef = React.useRef<HTMLInputElement>(null);
  const categoryFileInputRef = React.useRef<HTMLInputElement>(null);
  const [activeCatUploadId, setActiveCatUploadId] = useState<string | null>(null);

  const handleAddPromo = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!newPromoUrl) return;
    setPromoItems([...promoItems, { id: Date.now(), image: newPromoUrl }]);
    setNewPromoUrl("");
  };

  const handleRemovePromo = (id: string | number) => {
    setPromoItems(prev => prev.filter(item => item.id !== id));
    setLongPressId(null);
  };

  const handlePromoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPromoItems(prev => [...prev, { id: Date.now(), image: reader.result as string }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProductFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileFormData(prev => ({ ...prev, avatar: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCategoryFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeCatUploadId) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateCategoryImg(activeCatUploadId, reader.result as string);
        setActiveCatUploadId(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const BottomNav = () => (
    <div className="fixed bottom-0 left-0 w-full bg-emerald-950 border-t border-white/5 z-[100] md:hidden">
      <div className="flex justify-around items-center h-16">
        <button 
          onClick={() => setCurrentView('home')}
          className={`flex flex-col items-center gap-1 transition-colors ${currentView === 'home' ? 'text-white' : 'text-emerald-400'}`}
        >
          <div className={`p-1.5 rounded-xl transition-all ${currentView === 'home' ? 'bg-white text-emerald-950 shadow-lg' : ''}`}>
            <Home size={18} />
          </div>
          <span className="text-[8px] font-bold uppercase tracking-widest">{t.home}</span>
        </button>
        
        <button 
          onClick={() => {
            setCurrentView('products');
            setSelectedCategory(null);
          }}
          className={`flex flex-col items-center gap-1 transition-colors ${currentView === 'products' ? 'text-white' : 'text-emerald-400'}`}
        >
          <div className={`p-1.5 rounded-xl transition-all ${currentView === 'products' ? 'bg-white text-emerald-950 shadow-lg' : ''}`}>
            <Layers size={18} />
          </div>
          <span className="text-[8px] font-bold uppercase tracking-widest">{t.categories}</span>
        </button>

        <button 
          onClick={() => {
            setCartCount(prev => prev + 1);
          }}
          className="flex flex-col items-center gap-1 text-emerald-400 relative"
        >
          <div className="p-1.5">
            <ShoppingBag size={18} />
          </div>
          <span className="text-[8px] font-bold uppercase tracking-widest">{t.cart}</span>
          {cartCount > 0 && (
            <span className="absolute top-1 right-2 bg-white text-emerald-950 text-[7px] w-3 h-3 rounded-full flex items-center justify-center font-bold">
              {cartCount}
            </span>
          )}
        </button>

        <button 
          onClick={() => setCurrentView('userStore')}
          className={`flex flex-col items-center gap-1 transition-colors ${currentView === 'userStore' ? 'text-white' : 'text-emerald-400'}`}
        >
          <div className={`p-1.5 rounded-xl transition-all ${currentView === 'userStore' ? 'bg-white text-emerald-950 shadow-lg' : ''}`}>
            <User size={18} />
          </div>
          <span className="text-[8px] font-bold uppercase tracking-widest">{t.profile}</span>
        </button>
      </div>
    </div>
  );

  const startLongPress = (id: string | number) => {
    longPressTimer.current = setTimeout(() => {
      setLongPressId(id);
    }, 800);
  };

  const clearLongPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-950">
      {/* Settings Modal */}
      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-emerald-950 w-full max-w-xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl rounded-3xl pb-2 border border-white/10"
            >
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-emerald-950 text-white">
                <div className="flex items-center gap-3">
                  {settingsTab !== 'menu' && (
                    <button onClick={() => setSettingsTab('menu')} className="mr-2 hover:bg-white/10 p-2 rounded-full transition-colors">
                      <ChevronLeft size={20} />
                    </button>
                  )}
                  <Sparkles className="text-emerald-400" size={24} />
                  <h2 className="text-xl font-serif italic text-white">
                    {settingsTab === 'menu' ? t.settings : 
                     settingsTab === 'promo' ? t.advertising : 
                     settingsTab === 'categories' ? t.categories :
                     settingsTab === 'scale' ? t.screen_size : t.language}
                  </h2>
                </div>
                <button onClick={() => { setIsSettingsOpen(false); setSettingsTab('menu'); }} className="hover:rotate-90 transition-transform p-2 text-white/60 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 bg-emerald-950 custom-scrollbar">
                {settingsTab === 'menu' ? (
                  <div className="grid grid-cols-1 gap-4">
                    <button 
                      onClick={() => setSettingsTab('promo')}
                      className="flex items-center justify-between p-6 bg-emerald-900/30 border border-emerald-800/30 rounded-2xl hover:bg-emerald-800/50 hover:border-emerald-400 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <Monitor className="text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span className="font-serif text-lg text-white italic">{t.advertising}</span>
                      </div>
                      <ChevronRight className="text-emerald-100/20 group-hover:text-white transition-colors" />
                    </button>

                    <button 
                      onClick={() => setSettingsTab('categories')}
                      className="flex items-center justify-between p-6 bg-emerald-900/30 border border-emerald-800/30 rounded-2xl hover:bg-emerald-800/50 hover:border-emerald-400 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <LayoutGrid className="text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span className="font-serif text-lg text-white italic">{t.categories}</span>
                      </div>
                      <ChevronRight className="text-emerald-100/20 group-hover:text-white transition-colors" />
                    </button>

                    <button 
                      onClick={() => setSettingsTab('scale')}
                      className="flex items-center justify-between p-6 bg-emerald-900/30 border border-emerald-800/30 rounded-2xl hover:bg-emerald-800/50 hover:border-emerald-400 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <Maximize className="text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span className="font-serif text-lg text-white italic">{t.screen_size}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-emerald-300/40 font-bold tracking-widest">{screenScale}%</span>
                        <ChevronRight className="text-emerald-100/20 group-hover:text-white transition-colors" />
                      </div>
                    </button>

                    <button 
                      onClick={() => setSettingsTab('lang')}
                      className="flex items-center justify-between p-6 bg-emerald-900/30 border border-emerald-800/30 rounded-2xl hover:bg-emerald-800/50 hover:border-emerald-400 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <Languages className="text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span className="font-serif text-lg text-white italic">{t.language}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-emerald-300/40 font-bold uppercase tracking-[0.2em]">{language}</span>
                        <ChevronRight className="text-emerald-100/20 group-hover:text-white transition-colors" />
                      </div>
                    </button>
                  </div>
                ) : settingsTab === 'categories' ? (
                  <div className="space-y-6">
                    <p className="text-[10px] text-emerald-100/30 mb-6 italic uppercase tracking-[0.2em] text-center font-bold">
                      {language === 'en' ? 'Manage category images' : 'Идоракунии аксҳои категорияҳо'}
                    </p>
                    <input 
                      type="file" 
                      ref={categoryFileInputRef}
                      className="hidden" 
                      accept="image/*"
                      onChange={handleCategoryFileUpload}
                    />
                    <div className="grid grid-cols-1 gap-4">
                      {categories.map((cat: any) => (
                        <div key={cat.id} className="p-4 bg-emerald-900/40 border border-emerald-800/40 rounded-2xl">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-emerald-950 flex items-center justify-center p-2 border border-white/5">
                                <img src={cat.img} alt="" className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                              </div>
                              <span className="font-bold text-white uppercase text-xs tracking-widest">{cat.label}</span>
                            </div>
                            {cat.img && cat.img.startsWith('data:') && (
                              <CheckCircle2 size={16} className="text-emerald-400" />
                            )}
                          </div>
                          <div className="flex gap-2">
                            <div className="relative flex-1">
                              <input 
                                type="text" 
                                value={cat.img.startsWith('data:') ? 'Акс аз галерия' : cat.img}
                                onChange={(e) => updateCategoryImg(cat.id, e.target.value)}
                                placeholder="URL-и акси PNG"
                                readOnly={cat.img.startsWith('data:')}
                                className="w-full bg-emerald-950/60 border border-emerald-800/50 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-400 text-[10px] transition-all text-white placeholder-emerald-100/10 font-mono pr-10"
                              />
                              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <Camera size={14} className="text-emerald-400/40" />
                              </div>
                            </div>
                            <button 
                              onClick={() => {
                                setActiveCatUploadId(cat.id);
                                setTimeout(() => categoryFileInputRef.current?.click(), 10);
                              }}
                              className="w-12 h-12 bg-white text-emerald-950 rounded-xl flex items-center justify-center hover:bg-emerald-50 transition-all shadow-lg active:scale-90"
                            >
                              <Plus size={24} />
                            </button>
                            {cat.img.startsWith('data:') && (
                              <button 
                                onClick={() => updateCategoryImg(cat.id, "")}
                                className="w-12 h-12 bg-red-500/20 text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all active:scale-90"
                              >
                                <X size={20} />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : settingsTab === 'promo' ? (
                  <div className="flex flex-col h-full">
                    <p className="text-[10px] text-emerald-100/30 mb-6 italic uppercase tracking-[0.2em] text-center font-bold">
                      {language === 'en' ? 'Drag to reorder. Long press to delete.' : 'Барои ҳаракат додан кашед. Барои нест кардан пахш карда нигоҳ доред.'}
                    </p>
                    
                    <Reorder.Group axis="y" values={promoItems} onReorder={setPromoItems} className="space-y-3 mb-6">
                      {promoItems.map((item) => (
                        <Reorder.Item 
                          key={item.id} 
                          value={item}
                          onMouseDown={() => startLongPress(item.id)}
                          onMouseUp={clearLongPress}
                          onMouseLeave={clearLongPress}
                          onTouchStart={() => startLongPress(item.id)}
                          onTouchEnd={clearLongPress}
                          className="relative flex items-center gap-4 p-3 bg-emerald-900/40 border border-emerald-800/40 rounded-2xl cursor-grab active:cursor-grabbing shadow-sm hover:border-emerald-400 transition-colors"
                        >
                          <div className="w-14 h-14 bg-emerald-950 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
                            <img src={item.image} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                          </div>
                          <div className="flex-1 overflow-hidden">
                             <p className="text-[10px] text-emerald-100/40 truncate font-mono">{item.image}</p>
                          </div>
                          <Menu className="text-emerald-100/20 mr-2" size={20} />

                          <AnimatePresence>
                            {longPressId === item.id && (
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-red-600/95 backdrop-blur-sm rounded-2xl flex items-center justify-around text-white px-6 z-10"
                              >
                                <span className="font-bold text-xs uppercase tracking-widest">{t.delete}?</span>
                                <div className="flex gap-4">
                                  <button onClick={() => handleRemovePromo(item.id)} className="w-10 h-10 bg-white text-red-600 rounded-full flex items-center justify-center shadow-lg"><Trash2 size={18} /></button>
                                  <button onClick={() => setLongPressId(null)} className="w-10 h-10 bg-white/20 text-white rounded-full flex items-center justify-center"><X size={18} /></button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Reorder.Item>
                      ))}
                    </Reorder.Group>

                    <div className="bg-emerald-900/20 p-5 rounded-2xl border border-emerald-800/30 shadow-inner">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-emerald-400/20 rounded-lg flex items-center justify-center">
                          <Plus size={16} className="text-emerald-400" />
                        </div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400/60">{t.add_image}</h4>
                      </div>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          value={newPromoUrl}
                          onChange={(e) => setNewPromoUrl(e.target.value)}
                          placeholder="URL-и акси нав (+)"
                          className="flex-1 bg-emerald-950/40 border border-emerald-800/40 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-400 text-sm transition-all text-white placeholder-emerald-100/20"
                        />
                        <button 
                          onClick={() => handleAddPromo()}
                          disabled={!newPromoUrl}
                          className="px-4 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all active:scale-95 disabled:opacity-50"
                          title="Add by URL"
                        >
                          <Plus size={20} />
                        </button>
                        <input 
                          type="file" 
                          ref={promoFileInputRef}
                          className="hidden" 
                          accept="image/*"
                          onChange={handlePromoFileUpload}
                        />
                        <button 
                          onClick={() => promoFileInputRef.current?.click()}
                          className="px-6 bg-white text-emerald-950 rounded-xl hover:bg-emerald-50 transition-all active:scale-95 flex items-center justify-center gap-2 font-bold uppercase text-[10px] tracking-widest shadow-xl"
                        >
                          <Camera size={20} />
                          <span className="hidden sm:inline">{t.from_gallery}</span>
                        </button>
                      </div>
                      <p className="mt-3 text-[9px] text-emerald-100/20 italic text-center">
                        Маслиҳат: Барои натиҷаи беҳтарин аксҳои бе замина (PNG) истифода баред
                      </p>
                    </div>
                  </div>
                ) : settingsTab === 'scale' ? (
                  <div className="py-12 px-4 flex flex-col items-center">
                    <div className="text-6xl font-serif italic text-white mb-8">{screenScale}%</div>
                    <input 
                      type="range"
                      min="70"
                      max="120"
                      step="5"
                      value={screenScale}
                      onChange={(e) => setScreenScale(parseInt(e.target.value))}
                      className="w-full h-2 bg-emerald-900 rounded-lg appearance-none cursor-pointer accent-white mb-8"
                    />
                    <div className="flex justify-between w-full text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300/40">
                      <span>70%</span>
                      <span>100%</span>
                      <span>120%</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { id: 'tg', label: 'Тоҷикӣ' },
                      { id: 'ru', label: 'Русский' },
                      { id: 'en', label: 'English' }
                    ].map((lang) => (
                      <button 
                        key={lang.id}
                        onClick={() => setLanguage(lang.id as any)}
                        className={`flex items-center justify-between p-6 border rounded-2xl transition-all ${language === lang.id ? 'border-white bg-emerald-900 shadow-xl text-white' : 'border-white/5 bg-emerald-900/20 text-white/60 hover:border-white/20'}`}
                      >
                        <span className="font-serif text-lg italic">{lang.label}</span>
                        {language === lang.id && <CheckCircle2 className="text-emerald-400" size={20} />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 bg-emerald-950 border-t border-white/5 flex justify-between items-center">
                <p className="text-[10px] text-emerald-100/30 font-bold uppercase tracking-widest italic">Emerald Luxe Boutique</p>
                <button 
                  onClick={() => { setIsSettingsOpen(false); setSettingsTab('menu'); }}
                  className="px-10 py-4 bg-white text-emerald-950 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-emerald-50 transition-all rounded-xl shadow-2xl active:scale-95"
                >
                  {t.ready}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrollY > 50 || currentView === 'products' ? 'bg-emerald-950/90 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <button onClick={() => setIsMenuOpen(true)} className="text-white hover:text-emerald-400 transition-colors">
              <Menu size={24} />
            </button>
            <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] h-full items-center text-white">
              <button onClick={() => setCurrentView('home')} className="hover:text-emerald-400 transition-colors uppercase">{t.home}</button>
              <button onClick={() => setIsSettingsOpen(true)} className="hover:text-emerald-400 transition-colors uppercase">{t.settings}</button>
              <a href="#" className="hover:text-emerald-400 transition-colors uppercase">{t.about}</a>
            </div>
          </div>
          
          <h1 
            onClick={() => setCurrentView('home')}
            className="text-2xl font-serif tracking-widest italic font-bold cursor-pointer text-white"
          >
            ТОҶИКИСТОН
          </h1>

          <div className="flex items-center gap-6 text-white">
            <button className="hover:text-emerald-400 transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <button className="hover:text-emerald-400 transition-colors hidden sm:block">
              <Heart size={20} />
            </button>
            <button className="relative group" onClick={() => setCartCount(prev => prev + 1)}>
              <ShoppingBag size={20} className="group-hover:text-emerald-400 transition-colors" />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-emerald-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black"
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
                  {t.home}
                </button>
                <button 
                  onClick={() => {
                    setIsSettingsOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="hover:text-emerald-400 transition-colors w-fit text-left italic"
                >
                  {t.settings}
                </button>
                <button className="hover:text-emerald-400 transition-colors w-fit text-left italic">
                  {t.about}
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
            className="bg-emerald-950"
          >
            {/* Hero Section */}
            <header className="relative min-h-[80vh] pt-32 flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent" />
              </div>

              <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
                <ProductPromo items={promoItems} />
                
                {/* Home Search Bar */}
                <div className="w-full max-w-xl -mt-10 mb-20 relative group px-6">
                  <div className="absolute inset-0 bg-emerald-400/20 blur-3xl group-hover:bg-emerald-400/30 transition-all rounded-full" />
                  <div className="relative flex items-center bg-emerald-900/40 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl focus-within:border-emerald-400/50 transition-all">
                    <div className="pl-6 text-emerald-400">
                      <Search size={20} />
                    </div>
                    <input 
                      type="text" 
                      placeholder={language === 'en' ? 'Search exclusive products...' : 'Ҷустуҷӯи маҳсулоти эксклюзивӣ...'}
                      className="w-full bg-transparent border-none focus:ring-0 text-white p-5 text-sm placeholder:text-emerald-100/20"
                    />
                    <button className="bg-white text-emerald-950 px-8 py-5 font-bold uppercase text-[10px] tracking-widest hover:bg-emerald-50 transition-all">
                      {language === 'en' ? 'FIND' : 'ЁФТАН'}
                    </button>
                  </div>
                </div>
              </div>
            </header>

            {/* Home Product Collection */}
            <section className="pb-32 px-6">
              <div className="max-w-[1600px] mx-auto">
                <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-12">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-4">Коллексияи мо</h2>
                    <p className="text-emerald-100/40 text-sm max-w-md">Беҳтарин ва зеботарин маҳсулот барои шумо дар як ҷо.</p>
                  </div>
                  <div className="flex gap-4">
                    <button className="px-6 py-2 border border-emerald-400 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-emerald-400 hover:text-emerald-950 transition-all">
                      {language === 'en' ? 'POPULAR' : 'МАЪМУЛ'}
                    </button>
                    <button className="px-6 py-2 border border-white/10 text-emerald-100/40 text-[10px] font-bold uppercase tracking-widest rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all">
                      {language === 'en' ? 'NEWEST' : 'НАВТАРИН'}
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-6 border-t border-l border-white/5">
                  {productList.map((product, idx) => (
                    <div key={`${product.id}-${idx}`} className="border-r border-b border-white/5 p-4 md:p-8 hover:bg-emerald-900/10 transition-colors">
                      <ProductCard 
                        product={product} 
                        language={language} 
                        onClick={() => {
                          setSelectedProduct(product);
                          setCurrentView('productDetail');
                          window.scrollTo(0, 0);
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-24 text-center">
                  <button className="px-12 py-5 bg-white text-emerald-950 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-emerald-50 transition-all rounded-2xl shadow-2xl active:scale-95">
                    {language === 'en' ? 'LOAD MORE' : 'БЕШТАР БОР КУНЕД'}
                  </button>
                </div>
              </div>
            </section>

            <BottomNav />
          </motion.div>
        ) : currentView === 'products' ? (
          <motion.div
            key="products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-40 pb-24 bg-emerald-950 min-h-screen text-white"
          >
            <div className="max-w-7xl mx-auto px-6">
              {!selectedCategory ? (
                <>
                  <div className="mb-16 text-center">
                    <h2 className="text-4xl font-serif italic mb-4">Категорияҳо</h2>
                    <div className="w-12 h-1 bg-emerald-400 mx-auto" />
                  </div>

                  {/* Category PNG Buttons Grid */}
                  <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-6 sm:gap-8 mb-20 px-4">
                    {categories.map((cat: any) => (
                      <button 
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.dataCat)}
                        className="flex flex-col items-center gap-5 group"
                      >
                        <div className="relative w-24 h-24 rounded-full bg-emerald-900/40 border border-white/10 flex items-center justify-center overflow-hidden hover:bg-emerald-400/20 group-hover:border-emerald-400 transition-all shadow-2xl group-active:scale-90 p-4">
                          <img 
                            src={cat.img} 
                            alt={cat.label} 
                            className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100/40 group-hover:text-white transition-colors text-center">
                          {cat.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Transparent Placeholder Content */}
                  <div className="mt-32 border-t border-white/5 pt-20 text-center opacity-10 select-none">
                    <LayoutGrid size={64} className="mx-auto mb-8 text-emerald-400" />
                    <p className="text-xs uppercase tracking-[0.6em] font-thin">Интихоби бахш</p>
                  </div>
                </>
              ) : (
                <div className="space-y-12">
                  <div className="flex items-center justify-between border-b border-white/5 pb-8">
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={() => setSelectedCategory(null)}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-emerald-400 hover:text-emerald-950 transition-all"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <h2 className="text-3xl font-serif italic">{selectedCategory}</h2>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                      {productList.filter(p => p.category === selectedCategory).length} МАҲСУЛОТ
                    </span>
                  </div>

                  <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-px gap-y-px bg-white/5 border border-white/5 overflow-hidden rounded-3xl">
                    {productList.filter(p => p.category === selectedCategory).length > 0 ? (
                      productList.filter(p => p.category === selectedCategory).map((product, idx) => (
                        <div key={`${product.id}-${idx}`} className="bg-emerald-950 p-4 hover:bg-emerald-900/20 transition-colors">
                          <ProductCard 
                            product={product} 
                            language={language} 
                            onClick={() => {
                              setSelectedProduct(product);
                              setCurrentView('productDetail');
                              window.scrollTo(0, 0);
                            }}
                          />
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full py-32 text-center bg-emerald-950">
                        <ShoppingBag size={48} className="mx-auto mb-6 text-emerald-100/20" />
                        <p className="text-emerald-100/40 text-xs uppercase tracking-widest">Дар ин категория маҳсулот нест</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <BottomNav />
            </div>
          </motion.div>
        ) : currentView === 'productDetail' && selectedProduct ? (
           <ProductDetailView 
             product={selectedProduct} 
             language={language} 
             onBack={() => {
               // Back to whatever view we were on
               setCurrentView('home'); 
               setSelectedProduct(null);
             }} 
             onAddToCart={() => setCartCount(prev => prev + 1)}
           />
        ) : (
          <motion.div
            key="userStore"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="pt-32 pb-24 bg-emerald-950 min-h-screen text-white"
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="bg-emerald-900/30 p-12 md:p-24 shadow-2xl border border-emerald-800/50 text-center relative overflow-hidden rounded-3xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-emerald-400" />
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {!isProfileSetup ? (
                    <div className="max-w-xl mx-auto">
                      <User size={48} className="mx-auto text-emerald-400 mb-8" />
                      <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-white">Танзими Профил</h2>
                      <p className="text-emerald-100/60 mb-12">Барои оғози фурӯш, лутфан маълумоти худро ворид кунед</p>
                      
                      <form onSubmit={handleSaveProfile} className="text-left bg-emerald-900/20 p-8 border border-emerald-800/30 rounded-3xl shadow-2xl backdrop-blur-md">
                        <div className="space-y-6">
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Номи пурра</label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-300" size={16} />
                              <input 
                                required
                                type="text"
                                value={profileFormData.name}
                                onChange={e => setProfileFormData({...profileFormData, name: e.target.value})}
                                className="w-full bg-emerald-950/40 border border-emerald-800/50 pl-12 pr-4 py-4 focus:outline-none focus:border-emerald-400 rounded-2xl text-white transition-all shadow-sm"
                                placeholder="Мисол: Умед Бобохонзода"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Почтаи электронӣ</label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-300" size={16} />
                              <input 
                                required
                                type="email"
                                value={profileFormData.email}
                                onChange={e => setProfileFormData({...profileFormData, email: e.target.value})}
                                className="w-full bg-emerald-950/40 border border-emerald-800/50 pl-12 pr-4 py-4 focus:outline-none focus:border-emerald-400 rounded-2xl text-white transition-all shadow-sm"
                                placeholder="tadjik@example.tj"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Акс (URL)</label>
                            <div className="flex gap-2">
                              <div className="relative flex-1">
                                <Camera className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-300" size={16} />
                                <input 
                                  type="text"
                                  value={profileFormData.avatar}
                                  onChange={e => setProfileFormData({...profileFormData, avatar: e.target.value})}
                                  className="w-full bg-emerald-950/40 border border-emerald-800/50 pl-12 pr-4 py-4 focus:outline-none focus:border-emerald-400 rounded-2xl text-white transition-all shadow-sm"
                                  placeholder="https://example.com/avatar.jpg"
                                />
                              </div>
                              <input 
                                type="file" 
                                ref={avatarFileInputRef}
                                className="hidden" 
                                accept="image/*"
                                onChange={handleAvatarFileUpload}
                              />
                              <button 
                                type="button"
                                onClick={() => avatarFileInputRef.current?.click()}
                                className="px-6 bg-white text-emerald-950 rounded-2xl hover:bg-emerald-50 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg"
                              >
                                <Plus size={24} />
                              </button>
                            </div>
                            {profileFormData.avatar && profileFormData.avatar.startsWith('data:') && (
                              <div className="mt-2 text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1">
                                <CheckCircle2 size={12} /> Акс аз галерия интихоб шуд
                              </div>
                            )}
                          </div>

                          <button 
                            type="submit"
                            className="w-full py-5 bg-white text-emerald-950 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-emerald-50 transition-all shadow-xl rounded-2xl active:scale-95"
                          >
                            Захира кардан
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <>
                      {/* Store Header with Profile Info */}
                      <div className="flex flex-col items-center mb-16">
                        <div className="relative mb-6">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-emerald-900">
                            {userProfile.avatar ? (
                              <img src={userProfile.avatar} alt={userProfile.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-emerald-800 text-white text-3xl font-serif">
                                {userProfile.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div className="absolute -bottom-1 -right-1 bg-white text-emerald-950 p-1 rounded-full border-2 border-emerald-900 shadow-md">
                            <CheckCircle2 size={16} />
                          </div>
                        </div>
                        <h2 className="text-4xl font-serif italic mb-2 text-white">{userProfile.name}</h2>
                        <p className="text-emerald-100/60 text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">{userProfile.email}</p>
                        <div className="flex gap-4">
                          <div className="px-6 py-2 bg-emerald-400/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-400/20 backdrop-blur-md">
                            {t.verified_store}
                          </div>
                          <button 
                            onClick={() => {
                              setIsProfileSetup(false);
                              setProfileFormData(userProfile);
                            }}
                            className="px-6 py-2 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
                          >
                            {language === 'en' ? 'Edit Profile' : 'Ивази Профил'}
                          </button>
                        </div>
                      </div>

                      <div className="w-24 h-px bg-white/10 mx-auto mb-16" />
                      
                      {!showForm ? (
                        <div className="py-24 border-2 border-dashed border-emerald-800/30 rounded-3xl flex flex-col items-center justify-center group hover:border-emerald-400 transition-all cursor-pointer bg-emerald-900/10 mb-20 shadow-inner">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl mb-6 group-hover:scale-110 transition-transform">
                            <Plus size={32} className="text-emerald-950" />
                          </div>
                          <h3 className="text-2xl font-serif mb-2 text-white">{language === 'en' ? 'Add New Product' : 'Маҳсулоти нав илова кунед'}</h3>
                          <p className="text-sm text-emerald-300/50 mb-8 max-w-xs mx-auto font-light leading-relaxed">{language === 'en' ? 'Manage your business here' : 'Ин бахши шахсии шумо барои идоракунии тиҷорат аст'}</p>
                          <button 
                            onClick={() => setShowForm(true)}
                            className="px-12 py-5 bg-white text-emerald-950 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-emerald-50 transition-all shadow-2xl rounded-2xl active:scale-95"
                          >
                            {language === 'en' ? 'Start Selling' : 'Маҳсулоти худро гузоред'}
                          </button>
                        </div>
                      ) : (
                        <motion.form 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          onSubmit={handleAddProduct}
                          className="max-w-xl mx-auto text-left bg-emerald-900/40 p-10 border border-emerald-800/30 shadow-2xl rounded-3xl mb-24 backdrop-blur-md"
                        >
                          <h3 className="text-2xl font-serif italic mb-8 border-b border-white/5 pb-4 text-white">Иловаи маҳсулоти нав</h3>
                          
                          <div className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Номи маҳсулот</label>
                                <input 
                                  required
                                  type="text"
                                  value={formData.name}
                                  onChange={e => setFormData({...formData, name: e.target.value})}
                                  className="w-full bg-emerald-950/60 border border-emerald-800/40 px-5 py-4 focus:outline-none focus:border-emerald-500 rounded-2xl text-white transition-all shadow-sm"
                                  placeholder="Мисол: iPhone 15 Pro"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Нарх (смн)</label>
                                <input 
                                  required
                                  type="number"
                                  value={formData.price}
                                  onChange={e => setFormData({...formData, price: e.target.value})}
                                  className="w-full bg-emerald-950/60 border border-emerald-800/40 px-5 py-4 focus:outline-none focus:border-emerald-500 rounded-2xl text-white transition-all shadow-sm"
                                  placeholder="100"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Категория</label>
                                <select 
                                  value={formData.category}
                                  onChange={e => setFormData({...formData, category: e.target.value})}
                                  className="w-full bg-emerald-950/60 border border-emerald-800/40 px-5 py-4 focus:outline-none focus:border-emerald-500 rounded-2xl text-white transition-all shadow-sm appearance-none"
                                >
                                  <option value="Либос" className="bg-emerald-950">{language === 'en' ? 'Clothing' : 'Либос'}</option>
                                  <option value="Телефон ва Аксессуарҳо" className="bg-emerald-950">{language === 'en' ? 'Smartphones' : 'Телефон ва Аксессуарҳо'}</option>
                                  <option value="Мошинҳо" className="bg-emerald-950">{language === 'en' ? 'Cars' : 'Мошинҳо'}</option>
                                  <option value="Ҳайвонот" className="bg-emerald-950">{language === 'en' ? 'Pets' : 'Ҳайвонот'}</option>
                                  <option value="Хонаҳо" className="bg-emerald-950">{language === 'en' ? 'Real Estate' : 'Хонаҳо'}</option>
                                </select>
                              </div>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Истиноди акс (URL)</label>
                              <div className="flex gap-3">
                                <input 
                                  type="text"
                                  value={formData.image}
                                  onChange={e => setFormData({...formData, image: e.target.value})}
                                  className="flex-1 bg-emerald-950/60 border border-emerald-800/40 px-5 py-4 focus:outline-none focus:border-emerald-500 rounded-2xl text-white transition-all shadow-sm"
                                  placeholder="https://example.com/image.jpg"
                                />
                                <input 
                                  type="file" 
                                  ref={productFileInputRef}
                                  className="hidden" 
                                  accept="image/*"
                                  onChange={handleProductFileUpload}
                                />
                                <button 
                                  type="button"
                                  onClick={() => productFileInputRef.current?.click()}
                                  className="px-6 bg-white text-emerald-950 rounded-2xl hover:bg-emerald-50 transition-all active:scale-95 flex items-center justify-center shadow-lg"
                                >
                                  <Camera size={24} />
                                </button>
                              </div>
                              {formData.image && formData.image.startsWith('data:') && (
                                <div className="mt-3 text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
                                  <CheckCircle2 size={12} className="text-emerald-500" /> Акс аз галерия интихоб шуд
                                </div>
                              )}
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">Дар бораи маҳсулот</label>
                              <textarea 
                                rows={4}
                                value={formData.description}
                                onChange={e => setFormData({...formData, description: e.target.value})}
                                className="w-full bg-emerald-950/60 border border-emerald-800/40 px-5 py-4 focus:outline-none focus:border-emerald-500 rounded-2xl text-white transition-all shadow-sm resize-none h-32"
                                placeholder="Маълумоти васеъ дар бораи маҳсулот..."
                              />
                            </div>

                            <div className="flex gap-4 pt-4">
                              <button 
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="flex-1 px-8 py-5 border border-white/20 text-white font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white/10 transition-all rounded-2xl"
                              >
                                Лағв кардан
                              </button>
                              <button 
                                type="submit"
                                className="flex-1 px-8 py-5 bg-white text-emerald-950 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-emerald-50 transition-all shadow-2xl rounded-2xl active:scale-95"
                              >
                                Гузоштан
                              </button>
                            </div>
                          </div>
                        </motion.form>
                      )}
                      {/* My Products List */}
                      <div className="mt-24 text-left">
                        <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                          <h3 className="text-3xl font-serif italic text-white">{language === 'en' ? 'Your Products' : 'Маҳсулоти гузоштаи шумо'}</h3>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-300/40">
                            {productList.filter(p => (p as any).isUserProduct).length} {language === 'en' ? 'PRODUCTS' : 'МАҲСУЛОТ'}
                          </span>
                        </div>
                        
                        {productList.filter(p => (p as any).isUserProduct).length === 0 ? (
                          <p className="text-emerald-100/30 text-sm italic text-center py-12">{language === 'en' ? 'No products yet.' : 'Шумо то ҳол ягон маҳсулот нагузоштаед.'}</p>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {productList.filter(p => (p as any).isUserProduct).map((product) => (
                              <div key={product.id} className="bg-emerald-900/30 border border-emerald-800/40 p-6 relative group rounded-3xl backdrop-blur-md transition-all hover:bg-emerald-900/40">
                                <ProductCard 
                                  product={product} 
                                  language={language} 
                                  onClick={() => {
                                    setSelectedProduct(product);
                                    setCurrentView('productDetail');
                                    window.scrollTo(0, 0);
                                  }}
                                />
                                
                                <button 
                                  onClick={() => handleDeleteProduct(product.id)}
                                  className="absolute top-8 right-8 p-3 bg-white text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-2xl hover:scale-110 active:scale-90"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  )}

                  <div className="mt-20 flex flex-col items-center gap-6 pb-20">
                    <p className="text-emerald-100/30 text-sm font-light italic">{language === 'en' ? 'Store address' : 'Суроғаи мағозаи шумо'}: ummmmed.tj/store/my-collection</p>
                    <button 
                      onClick={() => setCurrentView('home')}
                      className="px-12 py-5 bg-white text-emerald-950 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-emerald-50 transition-all shadow-2xl rounded-2xl active:scale-95"
                    >
                      {t.back}
                    </button>
                  </div>
                </motion.div>
              </div>
              <BottomNav />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const FooterSection = ({ t, language }: { t: any, language: string }) => (
  <footer className="bg-zinc-950 text-white py-24 px-6 mt-auto">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-1">
        <h2 className="text-3xl font-serif italic font-bold mb-8">Ummmmed</h2>
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
        <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-6">{language === 'en' ? 'Customer Service' : 'Хидматрасонӣ ба мизоҷон'}</h4>
        <ul className="flex flex-col gap-4 text-sm text-zinc-500 font-light">
          <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Contact Us' : 'Тамос бо мо'}</a></li>
          <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Order Tracking' : 'Пайгирии фармоишҳо'}</a></li>
          <li><a href="#" className="hover:text-white transition-colors">{language === 'en' ? 'Shipping' : 'Интиқол ва баргардонидан'}</a></li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-zinc-600">
      <p>© 2026 Ummmmed Boutique. {t.all_rights}.</p>
    </div>
  </footer>
);
