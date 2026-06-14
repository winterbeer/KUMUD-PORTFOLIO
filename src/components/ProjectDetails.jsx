import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  screenshots,
  tags,
  href,
  closeModal,
}) => {
  const hasCollage = screenshots && screenshots.length > 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm px-4">
      <motion.div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 z-10 p-2 rounded-sm bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>

        {/* Collage or single image */}
        {hasCollage ? (
          <div className="w-full h-52 rounded-t-2xl overflow-hidden grid grid-cols-2 gap-0.5 bg-black/20">
            {/* Left: large image */}
            <img
              src={screenshots[0]}
              className="w-full h-52 object-cover"
            />
            {/* Right: 2 stacked images */}
            <div className="flex flex-col gap-0.5 h-52">
              <img
                src={screenshots[1]}
                className="w-full h-1/2 object-cover"
              />
              <img
                src={screenshots[2]}
                className="w-full h-1/2 object-cover"
              />
            </div>
          </div>
        ) : (
          <img src={image} alt={title} className="w-full max-h-52 object-cover rounded-t-2xl" />
        )}

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400" dangerouslySetInnerHTML={{ __html: subDesc }} />
          ))}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-10 hover-animation"
                />
              ))}
            </div>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-white hover:text-lavender"
              >
                View Project
                <img src="assets/arrow-up.svg" className="size-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
