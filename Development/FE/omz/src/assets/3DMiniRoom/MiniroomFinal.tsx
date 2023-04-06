import { DirectionalLightHelper } from "three";

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { useGLTF, useAnimations, useHelper } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    writing_desk_writing_desk_0: THREE.Mesh;
    Object_8001: THREE.Mesh;
    Object_4002: THREE.Mesh;
    Object_6002: THREE.Mesh;
    Object_8002: THREE.Mesh;
    Object_9001: THREE.Mesh;
    Object_11001: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_21001: THREE.Mesh;
    Object_23001: THREE.Mesh;
    Object_25001: THREE.Mesh;
    Object_27001: THREE.Mesh;
    Object_29001: THREE.Mesh;
    pCylinder57_solidShader3_0: THREE.Mesh;
    polySurface113_lambert10_0: THREE.Mesh;
    polySurface24_lambert11_0: THREE.Mesh;
    polySurface42_blinn4_0: THREE.Mesh;
    polySurface65_solidShader2_0: THREE.Mesh;
    polySurface100_lambert10_0: THREE.Mesh;
    polySurface91_lambert10_0: THREE.Mesh;
    polySurface92_lambert10_0: THREE.Mesh;
    polySurface93_lambert10_0: THREE.Mesh;
    polySurface94_lambert10_0: THREE.Mesh;
    polySurface96_lambert10_0: THREE.Mesh;
    polySurface97_lambert10_0: THREE.Mesh;
    polySurface99_lambert10_0: THREE.Mesh;
    polySurface80_lambert10_0: THREE.Mesh;
    polySurface89_lambert10_0: THREE.Mesh;
    polySurface95_lambert10_0: THREE.Mesh;
    polySurface98_lambert10_0: THREE.Mesh;
    Cloth_low_CouchMat_0: THREE.Mesh;
    Couch_low_CouchMat_0: THREE.Mesh;
    CushionA_low_CouchMat_0: THREE.Mesh;
    CushionB_low_CouchMat_0: THREE.Mesh;
    Object_58001: THREE.Mesh;
    Object_64001: THREE.Mesh;
    Object_6003: THREE.Mesh;
    Object_8003: THREE.Mesh;
    Object_4003: THREE.Mesh;
    Object_107001: THREE.Mesh;
    Object_54: THREE.Mesh;
    Object_60001: THREE.Mesh;
    Object_62001: THREE.Mesh;
    Object_56001: THREE.Mesh;
    Object_66001: THREE.Mesh;
    Object_103001: THREE.Mesh;
    Object_101001: THREE.Mesh;
    Object_14001: THREE.Mesh;
    Object_12001: THREE.Mesh;
    Object_18001: THREE.Mesh;
    Object_20001: THREE.Mesh;
    Object_22: THREE.Mesh;
    Object_24: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_119_1: THREE.Mesh;
    Object_117_1: THREE.Mesh;
    Object_115_1: THREE.Mesh;
    Object_113: THREE.Mesh;
    Object_111001: THREE.Mesh;
    Object_109001: THREE.Mesh;
    Object_73001: THREE.Mesh;
    Object_16001: THREE.Mesh;
    Object_105: THREE.Mesh;
    Object_26: THREE.Mesh;
    Object_28: THREE.Mesh;
    Object_32: THREE.Mesh;
    Object_34001: THREE.Mesh;
    Object_36001: THREE.Mesh;
    Object_38: THREE.Mesh;
    Object_40001: THREE.Mesh;
    Object_42001: THREE.Mesh;
    Object_46001: THREE.Mesh;
    Object_44001: THREE.Mesh;
    Object_50: THREE.Mesh;
    Object_48001: THREE.Mesh;
    Object_52: THREE.Mesh;
    Object_30: THREE.Mesh;
    Object_95001: THREE.Mesh;
    Object_68: THREE.Mesh;
    Object_70: THREE.Mesh;
    Object_71001: THREE.Mesh;
    BedFeets_BedFeets_0: THREE.Mesh;
    Duvet_Duvet_0: THREE.Mesh;
    Matress_Matress_0: THREE.Mesh;
    Pillows_Pillows_0: THREE.Mesh;
    Bed_Bed_0: THREE.Mesh;
    Object_9002: THREE.Mesh;
    Object_6004: THREE.Mesh;
    Object_12002: THREE.Mesh;
    defaultMaterial: THREE.Mesh;
    back2_aiStandardSurface1_0: THREE.Mesh;
    back_bone_aiStandardSurface1_0: THREE.Mesh;
    adjustment_aiStandardSurface1_0: THREE.Mesh;
    Bolt_aiStandardSurface1_0: THREE.Mesh;
    Bolt1_aiStandardSurface1_0: THREE.Mesh;
    Bolt2_aiStandardSurface1_0: THREE.Mesh;
    Bolt3_aiStandardSurface1_0: THREE.Mesh;
    pCube6_aiStandardSurface1_0: THREE.Mesh;
    pCube9_aiStandardSurface1_0: THREE.Mesh;
    pCylinder10_aiStandardSurface1_0: THREE.Mesh;
    pCylinder14_aiStandardSurface1_0: THREE.Mesh;
    polySurface11_aiStandardSurface1_0: THREE.Mesh;
    pPlane3_aiStandardSurface1_0: THREE.Mesh;
    butt_aiStandardSurface1_0: THREE.Mesh;
    L_handle_aiStandardSurface1_0: THREE.Mesh;
    R_handle_aiStandardSurface1_0: THREE.Mesh;
    polySurface24_aiStandardSurface1_0: THREE.Mesh;
    polySurface43_aiStandardSurface1_0: THREE.Mesh;
    wheel_aiStandardSurface1_0: THREE.Mesh;
    wheel2_aiStandardSurface1_0: THREE.Mesh;
    wheel3_aiStandardSurface1_0: THREE.Mesh;
    wheel4_aiStandardSurface1_0: THREE.Mesh;
    lid_alum_0: THREE.Mesh;
    lid_gun_0: THREE.Mesh;
    lid_samsung_0: THREE.Mesh;
    lid_scr_0: THREE.Mesh;
    body_alum_0: THREE.Mesh;
    body_buton_0: THREE.Mesh;
    body_flack_0: THREE.Mesh;
    body_gun_0: THREE.Mesh;
    body_keys_0: THREE.Mesh;
    body_tp_0: THREE.Mesh;
    Object_197: THREE.Mesh;
    Object_118: THREE.Mesh;
    Object_27: THREE.Mesh;
    Object_25: THREE.Mesh;
    Object_199: THREE.Mesh;
    Object_244: THREE.Mesh;
    Object_211: THREE.Mesh;
    Object_212: THREE.Mesh;
    Object_213: THREE.Mesh;
    Object_214: THREE.Mesh;
    Object_215: THREE.Mesh;
    Object_216: THREE.Mesh;
    Object_217: THREE.Mesh;
    Object_209: THREE.Mesh;
    Object_239: THREE.Mesh;
    Object_207: THREE.Mesh;
    Object_221: THREE.Mesh;
    Object_203: THREE.Mesh;
    Object_31: THREE.Mesh;
    Object_233: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_55: THREE.Mesh;
    Object_56: THREE.Mesh;
    Object_152: THREE.Mesh;
    Object_164: THREE.Mesh;
    Object_91: THREE.Mesh;
    Object_146: THREE.Mesh;
    Object_106: THREE.Mesh;
    Object_107: THREE.Mesh;
    Object_58: THREE.Mesh;
    Object_77: THREE.Mesh;
    Object_66: THREE.Mesh;
    Object_67: THREE.Mesh;
    Object_148: THREE.Mesh;
    Object_149: THREE.Mesh;
    Object_150: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_21: THREE.Mesh;
    Object_48: THREE.Mesh;
    Object_49: THREE.Mesh;
    Object_205: THREE.Mesh;
    Object_23: THREE.Mesh;
    Object_33: THREE.Mesh;
    Object_34: THREE.Mesh;
    Object_36: THREE.Mesh;
    Object_37: THREE.Mesh;
    Object_39: THREE.Mesh;
    Object_40: THREE.Mesh;
    Object_42: THREE.Mesh;
    Object_44: THREE.Mesh;
    Object_46: THREE.Mesh;
    Object_51: THREE.Mesh;
    Object_69: THREE.Mesh;
    Object_71: THREE.Mesh;
    Object_73: THREE.Mesh;
    Object_75: THREE.Mesh;
    Object_79: THREE.Mesh;
    Object_81: THREE.Mesh;
    Object_83: THREE.Mesh;
    Object_85: THREE.Mesh;
    Object_89: THREE.Mesh;
    Object_93: THREE.Mesh;
    Object_87: THREE.Mesh;
    Object_60: THREE.Mesh;
    Object_62: THREE.Mesh;
    Object_64: THREE.Mesh;
    Object_95: THREE.Mesh;
    Object_97: THREE.Mesh;
    Object_99: THREE.Mesh;
    Object_219: THREE.Mesh;
    Object_101: THREE.Mesh;
    Object_102: THREE.Mesh;
    Object_103: THREE.Mesh;
    Object_104: THREE.Mesh;
    Object_109: THREE.Mesh;
    Object_111: THREE.Mesh;
    Object_112: THREE.Mesh;
    Object_114: THREE.Mesh;
    Object_116: THREE.Mesh;
    Object_127: THREE.Mesh;
    Object_129: THREE.Mesh;
    Object_137: THREE.Mesh;
    Object_139: THREE.Mesh;
    Object_140: THREE.Mesh;
    Object_131: THREE.Mesh;
    Object_133: THREE.Mesh;
    Object_135: THREE.Mesh;
    Object_142: THREE.Mesh;
    Object_144: THREE.Mesh;
    Object_120: THREE.Mesh;
    Object_122: THREE.Mesh;
    Object_123: THREE.Mesh;
    Object_125: THREE.Mesh;
    Object_154: THREE.Mesh;
    Object_156: THREE.Mesh;
    Object_158: THREE.Mesh;
    Object_160: THREE.Mesh;
    Object_162: THREE.Mesh;
    Object_166: THREE.Mesh;
    Object_167: THREE.Mesh;
    Object_168: THREE.Mesh;
    Object_170: THREE.Mesh;
    Object_175: THREE.Mesh;
    Object_177: THREE.Mesh;
    Object_172: THREE.Mesh;
    Object_173: THREE.Mesh;
    Object_181: THREE.Mesh;
    Object_183: THREE.Mesh;
    Object_185: THREE.Mesh;
    Object_187: THREE.Mesh;
    Object_189: THREE.Mesh;
    Object_191: THREE.Mesh;
    Object_193: THREE.Mesh;
    Object_195: THREE.Mesh;
    Object_4001: THREE.Mesh;
    Object_6001: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_241: THREE.Mesh;
    Object_242: THREE.Mesh;
    Object_229: THREE.Mesh;
    Object_231: THREE.Mesh;
    Object_235: THREE.Mesh;
    Object_236: THREE.Mesh;
    Object_237: THREE.Mesh;
    Object_223: THREE.Mesh;
    Object_224: THREE.Mesh;
    Object_53: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_179: THREE.Mesh;
    Object_226: THREE.Mesh;
    Object_227: THREE.Mesh;
    Object_29: THREE.Mesh;
    Object_201: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    defaultMaterial001: THREE.Mesh;
    평면001: THREE.Mesh;
    평면002: THREE.Mesh;
    큐브: THREE.Mesh;
    큐브001: THREE.Mesh;
    큐브002: THREE.Mesh;
    큐브003: THREE.Mesh;
    큐브004: THREE.Mesh;
    실린더001: THREE.Mesh;
    구체004_1: THREE.Mesh;
    평면011: THREE.Mesh;
    평면012: THREE.Mesh;
    평면013: THREE.Mesh;
    평면014: THREE.Mesh;
    평면015: THREE.Mesh;
    구체001: THREE.Mesh;
    구체002: THREE.Mesh;
    구체003: THREE.Mesh;
    실린더: THREE.Mesh;
    평면009: THREE.Mesh;
    평면010: THREE.Mesh;
    구체: THREE.Mesh;
    평면003: THREE.Mesh;
    평면004: THREE.Mesh;
    평면005: THREE.Mesh;
    평면006: THREE.Mesh;
    평면007: THREE.Mesh;
    평면008: THREE.Mesh;
    실린더002: THREE.Mesh;
    큐브005: THREE.Mesh;
    큐브006: THREE.Mesh;
    큐브007: THREE.Mesh;
    큐브008: THREE.Mesh;
    평면016: THREE.Mesh;
    평면017: THREE.Mesh;
    평면018: THREE.Mesh;
    평면019: THREE.Mesh;
    구체005: THREE.Mesh;
    구체006: THREE.Mesh;
    베지어커브: THREE.Mesh;
    베지어커브001: THREE.Mesh;
    베지어커브002: THREE.Mesh;
    큐브009: THREE.Mesh;
    큐브010: THREE.Mesh;
    큐브011: THREE.Mesh;
    큐브012: THREE.Mesh;
    큐브013: THREE.Mesh;
    큐브014: THREE.Mesh;
    큐브015: THREE.Mesh;
    큐브016: THREE.Mesh;
    큐브017: THREE.Mesh;
    큐브018: THREE.Mesh;
    큐브019: THREE.Mesh;
    큐브020: THREE.Mesh;
    큐브021: THREE.Mesh;
    큐브022: THREE.Mesh;
    큐브023: THREE.Mesh;
    큐브024: THREE.Mesh;
    큐브025: THREE.Mesh;
    큐브026: THREE.Mesh;
    큐브027: THREE.Mesh;
    큐브028: THREE.Mesh;
    큐브029: THREE.Mesh;
    큐브030: THREE.Mesh;
    큐브031: THREE.Mesh;
    큐브032: THREE.Mesh;
    큐브033: THREE.Mesh;
    큐브034: THREE.Mesh;
    큐브035: THREE.Mesh;
    큐브036: THREE.Mesh;
    큐브037: THREE.Mesh;
    큐브038: THREE.Mesh;
    큐브039: THREE.Mesh;
    큐브040: THREE.Mesh;
    큐브041: THREE.Mesh;
    큐브042: THREE.Mesh;
    큐브043: THREE.Mesh;
    큐브044: THREE.Mesh;
    큐브045: THREE.Mesh;
    큐브046: THREE.Mesh;
    큐브047: THREE.Mesh;
    큐브048: THREE.Mesh;
    큐브049: THREE.Mesh;
    큐브050: THREE.Mesh;
    큐브051: THREE.Mesh;
    큐브052: THREE.Mesh;
    큐브053: THREE.Mesh;
    큐브054: THREE.Mesh;
    큐브055: THREE.Mesh;
    큐브056: THREE.Mesh;
    큐브057: THREE.Mesh;
    큐브058: THREE.Mesh;
    큐브059: THREE.Mesh;
    큐브060: THREE.Mesh;
    큐브061: THREE.Mesh;
    큐브062: THREE.Mesh;
    큐브063: THREE.Mesh;
    큐브064: THREE.Mesh;
    큐브065: THREE.Mesh;
    큐브066: THREE.Mesh;
    큐브067: THREE.Mesh;
    큐브068: THREE.Mesh;
    큐브069: THREE.Mesh;
    큐브070: THREE.Mesh;
    큐브071: THREE.Mesh;
    큐브072: THREE.Mesh;
    큐브073: THREE.Mesh;
    큐브074: THREE.Mesh;
    큐브075_1: THREE.Mesh;
    큐브075_2: THREE.Mesh;
    큐브076_1: THREE.Mesh;
    큐브076_2: THREE.Mesh;
    평면: THREE.Mesh;
    평면020: THREE.Mesh;
    평면021: THREE.Mesh;
    평면022: THREE.Mesh;
    평면024_1: THREE.Mesh;
    평면024_2: THREE.Mesh;
    구체007: THREE.Mesh;
    실린더003: THREE.Mesh;
    실린더004: THREE.Mesh;
    실린더005: THREE.Mesh;
    실린더006: THREE.Mesh;
    실린더007: THREE.Mesh;
    큐브077: THREE.Mesh;
    큐브078: THREE.Mesh;
    큐브079: THREE.Mesh;
    큐브080: THREE.Mesh;
    큐브081: THREE.Mesh;
    평면024: THREE.Mesh;
    평면025: THREE.Mesh;
    평면026: THREE.Mesh;
    구체008: THREE.Mesh;
    실린더008: THREE.Mesh;
    원뿔: THREE.Mesh;
    평면027: THREE.Mesh;
    평면028: THREE.Mesh;
  };
  materials: {
    writing_desk: THREE.MeshStandardMaterial;
    [".002"]: THREE.MeshStandardMaterial;
    [".001"]: THREE.MeshPhysicalMaterial;
    body_main: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
    body_panel: THREE.MeshStandardMaterial;
    game_panel: THREE.MeshStandardMaterial;
    sound_panel: THREE.MeshStandardMaterial;
    banner: THREE.MeshStandardMaterial;
    steel: THREE.MeshStandardMaterial;
    butt_a: THREE.MeshStandardMaterial;
    butt_b: THREE.MeshStandardMaterial;
    butt_c: THREE.MeshStandardMaterial;
    butt_d: THREE.MeshStandardMaterial;
    speakers: THREE.MeshStandardMaterial;
    solidShader3: THREE.MeshStandardMaterial;
    lambert10: THREE.MeshStandardMaterial;
    lambert11: THREE.MeshStandardMaterial;
    blinn4: THREE.MeshStandardMaterial;
    solidShader2: THREE.MeshStandardMaterial;
    CouchMat: THREE.MeshStandardMaterial;
    M_Sigarettes_512: THREE.MeshStandardMaterial;
    M_Cactus_1024: THREE.MeshStandardMaterial;
    M_OfficeStool_Bin_2048: THREE.MeshStandardMaterial;
    M_Clipboard_Notepad_1024: THREE.MeshStandardMaterial;
    M_Computer_2048: THREE.MeshStandardMaterial;
    M_Filebox_1024: THREE.MeshStandardMaterial;
    ["M_Lamps_CCTV_2048.001"]: THREE.MeshStandardMaterial;
    M_TapeRecorder_Tape_Rotors_Glass_1024: THREE.MeshStandardMaterial;
    M_Office_PinBoard_Photo_Notepad_1024: THREE.MeshStandardMaterial;
    Poster_1024: THREE.MeshStandardMaterial;
    M_Table_2048: THREE.MeshStandardMaterial;
    M_TapeRecorder_1024: THREE.MeshStandardMaterial;
    BedFeets: THREE.MeshStandardMaterial;
    Duvet: THREE.MeshStandardMaterial;
    Matress: THREE.MeshStandardMaterial;
    Pillows: THREE.MeshStandardMaterial;
    ["material.002"]: THREE.MeshStandardMaterial;
    beizi: THREE.MeshStandardMaterial;
    chuang: THREE.MeshStandardMaterial;
    Chair: THREE.MeshStandardMaterial;
    aiStandardSurface1: THREE.MeshStandardMaterial;
    alum: THREE.MeshStandardMaterial;
    ["material.001"]: THREE.MeshStandardMaterial;
    samsung: THREE.MeshStandardMaterial;
    material_2: THREE.MeshStandardMaterial;
    buton: THREE.MeshStandardMaterial;
    flack: THREE.MeshStandardMaterial;
    keys: THREE.MeshStandardMaterial;
    material_5: THREE.MeshStandardMaterial;
    Metal_Part: THREE.MeshStandardMaterial;
    Color_04: THREE.MeshStandardMaterial;
    Color_00: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    Glass: THREE.MeshPhysicalMaterial;
    ["1_analog"]: THREE.MeshStandardMaterial;
    ["2_analog"]: THREE.MeshStandardMaterial;
    ["3_analog"]: THREE.MeshStandardMaterial;
    ["4_analog"]: THREE.MeshStandardMaterial;
    ["5_analog"]: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
    material: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    Logo_Ford: THREE.MeshStandardMaterial;
    black1: THREE.MeshStandardMaterial;
    ["Color_04.001"]: THREE.MeshStandardMaterial;
    detail01: THREE.MeshPhysicalMaterial;
    detail02: THREE.MeshStandardMaterial;
    textur01: THREE.MeshPhysicalMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    textured: THREE.MeshStandardMaterial;
    Front_light: THREE.MeshStandardMaterial;
    head_lig: THREE.MeshStandardMaterial;
    Metal_back: THREE.MeshStandardMaterial;
    Head_Light: THREE.MeshStandardMaterial;
    Miror: THREE.MeshStandardMaterial;
    tail_lig: THREE.MeshStandardMaterial;
    Back_main_Light: THREE.MeshStandardMaterial;
    Foregrou: THREE.MeshStandardMaterial;
    material_0: THREE.MeshStandardMaterial;
    FrontCol: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    grille1: THREE.MeshStandardMaterial;
    Color_02: THREE.MeshStandardMaterial;
    Color_03: THREE.MeshStandardMaterial;
    ["Material.023"]: THREE.MeshStandardMaterial;
    Carpet: THREE.MeshStandardMaterial;
    interior_brown: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    bbea21f7: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    logo_farmoon: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    interior: THREE.MeshStandardMaterial;
    ["Material.018"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["2011_06"]: THREE.MeshStandardMaterial;
    bfgoodri: THREE.MeshStandardMaterial;
    Material__7: THREE.MeshStandardMaterial;
    DefaultMaterial: THREE.MeshStandardMaterial;
    ["매테리얼.006"]: THREE.MeshStandardMaterial;
    ["매테리얼.021"]: THREE.MeshStandardMaterial;
    ["매테리얼.016"]: THREE.MeshStandardMaterial;
    ["매테리얼.020"]: THREE.MeshStandardMaterial;
    ["매테리얼.019"]: THREE.MeshStandardMaterial;
    ["매테리얼.013"]: THREE.MeshStandardMaterial;
    ["매테리얼.011"]: THREE.MeshStandardMaterial;
    ["매테리얼.012"]: THREE.MeshStandardMaterial;
    ["매테리얼.015"]: THREE.MeshStandardMaterial;
    ["매테리얼.014"]: THREE.MeshStandardMaterial;
    ["매테리얼.018"]: THREE.MeshStandardMaterial;
    ["매테리얼.008"]: THREE.MeshStandardMaterial;
    ["매테리얼.007"]: THREE.MeshStandardMaterial;
    ["매테리얼.009"]: THREE.MeshStandardMaterial;
    ["매테리얼.010"]: THREE.MeshStandardMaterial;
    ["매테리얼.002"]: THREE.MeshStandardMaterial;
    ["매테리얼.005"]: THREE.MeshStandardMaterial;
    ["매테리얼.003"]: THREE.MeshStandardMaterial;
    ["매테리얼.001"]: THREE.MeshStandardMaterial;
    매테리얼: THREE.MeshStandardMaterial;
    ["매테리얼.004"]: THREE.MeshStandardMaterial;
    ["매테리얼.029"]: THREE.MeshStandardMaterial;
    ["매테리얼.025"]: THREE.MeshStandardMaterial;
    ["매테리얼.026"]: THREE.MeshStandardMaterial;
    ["매테리얼.027"]: THREE.MeshStandardMaterial;
    ["매테리얼.028"]: THREE.MeshStandardMaterial;
    ["매테리얼.017"]: THREE.MeshStandardMaterial;
    ["매테리얼.022"]: THREE.MeshStandardMaterial;
    ["매테리얼.023"]: THREE.MeshStandardMaterial;
    ["매테리얼.024"]: THREE.MeshStandardMaterial;
    ["매테리얼.035"]: THREE.MeshStandardMaterial;
    ["매테리얼.032"]: THREE.MeshStandardMaterial;
    ["매테리얼.034"]: THREE.MeshStandardMaterial;
    ["매테리얼.036"]: THREE.MeshStandardMaterial;
    ["매테리얼.037"]: THREE.MeshStandardMaterial;
    ["매테리얼.038"]: THREE.MeshStandardMaterial;
    ["매테리얼.031"]: THREE.MeshStandardMaterial;
    ["매테리얼.039"]: THREE.MeshStandardMaterial;
    ["매테리얼.030"]: THREE.MeshStandardMaterial;
    ["매테리얼.033"]: THREE.MeshStandardMaterial;
    ["매테리얼.040"]: THREE.MeshStandardMaterial;
    ["매테리얼.041"]: THREE.MeshStandardMaterial;
    ["매테리얼.049"]: THREE.MeshStandardMaterial;
    ["매테리얼.042"]: THREE.MeshStandardMaterial;
    ["매테리얼.046"]: THREE.MeshStandardMaterial;
    ["매테리얼.043"]: THREE.MeshStandardMaterial;
    ["매테리얼.044"]: THREE.MeshStandardMaterial;
    ["매테리얼.048"]: THREE.MeshStandardMaterial;
    ["매테리얼.045"]: THREE.MeshStandardMaterial;
    ["매테리얼.047"]: THREE.MeshStandardMaterial;
    ["매테리얼.054"]: THREE.MeshStandardMaterial;
    ["매테리얼.053"]: THREE.MeshStandardMaterial;
    ["매테리얼.052"]: THREE.MeshStandardMaterial;
    ["매테리얼.051"]: THREE.MeshStandardMaterial;
  };
};

