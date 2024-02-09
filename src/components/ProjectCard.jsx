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
      className={`shadow-accent m-4 transition-all duration-500 ease-in-out ${
        isShown ? "shadow-md " : "shadow-lg"
      } md:h-80 md:12`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Image src={project.image} alt={project.projectName} />
      <Card.Body className="p-1 w-full justify-between md:p-8">
        <Card.Title className="w-full flex flex-wrap justify-between">
          <h1
            className={`text-secondary font-extrabold ms-2 transition-all duration-500 ease-in-out ${
              isShown ? "text-lg" : "text-2xl"
            }`}
          >
            {project.projectName}
          </h1>{" "}
          <span>
            {project.appUrl && (
              <a href={project.appUrl} rel='noopener noreferrer' target="_blank" className="inline-block">
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
            )}
            <a href={project.gitUrl} rel='noopener noreferrer' target="_blank" className="inline-block">
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
            <p className="text-sm p-8">{project.description}</p>
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
