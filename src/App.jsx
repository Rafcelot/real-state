import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import './app.scss'

import Experience from './experience/Experience.jsx'
import FloorInfoModal from './experience/model/modal/FloorInfoModal.jsx'
import RoofInfoModal from './experience/model/modal-roof/RoofInfoModal.jsx'

import Navbar from './components/layout/navbar/Navbar.jsx'
import Footer from './components/layout/footer/Footer.jsx'

import HeroTexts from './components/sections/hero-texts/HeroTexts.jsx'
import Areas from './components/sections/areas/Areas.jsx'
import Location from './components/sections/location/Location.jsx'

import { useBreakpoint } from './components/hooks/useBreakpoint.js'


function App() {

  // -------------------------
  // State
  // -------------------------

  const [selectedFloor, setSelectedFloor] = useState(null)
  const [selectedRoof, setSelectedRoof] = useState(null)

  // Apaga el icono de 360 cuando el usuario interactúa
  const [hasInteracted, setHasInteracted] = useState(false)


  // -------------------------
  // Modal
  // -------------------------

  const isModalOpen =
    selectedFloor !== null ||
    selectedRoof !== null


  // Bloquea el scroll de la página cuando hay un modal abierto
  useEffect(() => {

    document.body.style.overflow = isModalOpen
      ? 'hidden'
      : ''

    return () => {
      document.body.style.overflow = ''
    }

  }, [isModalOpen])


  // -------------------------
  // Responsive
  // -------------------------

  const { isDesktop } = useBreakpoint()


  return (
    <>
      <Navbar />

      <HeroTexts />


      {/* 3D EXPERIENCE */}

      <div className="container-canvas">

        <Canvas
          className="canvas-canvas"
          camera={{
            position: isDesktop
              ? [22.3, 0.2, 15.7]
              : [8, 2, 15],

            fov: isDesktop
              ? 45
              : 90,
          }}

          gl={{
            toneMappingExposure: 0.7
          }}
        >

          <OrbitControls
            enableZoom={false}
            enablePan={false}

            target={[0, -2, 0]}

            minAzimuthAngle={
              THREE.MathUtils.degToRad(25)
            }

            maxAzimuthAngle={
              THREE.MathUtils.degToRad(60)
            }

            minPolarAngle={
              THREE.MathUtils.degToRad(45)
            }

            maxPolarAngle={
              THREE.MathUtils.degToRad(90)
            }

            onStart={() => setHasInteracted(true)}
          />

          <Experience
            onSelectFloor={setSelectedFloor}
            selectedFloor={selectedFloor}

            onSelectRoof={setSelectedRoof}
            selectedRoof={selectedRoof}

            hasInteracted={hasInteracted}
          />

        </Canvas>

      </div>


      {/* MODALS */}

      <FloorInfoModal
        floor={selectedFloor}
        onClose={() => setSelectedFloor(null)}
      />

      <RoofInfoModal
        floor={selectedRoof}
        onClose={() => setSelectedRoof(null)}
      />


      {/* SECTIONS */}

      <Areas />

      <Location />

      <Footer />

    </>
  )
}

export default App