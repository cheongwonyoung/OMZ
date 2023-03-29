import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
type Props = {
  Avatar: any;
};
export default function CameraAvatar({ Avatar }: Props) {
  return (
    <Canvas
      camera={{ position: [-10, 5, 10], zoom: 5.7 }}
      className="w-full h-full"
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.8} />
      <group position={[0, -2.5, 0]}>{Avatar}</group>
      <OrbitControls />
    </Canvas>
  );
}
