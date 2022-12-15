import * as THREE from 'three'
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { Modal, Button } from 'antd'
import './styles.css'

useGLTF.preload('/copy_of_knot.glb')
function Model(props) {
    const { scene } = useGLTF('/copy_of_knot.glb')
    return <primitive object={scene} {...props} />
}

function Dome() {
    const texture = useTexture('/pascher.jpeg')
    const [isModalVisible, setIsModalVisible] = useState(false)
    return (
        <group>
            <mesh>
                <sphereBufferGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>
            <Html position={[0, 0, -15]} center>
                {!isModalVisible && (
                    <Button type="primary"style={{ background: "#2B55B4" }} shape="round" size='large' onClick={() => setIsModalVisible(true)}>
                        Generate
                    </Button>
                )}
                <Modal bodyStyle={{ width: 500, height: 250 }} visible={isModalVisible} onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)}>
                    <Suspense fallback={null}>
                        <Canvas frameloop="demand" dpr={[1, 2]} camera={{ position: [0, 0, 6] }}>
                            <spotLight position={[10, 10, 10]} />
                            <pointLight postion={[-10, -10, -10]} intensity={2} />
                            <Model position={[0, -3, 0]} />
                            <OrbitControls />
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
