import { useState } from "react";
import { Button, Card, Mask, Tooltip } from "react-daisyui";
import appLinkIcon from "../assets/icons/app-link.gif";
import githubIcon from "../assets/icons/github-icon.gif";

const ProjectCard = ({ project }) => {
  const [isShown, setIsShown] = useState(true);

  const handleMouseEnter = () => {
    setIsShown(false);
  };
  const handleMouseLeave = () => {
    setIsShown(true);
  };

  return (
      <Card
        imageFull
        className={`h-80 shadow-secondary mb-6 transition-all duration-500 ease-in-out ${
          isShown ? "shadow-md " : "shadow-lg"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card.Image src={project.image} alt={project.projectName} />
        <Card.Body className="w-full justify-between">
          <Card.Title className="w-full flex flex-wrap justify-between">
            <h1
              className={`text-white font-extrabold ms-2 transition-all duration-500 ease-in-out ${
                isShown ? "text-lg" : "text-2xl"
              }`}
            >
              {project.projectName}
            </h1>{" "}
            <span>
              <a href={project.appUrl} target="_blank" className="inline-block">
                <Tooltip message="Visit App" position="top" color="accent">
                  <Mask
                    src={appLinkIcon}
                    className={`me-2 transition-all duration-500 ease-in-out ${
                      isShown ? "w-9 h-9" : "w-11 h-11"
                    }`}
                    variant="circle"
                  />
                </Tooltip>
              </a>
              <a href={project.gitUrl} target="_blank" className="inline-block">
                <Tooltip
                  message="Github Repository"
                  position="top"
                  color="accent"
                >
                  <Mask
                    src={githubIcon}
                    className={`me-2 transition-all duration-500 ease-in-out ${
                      isShown ? "w-9 h-9" : "w-11 h-11"
                    }`}
                    variant="circle"
                  />
                </Tooltip>
              </a>
            </span>
          </Card.Title>
          <div
            className={`w-full justify-evenly transition-all duration-700 ease-in-out ${
              isShown ? "" : "opacity-0"
            }`}
          >
            <Card.Actions>
              <p className="text-md p-8">{project.description}</p>
            </Card.Actions>

            <Card.Actions>
              {project.tech.map((el, index) => {
                return (
                  <Button
                    key={index}
                    className="m-1 cursor-default"
                    color="primary"
                    size="xs"
                    glass
                    variant="outline"
                    active="true"
                  >
                    {el}
                  </Button>
                );
              })}
            </Card.Actions>
          </div>
        </Card.Body>
      </Card>
  );
};

export default ProjectCard;
