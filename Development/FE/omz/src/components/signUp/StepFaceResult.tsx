import { Model } from "../../assets/3DAvatar/Rabbit";
import Camera3D from "../common/Camera3D";

type Props = {
  animal: string;
};

export default function StepFaceResult({ animal }: Props) {
  const showAvatar = () => {
    switch (animal) {
      case "rabbit":
        return <Camera3D Avatar={<Model position={[0, -2, 0]} />} />;
    }
  };
  return <div className="w-full h-screen">{showAvatar()}</div>;
}
