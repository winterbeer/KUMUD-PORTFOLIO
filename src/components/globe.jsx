"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 8,
  mapBaseBrightness: 0.05,
  baseColor: [0.1, 0.08, 0.28],
  markerColor: [0.6, 0.4, 1],
  glowColor: [0.38, 0.22, 0.75],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.05 },
    { location: [28.6139, 77.209], size: 0.12 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({ className, canvasClassName, config = GLOBE_CONFIG }) {
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);

  const r = useMotionValue(0);
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 });

  const updatePointerInteraction = (value) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
      pointerInteracting.current = clientX;
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
    });

    // v2 API: animate via globe.update() + rAF
    let phi = 0;
    let frameId;
    const animate = () => {
      phi += 0.005;
      globe.update({
        phi: phi + rs.get(),
        width: width * 2,
        height: width * 2,
      });
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
    }, 0);

    return () => {
      globe.destroy();
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div className={twMerge("mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        className={twMerge(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
          canvasClassName
        )}
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  );
}
