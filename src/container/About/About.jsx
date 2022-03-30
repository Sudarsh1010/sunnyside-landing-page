import React from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { images } from '../../constants/index';

const About = () => {
  return (
    <div className='about'>
      <div className="mobile-about">
        <div className='transform'>
          <motion.img
            whileInView={{ scale: [1, 0.95, 1] }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            src={images.mobileTransfrom}
            alt="Transform"
          />
          <section>
            <motion.h2
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Transform your brand
            </motion.h2>
            <p
            // whileInview={{ opacity: [0, 1] }}
            // transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>

            <a href="/">LEARN MORE</a>
            <div />
          </section>
        </div>

        <div className='standOut'>
          <motion.img
            whileInView={{
              scale: [1, 0.95, 1],
              opacity: [0, 0.2, 1]
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            src={images.mobileStandOut}
            alt="Stand Out"
          />
          <section>
            <motion.h2
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Stand out to the right audience
            </motion.h2>
            <p
            // whileInview={{ opacity: [0, 1] }}
            // transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend you brand in digital places.
            </p>

            <a href="/">LEARN MORE</a>
            <div />
          </section>
        </div>

        <section className='graphic-design'>
          <motion.h2
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Graphic Design
          </motion.h2>
          <p
          // whileInview={{ opacity: [0, 1] }}
          // transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
          </p>
        </section>

        <section className='photography'>
          <motion.h2
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Photography
          </motion.h2>
          <p
          // whileInview={{ opacity: [0, 1] }}
          // transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Increase your credibility by getting the most stunning, high-quality photos that improves your business image.
          </p>
        </section>
      </div>

      <div className="desk-about">
        <div className='desk-transform'>
          <section className='desk-transform-content'>
            <motion.h1
              whileInView={{ y: [-100, 0], opacity: [0, 0.1, 1] }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              Transform your brand
            </motion.h1>
            <p>
              We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
            </p>
            <a href="/" target='_blank'>LEARN MORE</a>
          </section>

          <motion.img
            whileInView={{
              x: [100, 0],
              scale: [1, 0.95, 1],
              opacity: [0, 1]
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            src={images.deskTransfrom}
            alt='transform'
          />
        </div>

        <div className='desk-standOut'>
          <section className='desk-standOut-content'>
            <motion.h1
              whileInView={{ y: [-100, 0], opacity: [0, 0.1, 1] }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              Stand out to the right audience
            </motion.h1>
            <p>
              Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend you brand in digital places.
            </p>
            <a href="/" target='_blank'>LEARN MORE</a>
          </section>

          <motion.img
            whileInView={{
              x: [-100, 0],
              scale: [1, 0.95, 1],
              opacity: [0, 1]
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            src={images.deskStandOut}
            alt='transform'
          />
        </div>

        <div className="container">
          <section className='graphic-design'>
            <motion.h2
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Graphic Design
            </motion.h2>
            <p
            // whileInview={{ opacity: [0, 1] }}
            // transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.
            </p>
          </section>

          <section className='photography'>
            <motion.h2
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Photography
            </motion.h2>
            <p
            // whileInview={{ opacity: [0, 1] }}
            // transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Increase your credibility by getting the most stunning, high-quality photos that improves your business image.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About