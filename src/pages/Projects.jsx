import Section from '../components/Section';

export function Projects({ projects }) {
  if (!projects) {
    return null;
  }

  return (
    <div id="projects" className="section flex flex-col justify-center items-center w-full h-max py-20 px-6 lg:px-12 bg-white">
      <h2 className="text-4xl font-bold text-black">Projects</h2>
      <div className="section flex flex-col w-full h-max pt-20 gap-16 bg-white">

        <Section title="Simple Resume">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
              <p className="text-black font-bold uppercase">
                Awards
              </p>
            </div>
          </div>
        </Section>

      </div>

    </div>
  );

}

