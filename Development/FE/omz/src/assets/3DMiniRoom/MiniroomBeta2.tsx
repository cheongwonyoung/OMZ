/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 miniroomBeta2.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    평면: THREE.Mesh;
    큐브: THREE.Mesh;
    큐브001: THREE.Mesh;
    평면001: THREE.Mesh;
    실린더: THREE.Mesh;
    큐브002: THREE.Mesh;
    큐브003: THREE.Mesh;
    평면002: THREE.Mesh;
    평면003: THREE.Mesh;
    큐브004: THREE.Mesh;
    평면004: THREE.Mesh;
    큐브005: THREE.Mesh;
    구체: THREE.Mesh;
    실린더001: THREE.Mesh;
    원뿔: THREE.Mesh;
    평면005: THREE.Mesh;
    평면006: THREE.Mesh;
    큐브006: THREE.Mesh;
    평면007: THREE.Mesh;
    평면008: THREE.Mesh;
    큐브007: THREE.Mesh;
    큐브008: THREE.Mesh;
  };
  materials: {
    매테리얼: THREE.MeshStandardMaterial;
    ["매테리얼.002"]: THREE.MeshStandardMaterial;
    ["매테리얼.001"]: THREE.MeshStandardMaterial;
    ["매테리얼.004"]: THREE.MeshStandardMaterial;
    ["매테리얼.003"]: THREE.MeshStandardMaterial;
    ["매테리얼.005"]: THREE.MeshStandardMaterial;
    ["매테리얼.007"]: THREE.MeshStandardMaterial;
    ["매테리얼.006"]: THREE.MeshStandardMaterial;
    ["매테리얼.008"]: THREE.MeshStandardMaterial;
    ["매테리얼.009"]: THREE.MeshStandardMaterial;
    ["매테리얼.010"]: THREE.MeshStandardMaterial;
    ["매테리얼.011"]: THREE.MeshStandardMaterial;
    ["매테리얼.015"]: THREE.MeshStandardMaterial;
    ["매테리얼.016"]: THREE.MeshStandardMaterial;
    ["매테리얼.013"]: THREE.MeshStandardMaterial;
    ["매테리얼.014"]: THREE.MeshStandardMaterial;
    ["매테리얼.012"]: THREE.MeshStandardMaterial;
  };
};

interface Item {
  [key: string]: string;
}
type Props = {
  position: number[];
  itemStatus?: Item;
};

