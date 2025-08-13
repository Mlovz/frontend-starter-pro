import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HalalTourLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCalculatorTab, setActiveCalculatorTab] = useState('package');
  const [calculatorData, setCalculatorData] = useState({
    destination: '',
    travelers: 1,
    duration: 7,
    accommodation: 'standard',
    meals: 'halal-included',
    transport: 'flight',
    season: 'regular'
  });

  // Destinations with pricing
  const destinations: Record<string, {name: string, basePrice: number, image: string}> = {
    'makkah-madinah': { name: 'Мекка и Медина', basePrice: 2500, image: '🕋' },
    'istanbul': { name: 'Стамбул', basePrice: 1200, image: '🕌' },
    'dubai': { name: 'Дубай', basePrice: 1800, image: '🏙️' },
    'malaysia': { name: 'Малайзия', basePrice: 1000, image: '🌴' },
    'indonesia': { name: 'Индонезия', basePrice: 900, image: '🏝️' },
    'morocco': { name: 'Марокко', basePrice: 1300, image: '🏛️' }
  };

  // Price calculation logic
  const calculatePrice = () => {
    if (!calculatorData.destination) return 0;
    
    const destination = destinations[calculatorData.destination] as any;
    let basePrice = destination.basePrice;
    
    // Accommodation multiplier
    const accommodationMultipliers: Record<string, number> = {
      'budget': 0.7,
      'standard': 1,
      'luxury': 1.8,
      'premium': 2.5
    };
    
    // Season multiplier
    const seasonMultipliers: Record<string, number> = {
      'off-season': 0.8,
      'regular': 1,
      'peak': 1.4,
      'hajj-umrah': 2.2
    };
    
    // Meals multiplier
    const mealsMultipliers: Record<string, number> = {
      'self-catering': 0.85,
      'halal-included': 1,
      'premium-dining': 1.3
    };
    
    // Transport multiplier
    const transportMultipliers: Record<string, number> = {
      'flight': 1,
      'business-flight': 1.6,
      'first-class': 2.8
    };
    
    const finalPrice = basePrice * 
      accommodationMultipliers[calculatorData.accommodation] * 
      seasonMultipliers[calculatorData.season] * 
      mealsMultipliers[calculatorData.meals] * 
      transportMultipliers[calculatorData.transport] *
      calculatorData.travelers *
      (calculatorData.duration / 7);
    
    return Math.round(finalPrice);
  };

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed w-full top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            🌙 Халяль Тур
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {['Направления', 'Пакеты', 'Калькулятор', 'О нас', 'Контакты'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${['destinations', 'packages', 'calculator', 'about', 'contact'][index]}`}
                className="hover:text-emerald-400 transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <motion.button 
            className="bg-gradient-to-r from-emerald-500 to-blue-600 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(16, 185, 129, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Забронировать
          </motion.button>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 opacity-90"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Священные
              </span>
              <br />
              <span className="text-white">Путешествия</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Откройте для себя самые красивые халяльные направления мира с комфортом, подлинностью и духовным обогащением
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-gradient-to-r from-emerald-500 to-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16, 185, 129, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                Изучить направления
              </motion.button>
              <motion.button 
                className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Рассчитать поездку
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </section>

      {/* Advanced Calculator Section */}
      <section id="calculator" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Калькулятор путешествий
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Планируйте свое идеальное халяльное путешествие с помощью нашего умного калькулятора цен
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-3xl p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* Calculator Tabs */}
              <div className="flex mb-8 bg-gray-700/50 rounded-2xl p-2">
                {[
                  { key: 'package', label: '🎒 Пакетный тур' },
                  { key: 'custom', label: '✨ Индивидуальная поездка' },
                  { key: 'group', label: '👥 Групповое бронирование' }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveCalculatorTab(tab.key)}
                    className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      activeCalculatorTab === tab.key
                        ? 'bg-gradient-to-r from-emerald-500 to-blue-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator Form */}
                <div className="space-y-6">
                  {/* Destination Selection */}
                  <div>
                    <label className="block text-lg font-semibold mb-3 text-emerald-400">
                      🌍 Направление
                    </label>
                    <select
                      value={calculatorData.destination}
                      onChange={(e) => setCalculatorData({...calculatorData, destination: e.target.value})}
                      className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-emerald-400 focus:outline-none transition-colors"
                    >
                      <option value="">Выберите направление</option>
                      {Object.entries(destinations).map(([key, dest]) => (
                        <option key={key} value={key}>
                          {dest.image} {dest.name} - От ${dest.basePrice}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Travelers */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lg font-semibold mb-3 text-emerald-400">
                        👥 Путешественники
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={calculatorData.travelers}
                        onChange={(e) => setCalculatorData({...calculatorData, travelers: parseInt(e.target.value)})}
                        className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-semibold mb-3 text-emerald-400">
                        📅 Продолжительность (дни)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        value={calculatorData.duration}
                        onChange={(e) => setCalculatorData({...calculatorData, duration: parseInt(e.target.value)})}
                        className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Accommodation */}
                  <div>
                    <label className="block text-lg font-semibold mb-3 text-emerald-400">
                      🏨 Размещение
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { key: 'budget', label: '💰 Бюджет', desc: 'Отели 3★' },
                        { key: 'standard', label: '🏨 Стандарт', desc: 'Отели 4★' },
                        { key: 'luxury', label: '✨ Люкс', desc: 'Отели 5★' },
                        { key: 'premium', label: '👑 Премиум', desc: 'Люксы 5★' }
                      ].map((option) => (
                        <button
                          key={option.key}
                          onClick={() => setCalculatorData({...calculatorData, accommodation: option.key})}
                          className={`p-4 rounded-xl border transition-all duration-300 ${
                            calculatorData.accommodation === option.key
                              ? 'border-emerald-400 bg-emerald-400/10 text-emerald-400'
                              : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500'
                          }`}
                        >
                          <div className="font-semibold">{option.label}</div>
                          <div className="text-sm opacity-80">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Options */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lg font-semibold mb-3 text-emerald-400">
                        🍽️ Питание
                      </label>
                      <select
                        value={calculatorData.meals}
                        onChange={(e) => setCalculatorData({...calculatorData, meals: e.target.value})}
                        className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
                      >
                        <option value="self-catering">Самостоятельное питание</option>
                        <option value="halal-included">Халяльное питание включено</option>
                        <option value="premium-dining">Премиум халяльная кухня</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-lg font-semibold mb-3 text-emerald-400">
                        ✈️ Транспорт
                      </label>
                      <select
                        value={calculatorData.transport}
                        onChange={(e) => setCalculatorData({...calculatorData, transport: e.target.value})}
                        className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
                      >
                        <option value="flight">Эконом класс</option>
                        <option value="business-flight">Бизнес класс</option>
                        <option value="first-class">Первый класс</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold mb-3 text-emerald-400">
                      📈 Сезон
                    </label>
                    <select
                      value={calculatorData.season}
                      onChange={(e) => setCalculatorData({...calculatorData, season: e.target.value})}
                      className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
                    >
                      <option value="off-season">Низкий сезон (-20%)</option>
                      <option value="regular">Обычный сезон</option>
                      <option value="peak">Высокий сезон (+40%)</option>
                      <option value="hajj-umrah">Сезон Хаджа/Умры (+120%)</option>
                    </select>
                  </div>
                </div>

                {/* Price Display */}
                <div className="lg:sticky lg:top-8">
                  <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 rounded-2xl p-8 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-6 text-center">Сводка поездки</h3>
                    
                    {calculatorData.destination && (
                      <div className="space-y-4 mb-8">
                        <div className="flex justify-between items-center">
                          <span>Направление:</span>
                          <span className="font-semibold text-emerald-400">
                            {destinations[calculatorData.destination]?.name}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Путешественники:</span>
                          <span className="font-semibold">{calculatorData.travelers} человек{calculatorData.travelers > 1 && calculatorData.travelers < 5 ? 'а' : ''}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Продолжительность:</span>
                          <span className="font-semibold">{calculatorData.duration} дней</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Размещение:</span>
                          <span className="font-semibold capitalize">
                            {calculatorData.accommodation === 'budget' && 'Бюджет'}
                            {calculatorData.accommodation === 'standard' && 'Стандарт'}
                            {calculatorData.accommodation === 'luxury' && 'Люкс'}
                            {calculatorData.accommodation === 'premium' && 'Премиум'}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="border-t border-gray-600 pt-6">
                      <div className="text-center">
                        <div className="text-lg text-gray-300 mb-2">Общая стоимость</div>
                        <motion.div 
                          className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"
                          key={calculatePrice()}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          ${calculatePrice().toLocaleString()}
                        </motion.div>
                        {calculatorData.travelers > 1 && (
                          <div className="text-sm text-gray-400 mt-2">
                            ${Math.round(calculatePrice() / calculatorData.travelers).toLocaleString()} с человека
                          </div>
                        )}
                      </div>
                    </div>

                    <motion.button 
                      className="w-full mt-8 bg-gradient-to-r from-emerald-500 to-blue-600 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(16, 185, 129, 0.6)" }}
                      whileTap={{ scale: 0.98 }}
                      disabled={!calculatorData.destination}
                    >
                      {calculatorData.destination ? '📧 Получить подробное предложение' : 'Сначала выберите направление'}
                    </motion.button>

                    <div className="mt-4 text-center text-sm text-gray-400">
                      💰 Гарантия лучшей цены | 🔒 Безопасное бронирование | ⭐ Рейтинг 4.9/5
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Священные направления
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Исследуйте захватывающие дух халяль-дружественные направления по всему миру
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(destinations).map(([key, dest], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl overflow-hidden hover:border-emerald-400/50 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center text-6xl">
                  {dest.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Познайте подлинную красоту и культуру
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-emerald-400">
                      От ${dest.basePrice}
                    </span>
                    <motion.button 
                      className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Исследовать
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Почему выбрать Халяль Тур
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🕌', title: 'Халяль сертификат', desc: '100% халяльная еда и размещение' },
              { icon: '📿', title: 'Время намаза', desc: 'Молитвенные места и руководство' },
              { icon: '🌟', title: 'Экспертные гиды', desc: 'Знающие местные исламские гиды' },
              { icon: '🔒', title: 'Безопасное бронирование', desc: 'Надежные и защищенные резервации' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-emerald-400">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Готовы к вашему священному путешествию?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Присоединяйтесь к тысячам путешественников, которые открыли для себя красоту халяльного туризма
            </p>
            <motion.button 
              className="bg-white text-gray-900 px-12 py-4 rounded-full font-bold text-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Начать планирование
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-4">
                🌙 Халяль Тур
              </div>
              <p className="text-gray-400">
                Создаем незабываемые халяльные туристические впечатления по всему миру
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-emerald-400">Направления</h4>
              <div className="space-y-2 text-gray-400">
                <div>Мекка и Медина</div>
                <div>Стамбул</div>
                <div>Дубай</div>
                <div>Малайзия</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-emerald-400">Услуги</h4>
              <div className="space-y-2 text-gray-400">
                <div>Пакетные туры</div>
                <div>Индивидуальные поездки</div>
                <div>Групповые бронирования</div>
                <div>Туристическая страховка</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-emerald-400">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>📧 hello@halaltour.com</div>
                <div>📞 +1 (555) 123-4567</div>
                <div>📍 Москва, Россия</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Халяль Тур. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gray-900/95 backdrop-blur-md border-l border-gray-700 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  🌙 Халяль Тур
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-6">
                  {['Направления', 'Пакеты', 'Калькулятор', 'О нас', 'Контакты'].map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${['destinations', 'packages', 'calculator', 'about', 'contact'][index]}`}
                      className="block text-lg font-medium text-gray-300 hover:text-emerald-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 10 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
                
                <motion.button 
                  className="w-full mt-8 bg-gradient-to-r from-emerald-500 to-blue-600 py-3 rounded-full font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Забронировать
                </motion.button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl z-40"
        whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(16, 185, 129, 0.6)" }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        💬
      </motion.button>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Что говорят наши путешественники
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Узнайте, почему тысячи выбирают Халяль Тур для своих священных путешествий
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Айша Рахман",
                location: "Лондон, Великобритания",
                rating: 5,
                text: "Абсолютно потрясающий опыт! Каждая деталь была идеально спланирована, а халяльные услуги были безупречными. Духовное путешествие в Мекку изменило жизнь.",
                trip: "Пакет Мекка и Медина"
              },
              {
                name: "Мохаммед Аль-Рашид",
                location: "Дубай, ОАЭ",
                rating: 5,
                text: "Профессиональное обслуживание от начала до конца. Местные гиды прекрасно знали исламскую историю, а размещение превзошло ожидания.",
                trip: "Обзорный тур по Стамбулу"
              },
              {
                name: "Фатима Кассим",
                location: "Торонто, Канада",
                rating: 5,
                text: "Халяль Тур сделал наш семейный отдых беззаботным и запоминающимся. Напоминания о времени намаза и халяльная еда идеально подошли для наших нужд.",
                trip: "Семейный пакет в Малайзию"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-700/50 backdrop-blur-md border border-gray-600 rounded-2xl p-8 hover:border-emerald-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="text-sm text-emerald-400 font-semibold">
                  {testimonial.trip}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50,000+", label: "Довольных путешественников", icon: "😊" },
              { number: "25+", label: "Направлений", icon: "🌍" },
              { number: "99%", label: "Уровень удовлетворенности", icon: "⭐" },
              { number: "15+", label: "Лет опыта", icon: "🏆" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 border-y border-emerald-400/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl font-bold mb-4 text-white">
              🌙 Оставайтесь в курсе с Халяль Тур
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Получайте эксклюзивные предложения, советы путешественникам и идеи для духовных путешествий прямо на вашу почту
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Введите ваш email адрес"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none"
              />
              <motion.button 
                className="bg-gradient-to-r from-emerald-500 to-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Подписаться
              </motion.button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              ✨ Никакого спама, отписаться можно в любое время. Присоединяйтесь к 10,000+ подписчиков!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HalalTourLanding;