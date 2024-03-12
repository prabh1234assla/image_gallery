import { OrbitControls, Text } from "@react-three/drei";
import { extend, useFrame, Object3DNode } from "@react-three/fiber";
import { FC, useRef } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import * as THREE from "three";

import fontData from "@/assets/fonts/Meander.json"

extend({ OrbitControls: OrbitControls, TextGeometry });

type Props = {
    text: string,
    text_color: string
}

declare module "@react-three/fiber" {
    interface ThreeElements {
        textGeometry : Object3DNode<TextGeometry, typeof TextGeometry>
    }
}

const SceneText: FC<Props> = ({ text, text_color }) => {

    const font = new FontLoader().parse(fontData);
    console.log(font)
    const FontRef = useRef(null);

    useFrame((state, delta, frame) => {

    })

    return (<>
        <OrbitControls />
        <ambientLight intensity={Math.PI} />
        <mesh ref={FontRef}>
            <textGeometry args={[text, { font, height: 1, size: 4 }]} />
            <meshBasicMaterial color={text_color} />
        </mesh>
    </>)
}

export default SceneText