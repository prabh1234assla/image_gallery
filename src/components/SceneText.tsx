import { OrbitControls, useTexture, MeshDistortMaterial } from "@react-three/drei";
import { extend, useFrame, Object3DNode, ThreeElements } from "@react-three/fiber";
import { FC, RefObject, useEffect, useRef } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Euler, Mesh, Vector3 } from "three";
import { Power4 } from "gsap";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import fontData from "@/assets/fonts/Meander.json"

extend({ OrbitControls: OrbitControls, TextGeometry });

type Props = {
    text: string,
    text_color: string,
    imageSrc: string,
}

declare module "@react-three/fiber" {
    interface ThreeElements {
        textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>
    }
}

const SceneText: FC<Props> = ({ text, text_color, imageSrc }) => {

    const font = new FontLoader().parse(fontData);
    const FontRef = useRef<Mesh>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(new Object(FontRef.current?.position), { x: 20 });

        tl.to(new Object(FontRef.current?.position), {
            x: -20, duration: 2, ease: Power4.easeInOut, scrollTrigger: {
                trigger: ".slider",
                start: "top bottom",
                scrub: 1
            }
        })

    }, [FontRef])

    useFrame((state, delta, frame) => {

    })

    return (<>
        <ambientLight intensity={Math.PI} />
        <mesh ref={FontRef} rotation={new Euler(0, 0, 0, "XYZ")} position={new Vector3(0, -1.4, 0)}>
            <textGeometry args={[text, { font, height: 0.5, size: 3 }]} />
            <MeshDistortMaterial map={useTexture(imageSrc)} speed={5} distort={0.2} />
        </mesh>
    </>)
}

export default SceneText