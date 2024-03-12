import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
// gsap.registerPlugin(ScrollTrigger);

import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import SceneImage from "./SceneImage";
import SceneText from "./SceneText";

type Props = {
    media: string,
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
                <div className={"h-fit w-[40%] relative overflow-hidden " + bg_color}>
                    <div className="h-[1080px] w-[1080px]">
                        <Canvas
                            gl={{
                                antialias: true
                            }}
                            camera={{
                                fov: 45,
                                near: 0.1,
                                far: 100
                            }}
                        >
                            <SceneImage imageSrc={media} />
                        </Canvas>
                    </div>

                    {/* <div ref={ref} className={"absolute h-[1080px] w-screen mix-blend-exclusion txt font-meander top-[-0.05em] left-0 text-[60em] pointer-events-none " + text_color} >
                            <Canvas
                                gl={{
                                    antialias: true
                                }}
                                camera={{
                                    fov: 45,
                                    near: 0.1,
                                    far: 100
                                }}
                            >
                                <SceneText text={label_name.toUpperCase()} text_color={text_color} />
                            </Canvas>
                    </div> */}
                </div>
            </div >
        </>
    )
}

export default Slide