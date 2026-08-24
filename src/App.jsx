
import { Canvas, useThree } from "@react-three/fiber"
import { BoxGeometry } from "three"
import { useState } from 'react'
import * as THREE from 'three'



import './app.scss'
import { OrbitControls } from "@react-three/drei"

import { Building } from "./experience/model/Building.jsx"
import Experience from "./experience/Experience.jsx"
import Navbar from "./components/layout/navbar/Navbar.jsx"

import FloorInfoModal from './experience/model/modal/FloorInfoModal.jsx'
import Areas from "./components/sections/areas/Areas.jsx"
import HeroTexts from "./components/sections/hero-texts/HeroTexts.jsx"
import Location from "./components/sections/location/Location.jsx"
import Footer from "./components/layout/footer/Footer.jsx"

import { useBreakpoint } from "./components/hooks/useBreakpoint.js"
import RoofInfoModal from "./experience/model/modal-roof/RoofInfoModal.jsx"

function App() {

  const [selectedFloor, setSelectedFloor] = useState(null)

  const [selectedRoof, setSelectedRoof] = useState(null)

  const [hasInteracted, setHasInteracted] = useState(false)
 
  // console.log(selectedRoof)
  console.log(selectedFloor)


  const { isDesktop } = useBreakpoint()
  

  return (
    <>

    <Navbar />

    <HeroTexts />

    <div className="container-canvas">
      <Canvas


        className="canvas-canvas"

        camera={{
          position: isDesktop ? [22.3, 0.2, 15.7] : [ 8, 2, 15 ],
          fov: isDesktop ? 45 : 90,
        }}
          gl={{
          toneMappingExposure: 0.7
        }}
      
      >
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          target={[0,-2, 0]}

          minAzimuthAngle={THREE.MathUtils.degToRad(25)}
          maxAzimuthAngle={THREE.MathUtils.degToRad(60)}

          minPolarAngle={THREE.MathUtils.degToRad(45)}
          maxPolarAngle={THREE.MathUtils.degToRad(90)}

          onStart={() => setHasInteracted(true)}
        />

        <Experience 
          onSelectFloor={setSelectedFloor}
          selectedFloor={selectedFloor}
          onSelectRoof= {setSelectedRoof}
          selectedRoof={selectedRoof}

          hasInteracted={hasInteracted}
        />

      </Canvas>

    </div>



    <FloorInfoModal
        floor={selectedFloor}
        onClose={() => setSelectedFloor(null)}
    />

    <RoofInfoModal 
      floor={selectedRoof}
      onClose= { () => setSelectedRoof(null)}
    />


    <Areas/>
    <Location />
    <Footer />
    
    </>
  )
}

export default App
