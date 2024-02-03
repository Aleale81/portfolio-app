import { useCallback, useState } from "react";
import projectsData from "../projects.json";
import { Button, Card, Mask, Tooltip } from "react-daisyui";
import appLinkIcon from "../assets/icons/app-link.gif";
import githubIcon from "../assets/icons/github-icon.gif";

const ProjectsPage = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible((visible) => !visible);
  }, []);

  return (
    <div className="grid grid-cols-1">
      {projectsData.map((project) => {
        return (
          <Card
            imageFull
            key={project.id}
            className="h-80 shadow-lg shadow-secondary mb-6 "
          >
            <Card.Image
              src={project.image}
              alt={project.projectName}
            />
            <Card.Body className="w-full justify-between ">
              <Card.Title className="bg-white w-full shadow-md shadow-secondary rounded-box p-1 flex flex-wrap justify-between md:w-5/6 lg:w-1/2">
                <h1 className="text-lg text-gray-800 font-extrabold ms-2 ">
                  {project.projectName}
                </h1>{" "}
                <span>
                  <a
                    href={project.appUrl}
                    target="_blank"
                    className="inline-block"
                  >
                    <Tooltip
                      message="Visit App"
                      position="top"
                      color="primary"
                    >
                      <Mask src={appLinkIcon} className=" w-9 h-9" />
                    </Tooltip>
                  </a>
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    className="inline-block"
                  >
                    <Tooltip
                      message="Github Repository"
                      position="top"
                      color="primary"
                    >
                      <Mask src={githubIcon} className=" w-9 h-9" />
                    </Tooltip>
                  </a>
                </span>
              </Card.Title>
              <Card.Actions>
                <p className="text-sm">{project.description}</p>
              </Card.Actions>

              <Card.Actions>
                <div className="rounded-box-md p-1">
                  {project.tech.map((el, index) => {
                    return (
                      <Button
                        key={index}
                        className="m-1 cursor-default"
                        color="accent"
                        size="xs"
                        glass
                        variant="outline"
                        active="true"
                      >
                        {el}
                      </Button>
                    );
                  })}
                </div>
              </Card.Actions>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ProjectsPage;