interface Item {
  [key: string]: string;
}
type Props = {
  position: number[];
  itemStatus?: Item;
};

type ActionName = "Scene";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function MiniroomFinal({ position, itemStatus }: Props) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/MiniRoom/miniroomFinal.glb"
  ) as GLTFResult;

  const selectTable = () => {
    switch (itemStatus?.table) {
      case "1":
        return (
          <>
            {/* 책상1 */}
            <mesh
              name="실린더002"
              geometry={nodes.실린더002.geometry}
              material={materials["매테리얼.029"]}
              position={[-3.58, 1.97, -1.65]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[0.09, 0.91, 0.09]}
            />{" "}
            <mesh
              name="큐브005"
              geometry={nodes.큐브005.geometry}
              material={materials["매테리얼.025"]}
              position={[-3.02, 3.36, -2.75]}
              rotation={[-3.14, -0.07, -0.29]}
              scale={[0.09, 0.34, 0.36]}
            />
            <mesh
              name="큐브006"
              geometry={nodes.큐브006.geometry}
              material={materials["매테리얼.026"]}
              position={[-3.3, 3.35, -2.74]}
              rotation={[Math.PI, -0.04, 0]}
              scale={[0.09, 0.34, 0.36]}
            />
            <mesh
              name="큐브007"
              geometry={nodes.큐브007.geometry}
              material={materials["매테리얼.027"]}
              position={[-3.49, 3.35, -2.73]}
              rotation={[Math.PI, -0.04, 0]}
              scale={[0.09, 0.34, 0.36]}
            />
            <mesh
              name="큐브008"
              geometry={nodes.큐브008.geometry}
              material={materials["매테리얼.028"]}
              position={[-3.22, 3.42, -2.79]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[0.42, 0.45, 0.36]}
            />
            <mesh
              name="평면016"
              geometry={nodes.평면016.geometry}
              material={materials["매테리얼.017"]}
              position={[-3.11, 3.67, -2.75]}
              rotation={[-3.14, -0.07, 2.85]}
              scale={[0.09, 0.36, 0.3]}
            />
            <mesh
              name="평면017"
              geometry={nodes.평면017.geometry}
              material={materials["매테리얼.022"]}
              position={[-3.3, 3.68, -2.75]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[0.09, 0.36, 0.3]}
            />
            <mesh
              name="평면018"
              geometry={nodes.평면018.geometry}
              material={materials["매테리얼.023"]}
              position={[-3.49, 3.68, -2.74]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[0.09, 0.36, 0.3]}
            />
            <mesh
              name="평면019"
              geometry={nodes.평면019.geometry}
              material={materials["매테리얼.024"]}
              position={[-2.2, 2.96, -2.37]}
              rotation={[Math.PI, -0.04, Math.PI]}
              scale={[1.62, 0.63, 0.92]}
            />{" "}
            <group
              name="Sketchfab_model007"
              position={[-2.08, 2.17, -1.34]}
              rotation={[-Math.PI / 2, 0, -2.24]}
              scale={1.18}
            >
              <group
                name="Collada_visual_scene_group"
                rotation={[Math.PI / 2, 0, 0]}
              >
                <group name="Chair_">
                  <mesh
                    name="defaultMaterial"
                    geometry={nodes.defaultMaterial.geometry}
                    material={materials.Chair}
                  />
                </group>
              </group>
            </group>
          </>
        );
      case "2":
        return (
          <>
            {" "}
            {/* 책상 2 */}
            <group name="desk3" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group name="RootNode001">
                <group
                  name="writing_desk"
                  position={[0, 1.23, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="writing_desk_writing_desk_0"
                    geometry={nodes.writing_desk_writing_desk_0.geometry}
                    material={materials.writing_desk}
                    position={[-2.17, 2.93, -2.31]}
                    rotation={[-1.58, 0, 0]}
                    scale={0.81}
                  />
                </group>
              </group>
            </group>
          </>
        );
      case "3":
        return (
          <>
            {" "}
            <group
              name="평면023"
              position={[-2.14, 2.91, -2.08]}
              scale={[1.53, 0.43, 0.38]}
            >
              <mesh
                name="평면024_1"
                geometry={nodes.평면024_1.geometry}
                material={materials["매테리얼.040"]}
              />
              <mesh
                name="평면024_2"
                geometry={nodes.평면024_2.geometry}
                material={materials["매테리얼.041"]}
              />
            </group>
            <mesh
              name="구체005"
              geometry={nodes.구체005.geometry}
              material={nodes.구체005.material}
              position={[-0.99, 3, -2.1]}
              rotation={[-0.31, 0, 0]}
              scale={[0.01, 0.02, 0.02]}
            />
            <mesh
              name="구체006"
              geometry={nodes.구체006.geometry}
              material={nodes.구체006.material}
              position={[-1.02, 1.41, -1.94]}
              scale={[-0.06, -0.06, -0.01]}
            />
            <mesh
              name="베지어커브"
              geometry={nodes.베지어커브.geometry}
              material={nodes.베지어커브.material}
              position={[-0.87, 2.91, -2.72]}
              scale={0.43}
            />
            <mesh
              name="베지어커브001"
              geometry={nodes.베지어커브001.geometry}
              material={materials["매테리얼.035"]}
              position={[-1.95, 2.91, -2.9]}
              scale={0.43}
            />
            <mesh
              name="베지어커브002"
              geometry={nodes.베지어커브002.geometry}
              material={nodes.베지어커브002.material}
              position={[-1.95, 3.39, -3.5]}
              scale={0.43}
            />
            <mesh
              name="큐브009"
              geometry={nodes.큐브009.geometry}
              material={nodes.큐브009.material}
              position={[-2.75, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.06, 0.02, 0.03]}
            />
            <mesh
              name="큐브010"
              geometry={nodes.큐브010.geometry}
              material={nodes.큐브010.material}
              position={[-2.77, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />{" "}
            <group
              name="큐브076"
              position={[-3.36, 3.26, -2.92]}
              scale={[0.24, 0.33, 0.34]}
            >
              <mesh
                name="큐브076_1"
                geometry={nodes.큐브076_1.geometry}
                material={materials["매테리얼.031"]}
              />
              <mesh
                name="큐브076_2"
                geometry={nodes.큐브076_2.geometry}
                material={materials["매테리얼.039"]}
              />
            </group>
            <mesh
              name="평면"
              geometry={nodes.평면.geometry}
              material={materials["매테리얼.030"]}
              position={[-2.14, 2.77, -2.43]}
              scale={[1.7, 0.77, 0.85]}
            />
            <mesh
              name="평면020"
              geometry={nodes.평면020.geometry}
              material={materials["매테리얼.031"]}
              position={[-0.44, 1.92, -2.43]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.85, 0.77, 0.85]}
            />
            <mesh
              name="평면021"
              geometry={nodes.평면021.geometry}
              material={materials["매테리얼.031"]}
              position={[-3.84, 1.92, -2.43]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.85, 0.77, 0.85]}
            />
            <mesh
              name="평면022"
              geometry={nodes.평면022.geometry}
              material={materials["매테리얼.033"]}
              position={[-2.14, 2.93, -2.04]}
              scale={[0.75, 0.59, 0.28]}
            />
            <mesh
              name="큐브011"
              geometry={nodes.큐브011.geometry}
              material={nodes.큐브011.material}
              position={[-2.63, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브012"
              geometry={nodes.큐브012.geometry}
              material={nodes.큐브012.material}
              position={[-2.54, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브013"
              geometry={nodes.큐브013.geometry}
              material={nodes.큐브013.material}
              position={[-2.45, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브014"
              geometry={nodes.큐브014.geometry}
              material={nodes.큐브014.material}
              position={[-2.36, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브015"
              geometry={nodes.큐브015.geometry}
              material={nodes.큐브015.material}
              position={[-2.27, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브016"
              geometry={nodes.큐브016.geometry}
              material={nodes.큐브016.material}
              position={[-2.18, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브017"
              geometry={nodes.큐브017.geometry}
              material={nodes.큐브017.material}
              position={[-2.09, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브018"
              geometry={nodes.큐브018.geometry}
              material={nodes.큐브018.material}
              position={[-2, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브019"
              geometry={nodes.큐브019.geometry}
              material={nodes.큐브019.material}
              position={[-1.88, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.07, 0.02, 0.03]}
            />
            <mesh
              name="큐브020"
              geometry={nodes.큐브020.geometry}
              material={nodes.큐브020.material}
              position={[-2.69, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브021"
              geometry={nodes.큐브021.geometry}
              material={nodes.큐브021.material}
              position={[-2.6, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브022"
              geometry={nodes.큐브022.geometry}
              material={nodes.큐브022.material}
              position={[-2.51, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브023"
              geometry={nodes.큐브023.geometry}
              material={nodes.큐브023.material}
              position={[-2.42, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브024"
              geometry={nodes.큐브024.geometry}
              material={nodes.큐브024.material}
              position={[-2.33, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브025"
              geometry={nodes.큐브025.geometry}
              material={nodes.큐브025.material}
              position={[-2.24, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브026"
              geometry={nodes.큐브026.geometry}
              material={nodes.큐브026.material}
              position={[-2.14, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브027"
              geometry={nodes.큐브027.geometry}
              material={nodes.큐브027.material}
              position={[-2.05, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브028"
              geometry={nodes.큐브028.geometry}
              material={nodes.큐브028.material}
              position={[-1.97, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브029"
              geometry={nodes.큐브029.geometry}
              material={nodes.큐브029.material}
              position={[-2.73, 2.98, -1.94]}
              rotation={[0.04, 0, 0]}
              scale={[0.08, 0.02, 0.03]}
            />
            <mesh
              name="큐브030"
              geometry={nodes.큐브030.geometry}
              material={nodes.큐브030.material}
              position={[-2.59, 2.98, -1.94]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브031"
              geometry={nodes.큐브031.geometry}
              material={nodes.큐브031.material}
              position={[-2.51, 2.98, -1.94]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브032"
              geometry={nodes.큐브032.geometry}
              material={nodes.큐브032.material}
              position={[-2.42, 2.98, -1.94]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브033"
              geometry={nodes.큐브033.geometry}
              material={nodes.큐브033.material}
              position={[-2.32, 2.98, -1.94]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브034"
              geometry={nodes.큐브034.geometry}
              material={nodes.큐브034.material}
              position={[-2.23, 2.98, -1.94]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브035"
              geometry={nodes.큐브035.geometry}
              material={nodes.큐브035.material}
              position={[-2.14, 2.98, -1.94]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브036"
              geometry={nodes.큐브036.geometry}
              material={nodes.큐브036.material}
              position={[-2.05, 2.98, -1.94]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브037"
              geometry={nodes.큐브037.geometry}
              material={nodes.큐브037.material}
              position={[-2.78, 2.97, -1.85]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브038"
              geometry={nodes.큐브038.geometry}
              material={nodes.큐브038.material}
              position={[-1.9, 2.98, -1.94]}
              rotation={[0.04, 0, 0]}
              scale={[0.09, 0.02, 0.03]}
            />
            <mesh
              name="큐브039"
              geometry={nodes.큐브039.geometry}
              material={nodes.큐브039.material}
              position={[-1.86, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.05, 0.02, 0.03]}
            />
            <mesh
              name="큐브040"
              geometry={nodes.큐브040.geometry}
              material={nodes.큐브040.material}
              position={[-2.59, 2.97, -1.85]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브041"
              geometry={nodes.큐브041.geometry}
              material={nodes.큐브041.material}
              position={[-2.51, 2.97, -1.85]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브042"
              geometry={nodes.큐브042.geometry}
              material={materials["매테리얼.032"]}
              position={[-2.28, 2.97, -1.85]}
              rotation={[0.04, 0, 0]}
              scale={[0.17, 0.02, 0.03]}
            />
            <mesh
              name="큐브043"
              geometry={nodes.큐브043.geometry}
              material={nodes.큐브043.material}
              position={[-1.95, 2.97, -1.85]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브044"
              geometry={nodes.큐브044.geometry}
              material={nodes.큐브044.material}
              position={[-1.85, 2.97, -1.85]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브045"
              geometry={nodes.큐브045.geometry}
              material={nodes.큐브045.material}
              position={[-2.05, 2.97, -1.85]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브046"
              geometry={nodes.큐브046.geometry}
              material={materials["매테리얼.032"]}
              position={[-1.61, 2.97, -1.85]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브047"
              geometry={nodes.큐브047.geometry}
              material={nodes.큐브047.material}
              position={[-2.69, 2.97, -1.85]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브048"
              geometry={nodes.큐브048.geometry}
              material={materials["매테리얼.032"]}
              position={[-1.69, 2.97, -1.85]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브049"
              geometry={nodes.큐브049.geometry}
              material={materials["매테리얼.032"]}
              position={[-1.53, 2.97, -1.85]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브050"
              geometry={nodes.큐브050.geometry}
              material={materials["매테리얼.032"]}
              position={[-1.61, 2.97, -1.93]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브051"
              geometry={nodes.큐브051.geometry}
              material={nodes.큐브051.material}
              position={[-1.71, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브052"
              geometry={nodes.큐브052.geometry}
              material={nodes.큐브052.material}
              position={[-1.62, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브053"
              geometry={nodes.큐브053.geometry}
              material={nodes.큐브053.material}
              position={[-1.53, 2.99, -2.04]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브054"
              geometry={nodes.큐브054.geometry}
              material={nodes.큐브054.material}
              position={[-1.71, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브055"
              geometry={nodes.큐브055.geometry}
              material={nodes.큐브055.material}
              position={[-1.62, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브056"
              geometry={nodes.큐브056.geometry}
              material={nodes.큐브056.material}
              position={[-1.53, 2.99, -2.14]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브057"
              geometry={nodes.큐브057.geometry}
              material={materials["매테리얼.032"]}
              position={[-2.77, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브058"
              geometry={nodes.큐브058.geometry}
              material={materials["매테리얼.032"]}
              position={[-2.69, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브059"
              geometry={nodes.큐브059.geometry}
              material={materials["매테리얼.032"]}
              position={[-2.6, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브060"
              geometry={nodes.큐브060.geometry}
              material={materials["매테리얼.032"]}
              position={[-2.51, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브061"
              geometry={nodes.큐브061.geometry}
              material={materials["매테리얼.032"]}
              position={[-2.42, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브062"
              geometry={nodes.큐브062.geometry}
              material={materials["매테리얼.032"]}
              position={[-2.33, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브063"
              geometry={nodes.큐브063.geometry}
              material={materials["매테리얼.032"]}
              position={[-2.24, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브064"
              geometry={nodes.큐브064.geometry}
              material={materials["매테리얼.032"]}
              position={[-2.14, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브065"
              geometry={nodes.큐브065.geometry}
              material={materials["매테리얼.032"]}
              position={[-2.05, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브066"
              geometry={nodes.큐브066.geometry}
              material={materials["매테리얼.032"]}
              position={[-1.97, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브067"
              geometry={nodes.큐브067.geometry}
              material={materials["매테리얼.032"]}
              position={[-1.88, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브068"
              geometry={nodes.큐브068.geometry}
              material={materials["매테리얼.032"]}
              position={[-1.79, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브069"
              geometry={nodes.큐브069.geometry}
              material={materials["매테리얼.032"]}
              position={[-1.71, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브070"
              geometry={nodes.큐브070.geometry}
              material={materials["매테리얼.032"]}
              position={[-1.62, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브071"
              geometry={nodes.큐브071.geometry}
              material={materials["매테리얼.032"]}
              position={[-1.53, 2.99, -2.24]}
              rotation={[0.04, 0, 0]}
              scale={[0.03, 0.02, 0.03]}
            />
            <mesh
              name="큐브072"
              geometry={nodes.큐브072.geometry}
              material={materials["매테리얼.034"]}
              position={[-2.14, 3.69, -2.72]}
              rotation={[0, 0, -Math.PI]}
              scale={[-0.8, -0.57, -0.02]}
            />
            <mesh
              name="큐브073"
              geometry={nodes.큐브073.geometry}
              material={materials["매테리얼.035"]}
              position={[-2.14, 3.09, -2.98]}
              scale={[0.09, 0.18, 0.09]}
            />
            <mesh
              name="큐브074"
              geometry={nodes.큐브074.geometry}
              material={materials["매테리얼.036"]}
              position={[-0.99, 2.96, -2.04]}
              scale={[0.11, 0.06, 0.15]}
            />
            <group
              name="큐브075"
              position={[-1.02, 1.6, -2.43]}
              scale={[0.31, 0.53, 0.49]}
            >
              <mesh
                name="큐브075_1"
                geometry={nodes.큐브075_1.geometry}
                material={materials["매테리얼.037"]}
              />
              <mesh
                name="큐브075_2"
                geometry={nodes.큐브075_2.geometry}
                material={materials["매테리얼.038"]}
              />
            </group>
            {/* 책상 3 */}
            <group
              name="Sketchfab_model005"
              position={[-2.14, 2.57, -0.45]}
              rotation={[-Math.PI / 2, 0, 2.44]}
              scale={0.09}
            >
              <group
                name="52a87d3d75a74c3a92e73e9ae865fb46fbx"
                rotation={[Math.PI / 2, 0, 0]}
              >
                <group name="RootNode">
                  <group name="group1">
                    <group name="back2">
                      <mesh
                        name="back2_aiStandardSurface1_0"
                        geometry={nodes.back2_aiStandardSurface1_0.geometry}
                        material={materials.aiStandardSurface1}
                      />
                    </group>
                    <group name="back_bone">
                      <mesh
                        name="back_bone_aiStandardSurface1_0"
                        geometry={nodes.back_bone_aiStandardSurface1_0.geometry}
                        material={materials.aiStandardSurface1}
                      />
                    </group>
                    <group name="base">
                      <group name="adjustment">
                        <mesh
                          name="adjustment_aiStandardSurface1_0"
                          geometry={
                            nodes.adjustment_aiStandardSurface1_0.geometry
                          }
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group
                        name="Bolt"
                        position={[-1.7, -9.01, -0.19]}
                        rotation={[0, 0, Math.PI / 2]}
                        scale={[0.19, 0.05, 0.19]}
                      >
                        <mesh
                          name="Bolt_aiStandardSurface1_0"
                          geometry={nodes.Bolt_aiStandardSurface1_0.geometry}
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group
                        name="Bolt1"
                        position={[-1.38, -9.26, -1.91]}
                        rotation={[0, 0, 1.44]}
                        scale={[0.12, 0.06, 0.12]}
                      >
                        <mesh
                          name="Bolt1_aiStandardSurface1_0"
                          geometry={nodes.Bolt1_aiStandardSurface1_0.geometry}
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group
                        name="Bolt2"
                        position={[0.62, -9.26, -1.91]}
                        rotation={[0, 0, 1.69]}
                        scale={[0.12, 0.06, 0.12]}
                      >
                        <mesh
                          name="Bolt2_aiStandardSurface1_0"
                          geometry={nodes.Bolt2_aiStandardSurface1_0.geometry}
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group
                        name="Bolt3"
                        position={[0.97, -9.01, -0.19]}
                        rotation={[0, 0, Math.PI / 2]}
                        scale={[0.19, 0.05, 0.19]}
                      >
                        <mesh
                          name="Bolt3_aiStandardSurface1_0"
                          geometry={nodes.Bolt3_aiStandardSurface1_0.geometry}
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group
                        name="pCube6"
                        position={[1.12, -9.45, 1.61]}
                        rotation={[0.78, -0.04, 2.35]}
                        scale={[0.03, 1.25, 0.74]}
                      >
                        <mesh
                          name="pCube6_aiStandardSurface1_0"
                          geometry={nodes.pCube6_aiStandardSurface1_0.geometry}
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group name="pCube9">
                        <mesh
                          name="pCube9_aiStandardSurface1_0"
                          geometry={nodes.pCube9_aiStandardSurface1_0.geometry}
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group
                        name="pCylinder10"
                        position={[-0.44, -9.59, 1.61]}
                        rotation={[-0.17, 0, 0]}
                        scale={0.65}
                      >
                        <mesh
                          name="pCylinder10_aiStandardSurface1_0"
                          geometry={
                            nodes.pCylinder10_aiStandardSurface1_0.geometry
                          }
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group
                        name="pCylinder14"
                        position={[-0.72, -0.43, -2]}
                        rotation={[2.97, 0, 0]}
                        scale={-1}
                      >
                        <mesh
                          name="pCylinder14_aiStandardSurface1_0"
                          geometry={
                            nodes.pCylinder14_aiStandardSurface1_0.geometry
                          }
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group
                        name="polySurface11"
                        position={[-0.19, 0.08, 0.36]}
                        scale={[1.96, 1, 1]}
                      >
                        <mesh
                          name="polySurface11_aiStandardSurface1_0"
                          geometry={
                            nodes.polySurface11_aiStandardSurface1_0.geometry
                          }
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group name="pPlane3">
                        <mesh
                          name="pPlane3_aiStandardSurface1_0"
                          geometry={nodes.pPlane3_aiStandardSurface1_0.geometry}
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                    </group>
                    <group name="butt">
                      <mesh
                        name="butt_aiStandardSurface1_0"
                        geometry={nodes.butt_aiStandardSurface1_0.geometry}
                        material={materials.aiStandardSurface1}
                      />
                    </group>
                    <group name="L_handle">
                      <mesh
                        name="L_handle_aiStandardSurface1_0"
                        geometry={nodes.L_handle_aiStandardSurface1_0.geometry}
                        material={materials.aiStandardSurface1}
                      />
                    </group>
                    <group
                      name="R_handle"
                      position={[-0.76, 0, 0]}
                      rotation={[-Math.PI, 0, 0]}
                      scale={-1}
                    >
                      <mesh
                        name="R_handle_aiStandardSurface1_0"
                        geometry={nodes.R_handle_aiStandardSurface1_0.geometry}
                        material={materials.aiStandardSurface1}
                      />
                    </group>
                    <group name="wheel1">
                      <group name="polySurface24">
                        <mesh
                          name="polySurface24_aiStandardSurface1_0"
                          geometry={
                            nodes.polySurface24_aiStandardSurface1_0.geometry
                          }
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group name="polySurface43">
                        <mesh
                          name="polySurface43_aiStandardSurface1_0"
                          geometry={
                            nodes.polySurface43_aiStandardSurface1_0.geometry
                          }
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group name="wheel">
                        <mesh
                          name="wheel_aiStandardSurface1_0"
                          geometry={nodes.wheel_aiStandardSurface1_0.geometry}
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group
                        name="wheel2"
                        position={[0.32, 0, -1.27]}
                        rotation={[0, 1.57, 0]}
                      >
                        <mesh
                          name="wheel2_aiStandardSurface1_0"
                          geometry={nodes.wheel2_aiStandardSurface1_0.geometry}
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group
                        name="wheel3"
                        position={[-1.27, 0, -0.32]}
                        rotation={[0, -1.57, 0]}
                      >
                        <mesh
                          name="wheel3_aiStandardSurface1_0"
                          geometry={nodes.wheel3_aiStandardSurface1_0.geometry}
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                      <group
                        name="wheel4"
                        position={[-0.96, 0, -1.59]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                      >
                        <mesh
                          name="wheel4_aiStandardSurface1_0"
                          geometry={nodes.wheel4_aiStandardSurface1_0.geometry}
                          material={materials.aiStandardSurface1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </>
        );
      case "4":
        return (
          <>
            {/* 책상 4 */}
            <group
              name="table_3"
              position={[-2.02, 2.48, -2.31]}
              rotation={[-Math.PI / 2, 0, 3.12]}
              scale={1.89}
            >
              <group
                name="Collada_visual_scene_group001"
                rotation={[Math.PI / 2, 0, 0]}
              >
                <group name="desk5">
                  <mesh
                    name="defaultMaterial001"
                    geometry={nodes.defaultMaterial001.geometry}
                    material={materials.DefaultMaterial}
                    position={[0.02, 0.02, -0.02]}
                  />
                </group>
              </group>
            </group>
          </>
        );
    }
  };

  const selectBed = () => {
    switch (itemStatus?.bed) {
      case "1":
        return (
          <>
            {" "}
            {/*  침대1 시작 */}
            <mesh
              name="구체"
              geometry={nodes.구체.geometry}
              material={materials["매테리얼.002"]}
              position={[0.8, 3.32, 0.69]}
              scale={0.27}
            />
            <mesh
              name="평면003"
              geometry={nodes.평면003.geometry}
              material={materials["매테리얼.005"]}
              position={[2.14, 2.19, -1.23]}
              scale={[1.24, 2.03, 2.03]}
            />
            <mesh
              name="평면004"
              geometry={nodes.평면004.geometry}
              material={materials["매테리얼.003"]}
              position={[2.14, 0.87, -1.23]}
              scale={3.9}
            />
            <mesh
              name="평면005"
              geometry={nodes.평면005.geometry}
              material={materials["매테리얼.001"]}
              position={[0.79, 1.05, 0.69]}
              scale={[-0.12, -0.2, -0.12]}
            />
            <mesh
              name="평면006"
              geometry={nodes.평면006.geometry}
              material={nodes.평면006.material}
              position={[2.14, 2.48, -1.23]}
              scale={[1.24, 2.03, 1.66]}
            />{" "}
            <mesh
              name="평면007"
              geometry={nodes.평면007.geometry}
              material={materials.매테리얼}
              position={[2.14, 2.48, -1]}
              scale={[1.24, 2.03, 2.05]}
            />
            <mesh
              name="평면008"
              geometry={nodes.평면008.geometry}
              material={materials["매테리얼.004"]}
              position={[2.14, 2.68, -2.51]}
              scale={[0.46, 1.45, 0.28]}
            />{" "}
            {/* 침대1 끝 */}
          </>
        );
      case "2":
        return (
          <>
            {" "}
            {/* 침대 2 */}
            <mesh
              name="구체007"
              geometry={nodes.구체007.geometry}
              material={materials["매테리얼.049"]}
              position={[1.9, 3.31, -0.57]}
              rotation={[-2.82, -0.25, -3.06]}
              scale={[0, 0.01, 0.01]}
            />
            <mesh
              name="실린더003"
              geometry={nodes.실린더003.geometry}
              material={materials["매테리얼.042"]}
              position={[3.46, 2.27, -3.25]}
              rotation={[0, 1.57, 0]}
              scale={0.08}
            />
            <mesh
              name="실린더004"
              geometry={nodes.실린더004.geometry}
              material={materials["매테리얼.042"]}
              position={[3.09, 2.27, -3.25]}
              rotation={[0, 1.57, 0]}
              scale={0.06}
            />
            <mesh
              name="실린더005"
              geometry={nodes.실린더005.geometry}
              material={materials["매테리얼.042"]}
              position={[2.72, 2.27, -3.25]}
              rotation={[0, 1.57, 0]}
              scale={0.06}
            />
            <mesh
              name="실린더006"
              geometry={nodes.실린더006.geometry}
              material={materials["매테리얼.042"]}
              position={[1.72, 1.51, 0.97]}
              rotation={[0, 1.57, 0]}
              scale={[0.1, 0.51, 0.11]}
            />
            <mesh
              name="실린더007"
              geometry={nodes.실린더007.geometry}
              material={materials["매테리얼.046"]}
              position={[1.79, 1.91, -0.39]}
              rotation={[0, 1.57, 0]}
              scale={0.09}
            />
            <mesh
              name="큐브077"
              geometry={nodes.큐브077.geometry}
              material={materials["매테리얼.042"]}
              position={[2.54, 1.98, -0.98]}
              rotation={[0, 1.57, 0]}
              scale={[2.38, 0.07, 1.08]}
            />
            <mesh
              name="큐브078"
              geometry={nodes.큐브078.geometry}
              material={materials["매테리얼.043"]}
              position={[2.54, 2.2, -0.98]}
              rotation={[0, 1.57, 0]}
              scale={[2.33, 0.07, 1.08]}
            />
            <mesh
              name="큐브079"
              geometry={nodes.큐브079.geometry}
              material={materials["매테리얼.043"]}
              position={[2.54, 2.42, -0.98]}
              rotation={[0, 1.57, 0]}
              scale={[2.33, 0.07, 1.08]}
            />
            <mesh
              name="큐브080"
              geometry={nodes.큐브080.geometry}
              material={materials["매테리얼.044"]}
              position={[2.54, 2.62, -2.66]}
              rotation={[0, 1.57, 0]}
              scale={[0.24, 0.13, 0.37]}
            />
            <mesh
              name="큐브081"
              geometry={nodes.큐브081.geometry}
              material={materials["매테리얼.048"]}
              position={[1.89, 3.29, -0.61]}
              rotation={[Math.PI, -0.26, Math.PI]}
              scale={[0.07, 0.04, 0.09]}
            />
            <mesh
              name="평면024"
              geometry={nodes.평면024.geometry}
              material={materials["매테리얼.045"]}
              position={[2.54, 2.56, -0.98]}
              rotation={[0, 1.57, 0]}
              scale={[1.25, 0.63, 1.1]}
            />
            <mesh
              name="평면025"
              geometry={nodes.평면025.geometry}
              material={materials["매테리얼.045"]}
              position={[3.65, 2.33, -0.98]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1.25, 0.63, 0.22]}
            />
            <mesh
              name="평면026"
              geometry={nodes.평면026.geometry}
              material={materials["매테리얼.047"]}
              position={[2.54, 3.27, -0.38]}
              rotation={[0, 1.57, 0]}
              scale={[0.63, 0.63, 1.01]}
            />
            {/* 침대 2 종료 */}
          </>
        );

      case "3":
        return (
          <>
            {/* 침대 3 */}
            <group
              name="bed3"
              position={[2.39, 1.41, -1.2]}
              rotation={[-Math.PI / 2, 0, 1.55]}
              scale={[1.78, 1.66, 1.66]}
            >
              <group
                name="f0d6c7ac3c5241dd81660a8955460cd5fbx"
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
              >
                <group name="RootNode005">
                  <group
                    name="Bed"
                    position={[114.94, -20.06, -85.32]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  >
                    <group
                      name="BedFeets"
                      position={[-2.17, -1.74, 0.03]}
                      scale={0.03}
                    >
                      <mesh
                        name="BedFeets_BedFeets_0"
                        geometry={nodes.BedFeets_BedFeets_0.geometry}
                        material={materials.BedFeets}
                      />
                    </group>
                    <group
                      name="Duvet"
                      position={[-1.44, -0.9, 0.68]}
                      scale={[0.95, 1.17, 1]}
                    >
                      <mesh
                        name="Duvet_Duvet_0"
                        geometry={nodes.Duvet_Duvet_0.geometry}
                        material={materials.Duvet}
                      />
                    </group>
                    <group name="Matress" position={[-1.15, -0.85, 0.42]}>
                      <mesh
                        name="Matress_Matress_0"
                        geometry={nodes.Matress_Matress_0.geometry}
                        material={materials.Matress}
                      />
                    </group>
                    <group
                      name="Pillows"
                      position={[-0.37, -0.46, 0.71]}
                      rotation={[0, 0, -0.02]}
                      scale={0.75}
                    >
                      <mesh
                        name="Pillows_Pillows_0"
                        geometry={nodes.Pillows_Pillows_0.geometry}
                        material={materials.Pillows}
                      />
                    </group>
                    <mesh
                      name="Bed_Bed_0"
                      geometry={nodes.Bed_Bed_0.geometry}
                      material={materials["material.002"]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </>
        );
      case "4":
        return <></>;
    }
  };

  const [isLamp, setIsLamp] = useState(false);

  const selectLamp = () => {
    switch (itemStatus?.lamp) {
      case "1":
        return (
          <>
            {/* 조명 */}
            <group
              name="Sketchfab_model002"
              position={[-0.3, 1.01, -1.35]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={4.7}
              onClick={() => setIsLamp((prev) => !prev)}
            >
              <group name="root">
                <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Lamp_01_3" scale={0.14}>
                    <mesh
                      name="Object_8001"
                      geometry={nodes.Object_8001.geometry}
                      material={materials[".002"]}
                      position={[0.64, 0.17, -1.14]}
                      scale={0.5}
                      castShadow
                      receiveShadow
                    />
                    {isLamp && (
                      <pointLight
                        castShadow
                        position={[0.64, 3.5, -1.14]}
                        power={4}
                        color={"#ffe54f"}
                      />
                    )}
                    <mesh
                      name="Object_4002"
                      geometry={nodes.Object_4002.geometry}
                      material={materials[".001"]}
                      position={[0.64, 0.17, -1.14]}
                      scale={0.5}
                      receiveShadow
                    />
                  </group>
                </group>
              </group>
            </group>
          </>
        );
      case "2":
        return (
          <>
            {" "}
            {/* 조명2 */}
            <mesh
              name="구체008"
              geometry={nodes.구체008.geometry}
              material={materials["매테리얼.054"]}
              position={[0.75, 4.05, -2.39]}
              scale={0.14}
            />
            {isLamp && (
              <pointLight position={[3, 3.05, -2.39]} intensity={0.4} />
            )}
            <mesh
              name="실린더008"
              geometry={nodes.실린더008.geometry}
              material={materials["매테리얼.053"]}
              position={[0.1, 2, -2.41]}
              scale={0.03}
              onClick={() => setIsLamp((prev) => !prev)}
            />
            <mesh
              name="원뿔"
              geometry={nodes.원뿔.geometry}
              material={materials["매테리얼.052"]}
              position={[0.63, 4.24, -2.39]}
              rotation={[0, 0, 0.52]}
              scale={0.27}
              onClick={() => setIsLamp((prev) => !prev)}
            />
            <mesh
              name="평면027"
              geometry={nodes.평면027.geometry}
              material={materials["매테리얼.051"]}
              position={[0.1, 1.13, -2.41]}
              scale={0.47}
              onClick={() => setIsLamp((prev) => !prev)}
            />
            {/* 조명2 끝 */}
          </>
        );
    }
  };

  const selectEtc = () => {
    switch (itemStatus?.etc) {
      case "1":
        return (
          <>
            {/* 기타 가구1 */}
            <group
              name="game_machine1"
              position={[2.69, 1.05, 2.86]}
              rotation={[-Math.PI / 2, 0, -3.1]}
              scale={0.01}
            >
              <group name="root002" position={[3.63, 13.27, -2.6]}>
                <group
                  name="GLTF_SceneRootNode002"
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <group name="RootNode_13">
                    <group
                      name="ArcadeMachine_12"
                      position={[72.61, 2.16, -78.68]}
                      rotation={[Math.PI / 2, 0, Math.PI]}
                      scale={[7.25, 7.25, 4.89]}
                    >
                      <group name="ArcadeMachine001_0">
                        <mesh
                          name="Object_6002"
                          geometry={nodes.Object_6002.geometry}
                          material={materials.body_main}
                        />
                      </group>
                      <group name="ArcadeMachine002_1">
                        <mesh
                          name="Object_8002"
                          geometry={nodes.Object_8002.geometry}
                          material={materials.screen}
                        />
                        <mesh
                          name="Object_9001"
                          geometry={nodes.Object_9001.geometry}
                          material={materials.body_main}
                        />
                      </group>
                      <group name="ArcadeMachine003_2">
                        <mesh
                          name="Object_11001"
                          geometry={nodes.Object_11001.geometry}
                          material={materials.body_panel}
                        />
                      </group>
                      <group name="ArcadeMachine004_3">
                        <mesh
                          name="Object_13"
                          geometry={nodes.Object_13.geometry}
                          material={materials.game_panel}
                        />
                      </group>
                      <group name="ArcadeMachine005_4">
                        <mesh
                          name="Object_15"
                          geometry={nodes.Object_15.geometry}
                          material={materials.sound_panel}
                        />
                      </group>
                      <group name="ArcadeMachine006_5">
                        <mesh
                          name="Object_17"
                          geometry={nodes.Object_17.geometry}
                          material={materials.banner}
                        />
                      </group>
                      <group name="ArcadeMachine007_6">
                        <mesh
                          name="Object_19"
                          geometry={nodes.Object_19.geometry}
                          material={materials.steel}
                        />
                      </group>
                      <group name="ArcadeMachine008_7">
                        <mesh
                          name="Object_21001"
                          geometry={nodes.Object_21001.geometry}
                          material={materials.butt_a}
                        />
                      </group>
                      <group name="ArcadeMachine009_8">
                        <mesh
                          name="Object_23001"
                          geometry={nodes.Object_23001.geometry}
                          material={materials.butt_b}
                        />
                      </group>
                      <group name="ArcadeMachine010_9">
                        <mesh
                          name="Object_25001"
                          geometry={nodes.Object_25001.geometry}
                          material={materials.butt_c}
                        />
                      </group>
                      <group name="ArcadeMachine011_10">
                        <mesh
                          name="Object_27001"
                          geometry={nodes.Object_27001.geometry}
                          material={materials.butt_d}
                        />
                      </group>
                      <group name="ArcadeMachine012_11">
                        <mesh
                          name="Object_29001"
                          geometry={nodes.Object_29001.geometry}
                          material={materials.speakers}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </>
        );
      case "2":
        return (
          <>
            {" "}
            {/* 기타 가구2 */}
            <group
              name="game_machine2"
              position={[-4.03, 1.01, 0.53]}
              rotation={[-Math.PI / 2, 0, -1.59]}
              scale={0.85}
            >
              <group
                name="18d2dd24dc4949d893ee5b3fddae4232fbx"
                rotation={[Math.PI / 2, 0, 0]}
              >
                <group name="RootNode003">
                  <group name="pCylinder57">
                    <mesh
                      name="pCylinder57_solidShader3_0"
                      geometry={nodes.pCylinder57_solidShader3_0.geometry}
                      material={materials.solidShader3}
                    />
                  </group>
                  <group name="polySurface113">
                    <mesh
                      name="polySurface113_lambert10_0"
                      geometry={nodes.polySurface113_lambert10_0.geometry}
                      material={materials.lambert10}
                    />
                  </group>
                  <group name="polySurface24001">
                    <mesh
                      name="polySurface24_lambert11_0"
                      geometry={nodes.polySurface24_lambert11_0.geometry}
                      material={materials.lambert11}
                    />
                  </group>
                  <group name="polySurface42">
                    <mesh
                      name="polySurface42_blinn4_0"
                      geometry={nodes.polySurface42_blinn4_0.geometry}
                      material={materials.blinn4}
                    />
                  </group>
                  <group name="polySurface65">
                    <mesh
                      name="polySurface65_solidShader2_0"
                      geometry={nodes.polySurface65_solidShader2_0.geometry}
                      material={materials.solidShader2}
                    />
                  </group>
                  <group name="polySurface79" position={[11.47, 0, -0.53]}>
                    <group name="polySurface100">
                      <mesh
                        name="polySurface100_lambert10_0"
                        geometry={nodes.polySurface100_lambert10_0.geometry}
                        material={materials.lambert10}
                      />
                    </group>
                    <group name="polySurface91">
                      <mesh
                        name="polySurface91_lambert10_0"
                        geometry={nodes.polySurface91_lambert10_0.geometry}
                        material={materials.lambert10}
                      />
                    </group>
                    <group name="polySurface92">
                      <mesh
                        name="polySurface92_lambert10_0"
                        geometry={nodes.polySurface92_lambert10_0.geometry}
                        material={materials.lambert10}
                      />
                    </group>
                    <group name="polySurface93">
                      <mesh
                        name="polySurface93_lambert10_0"
                        geometry={nodes.polySurface93_lambert10_0.geometry}
                        material={materials.lambert10}
                      />
                    </group>
                    <group name="polySurface94">
                      <mesh
                        name="polySurface94_lambert10_0"
                        geometry={nodes.polySurface94_lambert10_0.geometry}
                        material={materials.lambert10}
                      />
                    </group>
                    <group name="polySurface96">
                      <mesh
                        name="polySurface96_lambert10_0"
                        geometry={nodes.polySurface96_lambert10_0.geometry}
                        material={materials.lambert10}
                      />
                    </group>
                    <group name="polySurface97">
                      <mesh
                        name="polySurface97_lambert10_0"
                        geometry={nodes.polySurface97_lambert10_0.geometry}
                        material={materials.lambert10}
                      />
                    </group>
                    <group name="polySurface99">
                      <mesh
                        name="polySurface99_lambert10_0"
                        geometry={nodes.polySurface99_lambert10_0.geometry}
                        material={materials.lambert10}
                      />
                    </group>
                  </group>
                  <group name="polySurface80">
                    <mesh
                      name="polySurface80_lambert10_0"
                      geometry={nodes.polySurface80_lambert10_0.geometry}
                      material={materials.lambert10}
                    />
                  </group>
                  <group name="polySurface89">
                    <mesh
                      name="polySurface89_lambert10_0"
                      geometry={nodes.polySurface89_lambert10_0.geometry}
                      material={materials.lambert10}
                    />
                  </group>
                  <group name="polySurface95">
                    <mesh
                      name="polySurface95_lambert10_0"
                      geometry={nodes.polySurface95_lambert10_0.geometry}
                      material={materials.lambert10}
                    />
                  </group>
                  <group name="polySurface98">
                    <mesh
                      name="polySurface98_lambert10_0"
                      geometry={nodes.polySurface98_lambert10_0.geometry}
                      material={materials.lambert10}
                    />
                  </group>
                </group>
              </group>
            </group>
          </>
        );
      case "3":
        return (
          <>
            {" "}
            {/* 기타 가구3 (소파) */}
            <group
              name="sofa_2"
              position={[2.78, 1.02, 3.01]}
              rotation={[-Math.PI / 2, 0, -1.58]}
              scale={[1.45, 1.79, 1.45]}
            >
              <group name="Couchfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
                <group name="RootNode004">
                  <group name="Couch" scale={0.1}>
                    <group name="Cloth_low">
                      <mesh
                        name="Cloth_low_CouchMat_0"
                        geometry={nodes.Cloth_low_CouchMat_0.geometry}
                        material={materials.CouchMat}
                      />
                    </group>
                    <group name="Couch_low">
                      <mesh
                        name="Couch_low_CouchMat_0"
                        geometry={nodes.Couch_low_CouchMat_0.geometry}
                        material={materials.CouchMat}
                      />
                    </group>
                    <group name="CushionA_low">
                      <mesh
                        name="CushionA_low_CouchMat_0"
                        geometry={nodes.CushionA_low_CouchMat_0.geometry}
                        material={materials.CouchMat}
                      />
                    </group>
                    <group name="CushionB_low">
                      <mesh
                        name="CushionB_low_CouchMat_0"
                        geometry={nodes.CushionB_low_CouchMat_0.geometry}
                        material={materials.CouchMat}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </>
        );
      case "4":
        return (
          <>
            {" "}
            {/* 기타 가구 4 */}
            <group
              name="Sketchfab_model004"
              position={[2.67, 0.96, 2.89]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.05, 0.03, 0.04]}
            >
              <group
                name="JES3S111114_BIGobjcleanergles"
                position={[-44.67, -17.64, 0]}
              >
                <group name="Object_2">
                  <mesh
                    name="Object_3"
                    geometry={nodes.Object_3.geometry}
                    material={materials.Material__7}
                    position={[15.29, 0, 0]}
                    scale={[0.72, 1.1, 1.1]}
                  />
                  <mesh
                    name="Object_4"
                    geometry={nodes.Object_4.geometry}
                    material={materials.Material__7}
                    position={[15.29, 0, 0]}
                    scale={[0.72, 1.1, 1.1]}
                  />
                  <mesh
                    name="Object_5"
                    geometry={nodes.Object_5.geometry}
                    material={materials.Material__7}
                    position={[15.29, 0, 0]}
                    scale={[0.72, 1.1, 1.1]}
                  />
                  <mesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials.Material__7}
                    position={[15.29, 0, 0]}
                    scale={[0.72, 1.1, 1.1]}
                  />
                </group>
              </group>
            </group>
          </>
        );

      case "5":
        return (
          <>
            {/* 자동차인가..? */}
            <group
              name="Sketchfab_model003"
              position={[0, 1.03, 2.57]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <group name="root001">
                <group
                  name="GLTF_SceneRootNode001"
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <group name="Anten_89" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_197"
                      geometry={nodes.Object_197.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Back_Pahloo_53" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_118"
                      geometry={nodes.Object_118.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="Back_Side_Roosh_10"
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object_27"
                      geometry={nodes.Object_27.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Back_Side_9" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_25"
                      geometry={nodes.Object_25.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Barf_Pakon_90" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_199"
                      geometry={nodes.Object_199.geometry}
                      material={materials.Color_00}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="BezierCurve_108"
                    position={[0.47, 0, 0]}
                    rotation={[0, 0, 1.6]}
                    scale={0.13}
                  >
                    <mesh
                      name="Object_244"
                      geometry={nodes.Object_244.geometry}
                      material={materials["Material.002"]}
                      position={[-0.03, -4.83, 11]}
                      rotation={[-1.57, 0.03, 0.03]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="Cooler_001_97"
                    position={[1.19, 0.25, 0.67]}
                    rotation={[-Math.PI / 2, 0, -1.57]}
                    scale={2.63}
                  >
                    <mesh
                      name="Object_211"
                      geometry={nodes.Object_211.geometry}
                      material={materials.Metal_Part}
                    />
                    <mesh
                      name="Object_212"
                      geometry={nodes.Object_212.geometry}
                      material={materials.Glass}
                    />
                    <mesh
                      name="Object_213"
                      geometry={nodes.Object_213.geometry}
                      material={materials["1_analog"]}
                    />
                    <mesh
                      name="Object_214"
                      geometry={nodes.Object_214.geometry}
                      material={materials["2_analog"]}
                    />
                    <mesh
                      name="Object_215"
                      geometry={nodes.Object_215.geometry}
                      material={materials["3_analog"]}
                    />
                    <mesh
                      name="Object_216"
                      geometry={nodes.Object_216.geometry}
                      material={materials["4_analog"]}
                    />
                    <mesh
                      name="Object_217"
                      geometry={nodes.Object_217.geometry}
                      material={materials["5_analog"]}
                    />
                  </group>
                  {/*  자동차 시작? */}
                  <group name="Cooler__96" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_209"
                      geometry={nodes.Object_209.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="Cylinder_106"
                    position={[0.69, 0.57, 0.25]}
                    rotation={[0, -1.57, 0]}
                    scale={0.01}
                  >
                    <mesh
                      name="Object_239"
                      geometry={nodes.Object_239.geometry}
                      material={materials.Metal_Part}
                    />
                  </group>
                  <group
                    name="Dande_$_Farmoon_95"
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object_207"
                      geometry={nodes.Object_207.geometry}
                      material={materials.Black}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="Disk_Breake_Front_99"
                    position={[0, 0.01, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object_221"
                      geometry={nodes.Object_221.geometry}
                      material={materials.material}
                      position={[1.12, -0.25, 0.04]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Door_lock1_93" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_203"
                      geometry={nodes.Object_203.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Exus_12" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_31"
                      geometry={nodes.Object_31.geometry}
                      material={materials["Material.012"]}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="Ford_Logo_104"
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.11}
                  >
                    <mesh
                      name="Object_233"
                      geometry={nodes.Object_233.geometry}
                      material={materials.Logo_Ford}
                      position={[9.8, 2.17, -0.14]}
                      rotation={[0, 0, 1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Front_light10_6" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_18"
                      geometry={nodes.Object_18.geometry}
                      material={materials.black1}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="Front_light11_23"
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object_55"
                      geometry={nodes.Object_55.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_56"
                      geometry={nodes.Object_56.geometry}
                      material={materials["Color_04.001"]}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Front_light2_68" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_152"
                      geometry={nodes.Object_152.geometry}
                      material={materials.Glass}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Front_light3_74" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_164"
                      geometry={nodes.Object_164.geometry}
                      material={materials.detail01}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Front_light4_40" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_91"
                      geometry={nodes.Object_91.geometry}
                      material={materials.detail01}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Front_light5_66" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_146"
                      geometry={nodes.Object_146.geometry}
                      material={materials.detail02}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Front_light6_46" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_106"
                      geometry={nodes.Object_106.geometry}
                      material={materials.textur01}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_107"
                      geometry={nodes.Object_107.geometry}
                      material={materials["Material.005"]}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="Front_light7_&_lockdoor_24"
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object_58"
                      geometry={nodes.Object_58.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Front_light8_33" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_77"
                      geometry={nodes.Object_77.geometry}
                      material={materials.Glass}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Front_light9_28" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_66"
                      geometry={nodes.Object_66.geometry}
                      material={materials.textured}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_67"
                      geometry={nodes.Object_67.geometry}
                      material={materials.Front_light}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Front_light_67" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_148"
                      geometry={nodes.Object_148.geometry}
                      material={materials.head_lig}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_149"
                      geometry={nodes.Object_149.geometry}
                      material={materials.Metal_back}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_150"
                      geometry={nodes.Object_150.geometry}
                      material={materials.Head_Light}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Kapoot_7" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_20"
                      geometry={nodes.Object_20.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_21"
                      geometry={nodes.Object_21.geometry}
                      material={materials["Color_04.001"]}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Miror1001_20" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_48"
                      geometry={nodes.Object_48.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.01]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_49"
                      geometry={nodes.Object_49.geometry}
                      material={materials.Miror}
                      position={[1.12, -0.25, 0.01]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Miror1_94" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_205"
                      geometry={nodes.Object_205.geometry}
                      material={materials.Black}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_122_8" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_23"
                      geometry={nodes.Object_23.geometry}
                      material={materials.Black}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_152_13" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_33"
                      geometry={nodes.Object_33.geometry}
                      material={materials.tail_lig}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_34"
                      geometry={nodes.Object_34.geometry}
                      material={materials.Back_main_Light}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_154_14" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_36"
                      geometry={nodes.Object_36.geometry}
                      material={materials.tail_lig}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_37"
                      geometry={nodes.Object_37.geometry}
                      material={materials.Back_main_Light}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_156_15" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_39"
                      geometry={nodes.Object_39.geometry}
                      material={materials.tail_lig}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_40"
                      geometry={nodes.Object_40.geometry}
                      material={materials.Back_main_Light}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_159_16" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_42"
                      geometry={nodes.Object_42.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_172_17" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_44"
                      geometry={nodes.Object_44.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_177_19" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_46"
                      geometry={nodes.Object_46.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_191_21" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_51"
                      geometry={nodes.Object_51.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_202_29" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_69"
                      geometry={nodes.Object_69.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_203_30" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_71"
                      geometry={nodes.Object_71.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_205_31" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_73"
                      geometry={nodes.Object_73.geometry}
                      material={materials.material_0}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_206_32" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_75"
                      geometry={nodes.Object_75.geometry}
                      material={materials.Metal_back}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_212_34" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_79"
                      geometry={nodes.Object_79.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_218_35" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_81"
                      geometry={nodes.Object_81.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_223_36" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_83"
                      geometry={nodes.Object_83.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_224_37" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_85"
                      geometry={nodes.Object_85.geometry}
                      material={materials.FrontCol}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_230_39" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_89"
                      geometry={nodes.Object_89.geometry}
                      material={materials["Material.010"]}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_233_41" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_93"
                      geometry={nodes.Object_93.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_235_38" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_87"
                      geometry={nodes.Object_87.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_236_25" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_60"
                      geometry={nodes.Object_60.geometry}
                      material={materials.grille1}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_237_26" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_62"
                      geometry={nodes.Object_62.geometry}
                      material={materials.Color_02}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_238_27" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_64"
                      geometry={nodes.Object_64.geometry}
                      material={materials.Color_03}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_240_42" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_95"
                      geometry={nodes.Object_95.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_241_43" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_97"
                      geometry={nodes.Object_97.geometry}
                      material={materials.FrontCol}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_242_44" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_99"
                      geometry={nodes.Object_99.geometry}
                      material={materials["Material.023"]}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="Object_245001_98"
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object_219"
                      geometry={nodes.Object_219.geometry}
                      material={materials.Carpet}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_245_45" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_101"
                      geometry={nodes.Object_101.geometry}
                      material={materials.Black}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_102"
                      geometry={nodes.Object_102.geometry}
                      material={materials.interior_brown}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_103"
                      geometry={nodes.Object_103.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_104"
                      geometry={nodes.Object_104.geometry}
                      material={materials["Material.004"]}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_251_49" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_109"
                      geometry={nodes.Object_109.geometry}
                      material={materials.material_0}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_265_50" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_111"
                      geometry={nodes.Object_111.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_112"
                      geometry={nodes.Object_112.geometry}
                      material={materials["Color_04.001"]}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_267_51" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_114"
                      geometry={nodes.Object_114.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_270_52" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_116"
                      geometry={nodes.Object_116.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_274_57" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_127"
                      geometry={nodes.Object_127.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_275_58" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_129"
                      geometry={nodes.Object_129.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_278_62" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_137"
                      geometry={nodes.Object_137.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_280_63" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_139"
                      geometry={nodes.Object_139.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_140"
                      geometry={nodes.Object_140.geometry}
                      material={materials.textur01}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_281_59" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_131"
                      geometry={nodes.Object_131.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_282_60" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_133"
                      geometry={nodes.Object_133.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_283_61" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_135"
                      geometry={nodes.Object_135.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_285_64" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_142"
                      geometry={nodes.Object_142.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_292_65" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_144"
                      geometry={nodes.Object_144.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_295_54" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_120"
                      geometry={nodes.Object_120.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_296_55" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_122"
                      geometry={nodes.Object_122.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_123"
                      geometry={nodes.Object_123.geometry}
                      material={materials["Color_04.001"]}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_299_56" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_125"
                      geometry={nodes.Object_125.geometry}
                      material={materials.bbea21f7}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_311_69" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_154"
                      geometry={nodes.Object_154.geometry}
                      material={materials.Color_00}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_315_70" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_156"
                      geometry={nodes.Object_156.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_316_71" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_158"
                      geometry={nodes.Object_158.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_319_72" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_160"
                      geometry={nodes.Object_160.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_320_73" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_162"
                      geometry={nodes.Object_162.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_326_75" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_166"
                      geometry={nodes.Object_166.geometry}
                      material={materials.Black}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_167"
                      geometry={nodes.Object_167.geometry}
                      material={materials["Material.009"]}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_168"
                      geometry={nodes.Object_168.geometry}
                      material={materials.logo_farmoon}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_328_76" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_170"
                      geometry={nodes.Object_170.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_332_78" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_175"
                      geometry={nodes.Object_175.geometry}
                      material={materials.Black}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_333_79" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_177"
                      geometry={nodes.Object_177.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_334_77" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_172"
                      geometry={nodes.Object_172.geometry}
                      material={materials.Color_00}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_173"
                      geometry={nodes.Object_173.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_340_81" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_181"
                      geometry={nodes.Object_181.geometry}
                      material={materials.Metal_back}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_343_82" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_183"
                      geometry={nodes.Object_183.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.01]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_347_83" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_185"
                      geometry={nodes.Object_185.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_349_84" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_187"
                      geometry={nodes.Object_187.geometry}
                      material={materials.Foregrou}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_350_85" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_189"
                      geometry={nodes.Object_189.geometry}
                      material={materials.Color_02}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_352_86" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_191"
                      geometry={nodes.Object_191.geometry}
                      material={materials.Foregrou}
                    />
                  </group>
                  <group name="Object_353_87" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_193"
                      geometry={nodes.Object_193.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_356_88" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_195"
                      geometry={nodes.Object_195.geometry}
                      material={materials.Foregrou}
                    />
                  </group>
                  <group
                    name="Object_361_0"
                    position={[0, 0, -0.02]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object_4001"
                      geometry={nodes.Object_4001.geometry}
                      material={materials["Material.001"]}
                      position={[1.18, -0.27, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_362_1" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_6001"
                      geometry={nodes.Object_6001.geometry}
                      material={materials.Color_02}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_364_3" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_11"
                      geometry={nodes.Object_11.geometry}
                      material={materials.Miror}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_12"
                      geometry={nodes.Object_12.geometry}
                      material={materials.Black}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_367_4" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.interior}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Object_368_5" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials.Glass}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="Plane001_107"
                    position={[0.39, 0.42, 0.53]}
                    rotation={[-1.57, -0.54, -1.57]}
                    scale={[0.03, 0.08, 0.07]}
                  >
                    <mesh
                      name="Object_241"
                      geometry={nodes.Object_241.geometry}
                      material={materials.Black}
                    />
                    <mesh
                      name="Object_242"
                      geometry={nodes.Object_242.geometry}
                      material={materials.Metal_Part}
                    />
                  </group>
                  <group
                    name="Plane002_102"
                    position={[0.91, 0.31, 0.67]}
                    rotation={[0.47, -1.57, 0.47]}
                    scale={[0.23, 0.23, 0.42]}
                  >
                    <mesh
                      name="Object_229"
                      geometry={nodes.Object_229.geometry}
                      material={materials.Carpet}
                    />
                  </group>
                  <group
                    name="Plane003_103"
                    position={[0.91, 0.31, -0.17]}
                    rotation={[0.47, -1.57, 0.47]}
                    scale={[0.23, 0.23, 0.42]}
                  >
                    <mesh
                      name="Object_231"
                      geometry={nodes.Object_231.geometry}
                      material={materials.Carpet}
                    />
                  </group>
                  <group name="Plane_105">
                    <mesh
                      name="Object_235"
                      geometry={nodes.Object_235.geometry}
                      material={materials.Black}
                      position={[1.12, 0.02, 0.25]}
                      rotation={[0, -1.57, 0]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_236"
                      geometry={nodes.Object_236.geometry}
                      material={materials.Glass}
                      position={[1.12, 0.02, 0.25]}
                      rotation={[0, -1.57, 0]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_237"
                      geometry={nodes.Object_237.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, 0.02, 0.25]}
                      rotation={[0, -1.57, 0]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="Ring_Sport_Front_100"
                    position={[0, 0.01, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object_223"
                      geometry={nodes.Object_223.geometry}
                      material={materials["Material.018"]}
                      position={[1.12, -0.25, 0.04]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_224"
                      geometry={nodes.Object_224.geometry}
                      material={materials["Material.008"]}
                      position={[1.12, -0.25, 0.04]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Rooye_Kapoot_22" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_53"
                      geometry={nodes.Object_53.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Sandogh_Agha_2" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.Color_04}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials["Color_04.001"]}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Separ_Jelo_80" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_179"
                      geometry={nodes.Object_179.geometry}
                      material={materials.Metal_Part}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="Tire_Front_101"
                    position={[0, 0.01, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object_226"
                      geometry={nodes.Object_226.geometry}
                      material={materials["2011_06"]}
                      position={[1.12, -0.25, 0.04]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                    <mesh
                      name="Object_227"
                      geometry={nodes.Object_227.geometry}
                      material={materials.bfgoodri}
                      position={[1.12, -0.25, 0.04]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group name="Up_tires_11" rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Object_29"
                      geometry={nodes.Object_29.geometry}
                      material={materials.Color_02}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                  <group
                    name="Zir_Barfpakon_91"
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Object_201"
                      geometry={nodes.Object_201.geometry}
                      material={materials.Color_02}
                      position={[1.12, -0.25, 0.02]}
                      rotation={[0, 0, -1.57]}
                      scale={2.63}
                    />
                  </group>
                </group>
              </group>
            </group>
          </>
        );

      case "6":
        return (
          <>
            {" "}
            {/* 서랍1 시작 */}
            <mesh
              name="구체001"
              geometry={nodes.구체001.geometry}
              material={nodes.구체001.material}
              position={[1.3, 1.92, 2.69]}
              rotation={[0, -1.57, 0]}
              scale={0.06}
            />
            <mesh
              name="구체002"
              geometry={nodes.구체002.geometry}
              material={nodes.구체002.material}
              position={[0.76, 1.46, 2.69]}
              rotation={[0, -1.57, 0]}
              scale={0.06}
            />
            <mesh
              name="구체003"
              geometry={nodes.구체003.geometry}
              material={materials["매테리얼.008"]}
              position={[2.53, 3.9, 2.62]}
              rotation={[0, -1.57, 0]}
              scale={0.34}
            />
            <mesh
              name="실린더"
              geometry={nodes.실린더.geometry}
              material={materials["매테리얼.007"]}
              position={[2.41, 3.27, 2.61]}
              rotation={[0, -1.57, 0]}
              scale={0.5}
            />
            <mesh
              name="평면009"
              geometry={nodes.평면009.geometry}
              material={materials["매테리얼.009"]}
              position={[2.47, 2.12, 2.69]}
              rotation={[0, -1.57, 0]}
              scale={[0.88, 2.7, 0.97]}
            />
            <mesh
              name="평면010"
              geometry={nodes.평면010.geometry}
              material={materials["매테리얼.010"]}
              position={[1.64, 1.96, 1.94]}
              rotation={[0, -1.57, 0]}
              scale={[0.16, 3.13, 0.18]}
            />
            {/* 서랍1 끝 */}
          </>
        );
    }
  };

  // const { actions } = useAnimations<GLTFActions>(animations, group);

  const [isLight, setIsLight] = useState(true);

  const props: any = { position };
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="������objcleanermaterialmergergles" />
        <group
          name="������objcleanermaterialmergergles001"
          position={[0, 0, 0.41]}
          scale={0.88}
        />
        {isLight && (
          // <directionalLight intensity={0.7} castShadow position={[-50, 50, 50]} />
          <pointLight castShadow position={[-15, 15, 15]} power={8} />
        )}
        {/*  */}
        {/* 침대 */}
        <group
          name="Sketchfab_model001"
          position={[2.29, 1.08, -1.04]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={0}
        >
          <group name="root004">
            <group name="GLTF_SceneRootNode004" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="root_0"
                position={[-20.77, 1046.44, 53.77]}
                scale={1049.98}
              >
                <group name="beizi_3">
                  <group name="beizi_4">
                    <mesh
                      name="Object_9002"
                      geometry={nodes.Object_9002.geometry}
                      material={materials.beizi}
                    />
                  </group>
                </group>
                <group name="chuang_1">
                  <group name="chuang_2">
                    <mesh
                      name="Object_6004"
                      geometry={nodes.Object_6004.geometry}
                      material={materials.chuang}
                    />
                  </group>
                </group>
                <group name="������001_5">
                  <group name="������001_6">
                    <mesh
                      name="Object_12002"
                      geometry={nodes.Object_12002.geometry}
                      material={materials.chuang}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        {/* 기본 방 3D */}
        <mesh
          name="평면001"
          geometry={nodes.평면001.geometry}
          material={nodes.평면001.material}
          position={[0.06, 0.87, 0.41]}
          scale={4.21}
        />
        <mesh
          name="평면002"
          geometry={nodes.평면002.geometry}
          material={materials["매테리얼.006"]}
          position={[2.33, 0.92, 0.41]}
          scale={[6.48, 4.21, 4.21]}
        />
        <mesh
          name="큐브"
          geometry={nodes.큐브.geometry}
          material={materials["매테리얼.021"]}
          position={[0.06, 0.87, 0.41]}
          scale={4.21}
        />
        <mesh
          name="큐브001"
          geometry={nodes.큐브001.geometry}
          material={materials["매테리얼.016"]}
          position={[1.92, 2.69, -0.25]}
          scale={[2.39, 1.32, 0.55]}
        />
        <mesh
          name="큐브002"
          geometry={nodes.큐브002.geometry}
          material={materials["매테리얼.020"]}
          position={[1.92, 3.67, 0.8]}
          scale={[2.39, 0.62, 0.35]}
        />
        <mesh
          name="큐브003"
          geometry={nodes.큐브003.geometry}
          material={materials["매테리얼.019"]}
          position={[1.92, 2.86, 0.8]}
          scale={[2.39, 0.62, 0.35]}
        />
        <mesh
          name="큐브004"
          geometry={nodes.큐브004.geometry}
          material={materials["매테리얼.013"]}
          position={[0.06, 0.87, 0.41]}
          scale={4.21}
        />
        <mesh
          name="실린더001"
          geometry={nodes.실린더001.geometry}
          material={materials["매테리얼.011"]}
          position={[-0.33, 5.58, -3.24]}
          scale={0.2}
        >
          <mesh
            name="구체004_1"
            geometry={nodes.구체004_1.geometry}
            material={materials["매테리얼.012"]}
            position={[0, 1.62, 0]}
            scale={[1.26, 2.18, 1.26]}
          />
        </mesh>
        <mesh
          name="평면011"
          geometry={nodes.평면011.geometry}
          material={materials["매테리얼.015"]}
          position={[-1.78, 5.4, -3.31]}
          rotation={[0, -0.41, 0]}
          scale={[0.25, 0.33, 0.33]}
        />
        <mesh
          name="평면012"
          geometry={nodes.평면012.geometry}
          material={materials["매테리얼.014"]}
          position={[-1.78, 5.49, -3.31]}
          rotation={[0, -0.01, 0]}
          scale={[0.25, 0.33, 0.33]}
        />
        <mesh
          name="평면013"
          geometry={nodes.평면013.geometry}
          material={materials["매테리얼.018"]}
          position={[4.21, 3.74, -0.25]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.58, 0.49, 0.53]}
        />{" "}
        <mesh
          name="평면014"
          geometry={nodes.평면014.geometry}
          material={materials["매테리얼.018"]}
          position={[4.21, 4.14, 0.8]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.3, 0.3, 0.32]}
        />
        <mesh
          name="평면015"
          geometry={nodes.평면015.geometry}
          material={materials["매테리얼.018"]}
          position={[4.21, 3.36, 0.8]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.3, 0.3, 0.32]}
        />
        {/* 기본 방 3D 끝 */}
        <mesh
          name="평면028"
          geometry={nodes.평면028.geometry}
          material={nodes.평면028.material}
          position={[4.27, 5.34, 4.14]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.16, 0.34, 0.13]}
          onClick={() => setIsLight((prev) => !prev)}
        />
      </group>
      {/* 함수 써주기 */}
      {selectTable()}
      {selectLamp()}
      {selectBed()}
      {selectEtc()}
    </group>
  );
}

useGLTF.preload("/MiniRoom/miniroomFinal.glb");
