import projectsData from "../assets/data/projects.json";
import { Button, Hero, Mask } from "react-daisyui";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import arrowRx from "../assets/icons/arrowRx-icon.gif";
import projPageImg from "../assets/images/project-page-img.jpeg"

const ProjectsPage = () => {

  return (
    <>
      <Hero className="rounded-lg shadow-md shadow-accent">
        <Hero.Content className="flex-col lg:flex-row">
        <img src={projPageImg} className="max-w-xs hidden rounded-lg h-52 sm:block" />
          <div>
            <h1 className="text-accent text-5xl font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-primary">
              Projects
            </h1>
            <p className="py-6">
              Welcome to my project gallery! These little gems are the result of
              my adventures in the learning realm, especially during the wild
              ride that was the Ironhack remote bootcamp. Explore my creativity
              as I turn challenges and bugs into triumphant opportunities to
              learn, creating new features that add sparks to the code journey!{" "}
            </p>
            <div className="flex justify-end">
              <Link to={"/contact"}>
                <Button>
                  Contact Me
                  <Mask
                    src={arrowRx}
                    variant="circle"
                    className="w-9 h-9 block"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </Hero.Content>
      </Hero>

      <div className="grid gap-4 mt-6 lg:grid-cols-2">
           {projectsData.map((project) => {
        return (
          <ProjectCard project={project} key={project.id} />
        );
      })}   
      </div>


    </>
  );
};

export default ProjectsPage;
