import { useDebouncedValue } from "@mantine/hooks"
import { TransformControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { forwardRef, useCallback, useEffect, useRef, useState } from "react"

import * as _ from "lodash"
import { Vector3 } from "three"

export const DragControls = ({ selected }: any) => {
    // Get notified on changes to state
    const [pos, setPos] = useState<Vector3>(selected?.position || { x: 0, y: 0, z: 0 })

    const dragRef = useRef<any>()

    useEffect(() => {
        if (dragRef.current) {



            dragRef.current.addEventListener('objectChange', _.throttle((e) => {

                if (e.target) {
                    // setPos(e.target.object.position)
                    console.log('objectChange', e.target.object.position)
                }
            }, 100))
            return () => {
                dragRef.current && dragRef.current.removeEventListener('objectChange')
            }
        }
    }, [dragRef, dragRef.current])



    // useEffect(() => {
    //     console.log('POS', pos)
    // }, [pos])

    const changePos = useCallback((pos: Vector3) => {
        setPos(pos);
    }, [])
    return (

        <TransformControls object={selected} mode={'translate'} ref={dragRef} enabled={selected != null} visible={selected != null} />

    )
}
