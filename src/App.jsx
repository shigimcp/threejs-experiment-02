//#region ==================== create-react-app ====================

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//#endregion ==================== create-react-app ====================




//#region ==================== REF: https://github.com/pmndrs/react-three-fiber, https://codesandbox.io/embed/wonderful-chandrasekhar-8l9rrj36j0 ====================

// import * as THREE from 'three';
// import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
// import React, { Suspense, useState, useEffect, useMemo } from 'react';
// import { Canvas, useLoader, useThree } from 'react-three-fiber';
// import { useTransition, useSpring, a } from '@react-spring/three';


import React from 'react';
import Demo from './Demo';

import './styles.css';

// const colors = ['#21242d', '#ea5158', '#0d4663', '#ffbcb7', '#2d4a3e', '#8bd8d2'];

// const urls = ['night', 'city', 'morning', 'tubes', 'woods', 'beach'].map(
//     (name) => `https://raw.githubusercontent.com/drcmda/react-three-fiber/master/examples/src/resources/images/svg/${name}.svg`
// );

// // const urls = ['shigeru_logo_test', 'shigeru_logo_transparent'].map(
// //     (name) => `./images/${name}.svg`
// // );

// function Shape({ shape, rotation, position, color, opacity, index }) {
//     if (!position) return null
//     return (
//         <a.mesh rotation={rotation} position={position.to((x, y, z) => [x, y, z + index * 50])}>
//             <a.meshPhongMaterial attach="material" color={color} opacity={opacity} side={THREE.DoubleSide} depthWrite={false} transparent />
//             <shapeBufferGeometry attach="geometry" args={[shape]} />
//         </a.mesh>
//     )
// }

// function Scene() {
//     const { viewport } = useThree()
//     const [page, setPage] = useState(0)

//     useEffect(() => void setInterval(() => setPage((i) => (i + 1) % urls.length), 3500), [])

//     const data = useLoader(SVGLoader, urls[page])

//     const shapes = useMemo(() => data.paths.flatMap((g, index) => g.toShapes(true).map((shape) => ({ shape, color: g.color, index }))), [
//         data
//     ])

//     // console.log('shapes = ' + shapes);
//     console.log('shapes = ');
//     console.log(shapes);

//     const [{ color }] = useSpring({ color: colors[page] }, [page])

//     const [transition] = useTransition(
//         shapes,
//         {
//             keys: (item) => item.shape.uuid,
//             from: { rotation: [0.0, -Math.PI / 4, 0], position: [0, 50, 200], opacity: 0 },
//             enter: { rotation: [0, 0, 0], position: [0, 0, 0], opacity: 1 },
//             leave: { rotation: [0, 0.25, 0], position: [0, -50, 10], opacity: 0 },
//             trail: 5
//         },
//         [page]
//     )

//     return (
//         <>
//             <mesh scale={[viewport.width, viewport.height, 1]}>
//                 <planeGeometry attach="geometry" args={[1, 1]} />
//                 <a.meshPhongMaterial attach="material" color={color} depthTest={false} />
//             </mesh>
//             <group position={[viewport.width / 2, viewport.height / 4, page]} rotation={[0, 0, Math.PI]}>
//                 {transition((props, item, t, i) => (
//                     <Shape {...item} {...props} />
//                 ))}
//             </group>
//         </>
//     )
// }

export default function App() {
    return (

        // <Canvas
        //     camera={{
        //         fov: 80,
        //         position: [0, 0, 2000],
        //         near: 0.1,
        //         far: 20000
        //     }}>
        //     <ambientLight intensity={0.5} />
        //     <spotLight intensity={0.5} position={[300, 300, 4000]} />
        //     <Suspense fallback={null}>
        //         <Scene />
        //     </Suspense>
        // </Canvas>

        <Demo />
    )
}

//#endregion ==================== REF: https://github.com/pmndrs/react-three-fiber, https://codesandbox.io/embed/wonderful-chandrasekhar-8l9rrj36j0 ====================
