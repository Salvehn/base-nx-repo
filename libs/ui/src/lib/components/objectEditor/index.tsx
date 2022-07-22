import { CMVec3, useCellStore } from "@cellbot/mesh"
import { Button, Container, Divider, Drawer, NumberInput, Stack } from "@mantine/core"
import { useDebouncedValue } from "@mantine/hooks"
import { useThree, Vector3Props } from "@react-three/fiber"
import { forwardRef, useEffect, useState } from "react"
import { Vector3 } from "three"


export const ObjectEditor = forwardRef((props:any, ref: any) => {

    const { selected } = props
    const [position, setPosition] = useState<Vector3Props>(selected?.position || { x: 0, y: 0, z: 0 })
    // console.log('ref', ref)
    // const [pos] = useDebouncedValue<Vector3>(ref?.current?.objectPosition, 100)

    // useEffect(() => {
    //     if(pos){
    //         setPosition(pos)
    //     }
        
    // }, [pos])

    return (
        <Drawer position='right' withOverlay={false} size={'xl'} opened={selected != null} onClose={() => { }} title={selected?.name}>
            <Container>
                <Stack>
                    <NumberInput
                        defaultValue={100}
                        placeholder="X"
                        label="Width"
                        required
                    />
                    <NumberInput
                        defaultValue={100}
                        placeholder="Y"
                        label="Width"
                        required
                    />
                    <NumberInput
                        defaultValue={100}
                        placeholder="Z"
                        label="Width"
                        required
                    />
                    <Divider />
                    <NumberInput
                        // defaultValue={0}
                        value={position.x * 100}
                        placeholder="X"
                        label="Move X"
                        onChange={(value) => {
                            setPosition({ ...position, x: value })

                        }}
                        required
                    />
                    <NumberInput
                        // defaultValue={0}
                        value={position.z * 100}
                        placeholder="Y"
                        label="Move Y"
                        onChange={(value) => {
                            setPosition({ ...position, y: value })

                        }}
                        required
                    />
                    <NumberInput
                        // defaultValue={0}
                        value={position.y * 100}
                        placeholder="Z"
                        label="Move Z"
                        onChange={(value) => {
                            setPosition({ ...position, z: value })

                        }}
                        required
                    />
                 
                </Stack>
            </Container>

        </Drawer>
    )
})