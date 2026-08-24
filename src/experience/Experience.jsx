import { useEffect, useState } from 'react'
import { useThree } from '@react-three/fiber'

import { Center } from "@react-three/drei"

import GUI from 'lil-gui'

import { Building } from './model/Building'

import { Perf } from 'r3f-perf'

import FloorButton from '../components/ui/floor-button/FloorButton'
import RoodInfoModal from './model/modal-roof/RoofInfoModal'
import Giro from '../components/ui/giro/giro'


export default function Experience({ onSelectFloor, selectedFloor, onSelectRoof, selectedRoof, hasInteracted }) {
  // const { camera } = useThree()

  // useEffect(() => {
  //   const gui = new GUI()

  //   gui.add(camera.position, 'x', -20, 40, 0.1)
  //   gui.add(camera.position, 'y', -20, 40, 0.1)
  //   gui.add(camera.position, 'z', -20, 40, 0.1)

  //   gui.add(camera, 'fov', 10, 100, 1).onChange(() => {
  //     camera.updateProjectionMatrix()
  //   })

  //   return () => {
  //     gui.destroy()
  //   }
  // }, [camera])

 
  

  return (
    <>
      {/* <Perf position="top-left" /> */}

      <Center>
        <Building />
      </Center> 

      {selectedFloor === null && selectedRoof === null && (
        <FloorButton 
          floor={1}
          position={[0, -5, 3]} 
          onSelect={onSelectFloor}
        />
      )}

      {selectedFloor === null && selectedRoof === null && (
        <FloorButton 
          floor={2}
          position={[4, -2, 3]} 
          onSelect={onSelectFloor}
        />
      )}

      {selectedFloor === null && selectedRoof === null && (
        <FloorButton 
          floor={3}
          position={[1, 1, 2]} 
          onSelect={onSelectFloor}
        />
      )}

      {selectedRoof === null && selectedFloor === null &&(
        <FloorButton 
          floor={4}
          position={[4, 5, 0]} 
          onSelect={onSelectRoof}
        />
      )}      
        
      { !hasInteracted && (
        <Giro 
          position={[1.5, -8.2, 0]}
        />      
      )}
   

    
    </>
  )
}