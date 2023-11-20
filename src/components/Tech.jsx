//import { BallCanvas } from "./canvas";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from "./hoc";
import { technologies } from "../constants";

const TechCard = ({ index, title, icon })=>{
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
            className="bg-tertiary rounded-[20px] py-5 px-5 flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
            
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </motion.div>
      </motion.div>
    </Tilt>
  )
}

TechCard.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string
}

const Tech = () => (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index)=>{
        return(
          <TechCard key={index}  index={index} {...technology}>
            {/* <div className='w-28 h-28' key={technology.name}>
            <img src={technology.icon} />
            {technology.name}
          </div> */}
          </TechCard>
        )
      })}
    </div>
  )

export default SectionWrapper(Tech, 'Tech');