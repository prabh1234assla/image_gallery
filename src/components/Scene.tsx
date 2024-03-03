import { FC, useRef } from "react";
import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import * as THREE from "three"
import { useFrame, extend, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { Text3D, Text } from "@react-three/drei";

extend({ OrbitControls: OrbitControls })

type Props = {

}

const Scene: FC<Props> = ({ }) => {
    const cubeRef = useRef(null);
    const lightRef = useRef(null);

    useFrame((state, delta, frame) => {
        cubeRef.current.rotation.y += 0.01;
        cubeRef.current.rotation.x += 0.01;
        cubeRef.current.rotation.z += 0.01;
        // cubeRef.current.position.x = 1*Math.sin(state.clock.elapsedTime);
        // cubeRef.current.position.y = 1*Math.sin(state.clock.elapsedTime);
        // cubeRef.current.scale.x = 1*Math.sin(state.clock.elapsedTime);
        // cubeRef.current.scale.y = 1*Math.sin(state.clock.elapsedTime);
        // lightRef.current.position.x = Math.sin(state.clock.elapsedTime);
        console.log(state.clock.elapsedTime)
    })

    return (<>
        <OrbitControls />
        <spotLight ref={lightRef} position={[0.5, 0.5, 0.5]} intensity={500} />
        {/* <mesh ref={cubeRef} scale={[1, 1, 1]} rotation={[Math.PI * 0.25, Math.PI * 0.25, Math.PI * 0.25]}> */}
            <Text3D ref={cubeRef} font={"./new.json"}>
                To be happy
            </Text3D>
            {/* <meshStandardMaterial color="yellow" roughness={0} />
             */}
            <meshNormalMaterial />
            {/* <points ref={cubeRef}> */}
            {/* <torusKnotGeometry args={[12.768, 1.3563, 300, 13, 11, 10]} /> */}
            {/* <torusKnotGeometry /> */}
            {/* <sphereGeometry /> */}
            {/* <tubeGeometry /> */}
            {/* <pointsMaterial size={0.1} /> */}
            {/* </points> */}
            {/* </mesh> */}
        </>)
}

        export default Scene