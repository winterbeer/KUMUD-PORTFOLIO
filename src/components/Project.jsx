import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  screenshots,
  tags,
  featured,
  setPreview,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hoverData = screenshots && screenshots.length > 1 ? screenshots : image;

  const handleOpen = () => {
    setPreview(null);
    setIsOpen(true);
  };

  if (featured) {
    return (
      <>
        <div
          className="relative my-6 rounded-xl border border-purple-500/40 bg-gradient-to-r from-purple-950/30 via-indigo-950/20 to-transparent px-6 py-8 overflow-hidden cursor-pointer"
          onMouseEnter={() => !isOpen && setPreview(hoverData)}
          onMouseLeave={() => setPreview(null)}
        >
          <div className="pointer-events-none absolute inset-0 rounded-xl" style={{boxShadow: "inset 0 0 50px rgba(124,58,237,0.1)"}}/>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30">
                  Featured
                </span>
              </div>
              <p className="text-2xl font-semibold text-white">{title}</p>
              <div className="flex gap-5 mt-2" style={{color: "rgba(167,139,250,0.7)"}}>
                {tags.map((tag) => (
                  <span key={tag.id}>{tag.name}</span>
                ))}
              </div>
            </div>
            <button
              onClick={handleOpen}
              className="flex items-center gap-1 cursor-pointer hover-animation"
              style={{color: "rgba(196,181,253,0.9)"}}
            >
              Read More
              <img src="assets/arrow-right.svg" className="w-5" />
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
        {isOpen && (
          <ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            screenshots={screenshots}
            tags={tags}
            href={href}
            closeModal={() => setIsOpen(false)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => !isOpen && setPreview(hoverData)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={handleOpen}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          screenshots={screenshots}
          tags={tags}
          href={href}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Project;
