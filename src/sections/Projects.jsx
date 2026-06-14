import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY - 80);
  };

  const [preview, setPreview] = useState(null);
  const isCollage = Array.isArray(preview);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {/* Single image preview */}
      {preview && !isCollage && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}

      {/* Collage preview */}
      {preview && isCollage && (
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none"
          style={{ x: springX, y: springY }}
        >
          <div className="relative w-72 h-48">
            {/* Back image */}
            <img
              src={preview[2]}
              className="absolute w-56 h-36 object-cover rounded-lg shadow-xl border border-white/10"
              style={{ top: "12px", left: "16px", transform: "rotate(-5deg)", opacity: 0.65 }}
            />
            {/* Middle image */}
            <img
              src={preview[1]}
              className="absolute w-56 h-36 object-cover rounded-lg shadow-xl border border-white/10"
              style={{ top: "6px", left: "8px", transform: "rotate(3deg)", opacity: 0.82 }}
            />
            {/* Front image */}
            <img
              src={preview[0]}
              className="absolute w-56 h-36 object-cover rounded-lg shadow-xl border border-white/20"
              style={{ top: "0px", left: "0px", transform: "rotate(0deg)" }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
