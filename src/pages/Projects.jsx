import Section from '../components/Section';

export function Projects({ projects }) {
  if (!projects) {
    return null;
  }

  return (
    <div id="projects" className="section flex flex-col justify-center items-center w-full h-max py-20 px-6 lg:px-12 bg-white">
      <h2 className="text-4xl font-bold text-black">Projects</h2>
      <div className="section flex flex-col w-full h-max pt-20 gap-16 bg-white">
        {
          projects.map((project, index) => {
            return <Section key={index} title={project.title}>
              <div className="flex flex-col gap-8 w-full">

                {/* Image */}
                <img
                  className="rounded-md shadow-md"
                  src={project.thumbnail}
                  alt={project.thumbnailAlt}
                />

                {/* Buttons */}
                <div className="button-group flex flex-col gap-2 sm:flex-row sm:gap-6 justify-center items-center">
                  {
                    project.url &&
                    (
                      <button
                        onClick={() => window.open(project.url)}
                        className="w-max bg-white transistion-all delay-150 duration-300 button rounded-lg border-2 border-gray-800 text-gray-800 px-8 py-2 hover:scale-125">
                        Live Demo <i className="fi fi-rr-arrow-up-right-from-square"></i>
                      </button>
                    )
                  }
                  {
                    project.github &&
                    (
                      <button
                        onClick={() => window.open(project.github)}
                        className="w-max transistion-all delay-150 duration-300 button rounded-lg bg-gray-800 text-gray-200 px-8 py-2 hover:scale-125">
                        Github Code <i className="fi fi-brands-github"></i>
                      </button>
                    )
                  }
                </div>

                {/* Description */}
                <p className="text-center">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex justify-center gap-8">
                  {
                    project.techStack && project.techStack.map((tech, index) => {
                      return <TechStackItem key={index} techCode={tech} />
                    })
                  }
                </div>
              </div>
            </Section>
          })
        }
      </div>
    </div>
  );
}

function TechStackItem({ techCode }) {
  const techMapping = {
    'react': {
      logo: 'images/logo/react.svg',
      alt: 'React'
    },
    'html': {
      logo: 'images/logo/html.svg',
      alt: 'HTML'
    },
    'css': {
      logo: 'images/logo/css.svg',
      alt: 'CSS'
    },
    'javascript': {
      logo: 'images/logo/javascript.svg',
      alt: 'Javascript'
    },
  }

  return (
    <div className="flex flex-col justify-center items-center text-center hover:scale-125 transistion-all delay-150 duration-300">
      <img
        className="w-12 h-12"
        src={techMapping[techCode].logo}
        alt={techMapping[techCode].alt}
      />
      <p>{techMapping[techCode].alt}</p>
    </div>
  );
};

