import styles from './index.module.scss';

import { Container, Divider, Drawer, NumberInput, TextInput } from '@mantine/core';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Plane, OrbitControls, Box, Select } from '@react-three/drei';
import { MeshStandardMaterial, Vector3 } from 'three';
import { Cell, CellObject, NavPlane } from '@cellbot/mesh'
import { useCellStore } from '@cellbot/mesh';
import { Stack } from '@mantine/core';
import { createRef, forwardRef, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { DragControls } from '@cellbot/mesh';
import { ObjectEditor } from '@cellbot/ui';
/* eslint-disable-next-line */
export interface TrackingProps {
    [key: string]: any;
}
//generate Cell list



export const Tracking = (props: TrackingProps) => {

    const { cells, offset, setSelectedCell, } = useCellStore();

    const [selected, setSelected] = useState<any>([]);
    // const externalRef = useRef<any | null>({});

    // const changeRef = (value) => { externalRef.current = value }
    // useEffect  (() => {
    //     console.log('externalRef', externalRef.current)
    // }, [externalRef.current]);

    // console.log('externalRef', externalRef.current)
    useEffect(() => {
        console.log('selected', selected)
    }, [selected]);
    return (

        <>
            <Canvas onPointerMissed={() => setSelectedCell(null)} >
                <ambientLight intensity={0.1} />

                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <group position={new Vector3(0, offset.y, 0)}>
                        <Select box multiple onChange={setSelected}>
                            {cells.flat().map((cell, index) => (
                                <CellObject key={'cell' + index}  {...cell} selected={selected} />
                            ))}
                        </Select>
                    </group>
                </Suspense>
                {/* <DragControls selected={selected?.[0]} changeRef={changeRef}/> */}
                <OrbitControls makeDefault />
                <gridHelper position={[0, 0.01, 0]} args={[30, 30, "red", "black"]} />
            </Canvas>
            <ObjectEditor selected={selected} />
        </>


    );
}

export default Tracking
