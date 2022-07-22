

import { BoxBufferGeometryProps, BoxGeometryProps, MeshProps } from '@react-three/fiber';
import { FC, useState } from 'react'
import { Box, Plane } from '@react-three/drei'
import { MeshStandardMaterial } from 'three';
import { useCellStore } from '../common/store';
import { useClickOutside } from '@mantine/hooks';
import { CellDragger } from './cellDragger';
import { Vector3 } from 'three';

type Props = Omit<MeshProps, 'args' | 'id'> 
export const NavPlane: FC<Props> = (props) => {
    const { ...rest } = props;
 

    return (

        <Plane scale={30}/>

    );
}
