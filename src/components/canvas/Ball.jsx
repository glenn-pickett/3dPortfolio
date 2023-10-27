import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei';
import PropTypes from 'prop-types';

import Loader from '../Loader';

const Ball = ({imgUrl}) => {
  console.log('imgUrl', imgUrl)
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight 
        intensity={0.25}
      />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[ 2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}

Ball.propTypes = {
  imgUrl: PropTypes.string
}

const BallCanvas = ({ icon }) => {
  return(
    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true}}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

BallCanvas.propTypes = {
  icon: PropTypes.string
}

export default BallCanvas;