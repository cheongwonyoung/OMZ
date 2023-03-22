import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

type Props = {
  Avatar?: any;
  MiniRoom: any;
};
export default function CameraMiniroom({ Avatar, MiniRoom }: Props) {
  const pp = { position: [-15, 15, 15], fov: 60 };

  return (
    <Canvas
      camera={{ position: [-15, 15, 15], fov: 60 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.6} />
      {/* <ambientLight intensity={0.5} /> */}
      <directionalLight intensity={0.8} />
      {Avatar}
      {MiniRoom}
      <OrbitControls />
    </Canvas>
  );
}
