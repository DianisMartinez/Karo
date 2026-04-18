import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import "./avatar.css";

function AvatarModel() {
  const { scene } = useGLTF("/avatar.glb");
  const ref = useRef();

  // Velocidad de carrera
  const speed = 0.02;

  useFrame(() => {
    if (ref.current) {
      // Mover avatar hacia adelante
      ref.current.position.x += speed;
    }
  });

  return <primitive ref={ref} object={scene} scale={4} position={[-6, -4, 0]} />;
}

function AvatarRun({ onFinish }) {
  const duration = 11000; // 11 segundos de “carrera”

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // desbloquea la página al terminar la animación
    }, duration);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="avatar-screen">
      <Canvas>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <AvatarModel />
      </Canvas>
    </div>
  );
}

export default AvatarRun;