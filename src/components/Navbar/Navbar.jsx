import React from 'react';
import { motion } from 'framer-motion';

import './Navbar.scss';
import { images } from '../../constants/index';

const Navbar = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className='navbar'
    >
      <img
        src={images.logo}
        alt="logo"
      />

      <div className="links" >
        {['About', 'Services', 'Projects'].map((link, index) => (
          <a
            href={link}
            key={index}
            className='link'
          >
            {link}
          </a>
        ))}
        <a
          href='/Contact'
          className='contact'
        >
          CONTACT
        </a>
      </div>
    </motion.div>
  )
}

export default Navbar
