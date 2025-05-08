import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Feedbacks = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alex Rivera',
      role: 'Creative Director, BrandWorks',
      content: 'Working with this designer transformed our entire product line. Their attention to detail and creative vision elevated our brand beyond expectations.',
      avatar: '/avatars/alex-rivera.jpg'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Marketing Head, TechNova',
      content: 'Exceptional design work that perfectly captured our brand essence. The deliverables were not just beautiful but strategically effective.',
      avatar: '/avatars/sarah-chen.jpg'
    },
    {
      id: 3,
      name: 'James Wilson',
      role: 'CEO, StartupX',
      content: 'The designs exceeded our expectations and helped us secure Series A funding. Our investors were particularly impressed with the UI/UX work.',
      avatar: '/avatars/james-wilson.jpg'
    },
    {
      id: 4,
      name: 'Emma Thompson',
      role: 'Art Director, CreativeCo',
      content: 'Absolutely stunning work! The designer understood our vision immediately and delivered beyond what we imagined possible.',
      avatar: '/avatars/emma-thompson.jpg'
    }
  ];

  return (
    <section id="feedbacks" className="py-16 md:py-24 bg-white dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-gray-500 mb-4">
            Client Feedbacks
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-lg font-medium text-gray-600 dark:text-gray-500">
            Hear what industry leaders say about collaborating with me
          </p>
        </motion.div>

        {/* Swiper Container */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
          modules={[Pagination, Autoplay]}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="bg-white dark:bg-dark-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full mx-2"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <FaQuoteLeft className="text-primary text-3xl opacity-20 absolute top-6 right-6" />
                <p className="text-lg italic text-gray-700 dark:text-gray-500 mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 flex-shrink-0 mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="rounded-full object-cover border-2 border-primary w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark dark:text-gray-500">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Feedbacks;