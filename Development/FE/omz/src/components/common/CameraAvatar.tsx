import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
type Props = {
  Avatar: any;
};
export default function CameraAvatar({ Avatar }: Props) {
  const lookat = new THREE.Vector3(0, 1, 0);
  return (
    <Canvas
      camera={{ position: [-10, 5, 10], zoom: 3 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.8} />
      <group position={[0, -3, 0]}>{Avatar}</group>
      <OrbitControls />
    </Canvas>
  );
}
