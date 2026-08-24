import OpenIcon from '../open-icon/OpenIcon'
import './floor-button.scss'


import { Html } from '@react-three/drei'

export default function FloorButton({ position, floor, onSelect }) {
    return (
        <Html position={position} center>
            {/* Esto envia la actualizacion a mi estado */}
            <button onClick={() => onSelect(floor)}>
                <OpenIcon />
                
            </button>
        </Html>
    )
}

