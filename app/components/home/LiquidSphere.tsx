// // Importaciones necesarias
// import React, { useRef } from "react";
// import { Canvas, useFrame, extend, Object3DNode } from "@react-three/fiber";
// import { shaderMaterial } from "@react-three/drei";
// import * as THREE from "three";

// // Define el material personalizado con shaders
// const LiquidShaderMaterial = shaderMaterial(
//   {
//     time: 0,
//     clickPosition: new THREE.Vector2(0, 0), // Posición del clic
//     clickTime: -10, // Tiempo del último clic
//   },
//   // Vertex Shader: Ondas concéntricas desde el clic
//   `
//   uniform float time;
//   uniform vec2 clickPosition;
//   uniform float clickTime;
//   varying vec3 vPosition;

//   void main() {
//     vPosition = position;
//     vec3 pos = position;

//     // Deformación por defecto más pronunciada
//     float pulse = sin(time * 3.0) * 0.1; // Amplitud incrementada
//     float additionalDeformation = cos(pos.x * 5.0 + time) * 0.05; // Ruido adicional en X
//     pos.z += pulse + additionalDeformation; // Combinamos las deformaciones

//     // Ondas suaves generadas por el clic
//     float timeSinceClick = time - clickTime;
//     if (timeSinceClick < 2.0) { // Ondas activas durante 2 segundos
//       float distanceClick = length(clickPosition - pos.xy); // Distancia radial
//       float wave = sin(distanceClick * 15.0 - timeSinceClick * 8.0); // Ondas circulares
//       float attenuation = exp(-distanceClick * 5.0) * exp(-timeSinceClick * 0.5); // Atenuación radial y temporal
//       pos.z += wave * 0.1 * attenuation; // Intensidad ajustada
//     }

//     gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//   }
//   `,
//   // Fragment Shader: Colores dinámicos (sin cambios)
//   `
//   uniform float time;
//   varying vec3 vPosition;

//   void main() {
// // Colores principales
//     vec3 color1 = vec3(106.0 / 255.0, 169.0 / 255.0, 182.0 / 255.0); // #6aa9b6
//     vec3 color2 = vec3(190.0 / 255.0, 176.0 / 255.0, 250.0 / 255.0); // #beb0fa
//     vec3 color3 = vec3(203.0 / 255.0, 108.0 / 255.0, 230.0 / 255.0); // #cb6ce6
//     vec3 color4 = vec3(30.0 / 255.0, 41.0 / 255.0, 59.0 / 255.0); // #1e293b
//     vec3 color5 = vec3(1.0, 1.0, 1.0); // Blanco brillante

//     // Gradiente dinámico
//     float gradientFactor = abs(sin(time * 0.3 + vPosition.y * 3.0));
//     vec3 gradientColor = mix(color4, color5, gradientFactor);

//     // Interpolación entre colores
//     float mixFactor1 = abs(sin(time + vPosition.x * 2.0));
//     float mixFactor2 = abs(cos(time + vPosition.z * 2.0));
//     vec3 finalColor = mix(
//       mix(color1, color2, mixFactor1),
//       mix(color3, gradientColor, mixFactor2),
//       0.6
//     );

//     gl_FragColor = vec4(finalColor, 1.0);
//   }
//   `
// );

// // Registra el material para que sea reconocido en JSX
// extend({ LiquidShaderMaterial });

// // Declara el tipo de LiquidShaderMaterial para TypeScript
// declare module "@react-three/fiber" {
//   interface ThreeElements {
//     liquidShaderMaterial: Object3DNode<
//       typeof LiquidShaderMaterial,
//       typeof LiquidShaderMaterial
//     >;
//   }
// }

// // Componente de la esfera líquida
// const LiquidSphere: React.FC = () => {
//   const material = useRef<any>(); // Referencia al material para actualizar sus valores dinámicos
//   const meshRef = useRef<THREE.Mesh>(null); // Referencia al mesh para calcular posiciones locales

//   // Maneja clics en la esfera
//   const handlePointerDown = (event: any) => {
//     if (material.current && meshRef.current) {
//       // Convierte la posición del clic a coordenadas locales de la esfera
//       const localPoint = new THREE.Vector3();
//       event.object.worldToLocal(localPoint.copy(event.point));

//       // Actualiza la posición del clic en el shader
//       material.current.clickPosition.set(localPoint.x, localPoint.y); // Coordenadas 2D del clic
//       material.current.clickTime = event.timeStamp / 1000; // Tiempo del clic
//     }
//   };

//   // Actualiza los uniforms en cada frame
//   useFrame(({ clock }) => {
//     if (material.current) {
//       material.current.time = clock.getElapsedTime(); // Tiempo en segundos
//     }

//     if (meshRef.current) {
//       // Rotación refinada
//       meshRef.current.rotation.y += 0.005; // Giro suave en Y
//       meshRef.current.rotation.x +=
//         Math.sin(clock.getElapsedTime() * 0.3) * 0.01; // Oscilación lenta en X
//     }
//   });

//   return (
//     <mesh
//       ref={meshRef}
//       scale={2.5} // Mantiene un tamaño constante
//       onPointerDown={handlePointerDown} // Detecta clics
//     >
//       {/* Geometría de la esfera */}
//       <sphereGeometry args={[1, 64, 64]} />
//       {/* Material personalizado */}
//       <liquidShaderMaterial ref={material} />
//     </mesh>
//   );
// };

// // Componente con el Canvas ajustado
// export const LiquidSphereCanvas: React.FC = () => (
//   <Canvas>
//     <ambientLight intensity={1} />
//     <directionalLight position={[5, 5, 5]} />
//     <LiquidSphere />
//   </Canvas>
// );
