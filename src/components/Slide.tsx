import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
// gsap.registerPlugin(ScrollTrigger);

import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/Scene"

type Props = {
    media: StaticImageData,
    label_name: string,
    text_color: string,
    bg_color: string,
    label_description: string
}

const Slide: FC<Props> = ({ media, label_name, text_color, bg_color, label_description }) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        gsap.fromTo(el,
            { translateX: 1000 },
            {
                translateX: -2000,
                scrollTrigger: {
                    trigger: el,
                    scrub: true
                },
            }
        );
    }, []);

    return (
        <>
            <div className="h-[200vh] w-screen flex justify-center items-center">
                <div className={"h-[30%] w-[40%] relative overflow-hidden " + bg_color}>
                    <Canvas
                        gl={{
                            antialias: true
                        }}
                        // orthographic
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 100,
                            // position: [2, 2, 6]
                        }}
                    >
                        <Scene />
                    </Canvas>
                    {/* <Image
                        src={media}
                        alt={label_description}
                    /> */}
                    {/* <div ref={ref} className={"absolute mix-blend-exclusion txt font-meander top-[-0.05em] left-0 text-[60em] " + text_color} id="txt">{label_name.toUpperCase()}</div> */}
                </div>
            </div>
        </>
    )
}

export default Slide