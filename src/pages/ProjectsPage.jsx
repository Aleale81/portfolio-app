import projectsData from "../projects.json";
import { Button, Hero, Mask } from "react-daisyui";
import { Link } from "react-router-dom";
import arrowRx from "../assets/icons/arrowRx-icon.gif";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {

  return (
    <div className="grid grid-cols-1">
      <Hero>
        <Hero.Content className="flex-row">
          <div>
            <h1 className="text-primary text-5xl font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-blue-500">
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
                <Button color="primary">
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
      
      {projectsData.map((project) => {
        return (
          <ProjectCard project={project} key={project.id} />
        );
      })}
    </div>
  );
};

export default ProjectsPage;
