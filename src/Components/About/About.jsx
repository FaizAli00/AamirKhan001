import { motion } from 'framer-motion'
import { FiAward, FiBriefcase, FiUsers } from 'react-icons/fi'

const About = () => {
  const skills = [
    { name: 'Brand Identity', level: 100 },
    { name: 'UI/UX Design', level: 95 },
    { name: 'Print Design', level: 90 },
    { name: 'Illustration', level: 90 },
    { name: 'Motion Graphics', level: 80 },
  ]

  return (
    <section id="about" className="section bg-light">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Hi! I'm Aamir Khan, a TOP-RATED Branding & Graphic Design Specialist with 8+ years of experience creating high-converting visual identities for startups, agencies, and Fortune 150+ clients worldwide
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6">Get to know me</h3>
            <p className="mb-6">
              I'm a Brand Specialist and Graphic Designer passionate about creating impactful brands. I craft clear strategies and translate them into compelling visuals and seamless experiences, helping businesses tell authentic stories that truly connect.
            </p>
            <p className="mb-8">
              When I'm not designing, you can find me teaching design workshops, exploring 
              new coffee shops, or hiking with my camera to capture nature's beauty.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-dark text-light p-4 rounded-lg text-center">
                <FiAward className="text-primary text-3xl mx-auto mb-2" />
                <span className="text-2xl font-bold block">50+</span>
                <span>Awards</span>
              </div>
              <div className="bg-dark text-light p-4 rounded-lg text-center">
                <FiBriefcase className="text-primary text-3xl mx-auto mb-2" />
                <span className="text-2xl font-bold block">200+</span>
                <span>Projects</span>
              </div>
              <div className="bg-dark text-light p-4 rounded-lg text-center">
                <FiUsers className="text-primary text-3xl mx-auto mb-2" />
                <span className="text-2xl font-bold block">100+</span>
                <span>Clients</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl mb-6">My Skills</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div 
                    className="bg-primary h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 * index }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About;