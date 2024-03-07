import { FontData, MeshDistortMaterial, MeshReflectorMaterial, OrbitControls, useTexture } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { FC, useRef, useState } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import fontData from "@/assets/fonts/Meander.json"

extend({ OrbitControls: OrbitControls, TextGeometry });

type Props = {
    imageSrc: string
}

const SceneImage: FC<Props> = ({ imageSrc }) => {

    const font = new FontLoader().parse(fontData);
    console.log(font)
    const planeRef = useRef(null);
    const [showPlane, setShowPlane] = useState(false);

    useFrame((state, delta, frame) => {
        if (!showPlane) {
            planeRef.current.rotation.x += 0.02;
            planeRef.current.rotation.y += 0.02;
            planeRef.current.rotation.z += 0.02;
        }
        else {
            planeRef.current.rotation.x = 0;
            planeRef.current.rotation.y = 0;
            planeRef.current.rotation.z = 0;
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