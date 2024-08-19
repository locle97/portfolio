import Section from "../components/Section";
import Button from "../components/Button";

export function About() {
  return (
    <div id="about" className="section flex flex-col w-full h-max py-20 px-12 gap-16 bg-white">
      <Section title="About Me">
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
      </Section>

      <Section title="Knowledge">
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
      </Section>

    </div>
  );
}

