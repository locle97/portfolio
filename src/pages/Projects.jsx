import AnimatedPage from '../components/AnimatedPage';
import Section from '../components/Section';
import NextPageButton from '../components/NextPageButton';
import TechStackItem from '../components/TechStackItem';

import Slider from "react-slick";
import DynamicTitle from '../components/DynamicTitle';

function ProjectThumbnail({ isUsingSlide, images, thumbnail, thumbnailAlt }) {
  if (isUsingSlide) {
    var settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="w-full">
        <Slider {...settings}>
          {
            images && images.map((image, index) => {
              return (
                <img
                  key={index}
                  className="object-contain max-h-[50vh]"
                  src={image}
                />
              )
            })
          }
        </Slider>
      </div>
    )
  }
  else
    return (
      <img
        className="rounded-md shadow-md max-h-[50vh]"
        src={thumbnail}
        alt={thumbnailAlt}
      />
    )
}

export function Projects({ projects }) {
  if (!projects) {
    return null;
  }

  return (
    <AnimatedPage>
      <DynamicTitle title="Loc Le - Projects" />
      <div id="projects" className="relative section flex flex-col justify-center items-center w-full h-max pt-20 pb-24 px-6 lg:px-12 bg-white">
        <NextPageButton title="Contact me" nextPage="/contact" />
        <h2 className="text-4xl font-bold text-black">Projects</h2>
        <div className="section flex flex-col w-full h-max pt-20 gap-16 bg-white">
          {
            projects.map((project, index) => {
              return <Section key={index} title={project.title}>
                <div className="flex flex-col gap-8 w-full justify-center items-center">

                  {/* Image */}
                  <ProjectThumbnail isUsingSlide={project.isUsingSlide}
                    images={project.images}
                    thumbnail={project.thumbnail}
                    thumbnailAlt={project.thumbnailAlt} />

                  {/* Buttons */}
                  <div className="button-group flex flex-col gap-2 sm:flex-row sm:gap-6 justify-center items-center">
                    {
                      project.livePreviewNotAvailable &&
                      (
                        <div
                          className="w-max bg-white transistion-all delay-150 duration-300 button rounded-lg border-2 border-gray-800 text-gray-800 px-8 py-2 hover:bg-gray-100">
                          Coming Soon!
                        </div>
                      )
                    }
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
                  <div className="flex flex-wrap justify-center gap-8">
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
    </AnimatedPage>
  );
}


