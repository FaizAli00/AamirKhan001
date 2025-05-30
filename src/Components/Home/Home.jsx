import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <section 
      id="home" 
      className="section min-h-screen flex items-center relative overflow-hidden bg-black"
    >
      {/* Background image with responsive sizing */}
      <div 
        className="absolute inset-0 bg-[url(/image/bg2.png)] bg-cover bg-center bg-no-repeat opacity-80"
      />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              <span className="block text-4xl md:text-5xl text-white">Hello, I'm</span>
              <span className="text-[#cde633] text-5xl md:text-6xl font-bold">
                Aamir Khan
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-medium">
              Senior <span className="text-[#cde633]">Graphic</span> Designer &
            </h2>
            <h2 className="text-3xl md:text-3xl mb-6 text-white font-medium">
              Brand <span className="text-[#cde633]">Identity</span> Designer
            </h2>
            <p className="text-lg mb-8 max-w-lg text-gray-300 leading-relaxed">
              Crafting visually stunning brand experiences with precision and dark aesthetic mastery.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
              <motion.a
                href="https://www.upwork.com/freelancers/aamirkhan54?mp_source=share" // Changed href to your Upwork profile
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Recommended for security when using target="_blank"
                className="flex items-center justify-center bg-[#cde633] border-2 border-emerald-400 hover:bg-emerald-700 hover:text-[#fff] text-emerald-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold transition-all group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Hire Me</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.a>
              
            </div>
          </motion.div>

          <motion.div
            className="relative w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile image container with shadow effect */}
            <div className="relative aspect-square w-full overflow-hidden ">
              {/* Main image */}
              <img 
                src="/image/ferget2.png" 
                alt="Aamir Khan" 
                className="w-full h-full object-cover"
              />
              {/* Bottom shadow gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 " />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating specks (like stars) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-emerald-400 rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;