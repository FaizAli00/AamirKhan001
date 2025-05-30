import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Feedbacks', href: '#feedbacks' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-dark shadow-lg' : 'py-4 bg-transparent'}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo on the left */}
        <motion.a 
          href="#home"
          className="text-3xl font-bold text-[#cde633] flex-shrink-0"
          whileHover={{ scale: 1.05 }}
        >
          Aamir Khan
        </motion.a>
        
        {/* Centered Navigation Links */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-[#fff] font-semibold text-xl hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </nav>

        {/* Hire Me Button on the right */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            className="hidden md:block bg-[#40a50a] text-sky-300 px-6 py-2 rounded-full font-bold hover:bg-[#c4f360] hover:text-[#1b17a5] transition-all flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 15px rgba(249, 199, 79, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Lets Talk
          </motion.a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-light focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-dark py-4 px-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-light hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* Hire Me Button - Mobile */}
            <motion.a
              href="#contact"
              className="bg-primary text-dark px-6 py-2 rounded-full font-bold text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Hire Me
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Navbar