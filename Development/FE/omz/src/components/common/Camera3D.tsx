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
      camera={{ position: [-15, 8, 15], fov: 70, zoom: 4 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.1} />

      <group position={[-4, 11.5, 4]}>
        <group position={[17, -24.2, -16.5]}>{Avatar}</group>
        {MiniRoom}
      </group>
      <OrbitControls />
    </Canvas>
  );
}