export function MiniroomBeta2({ position, itemStatus }: Props) {
  const { nodes, materials } = useGLTF(
    "/MiniRoom/miniroomBeta2.glb"
  ) as GLTFResult;

  const selectTable = () => {
    switch (itemStatus?.table) {
      case "1":
        return (
          <>
            <mesh
              geometry={nodes.평면001.geometry}
              material={materials["매테리얼.004"]}
              position={[-7.97, 6.03, -10.58]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[4.5, 1.74, 2.57]}
            />
            <mesh
              geometry={nodes.실린더.geometry}
              material={materials["매테리얼.003"]}
              position={[-11.79, 3.27, -8.57]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[0.25, 2.54, 0.25]}
            />
            <mesh
              geometry={nodes.큐브002.geometry}
              material={materials["매테리얼.005"]}
              position={[-10.79, 7.32, -11.74]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[1.17, 1.26, 1]}
            />
            <mesh
              geometry={nodes.큐브003.geometry}
              material={materials["매테리얼.007"]}
              position={[-11.55, 7.13, -11.59]}
              rotation={[Math.PI, -0.04, 0]}
              scale={[0.25, 0.94, 1]}
            />
            <mesh
              geometry={nodes.평면002.geometry}
              material={materials["매테리얼.006"]}
              position={[-11.55, 8.03, -11.61]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[0.24, 1, 0.84]}
            />
            <mesh
              geometry={nodes.평면003.geometry}
              material={materials["매테리얼.008"]}
              position={[-11.01, 8.03, -11.64]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[0.24, 1, 0.84]}
            />
            <mesh
              geometry={nodes.큐브004.geometry}
              material={materials["매테리얼.009"]}
              position={[-11.02, 7.13, -11.61]}
              rotation={[Math.PI, -0.04, 0]}
              scale={[0.25, 0.94, 1]}
            />
            <mesh
              geometry={nodes.평면004.geometry}
              material={materials["매테리얼.010"]}
              position={[-10.49, 8.01, -11.65]}
              rotation={[-3.14, -0.07, 2.85]}
              scale={[0.24, 1, 0.84]}
            />
            <mesh
              geometry={nodes.큐브005.geometry}
              material={materials["매테리얼.011"]}
              position={[-10.25, 7.15, -11.65]}
              rotation={[-3.14, -0.07, -0.29]}
              scale={[0.25, 0.94, 1]}
            />
          </>
        );
    }
  };

  const selectLamp = () => {
    switch (itemStatus?.lamp) {
      case "1":
        return (
          <>
            <mesh
              geometry={nodes.구체.geometry}
              material={materials["매테리얼.015"]}
              position={[-3.38, 11.99, -11.29]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={0.52}
            />
            <mesh
              geometry={nodes.실린더001.geometry}
              material={materials["매테리얼.016"]}
              position={[-0.94, 4.31, -11.24]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={0.1}
            />
            <mesh
              geometry={nodes.원뿔.geometry}
              material={materials["매테리얼.013"]}
              position={[-2.94, 12.7, -11.29]}
              rotation={[-Math.PI, 0, -2.62]}
            />
            <mesh
              geometry={nodes.평면005.geometry}
              material={materials["매테리얼.014"]}
              position={[-0.94, 1.02, -11.24]}
              rotation={[Math.PI, 0, Math.PI]}
              scale={1.75}
            />
          </>
        );
    }
  };

  const selectBed = () => {
    switch (itemStatus?.bed) {
      case "1":
        return (
          <>
            <mesh
              geometry={nodes.평면006.geometry}
              material={nodes.평면006.material}
              position={[8.36, 3.82, -2.87]}
              rotation={[0, 0, -Math.PI]}
              scale={[-5, -1, -7.5]}
            />
            <mesh
              geometry={nodes.큐브006.geometry}
              material={materials["매테리얼.012"]}
              position={[8.36, 1.73, 5.79]}
              scale={[5, 1, 1]}
            />
            <mesh
              geometry={nodes.평면007.geometry}
              material={nodes.평면007.material}
              position={[8.36, 4.85, -2.87]}
              rotation={[0, 0, -Math.PI]}
              scale={[-5, -1, -7.5]}
            />
            <mesh
              geometry={nodes.평면008.geometry}
              material={materials["매테리얼.012"]}
              position={[8.36, 2.77, -2.87]}
              scale={[5, 1, 8]}
            />
            <mesh
              geometry={nodes.큐브007.geometry}
              material={materials["매테리얼.012"]}
              position={[8.36, 4.67, -1.43]}
              scale={[5.29, 0.81, 5.6]}
            />
            <mesh
              geometry={nodes.큐브008.geometry}
              material={materials["매테리얼.012"]}
              position={[8.36, 5.58, -8.78]}
              scale={[1.63, 0.53, 1]}
            />
          </>
        );
    }
  };

  const props: any = { position };

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.평면.geometry}
        material={materials.매테리얼}
        scale={[15, 14.43, 15]}
      />
      <mesh
        geometry={nodes.큐브.geometry}
        material={materials["매테리얼.002"]}
        position={[0, 12.87, -14.5]}
        scale={[15, 12.76, 0.5]}
      />
      <mesh
        geometry={nodes.큐브001.geometry}
        material={materials["매테리얼.001"]}
        position={[14.5, 12.87, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[15, 12.76, 0.5]}
      />
      {selectTable()}
      {selectLamp()}
      {selectBed()}
    </group>
  );
}

useGLTF.preload("/MiniRoom/miniroomBeta2.glb");
