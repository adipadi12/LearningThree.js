import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
 //direct equivalent of new THREE.Mesh is mesh
const RotatingSphere = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref = {meshRef}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshLambertMaterial color="#468585"  emissive={'blue'}/>

      <Sparkles count = {100} scale={2.5} size={6} speed={0.5} color={'orange'} noise={0.5}/>
    </mesh>
  );
};

const RotatingDonut = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref = {meshRef}>
      <torusGeometry args={[4, 0.5, 16, 100]} />
      <meshLambertMaterial color="red" emissive='green' />

      <Sparkles count = {100} scale={7.5} size={6} speed={0.5} color={'pink'} noise={0.05}/>
    </mesh>
  );
};

// Heart Component
const Heart = () => {
  const heartRef = useRef();
  useFrame(() => {
    if (heartRef.current) {
      heartRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={heartRef} position={[0, -6, 0]}>
      <shapeGeometry
        args={[
          (() => {
            const x = 0,
              y = 0;
            const heartShape = new THREE.Shape();
            heartShape.moveTo(x + 5, y + 5);
            heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
            heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
            heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
            heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
            heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
            heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
            return heartShape;
          })(),
        ]}
      />
      <meshLambertMaterial color="pink" emissive="pink" />
      <Sparkles count={50} scale={2.5} size={6} speed={0.5} color="pink" noise={0.5} />
    </mesh>
  );
};
/**
 * App component renders a full-screen canvas using react-three-fiber and drei.
 * It includes orbit controls for camera interaction, a directional light for illumination,
 * and a rotating cube with sparkles effect as the main object.
 */

const App = () => {
  return (
    <Canvas 
    style ={{
      width: '100vw',
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
      }}
      >
        <OrbitControls enableZoom={true} enablePan enableRotate/>

        <directionalLight position={[1, 1, 1]} intensity={10} color = {'0x9CDBA6'} />

        <color attach={'background'} args={['black']} />

        <RotatingSphere />
        <RotatingDonut />
    </Canvas>
  )
}
export default App