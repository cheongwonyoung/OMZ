import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
type Props = {
  Avatar: any;
};
export default function CameraAvatar({ Avatar }: Props) {
  const lookat = new Vector3(0, 0, 5);
  return (
    <Canvas
      camera={{ position: [-5, 10, 5], zoom: 2, fov: 20 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.8} />
      {Avatar}
      <OrbitControls />
    </Canvas>
  );
}
