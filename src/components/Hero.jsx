import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { computerBg } from '../assets';
import { useEffect, useState } from 'react';

const Hero = () => {
  /*const [isMobile, setIsMobile] = useState({
    matches: window.innerWidth > 500 ? true: false,
  });*/
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)
    //mediaQuery.addEventListener('change', setIsMobile);

    const handleMediaQueryChange = (event) => {
      console.log('isMobile change', isMobile);
      setIsMobile(event.matches);
    }

    //console.log('isMobile useEffect', isMobile, mediaQuery, window);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      console.log('isMobile remove', isMobile);
      //setIsMobile(mediaQuery);
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [isMobile]);
  
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915edd]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I&apos;m <span className='text [#915eff]'>Glenn</span></h1>
          <p className={`${styles.heroSubText} mt-2 white-text-100`}> I develop experiences, user <br className="sm:block hidden" /> interfaces and web applications</p>
        </div>
      </div>
      <img src={computerBg} alt='computer background' className=''  width={isMobile? '500px':1920*.9+'px'} height={isMobile? '500px':1080*.9+'px'} />
      
      {/*<ComputersCanvas />*/}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href='#About'>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero