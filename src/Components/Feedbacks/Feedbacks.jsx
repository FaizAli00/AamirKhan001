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
  name: 'Alvan',
  role: 'Creative Director, BrandWorks',
  content: `Aamir did a great job with my graphic design. Works quickly, and is talented.
Would hire again`, 
  avatar: '/avatars/alex-rivera.jpg'
},
    {
      id: 2,
      name: 'Pheonix',
      role: 'Marketing Head, TechNova',
      content: 'Aamir is Really good at his job. He is very professional and always delivers on time.',
      avatar: '/avatars/sarah-chen.jpg'
    },
    {
      id: 3,
      name: 'Jenna',
      role: 'CEO, StartupX',
      content: 'Aamir was really kind and great at communicating. He made sure I was happy with the final product.',
      avatar: '/avatars/james-wilson.jpg'
    },
    {
      id: 4,
      name: 'Frank',
      role: 'Art Director, CreativeCo',
      content: 'Aamir did an outstanding job designing Facebook ad graphics for us! His attention to detail, creativity, and ability to deliver engaging visuals exceeded our expectations.',
      avatar: '/avatars/emma-thompson.jpg'
    },
    {
      id: 5,
      name: 'Rothwell',
      role: 'Art Director, CreativeCo',
      content: 'Working with Aamir khan was an absolute pleasure! Their creativity, attention to detail, and professionalism exceeded my expectations. They perfectly understood my vision and brought it to life with a stunning design.',
      avatar: '/avatars/emma-thompson.jpg'
    },
    {
      id: 6,
      name: 'Jane',
      role: 'Art Director, CreativeCo',
      content: 'He is very professional and always delivers on time. He is very good at his job.',
      avatar: '/avatars/emma-thompson.jpg'
    },
    {
      id: 7,
      name: 'jeana ',
      role: 'Art Director, CreativeCo',
      content: 'Did a fantastic job on our project. He is very talented and professional. I would highly recommend him.',
      avatar: '/avatars/emma-thompson.jpg'
    },
    {
      id: 8,
      name: 'Allen',
      role: 'Art Director, CreativeCo',
      content: 'It was an absolute pleasure working on this project! The communication was clear, feedback was timely, and the professionalism throughout made the entire experience seamless. I would be delighted to work together again.',
      avatar: '/avatars/emma-thompson.jpg'
    },
    {
      id: 9,
      name: 'Jackson',
      role: 'Art Director, CreativeCo',
      content: 'Working with Amir Khan on this children’s book illustration was fantastic! Amir, an expert in illustration, valued the clear direction and collaborative process. Highly recommended client—looking forward to future opportunities together!.',
      avatar: '/avatars/emma-thompson.jpg'
    },
    {
      id: 10,
      name: ' Hannah',
      role: 'Art Director, CreativeCo',
      content: 'Aamir did an outstanding job on my presentation! His attention to detail and professionalism were truly impressive, and the final visual appeal was top-notch. Working with him was a breeze thanks to his excellent cooperation, prompt delivery, and exceptional language fluency. Highly recommend!.',
      avatar: '/avatars/emma-thompson.jpg'
    },
    {
      id: 11,
      name: 'Betsy',
      role: 'Art Director, CreativeCo',
      content: 'He is very professional and always delivers on time, he is very good at his job.',
      avatar: '/avatars/emma-thompson.jpg'
    },
    {
      id: 12,
      name: 'Bryan',
      role: 'Art Director, CreativeCo',
      content: 'Super quick turnaround and exactly what we wanted. Would use again!',
      avatar: '/avatars/emma-thompson.jpg'
    },
    {
      id: 13,
      name: 'Charbel',
      role: 'Art Director, CreativeCo',
      content: 'Aamir did a great job understanding our needs and what we needed help with. He created a design that helped our brand. Thank you.',
      avatar: '/avatars/emma-thompson.jpg'
    },
    {
      id: 14,
      name: 'Eric Sean',
      role: 'Art Director, CreativeCo',
      content: 'Very good designer. Will use again. Highly recommend and would work with him again.',
      avatar: '/avatars/emma-thompson.jpg'
    },
    {
      id: 15,
      name: 'Chris Ware',
      role: 'Art Director, CreativeCo',
      content: 'Aamir was very communicative and was able to understand what I was asking for and delivered perfectly.',
      avatar: '/avatars/emma-thompson.jpg'
    },
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