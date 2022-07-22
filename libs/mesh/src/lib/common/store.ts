import { MeshProps } from '@react-three/fiber'
import { V } from '@use-gesture/core/dist/declarations/src/utils/maths'
import { createRef, MutableRefObject } from 'react'
import { MeshStandardMaterial, Vector2, Vector3 } from 'three'
import create from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
export interface Cell extends Partial<Omit<MeshProps, 'args'>> {
    position: Vector3
}
interface CellStore {
    cells: Cell[],
    offset: Vector2,

    setCells: (cells: Cell[]) => void
    selectedCell: string | null
    setSelectedCell: (cell: string | null) => void
    setCell: (cell: Cell) => void
    isDragging: boolean
    setIsDragging: (isDragging: boolean) => void
}
export const _CM = 100
export const CMVec3 = (v: Vector3) => {
    return new Vector3(v.x / _CM, v.y / _CM, v.z / _CM)
}


function createMap(w: number, h: number, gap: number) {
    const map: Array<any> = [];
    for (let x = 0; x < w; x++) {
        map[x] = [];
        for (let z = 0; z < h; z++) {
   
            map[x][z] = {
                name: `cell-${x}-${z}`,
                position: CMVec3(new Vector3(x * gap, -z * gap, 0)),
                scale: CMVec3(new Vector3(100, 100, 100)),
            }
        }
    }
  
    return { map, offsetX: w, offsetZ: h + gap / (h - 1) / 100 };
}


const { map, offsetX, offsetZ } = createMap(10, 7, 120)
const useStore = create<CellStore>(
    (set, get) => ({
        cells: map,
        offset: new Vector2(offsetX, offsetZ),
        setCells: (cells) => set((state) => ({ ...state, cells })),
        selectedCell: null,
        setSelectedCell: (cell) => set((state) => ({ ...state, selectedCell: cell })),
        setCell: (cell) => set((state) => {
            const cells = state.cells.map((c) => c.name === cell.name ? { ...c, ...cell } : c)

            return { ...state, cells }
        }),
        isDragging: false,
        setIsDragging: (isDragging) => set((state) => ({ ...state, isDragging })),
    })
)


export const useCellStore = useStore