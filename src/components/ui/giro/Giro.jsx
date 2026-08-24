
import { Html } from '@react-three/drei'
import GiroIcon from '../giro-icon/GiroIcon'

export default function Giro ({ position }) {
    return (
        <Html 
            position={ position } 
            center
          
            >
            <GiroIcon />
        </Html>
    )
}