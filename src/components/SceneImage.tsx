import { FontData, MeshDistortMaterial, MeshReflectorMaterial, OrbitControls, useTexture } from "@react-three/drei";
import { ThreeElements, extend, useFrame } from "@react-three/fiber";
import { FC, ReactNode, useRef, useState } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import fontData from "@/assets/fonts/Meander.json"
import { Euler, Mesh } from "three";

extend({ OrbitControls: OrbitControls, TextGeometry });

type Props = {
    imageSrc: string
}

const SceneImage: FC<Props> = ({ imageSrc }) => {

    const font = new FontLoader().parse(fontData);
    console.log(font)
    const planeRef = useRef<Mesh>(null);
    const [showPlane, setShowPlane] = useState(false);
    let a = 0;

    useFrame((state, delta, frame) => {
        if(planeRef && planeRef.current && planeRef.current.setRotationFromEuler){
            if (!showPlane) {
                a+=0.02;
                planeRef.current.setRotationFromEuler(new Euler(a, a, a, 'XYZ'))
            }
            else {
                planeRef.current.setRotationFromEuler(new Euler(0, 0, 0, 'XYZ'))
            }
        }
        })

    return (<>
        <OrbitControls />
        <ambientLight intensity={Math.PI} />
        <mesh ref={planeRef} rotation={[Math.PI * 0.25, Math.PI * 0.25, Math.PI * 0.25]} onPointerEnter={() => { setShowPlane(true) }} onPointerLeave={() => { setShowPlane(false) }} >
            {
                showPlane ?
                    <planeGeometry args={[3.6, 3.6, 64, 64]} /> :
                    <sphereGeometry args={[1.6, 128, 128, 0, Math.PI * 2, 0, Math.PI]} />
            }
            <MeshDistortMaterial map={useTexture(imageSrc)} speed={10} distort={0.4} />
        </mesh>
    </>)
}

export default SceneImage