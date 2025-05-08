import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <section 
      id="home" 
      className="section min-h-screen flex items-center relative overflow-hidden bg-[#050505]"
    >
      {/* Carbon fiber texture overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #111 25%, transparent 25%),
            linear-gradient(-45deg, #111 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #111 75%),
            linear-gradient(-45deg, transparent 75%, #111 75%)
          `,
          backgroundSize: '4px 4px',
          backgroundPosition: '0 0, 0 2px, 2px -2px, -2px 0px'
        }}
      />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.8)_100%) pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              <span className="block text-4xl md:text-5xl text-[#fff]">Hello, I'm</span>
              <span className="text-[#cde633] text-5xl md:text-6xl font-bold bg-clip-text">
                Aamir Khan
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl mb-6 text-[#fff] font-medium">
              Senior <span className="text-[#cde633]">Graphic</span> Designer
            </h2>
            <p className="text-lg mb-8 max-w-lg text-gray-100 leading-relaxed">
              Crafting visually stunning brand experiences with precision and dark aesthetic mastery.
            </p>
           <div className='flex gap-[30px]'>
           <motion.a
              href="#portfolio"
              className="inline-flex items-center bg-[#40a50a] text-sky-300 px-8 py-4 rounded-full font-bold transition-all group relative overflow-hidden"
              
            >
              <span className="relative z-10">View My Work</span>
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.a>
            <motion.a
              href="#portfolio"
              className="inline-flex items-center bg-[#40a50a] text-sky-300 px-8 py-4 rounded-full font-bold transition-all group relative overflow-hidden"
              
            >
              <span className="relative z-10">Download Resume</span>
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.a>
           </div>
          </motion.div>

          <div>
          
          <motion.div
          
          className="rounded-full overflow-hidden"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src="/image/pic.png" 
            alt="Aamir Khan" 
            className="w-full h-auto max-w-[400px] object-cover rounded-full border-4 border-[#cde633]/30 group-hover:border-[#cde633]/50 transition-all duration-500 shadow-2xl shadow-[#cde633]/20"
          />
        </motion.div>
          </div>
          
          
        </div>
      </div>

      {/* Floating specks (like stars) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gray-600 rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `twinkle ${Math.random() * 5 + 5}s infinite alternate`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;