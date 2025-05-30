import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaDribbble, FaBehance, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="section bg-dark text-light">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss potential collaboration?
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-primary text-dark px-8 py-3 rounded-full font-bold hover:bg-secondary transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-20 p-3 rounded-full mr-4">
                  <FiMail className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Me</h3>
                  <a
                    href="mailto:sokhmir111@gmail"
                    className="hover:text-primary transition-colors"
                  >
                    sokhmir111@gmail
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary bg-opacity-20 p-3 rounded-full mr-4">
                  <FiMapPin className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p>Gilgit Baltistan</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary bg-opacity-20 p-3 rounded-full mr-4">
                  <FiPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Me</h3>
                  <a
                    href="tel:+923485370121"
                    className="hover:text-primary transition-colors"
                  >
                    +923485370121
                  </a>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-200">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {/* <motion.a
                    href=""
                    className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all"
                    whileHover={{ y: -5 }}
                    transition={{ delay: 0.1 }}
                    aria-label="Dribbble"
                  >
                    <FaDribbble className="text-xl" />
                  </motion.a> */}

                  <motion.a
                    href=""
                    className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all"
                    whileHover={{ y: -5 }}
                    transition={{ delay: 0.2 }}
                    aria-label="Behance"
                  >
                    <FaBehance className="text-xl" />
                  </motion.a>

                  <motion.a
                    href="https://www.linkedin.com/in/aamir-khan-336b4321b/"
                    target="blank"
                    className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all"
                    whileHover={{ y: -5 }}
                    transition={{ delay: 0.3 }}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/boy_fromthe_north?igsh=NWRpbXducGE1NGJ2"
                    target="blank"
                    className="bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all"
                    whileHover={{ y: -5 }}
                    transition={{ delay: 0.4 }}
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
