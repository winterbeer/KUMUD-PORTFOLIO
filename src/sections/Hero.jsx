import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      {/* Background — isolated stacking context, sits behind everything */}
      <ParallaxBackground />

      {/* 3D Astronaut — z-10, above background, behind text */}
      <figure
        className="absolute inset-0 z-10"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          camera={{ position: [0, 1, 3] }}
          gl={{ alpha: true }}
          onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <Float>
              <Astronaut
                scale={isMobile ? 0.23 : undefined}
                position={isMobile ? [0, -1.5, 0] : undefined}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>

      {/* Text — z-20, on top of everything; pointer-events-none lets the
          mouse reach the canvas behind it for the Rig camera tracking */}
      <div className="relative z-20 pointer-events-none">
        <HeroText />
      </div>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
