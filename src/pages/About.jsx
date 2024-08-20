import Section from "../components/Section";
import Button from "../components/Button";
import SkillBar from "../components/ProgressBar";
import TimelineItem from "../components/TimelineItem";

export function About() {
  return (
    <div id="about" className="section flex flex-col w-full h-max py-20 px-6 lg:px-12 gap-16 bg-white">
      <AboutMe />
      <Timelines />
      <Skills />
    </div>
  );
}

function Timelines() {
  const educations = [
    {
      title: "HCM University of Science",
      subtitle: "College - Information Technology",
      period: "2015-2018",
    }
  ];

  const workExperiences = [
    {
      title: "NashTech",
      subtitle: "Senior Software Engineer",
      period: "2021-now",
    },
    {
      title: "NashTech",
      subtitle: "Software Engineer",
      period: "2018-2021",
    },
  ];

  return <Section title="Timeline">
    <div className="flex flex-col gap-16">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
        <div className="flex flex-col w-full lg:w-1/2 px-2 lg:pr-8 gap-8 lg:border-r-[1px]">
          <p className="text-black font-bold uppercase">
            Work Experiences
          </p>
          <div className="flex flex-col gap-6">
            {workExperiences.map((experience, index) => {
              return (
                <>
                  <TimelineItem
                    key={index}
                    title={experience.title}
                    subtitle={experience.subtitle}
                    period={experience.period} />
                  {index < workExperiences.length - 1 ? <hr /> : null}
                </>
              );
            })}
          </div>
        </div>
        <div className="right flex flex-col w-full lg:w-1/2 px-2 lg:pl-8 gap-8">
          <p className="text-black font-bold uppercase">
            Educations
          </p>
          <div className="flex flex-col gap-6">
            {educations.map((education, index) => {
              return (
                <>
                  <TimelineItem
                    key={index}
                    title={education.title}
                    subtitle={education.subtitle}
                    period={education.period} />
                  {index < educations.length - 1 ? <hr /> : null}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </Section>;
}

function Skills() {
  const backend = [
    { skill: "ASP.NET Core", current: 4 },
    { skill: "Neo4J", current: 4 },
    { skill: "ElasticSearch", current: 3 },
    { skill: "SQL Server", current: 3 },
    { skill: "Python", current: 2 },
  ];

  const fronend = [
    { skill: "Angular", current: 3 },
    { skill: "React", current: 2 },
    { skill: "Javascript / Typescript", current: 3 },
    { skill: "HTML", current: 3 },
    { skill: "CSS", current: 2 },
  ];

  const designsAndArchitectures = [
    { skill: "Microservices", current: 3 },
    { skill: "Message Queuing / Event-Driven", current: 2 },
    { skill: "Clean Architecture", current: 1 },
  ];

  const tools = [
    { skill: "Vim", current: 4 },
    { skill: "Trello", current: 3 },
    { skill: "Linux / Windows", current: 2 },
    { skill: "Git", current: 2 },
    { skill: "Docker", current: 1 },
  ];

  return (
    <Section title="Skills">
      <div className="flex flex-col gap-16">
        {/* First row */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0">
          <div className="flex flex-col w-full lg:w-1/2 px-2 lg:pr-8 gap-8 lg:border-r-[1px]">
            <p className="text-black font-bold uppercase">
              Backend
            </p>
            <div className="flex flex-col gap-2">
              {backend.map((skill, index) => {
                return <SkillBar key={index} skill={skill.skill} current={skill.current} />;
              })}
            </div>
          </div>
          <div className="right flex flex-col w-full lg:w-1/2 px-2 lg:pl-8 gap-8">
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
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-0">
          <div className="flex flex-col w-full lg:w-1/2 px-2 lg:pr-8 gap-8 lg:border-r-[1px]">
            <p className="text-black font-bold uppercase">
              Software Design and Architecture
            </p>
            <div className="flex flex-col gap-2">
              {designsAndArchitectures.map((skill, index) => {
                return <SkillBar key={index} skill={skill.skill} current={skill.current} />;
              })}
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 px-2 lg:pl-8 gap-8">
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

function AboutMe() {
  return <Section title="About Me">
    <div className="flex flex-col gap-10">
      <p>
        A highly motivated and results-driven software engineer with 6 years of experience in C# and .Net Core. Graduated from Ho Chi Minh University of Science with a strong academic record. Currently serving as a Senior Software Engineer at Nashtech, where I have been recognized as the Top Excellent Developer in 2020 and Developer of the Year in 2022. Possess a strong ability to analyze and solve complex problems effectively. Committed to delivering high-quality software solutions to meet customer needs and exceed expectations.
      </p>
      <hr />
      <div className="flex flex-col gap-2">
        <p>Name: Loc Le</p>
        <p>Age: 28</p>
        <p>City: Ho Chi Minh, VietNam</p>
        <p>Job: Fullstack Developer</p>
        <p>Phone: <span className="text-black">+84 907 132 458</span></p>
        <p>Email: <span className="text-black">lpl212757@gmail.com</span></p>
        <p>Website: <span className="text-black">www.locle.dev</span></p>
        <p>Freelance: Available</p>
      </div>
      <div>
        <Button>Download CV</Button>
      </div>
    </div>
  </Section>;
}

