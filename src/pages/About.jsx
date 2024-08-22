import Section from "../components/Section";
import Button from "../components/Button";
import SkillBar from "../components/SkillBar";
import TimelineItem from "../components/TimelineItem";
import NextPageButton from "../components/NextPageButton";

import './About.css';
import AnimatedPage from "../components/AnimatedPage";

export function About({ about }) {
  if (!about) {
    return null;
  }

  return (
    <AnimatedPage>
      <div id="about" className="relative section flex flex-col justify-center items-center w-full h-max pt-20 pb-24 px-6 2xl:px-12 bg-white">
        <NextPageButton title="My Projects" nextPage="/projects" />
        <h2 className="text-4xl font-bold text-black">About</h2>
        <div className="flex flex-col w-full h-max pt-20 gap-16 bg-white">
          <AboutMe about={about} />
          <Timelines timelines={about.timelines} />
          <Achivements achivements={about.achivements} />
          <Skills skills={about.skills} />
        </div>
      </div>
    </AnimatedPage>
  );
}

function Achivements({ achivements }) {
  const awards = achivements.awards;
  const certifications = achivements.certifications;

  return <Section title="Achivements">
    <div className="flex flex-col gap-16">
      <div className="flex flex-col 2xl:flex-row gap-12 2xl:gap-0">
        <div className="relative flex flex-col w-full 2xl:w-1/2 px-2 2xl:pr-8 gap-8 2xl:border-r-[1px]">
          <p className="text-black font-bold uppercase">
            Awards
          </p>
          <div className="flex flex-col gap-6">
            {awards.map((item, index) => {
              return (
                <div key={index}>
                  <TimelineItem
                    title={item.title}
                    subtitle={item.issuer} />
                  {index < awards.length - 1 ? <hr /> : null}
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative right flex flex-col w-full 2xl:w-1/2 px-2 2xl:pl-8 gap-8">
          <p className="text-black font-bold uppercase">
            Certifications
          </p>
          <div className="flex flex-col gap-6">
            {certifications.map((item, index) => {
              return (
                <div key={index}>
                  <TimelineItem
                    title={item.title}
                    subtitle={item.issuer} />
                  {index < awards.length - 1 ? <hr /> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </Section>
}

function Timelines({ timelines }) {
  const educations = timelines.educations;
  const workExperiences = timelines.workExperiences;

  return <Section title="Timeline">
    <div className="flex flex-col gap-16">
      <div className="flex flex-col 2xl:flex-row gap-12 2xl:gap-0">
        <div className="flex flex-col w-full 2xl:w-1/2 px-2 2xl:pr-8 gap-8 2xl:border-r-[1px]">
          <p className="text-black font-bold uppercase">
            Work Experiences
          </p>
          <div className="flex flex-col gap-6">
            {workExperiences.map((experience, index) => {
              return (
                <div key={index}>
                  <TimelineItem
                    title={experience.title}
                    subtitle={experience.subtitle}
                    period={experience.period} />
                  {index < workExperiences.length - 1 ? <hr /> : null}
                </div>
              );
            })}
          </div>
        </div>
        <div className="right flex flex-col w-full 2xl:w-1/2 px-2 2xl:pl-8 gap-8">
          <p className="text-black font-bold uppercase">
            Educations
          </p>
          <div className="flex flex-col gap-6">
            {educations.map((education, index) => {
              return (
                <div key={index}>
                  <TimelineItem
                    key={index}
                    title={education.title}
                    subtitle={education.subtitle}
                    period={education.period} />
                  {index < educations.length - 1 ? <hr /> : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </Section>;
}

function Skills({ skills }) {
  const backend = skills.backend;
  const fronend = skills.frontend;
  const designsAndArchitectures = skills.designsAndArchitectures;
  const tools = skills.tools;

  return (
    <Section title="Skills">
      <div className="flex flex-col gap-16">
        {/* First row */}
        <div className="flex flex-col 2xl:flex-row gap-16 2xl:gap-0">
          <div className="flex flex-col w-full 2xl:w-1/2 px-2 2xl:pr-8 gap-8 2xl:border-r-[1px]">
            <p className="text-black font-bold uppercase">
              Backend
            </p>
            <div className="flex flex-col gap-2">
              {backend.map((skill, index) => {
                return <SkillBar key={index} skill={skill.skill} current={skill.current} />;
              })}
            </div>
          </div>
          <div className="right flex flex-col w-full 2xl:w-1/2 px-2 2xl:pl-8 gap-8">
            <p className="text-black font-bold uppercase">
              Frontend
            </p>
            <div className="flex flex-col gap-2">
              {fronend.map((skill, index) => {
                return <SkillBar key={index} skill={skill.skill} current={skill.current} />;
              })}
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col 2xl:flex-row gap-16 2xl:gap-0">
          <div className="flex flex-col w-full 2xl:w-1/2 px-2 2xl:pr-8 gap-8 2xl:border-r-[1px]">
            <p className="text-black font-bold uppercase">
              Software Design and Architecture
            </p>
            <div className="flex flex-col gap-2">
              {designsAndArchitectures.map((skill, index) => {
                return <SkillBar key={index} skill={skill.skill} current={skill.current} />;
              })}
            </div>
          </div>
          <div className="flex flex-col w-full 2xl:w-1/2 px-2 2xl:pl-8 gap-8">
            <p className="text-black font-bold uppercase">
              Tools
            </p>
            <div className="flex flex-col gap-2">
              {tools.map((skill, index) => {
                return <SkillBar key={index} skill={skill.skill} current={skill.current} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

function AboutMe({ about }) {
  return <Section title="About Me">
    <div className="flex flex-col gap-10">
      <p>{about.introduction}</p>
      <hr />
      <div className="flex flex-col gap-2">
        <p>Name: {about.fullName}</p>
        <p>Age: {new Date().getFullYear() - about.birthYear}</p>
        <p>City: {about.location}</p>
        <p>Job: {about.title}</p>
        <p>Phone: <span className="text-black link-underline">{about.phone}</span></p>
        <p>Email: <span className="text-black link-underline">{about.email}</span></p>
        <p>Website: <a href={about.website} className="text-black link-underline">{about.website}</a></p>
        <p>Freelance: {about.freelanceStatus}</p>
      </div>
      <div>
        <Button>Download CV <i className="fi fi-sr-download"></i></Button>
      </div>
    </div>
  </Section>;
}

