//#region ==================== REF: https://github.com/pmndrs/react-three-fiber, https://codesandbox.io/embed/wonderful-chandrasekhar-8l9rrj36j0 ====================

import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import React, { Suspense, useState, useEffect, useMemo } from 'react';
import { Canvas, useLoader, useThree } from 'react-three-fiber';
import { useTransition, useSpring, a } from '@react-spring/three';

// import React, { Suspense } from 'react';
// import { Canvas } from 'react-three-fiber';
// import Demo from './Demo';

// import DummyImage from './images/shigeru_logo_test.svg';

import './styles.css';

// const colors = ['#21242d', '#ea5158', '#0d4663', '#ffbcb7', '#2d4a3e', '#8bd8d2'];
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];

const urls = ['night', 'city', 'morning', 'tubes', 'woods', 'beach'].map(
    (name) => `https://raw.githubusercontent.com/drcmda/react-three-fiber/master/examples/src/resources/images/svg/${name}.svg`
    // (name) => `./images/svg/${name}.svg`
);



// const remoteLoc = 'http://www.shigimcp.com/Xstage/shigimcp_2020_react/img/0elements/';

// const logoUrl = './images/shigeru_logo_test.svg';

// const logoUrls = ['shigeru_logo_test', 'shigeru_logo_transparent'].map(
// const logoUrls = ['arrow_lf', 'arrow_rt', 'badge_flash', 'badge_html5', 'badge_mobile', 'badge_video', 'curl_k', 'curl', 'grid', 'shigeru_logo_ko_rev', 'shigeru_logo_ko', 'shigeru_logo_rev', 'shigeru_logo', 'thoughtBubble'].map(
const logoUrls = ['shigeru_logo_ko_rev', 'shigeru_logo_ko', 'shigeru_logo_rev', 'shigeru_logo'].map(
    // (name) => `https://www.shigimcp.com/Xstage/shigimcp_2020_react/img/0elements/${name}.svg`
    // (name) => `http://www.shigimcp.com/Xstage/shigimcp_2020_react/img/0elements/${name}.svg`

    // (name) => `/images/${name}.svg`

    // (name) => `https://github.com/shigimcp/threejs-experiment-02/tree/main/src/images/${name}.svg`
    // (name) => `https://shigimcp.github.io/threejs-experiment-02/images/${name}.svg`
    // (name) => `https://github.com/shigimcp/threejs-experiment-02/blob/master/${name}.svg?raw=true`
    // (name) => `https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/images/${name}.svg`
    (name) => `https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/main/src/.github/images/${name}.svg`
    // (name) => `https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/gh-pages/.github/images/kawaii02_dirty_anim03_1920x1080_16bit.gif`
);

// REF: https://stackoverflow.com/questions/61537403/how-to-host-image-at-https-user-images-githubusercontent-com-path-filename
// https://raw.githubusercontent.com/{github_user_name}/{repo_name}/{branch}/.github/images/{aset_name}.{asset_extension}
// https://raw.githubusercontent.com/shigimcp/threejs-experiment-02/main/.github/images/{aset_name}.{asset_extension}


function Shape({ shape, rotation, position, color, opacity, index }) {

    if (!position) return null

    return (
        <a.mesh rotation={rotation} position={position.to((x, y, z) => [x, y, z + index * 50])}>
            <a.meshPhongMaterial attach="material" color={color} opacity={opacity} side={THREE.DoubleSide} depthWrite={false} transparent />
            <shapeBufferGeometry attach="geometry" args={[shape]} />
        </a.mesh>
    )
}

function Scene() {
    const { viewport } = useThree()

    const [page, setPage] = useState(0)

    useEffect(() => void setInterval(() => setPage((i) => (i + 1) % urls.length), 3500), [])

    // const data = useLoader(SVGLoader, urls[page])
    // const data = useLoader(SVGLoader, logoUrl)
    const data = useLoader(SVGLoader, logoUrls[page])

    const shapes = useMemo(() => data.paths.flatMap((g, index) => g.toShapes(true).map((shape) => ({ shape, color: g.color, index }))), [
        data
    ])

    // // console.log('shapes = ' + shapes);
    // console.log('shapes = ');
    // console.log(shapes);

    const [{ color }] = useSpring({ color: colors[page] }, [page])

    const [transition] = useTransition(
        shapes,
        {
            keys: (item) => item.shape.uuid,
            from: { rotation: [0.0, -Math.PI / 4, 0], position: [0, 50, 200], opacity: 0 },
            enter: { rotation: [0, 0, 0], position: [0, 0, 0], opacity: 1 },
            leave: { rotation: [0, 0.25, 0], position: [0, -50, 10], opacity: 0 },
            trail: 5
        },
        [page]
    )

    return (
        <>
            <mesh scale={[viewport.width, viewport.height, 1]}>
                <planeGeometry attach="geometry" args={[1, 1]} />
                <a.meshPhongMaterial attach="material" color={color} depthTest={false} />
            </mesh>
            <group position={[viewport.width / 2, viewport.height / 4, page]} rotation={[0, 0, Math.PI]}>
                {transition((props, item, t, i) => (
                    <Shape {...item} {...props} />
                ))}
            </group>
        </>
    )
}



export default function Demo() {

    return (
        <Canvas
            camera={{
                fov: 80,
                position: [0, 0, 2000],
                near: 0.1,
                far: 20000
            }}>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.5} position={[300, 300, 4000]} />
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
    )

}

//#endregion ==================== REF: https://github.com/pmndrs/react-three-fiber, https://codesandbox.io/embed/wonderful-chandrasekhar-8l9rrj36j0 ====================
