import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '../../components/Navbar/Navbar';
import { images } from '../../constants/index';
import './Header.scss';


const Header = () => {
  return (
    <div className='header'>
      <Navbar />

      <main className="main-content">
        <motion.h1
          whileInView={{ y: [-100, 0], opacity: [0, 1], scale: [0.9, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          WE ARE CREATIVES
        </motion.h1>
        <motion.img
          whileInView={{ opacity: [0, 0.2, 1], scale: [1.5, 1] }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          src={images.arrowDown}
          alt=""
        />
      </main>
    </div>
  )
}

export default Header;