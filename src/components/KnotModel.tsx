import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Mesh, MeshStandardMaterial, TextureLoader } from 'three';

const KnotModel: React.FC = () => {
  const meshRef = useRef<Mesh>(null);
  const primitiveRef = useRef<Mesh>(null);
  const obj = useLoader(OBJLoader, '/Knot.obj');
  
  const texture = useLoader(TextureLoader, '/stone.jpg');

  useEffect(() => {
    if (obj) {
      obj.traverse((child) => {
        if (child instanceof Mesh) {
          child.material = new MeshStandardMaterial({
            map: texture,
          });
        }
      });
    }
    
    // Set initial rotation
    if (primitiveRef.current) {
      primitiveRef.current.rotation.x = Math.PI / 2;
      primitiveRef.current.rotation.y = Math.PI / 30;
    }
  }, [obj, texture]);

  useFrame((state, delta) => {
    if (primitiveRef.current) {
      //primitiveRef.current.rotation.x += delta * 0.5; // Rotate around X-axis
      //primitiveRef.current.rotation.y += delta * 0.2; // Rotate around Y-axis
      primitiveRef.current.rotation.z += delta * 0.5; // Rotate around Z-axis
    }
  });

  return (
    <primitive
      object={obj}
      ref={primitiveRef}
      scale={[0.15, 0.15, 0.15]}
      position={[0, 0, 0]}
    />
  );
};

export default KnotModel;