export function Frameworks() {
  const skills = [
    "python",
    "langchain",
    "langgraph",
    "openai",
    "anthropic",
    "huggingface",
    "pytorch",
    "docker",
    "n8n",
    "fastapi",
    "git",
    "github",
  ];
  return (
    <div className="flex flex-wrap gap-3 items-center justify-start w-full">
      {skills.map((skill, index) => (
        <img
          key={index}
          src={`assets/logos/${skill}.svg`}
          alt={skill}
          title={skill}
          className="w-8 h-8 hover:scale-110 transition-transform duration-200"
        />
      ))}
    </div>
  );
}
