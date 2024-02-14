import { useState } from "react";
import { Card, Divider, Mask, Tooltip } from "react-daisyui";
import appLinkIcon from "../assets/icons/app-link.gif";
import githubIcon from "../assets/icons/github-icon.gif";
import wipIcon from "../assets/static-icons/work-in-progress-icon.png";

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
      className={`shadow-accent transition-all duration-500 ease-in-out ${
        isShown ? "shadow-md " : "shadow-lg"
      } `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Image
        src={isShown ? project.image : project.gif}
        alt={project.projectName}
        className="h-52"
      />
      <Card.Body>
        <Card.Title className="w-full flex flex-wrap justify-between">
          <h1 className="text-secondary text-xl font-extrabold">
            {project.projectName}
          </h1>{" "}
          <span>
            {project.appUrl ? (
              <a
                href={project.appUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="inline-block"
              >
                <Tooltip message="Visit App" position="top" color="accent">
                  <Mask
                    src={appLinkIcon}
                    className="me-2 w-9 h-9"
                    variant="circle"
                  />
                </Tooltip>
              </a>
            ) : (
              <div className="inline-block">
                <Mask src={wipIcon} className="me-2 w-9 h-9" />
              </div>
            )}
            <a
              href={project.gitUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="inline-block"
            >
              <Tooltip
                message="Github Repository"
                position="top"
                color="accent"
              >
                <Mask
                  src={githubIcon}
                  className="me-2 w-9 h-9"
                  variant="circle"
                />
              </Tooltip>
            </a>
          </span>
        </Card.Title>

        <Divider color="primary"></Divider>
        <p className="text-md p-1">{project.description}</p>

        <Card.Actions>
          {project.techIcons.map((icon, index) => {
            return (
              <div key={index} className="inline-block">
                <Mask src={`../tech-icon/${icon}`} className="w-11 h-11" />
              </div>
            );
          })}
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
