import { projectDetails } from "@/constants";
const AboutProject = ({ project }: { project: string }) => {
  const projectDetail = projectDetails[project];

  return (
    <section className="bg-white800 dark:bg-black300">
      <p className="smallRegular whitespace-pre-line px-6 py-9 text-white500 dark:text-white800 sm:text-[1.25rem] sm:leading-[1.875rem] xl:px-[17.5rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]">
        {projectDetail.detail}
      </p>
    </section>
  );
};

export default AboutProject;