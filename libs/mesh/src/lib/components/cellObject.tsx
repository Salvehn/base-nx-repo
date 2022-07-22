import { BoxBufferGeometryProps, BoxGeometryProps, MeshProps, useFrame } from '@react-three/fiber';
import { FC, forwardRef, memo, Suspense, useEffect, useRef, useState } from 'react'
import { Box, Edges, Text, Sus } from '@react-three/drei'
import { MeshStandardMaterial } from 'three';
import { Cell, CMVec3, useCellStore } from '../common/store';
import { useClickOutside, useShallowEffect } from '@mantine/hooks';

import { Vector3 } from 'three';
import { ConsoleLogger } from '@nestjs/common';
import { DragControls } from './dragControls';


export const CellObject = (props: any) => {
    const { name, selected, ...rest } = props;

    const ref = useRef<any | null>()
    ///material={new MeshStandardMaterial({ wireframe: name === selected?.name })}
    const isSelected = !!selected.find((sel: any) => sel.id === ref.current.id)

    return (
        <mesh>
            <Text position={ref?.current?.position.clone().add(new Vector3(0, 0, 1))} color={'red'}>
                {name}
            </Text>
            <Suspense fallback={null}>
                <Box {...rest} ref={ref} name={name} material={new MeshStandardMaterial({ color: isSelected && 'yellow' || 'white' })}>
                    <Edges visible={isSelected} renderOrder={1000}>
                        <meshBasicMaterial transparent color="#333" depthTest={false} />
                    </Edges>
                </Box>


            </Suspense>
        </mesh>

    );
}
