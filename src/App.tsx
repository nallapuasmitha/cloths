/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight, 
  Star, 
  Instagram, 
  Twitter, 
  Facebook,
  Plus,
  Minus,
  Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

interface Product {
  id: number;
  name: string;
  price: number;
  category: 'Men' | 'Women' | 'Accessories';
  image: string;
  description: string;
  rating: number;
}

interface CartItem extends Product {
  quantity: number;
}

// --- Mock Data ---

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Linen Shirt",
    price: 89,
    category: "Men",
    image: "https://picsum.photos/seed/linen-shirt/600/800",
    description: "Breathable, high-quality linen for everyday elegance.",
    rating: 4.8
  },
  {
    id: 2,
    name: "Silk Wrap Dress",
    price: 149,
    category: "Women",
    image: "https://picsum.photos/seed/silk-dress/600/800",
    description: "Flowing silk silhouette perfect for evening events.",
    rating: 4.9
  },
  {
    id: 3,
    name: "Minimalist Leather Tote",
    price: 199,
    category: "Accessories",
    image: "https://picsum.photos/seed/leather-tote/600/800",
    description: "Handcrafted Italian leather with ample space.",
    rating: 4.7
  },
  {
    id: 4,
    name: "Denim Trucker Jacket",
    price: 120,
    category: "Men",
    image: "https://picsum.photos/seed/denim-jacket/600/800",
    description: "Timeless denim with a modern tailored fit.",
    rating: 4.6
  },
  {
    id: 5,
    name: "Cashmere Crewneck",
    price: 210,
    category: "Women",
    image: "https://picsum.photos/seed/cashmere-sweater/600/800",
    description: "Ultra-soft Mongolian cashmere for ultimate comfort.",
    rating: 5.0
  },
  {
    id: 6,
    name: "Wool Fedora Hat",
    price: 75,
    category: "Accessories",
    image: "https://picsum.photos/seed/fedora/600/800",
    description: "Structured wool felt with a classic ribbon band.",
    rating: 4.5
  },
  {
    id: 7,
    name: "Tailored Chino Pants",
    price: 95,
    category: "Men",
    image: "https://picsum.photos/seed/chinos/600/800",
    description: "Slim-fit cotton chinos for a sharp look.",
    rating: 4.7
  },
  {
    id: 8,
    name: "Pleated Midi Skirt",
    price: 110,
    category: "Women",
    image: "https://picsum.photos/seed/midi-skirt/600/800",
    description: "Elegant pleats that move beautifully with you.",
    rating: 4.8
  }
];

// --- Components ---

const Navbar = ({ cartCount, onOpenCart }: { cartCount: number; onOpenCart: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <a href="#" className="text-2xl font-bold tracking-tighter text-black">V&V</a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#shop" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Shop</a>
              <a href="#collections" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Collections</a>
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">About</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-black transition-colors">
              <Search size={20} />
            </button>
            <button 
              onClick={onOpenCart}
              className="p-2 text-gray-600 hover:text-black transition-colors relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2 text-gray-600 hover:text-black transition-colors">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Spring / Summer 2026</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            ELEVATE <br /> YOUR <span className="italic font-serif font-light">Style</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
            Discover our curated collection of premium essentials designed for the modern individual. Quality meets timeless design.
          </p>
          <div className="flex gap-4">
            <a 
              href="#shop" 
              className="px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all flex items-center gap-2 group"
            >
              Shop Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#collections" 
              className="px-8 py-4 border border-black text-black text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
              Lookbook
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/fashion-hero/800/1000" 
              alt="Fashion Hero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl rounded-lg max-w-[200px]">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Featured Piece</p>
            <p className="text-sm font-bold mb-1">Silk Evening Gown</p>
            <p className="text-sm text-gray-500">$299.00</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        <button 
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 left-4 right-4 bg-white py-3 text-xs font-bold uppercase tracking-widest translate-y-12 group-hover:translate-y-0 transition-transform duration-300 shadow-lg hover:bg-black hover:text-white"
        >
          Add to Cart
        </button>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
          <h3 className="text-sm font-bold text-gray-900">{product.name}</h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </motion.div>
  );
};

const CartDrawer = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold tracking-tight">Your Cart ({items.length})</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <ShoppingBag size={48} className="text-gray-200 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-sm font-bold uppercase tracking-widest underline underline-offset-4"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h3 className="text-sm font-bold">{item.name}</h3>
                        <p className="text-sm font-medium">${item.price}</p>
                      </div>
                      <p className="text-xs text-gray-400 mb-4">{item.category}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-gray-200 rounded">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-gray-50"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-gray-50"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-xl font-bold">${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-black text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                  Checkout
                </button>
                <p className="text-[10px] text-center text-gray-400 mt-4 uppercase tracking-widest">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter text-black mb-6 block">V&V</a>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Defining modern elegance since 2026. We believe in quality, sustainability, and timeless design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors"><Facebook size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Men's Collection</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Women's Collection</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">FAQs</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-sm text-gray-500 mb-4">Join our list for exclusive offers and news.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-gray-50 border-none px-4 py-2 text-sm focus:ring-1 focus:ring-black outline-none"
              />
              <button className="bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-gray-800">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
            © 2026 Vogue & Verve. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Privacy Policy</a>
            <a href="#" className="text-[10px] text-gray-400 uppercase tracking-widest hover:text-black">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Men' | 'Women' | 'Accessories'>('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      <Navbar cartCount={cart.reduce((s, i) => s + i.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        
        {/* Shop Section */}
        <section id="shop" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Our Collection</span>
              <h2 className="text-4xl font-bold tracking-tight">SHOP THE ESSENTIALS</h2>
            </div>
            
            <div className="flex gap-8 border-b border-gray-100 pb-2">
              {['All', 'Men', 'Women', 'Accessories'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`text-xs font-bold uppercase tracking-widest transition-all relative pb-2 ${
                    activeCategory === cat ? 'text-black' : 'text-gray-400 hover:text-black'
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart} 
                />
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Featured Collection */}
        <section id="collections" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-8">
                  <img 
                    src="https://picsum.photos/seed/collection-1/1200/675" 
                    alt="Collection" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://picsum.photos/seed/collection-2/600/600" 
                      alt="Collection" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://picsum.photos/seed/collection-3/600/600" 
                      alt="Collection" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 lg:pl-12">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Limited Edition</span>
                <h2 className="text-5xl font-bold tracking-tighter leading-[0.9] mb-8">
                  THE <br /> NOIR <br /> <span className="italic font-serif font-light">Series</span>
                </h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  A monochromatic exploration of texture and form. This limited capsule collection features our most refined silhouettes in deep obsidian and charcoal tones.
                </p>
                <button className="px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all flex items-center gap-2 group">
                  Explore Collection
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-24 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold tracking-tight mb-6">STAY IN THE LOOP</h2>
            <p className="text-gray-500 mb-10">Be the first to know about new drops, exclusive events, and seasonal sales.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 border-b-2 border-gray-200 py-3 px-2 focus:border-black transition-colors outline-none text-center sm:text-left"
              />
              <button className="bg-black text-white px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
}
