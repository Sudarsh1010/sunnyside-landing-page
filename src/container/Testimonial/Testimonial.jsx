import React from 'react';
import { motion } from 'framer-motion';

import './Testimonial.scss';
import { images } from '../../constants/index';

const Testimonial = () => {
  let emily = images.emily;
  let thomas = images.thomas;
  let jennie = images.jennie;
  const data = [
    {
      name: 'Emily R.',
      comment: 'We put our trust in Sunnysude and they delivered, making sure our needs were met and deadlines were alwways hit.',
      position: 'Marketing Director',
      img: emily
    },
    {
      name: 'Thomas S.',
      comment: `Sunnyside's enthusiasm coupled with their keen interest in out brand's success made it a satisfying and enjoyable experience.`,
      position: 'Chief Operating Officer',
      img: thomas
    },
    {
      name: 'Jennie F.',
      comment: 'Incredible end result! our sales increased over 400% when we worked with Sunnyside, Highly recommended!',
      position: 'Business Owner',
      img: jennie
    }
  ]

  return (
    <div className='testimonial'>
      <motion.h2
        whileInView={{ y: [50, 0], opacity: [0.5, 1] }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >CLIENT TESTIMONIALS</motion.h2>

      <div className="testimonial-content">
        {data.map((item, index) => (
          <section key={index}>
            <motion.img
              whileInView={{ scale: [1.2, 0.9, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              src={item.img}
              alt="Profile"
            />

            <p className='comment'>{item.comment}</p>

            <motion.h4
              whileInView={{ opacity: [0.5, 1] }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >{item.name}</motion.h4>

            <p className="position">{item.position}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Testimonial