import { OrbitControls } from "@react-three/drei";
import YoutubeBgm from "../../components/miniRoom/YoutubeBgm";
import { Canvas } from "@react-three/fiber";

type Props = {
  Avatar?: any;
  MiniRoom: any;
};
export default function CameraMiniroom({ Avatar, MiniRoom }: Props) {
  const pp = { position: [-15, 15, 15], fov: 60 };

  return (
    <Canvas
      camera={{ position: [-15, 15, 15], fov: 60, zoom: 5 }}
      className="w-full h-full"
    >
      {/* <YoutubeBgm title={"hype boy"} /> */}

      <ambientLight intensity={0.1} />
      {/* <ambientLight intensity={0.1} /> */}
      {/* <directionalLight intensity={0.8} /> */}
      <group scale={0.5} position={[18, -24.2, -18]}>
        {Avatar}
      </group>
      {MiniRoom}
      <OrbitControls />
    </Canvas>
  );
}
