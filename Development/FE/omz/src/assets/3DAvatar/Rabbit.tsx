import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Head: THREE.Mesh;
    Body: THREE.Mesh;
    mouth: THREE.Mesh;
    Ear_2: THREE.Mesh;
    body_2: THREE.Mesh;
    eyes: THREE.Mesh;
    tail: THREE.Mesh;
    moustache: THREE.Mesh;
    eyebrow: THREE.Mesh;
    nose: THREE.Mesh;
  };
  materials: {
    ["bunny texturee"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/3D/rabbit.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Head.geometry}
        material={materials["bunny texturee"]}
        position={[0.03, 2.62, 0.02]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[1.17, 0.91, 0.94]}
      />
      <mesh
        geometry={nodes.Body.geometry}
        material={materials["Material.009"]}
        position={[0.04, 1.36, 0.01]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.62, 0.67, 0.61]}
      />
      <mesh
        geometry={nodes.mouth.geometry}
        material={materials["Material.010"]}
        position={[0.05, 2.62, -0.01]}
        rotation={[0.17, -0.78, 0.12]}
        scale={[1.17, 0.91, 0.94]}
      />
      <mesh
        geometry={nodes.Ear_2.geometry}
        material={materials["Material.007"]}
        position={[0.04, 2.62, 0.01]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[1.17, 0.91, 1]}
      />
      <mesh
        geometry={nodes.body_2.geometry}
        material={materials["Material.008"]}
        position={[0.01, 1.36, 0.04]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.56, 0.6, 0.55]}
      />
      <mesh
        geometry={nodes.eyes.geometry}
        material={materials["Material.002"]}
        position={[0.04, 0.44, 0.01]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        geometry={nodes.tail.geometry}
        material={materials["Material.008"]}
        position={[0.45, 1.31, -0.4]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={0.22}
      />
      <mesh
        geometry={nodes.moustache.geometry}
        material={materials["Material.001"]}
        position={[0.05, 0.31, 0.01]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        geometry={nodes.eyebrow.geometry}
        material={materials["Material.003"]}
        position={[0.04, 0.44, 0.01]}
        rotation={[0, -Math.PI / 4, 0]}
      />
      <mesh
        geometry={nodes.nose.geometry}
        material={materials["Material.007"]}
        position={[-0.57, 2.47, 0.62]}
        rotation={[-0.47, -0.73, -0.33]}
        scale={0.08}
      />
    </group>
  );
}

useGLTF.preload("/rabbit.glb");
