import * as THREE from 'three'
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, useGLTF, useTexture, Environment, BakeShadows, ContactShadows} from '@react-three/drei'

import { Modal, Button } from 'antd'
import './styles.css'

useGLTF.preload('/glb/')


function Sphere(props) {
    const rdn = Math.floor(Math.random() * 100);
    const { scene } = useGLTF("/glb/Sphere/sphere" + rdn.toString() + ".glb")
    return <primitive object={scene} {...props} />
}

function Cube(props) {
    const rdn = Math.floor(Math.random() * 100);
    const { scene } = useGLTF("/glb/Cube/cube"+ rdn.toString() + ".glb")
    return <primitive object={scene} {...props} />
}
function Cone(props) {
    const rdn = Math.floor(Math.random() * 100);
    const { scene } = useGLTF("/glb/Cone/cone" + rdn.toString() + ".glb")
    return <primitive object={scene} {...props} />
}

function Prism(props) {
    const rdn = Math.floor(Math.random() * 100);
    const { scene } = useGLTF("/glb/Prism/prism"+ rdn.toString() + ".glb")
    return <primitive object={scene} {...props} />
}
function Pyramid(props) {
    const rdn = Math.floor(Math.random() * 100);
    const { scene } = useGLTF("/glb/Pyramid/pyramid" + rdn.toString() + ".glb")
    return <primitive object={scene} {...props} />
}

function Cylinder(props) {
    const rdn = Math.floor(Math.random() * 100);
    const { scene } = useGLTF("/glb/Cylinder/cylinder"+ rdn.toString() + ".glb")
    return <primitive object={scene} {...props} />
}

