import { motion } from 'framer-motion';
import { FaLinkedin, FaDribbble, FaBehance, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/aamir-khan-336b4321b/' , name: 'LinkedIn' },
    // { icon: <FaDribbble />, url: '#', name: 'Dribbble' },
    { icon: <FaBehance />, url: '', name: 'Behance' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/boy_fromthe_north?igsh=NWRpbXducGE1NGJ2', name: 'Instagram' }
  ];

  const contactInfo = [
    { icon: <FiMail />, text: 'sokhmir111@gmail', url:'sokhmir111@gmail' },
    { icon: <FiPhone />, text: '+923485370121', url:'tel:+923485370121' },
    // { icon: <FiMapPin />, text: '', url: '#' }
  ];

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.footer 
      className="py-16 relative bg-[#050505]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
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

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(0,0,0,0)_60%,rgba(0,0,0,0.8)_100%)" />

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-primary to-red-800 text-dark p-4 rounded-full shadow-lg hover:from-secondary hover:to-yellow-600 transition-all z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 0 20px rgba(255, 71, 71, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <FaArrowUp className="text-xl" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <motion.div 
            className="md:col-span-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.a 
              href="#home"
              className="text-3xl font-bold text-primary inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              Aamir Khan
            </motion.a>
            <p className="text-gray-300 mb-6">
              Creating memorable brand experiences through thoughtful design and strategic thinking.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target='blank'
                  className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center text-xl relative group transition-all"
                  whileHover={{ y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={social.name}
                >
                  <span className="text-gray-300 group-hover:text-white">{social.icon}</span>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-xs text-gray-100 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="md:col-span-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gray-200">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="md:col-span-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gray-200">Get In Touch</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <span className="text-primary mr-3 mt-1">{item.icon}</span>
                  <motion.a
                    href={item.url}
                    className="text-gray-300 hover:text-gray-100 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.text}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Aamir Khan. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Designed with ❤️ and too much coffee
          </p>
        </motion.div>
      </div>

      {/* Floating specks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gray-700 rounded-full"
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
    </motion.footer>
  );
};

export default Footer;