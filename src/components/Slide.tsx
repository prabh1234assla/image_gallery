import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import SceneImage from "./SceneImage";
import SceneText from "./SceneText";

import useElementOnScreen from "./useElementOnScreen";

type Props = {
    media: string,
    label_name: string,
    text_color: string,
    bg_color: string,
    label_description: string
}

const Slide: FC<Props> = ({ media, label_name, text_color, bg_color, label_description }) => {

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0,
    });

    
    return (
        <>
            <div className="relative h-[200vh] w-screen flex justify-center items-center" ref={containerRef}>{
                isVisible ? <>
                    <div className={"h-[1080px] w-[1080px] overflow-hidden pointer-events-none " + bg_color}>
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
                    </div>

                    <div className={"absolute h-[1080px] w-screen mix-blend-exclusion txt font-meander left-0 text-[60em] pointer-events-none " + text_color} >
                        <Canvas
                            gl={{
                                antialias: true
                            }}
                            camera={{
                                fov: 45,
                                near: 0.1,
                                far: 100
                            }}
                            style={{
                                pointerEvents: "none"
                            }}
                            className="slider"
                        >
                            <SceneText text={label_name.toUpperCase()} text_color={text_color} imageSrc={media} />
                        </Canvas>
                    </div>
                </> : null
            }
            </div >
        </>
    )
}

export default Slide