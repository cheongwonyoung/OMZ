import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loading from "./Loading";

type Props = {
  Avatar?: any;
  MiniRoom: any;
};
export default function CameraMiniroom({ Avatar, MiniRoom }: Props) {
  const pp = { position: [-15, 15, 15], fov: 60 };

  const Loader = () => {
    return (
      <Html center>
        <Loading />
      </Html>
    );
  };

  return (
    <Canvas
      camera={{ position: [-15, 8, 15], fov: 70, zoom: 4 }}
      className="w-full h-full"
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.1} />
        <group position={[-4, 11.5, 4]}>
          <group position={[17, -24.2, -16.5]}>{Avatar}</group>
          {MiniRoom}
        </group>
        <OrbitControls enableRotate={false} />
      </Suspense>
    </Canvas>
  );
}
