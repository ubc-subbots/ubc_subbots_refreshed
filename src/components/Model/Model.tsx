import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Canvas } from '@react-three/fiber';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { OrbitControls } from '@react-three/drei';


import './Model.css';


interface modelProps {
    backgroundColor: string;
    rotateSpeed: number;
}

function SteelheadModelAsync() {
    const gltf = useLoader(GLTFLoader, '/model/compressed_steelhead.glb', (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');
        loader.setDRACOLoader(dracoLoader);
    });

    return <primitive object={gltf.scene} />;
}

function Model({ backgroundColor, rotateSpeed }: modelProps) {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 5], fov: 12 }}
            style={{ background: backgroundColor }}
            className="threejs-model"
            gl={{
                preserveDrawingBuffer: true,
                powerPreference: 'high-performance',
                antialias: false,
            }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={0.6} />
                <directionalLight
                    position={[10, 10, 5]}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                <mesh
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -1, 0]}
                    receiveShadow
                >
                    <planeGeometry args={[10, 10]} />
                    <shadowMaterial opacity={0.3} />
                </mesh>

                <SteelheadModelAsync />
            </Suspense>

            <OrbitControls
                autoRotate
                autoRotateSpeed={rotateSpeed}
                enableZoom={false}
                enablePan={true}
            />
        </Canvas>
    );
}

export default Model;