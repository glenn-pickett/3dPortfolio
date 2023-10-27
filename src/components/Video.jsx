import { motion } from "framer-motion";
import { SectionWrapper } from "./hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { sampleVideos } from "../constants";
import Tilt from 'react-parallax-tilt';
import PropType from 'prop-types'

const VideoCard = ({ index, name, description, url }) => {

  //console.log('source_code',source_code_link);
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <div>
            <video width="100%" height="100%" controls>
              <source src={url} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        </div>
      </Tilt>
    </motion.div>
  )
}

VideoCard.propTypes = {
  index: PropType.number,
  name: PropType.string,
  description: PropType.string,
  url: PropType.string
}

const Video = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Work Samples
        </p>
        <h2 className={styles.sectionHeadText}>
          Videos
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {sampleVideos.map((sample, index) => {
          return (
            <VideoCard
              key={`video-${index}`}
              index={index}
              {...sample}
            />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Video, "Video");