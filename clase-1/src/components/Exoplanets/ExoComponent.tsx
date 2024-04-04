import { OrbitControls, Stars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { FC, useRef } from 'react';
import { Group, Mesh, TextureLoader } from 'three';
import * as d3 from 'd3';

interface Props {
  name: string;
  radius: number;
}

interface ExoplanetsProps {
  planetData: Props[];
}

export const ExoComponent: FC<ExoplanetsProps> = ({ planetData }) => {
  let newArray = [planetData[0], planetData[2666]];
  const meshRefs = useRef<Array<Mesh | undefined>>([]);
  const groupRefs = useRef<Array<Group | undefined>>(
    newArray.map(() => new Group())
  ); // Inicializa groupRefs con valores iniciales
  useFrame(() => {
    meshRefs.current.forEach((mesh) => {
      if (mesh) {
        mesh.rotation.y += 0.02 / 6;
      }
    });
  });

  let quality = 70;

  const planetScale = d3
    .scaleLinear()
    .domain([
      planetData[planetData.length - 1].radius,
      planetData[0].radius,
    ])
    .range([0.2, 2]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <OrbitControls />
      {newArray.map((el, index) => (
        <group
          key={index}
          position={[index * 2.5, 0, 0]}
          ref={(ref) => {
            groupRefs.current[index] = ref ?? groupRefs.current[index]; // Asigna ref o usa el valor actual si ref es null
            if (ref && 'children' in ref) {
              meshRefs.current[index] = ref.children[0] as Mesh;
            }
          }}
        >
          <mesh>
            <sphereGeometry
              args={[planetScale(el.radius), quality, quality]}
            />
            <meshBasicMaterial
              map={new TextureLoader().load(`texture${index + 1}.jpg`)}
            />
          </mesh>
        </group>
      ))}
      <Stars fade />
    </>
  );
};