function Dome() {
    const texture = useTexture('/pascher.jpeg')
    const [isSphereVisible, setIsSphereVisible] = useState(false)
    const [isCubeVisible, setIsCubeVisible] = useState(false)
    const [isConeVisible, setIsConeVisible] = useState(false)
    const [isPrismVisible, setIsPrismVisible] = useState(false)
    const [isPyramidVisible, setIsPyramidVisible] = useState(false)
    const [isCylinderVisible, setIsCylinderVisible] = useState(false)
    const env = 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr'
    //    const [isButtonVisible, setIsButtonVisible] = useState(false)


    return (
        <group>
            <mesh>
                <sphereBufferGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>
            <Html position={[0, 0, -15]} center>
                {!isCubeVisible &&  !isSphereVisible && !isConeVisible &&  !isPrismVisible && !isPyramidVisible &&  !isCylinderVisible && (
                    <Button type="primary"style={{ background: "#2B55B4" }} shape="round" size='large' onClick={() => setIsSphereVisible(true)}>
                        Sphere
                    </Button>
                )}
                {!isCubeVisible &&  !isSphereVisible && !isConeVisible &&  !isPrismVisible && !isPyramidVisible &&  !isCylinderVisible && (
                    <Button type="primary"style={{ background: "#2B55B4" }} shape="round" size='large' onClick={() => setIsCubeVisible(true)}>
                        Cube
                    </Button>
                )}
                {!isCubeVisible &&  !isSphereVisible && !isConeVisible &&  !isPrismVisible && !isPyramidVisible &&  !isCylinderVisible && (
                    <Button type="primary"style={{ background: "#2B55B4" }} shape="round" size='large' onClick={() => setIsConeVisible(true)}>
                        Cone
                    </Button>
                )}
                {!isCubeVisible &&  !isSphereVisible && !isConeVisible &&  !isPrismVisible && !isPyramidVisible &&  !isCylinderVisible && (
                    <Button type="primary"style={{ background: "#2B55B4" }} shape="round" size='large' onClick={() => setIsPrismVisible(true)}>
                        Prism
                    </Button>
                )}
                {!isCubeVisible &&  !isSphereVisible && !isConeVisible &&  !isPrismVisible && !isPyramidVisible &&  !isCylinderVisible && (
                    <Button type="primary"style={{ background: "#2B55B4" }} shape="round" size='large' onClick={() => setIsPyramidVisible(true)}>
                        Pyramid
                    </Button>
                )}
                {!isCubeVisible &&  !isSphereVisible && !isConeVisible &&  !isPrismVisible && !isPyramidVisible &&  !isCylinderVisible && (
                    <Button type="primary"style={{ background: "#2B55B4" }} shape="round" size='large' onClick={() => setIsCylinderVisible(true)}>
                        Cylinder
                    </Button>
                )}
                <Modal bodyStyle={{ width: 1000, height: 500 }} visible={isSphereVisible}  onOk={() => setIsSphereVisible(false)} onCancel={() => setIsSphereVisible(false)}>
                    <Suspense fallback={null}>
                        <Canvas shadows camera={{ position: [0, 0, 12], fov: 30 }}>
                            <hemisphereLight intensity={0.5} color="white" groundColor="black" />
                            <Environment files={env} ground={{ height: 5, radius: 40, scale: 2000000 }} />
                            <Sphere color="blue" emissive="purple" position={[0, 1.25, 0]} />
                            <ContactShadows renderOrder={2} color="black" resolution={1024} frames={1} scale={10} blur={1.5} opacity={0.65} far={0.5} />
                            <BakeShadows />
                            <OrbitControls/>
                        </Canvas>
                    </Suspense>
                </Modal>
                <Modal bodyStyle={{ backgroundColor: "transparent", width: 1000, height: 500 }} visible={isCubeVisible} onOk={() => setIsCubeVisible(false)} onCancel={() => setIsCubeVisible(false)}>
                    <Suspense fallback={null}>
                        <Canvas shadows camera={{ position: [0, 0, 12], fov: 30 }}>
                            <hemisphereLight intensity={0.5} color="white" groundColor="black" />
                            <Environment files={env} ground={{ height: 5, radius: 40, scale: 2000000 }} />
                            <Cube color="blue" emissive="purple" position={[0, 1.25, 0]} />
                            <ContactShadows renderOrder={2} color="black" resolution={1024} frames={1} scale={10} blur={1.5} opacity={0.65} far={0.5} />
                            <BakeShadows />
                            <OrbitControls/>
                        </Canvas>
                    </Suspense>
                </Modal>
                <Modal bodyStyle={{ width: 1000, height: 500 }} visible={isConeVisible} onOk={() => setIsConeVisible(false)} onCancel={() => setIsConeVisible(false)}>
                    <Suspense fallback={null}>
                        <Canvas shadows camera={{ position: [0, 0, 12], fov: 30 }}>
                            <hemisphereLight intensity={0.5} color="white" groundColor="black" />
                            <Environment files={env} ground={{ height: 5, radius: 40, scale: 2000000 }} />
                            <Cone color="blue" emissive="purple" position={[0, 1.25, 0]} />
                            <ContactShadows renderOrder={2} color="black" resolution={1024} frames={1} scale={10} blur={1.5} opacity={0.65} far={0.5} />
                            <BakeShadows />
                            <OrbitControls/>
                        </Canvas>
                    </Suspense>
                </Modal>
                <Modal bodyStyle={{ width: 1000, height: 500 }} visible={isPrismVisible} onOk={() => setIsPrismVisible(false)} onCancel={() => setIsPrismVisible(false)}>
                    <Suspense fallback={null}>
                        <Canvas shadows camera={{ position: [0, 0, 12], fov: 30 }}>
                            <hemisphereLight intensity={0.5} color="white" groundColor="black" />
                            <Environment files={env} ground={{ height: 5, radius: 40, scale: 2000000 }} />
                            <Prism color="blue" emissive="purple" position={[0, 1.25, 0]} />
                            <ContactShadows renderOrder={2} color="black" resolution={1024} frames={1} scale={10} blur={1.5} opacity={0.65} far={0.5} />
                            <BakeShadows />
                            <OrbitControls/>
                        </Canvas>
                    </Suspense>
                </Modal>
                <Modal bodyStyle={{width: 1000, height: 500 }} visible={isPyramidVisible} onOk={() => setIsPyramidVisible(false)} onCancel={() => setIsPyramidVisible(false)}>
                    <Suspense fallback={null}>
                        <Canvas shadows camera={{ position: [0, 0, 12], fov: 30 }}>
                            <hemisphereLight intensity={0.5} color="white" groundColor="black" />
                            <Environment files={env} ground={{ height: 5, radius: 40, scale: 2000000 }} />
                            <Pyramid color="blue" emissive="purple" position={[0, 1.25, 0]} />
                            <ContactShadows renderOrder={2} color="black" resolution={1024} frames={1} scale={10} blur={1.5} opacity={0.65} far={0.5} />
                            <BakeShadows />
                            <OrbitControls/>
                        </Canvas>
                    </Suspense>
                </Modal>
                <Modal bodyStyle={{ width: 1000, height: 500 }} visible={isCylinderVisible} onOk={() => setIsCylinderVisible(false)} onCancel={() => setIsCylinderVisible(false)}>
                    <Suspense fallback={null}>
                        <Canvas shadows camera={{ position: [0, 0, 12], fov: 30 }}>
                            <hemisphereLight intensity={0.5} color="white" groundColor="black" />
                            <Environment files={env} ground={{ height: 5, radius: 40, scale: 2000000 }} />
                            <Cylinder color="blue" emissive="purple" position={[0, 1.25, 0]} />
                            <ContactShadows renderOrder={2} color="black" resolution={1024} frames={1} scale={10} blur={1.5} opacity={0.65} far={0.5} />
                            <BakeShadows />
                            <OrbitControls/>
                        </Canvas>
                    </Suspense>
                </Modal>
            </Html>
        </group>
    )
}

export default function App() {
    return (
        <Canvas frameloop="demand" dpr={[1, 2]} camera={{ position: [0, 0, 0.1] }}>
            <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
            <Suspense fallback={null}>
                <Dome />
            </Suspense>
        </Canvas>
    )
}
