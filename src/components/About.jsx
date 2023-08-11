import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "./hoc";
import { VFXImg, VFXSpan } from "react-vfx";

const ServiceCard = ({ index, title, icon })=>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <motion.div 
            options={{
              max:  45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <VFXImg src={icon} alt={title} className="w-16 h-16 object-contain" shader="rgbShift"/>
            
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </motion.div>
      </motion.div>
    </Tilt>
  )
}

ServiceCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p variants={fadeIn(',',0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <VFXSpan>
          Hi there! I am Glenn! I&apos;ve been coding for over 10 years now. As a Full Stack developer I&apos;ve worked as a freelancer to help build & scale small-medium companies. Along the journey I realized my passion existed in helping others gain and enhance their presence on the web. With this passion, I have now helped several businesses across the globe. Through continuous learning, I have accumulated several projects demonstrating how to apply developer skills in a range of scenarios. I deliver value by creating projects to help clients deliver their service.
        </VFXSpan>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map(( service, index )=>{
          return (
            <ServiceCard key={service.title} index={index} {...service} />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'About')