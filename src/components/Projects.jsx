import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-item">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketSquareIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:tex-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've built
          </h1>
          <p className="lg:w-2/3 mx-auto text-base/relaxed">
            These are the personal projects that I've built so far. I am still building a few more, which will hopefully be followed by a lot more, either for me or for someone else.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex-relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 ">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h4 className="title-font text-md font-medium text-white mb-3">Technologies Used: {project.technologies}</h4>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
