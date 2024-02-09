import { Button, Divider, Mask, Modal, Tooltip } from "react-daisyui";
import thanksIcon from "../assets/icons/thank-you.gif";
import githubIcon from "../assets/icons/github-icon.gif";

const portfolioGithub = "https://github.com/Aleale81/portfolio-app";

const InfoModal = ({ visible, handleModal }) => {
    
  return (
    <Modal.Legacy open={visible} className="shadow-md shadow-accent">
      <Button
        size="sm"
        color="ghost"
        shape="circle"
        className="absolute right-2 top-2"
        onClick={handleModal}
      >
        ✕
      </Button>
      <Modal.Header className="font-bold text-primary">
        About this Website
      </Modal.Header>
      <Modal.Body>
        <p className="text-start text-sm">
          This website is a Vite React project, styled with{" "}
          <a
            href="https://react.daisyui.com/?path=/docs/welcome--docs"
            rel="noopener noreferrer"
            target="_blank"
            className="text-cyan-400"
          >
            react-daisyUI
          </a>
          , a React component library based on Tailwind CSS.
          <br />
          <br />
          Static and animated icons are sourced from{" "}
          <a
            href="https://www.flaticon.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-cyan-400"
          >
            flaticon.com
          </a>
          ,
          <br />
          <br />
          while email communication is implemented with{" "}
          <a
            href="https://www.emailjs.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-cyan-400"
          >
            EmailJS
          </a>
          .
          <br />
          <br />
          The gifs showcasing my projects are created with a{" "}
          <a
            href="https://ezgif.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-cyan-400"
          >
            gif maker
          </a>
          .
          <br />
          <br />
          Additionally, the images you see, apart from my photo (yes, that one's
          real!), have been generated using the{" "}
          <a
            href="https://deepai.org/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-cyan-400"
          >
            DeepAI
          </a>
          's AI Image Generator.
          <br />
          <br />
        </p>
        <Divider color="primary"></Divider>
        <p className="text-sm">
          I'm very thankful to all these tools, and to{" "}
          <i className="text-primary">You</i> for visiting this page!
        </p>
        <Divider color="primary"></Divider>

        <div className="flex justify-between mt-2">
          <a
            href={portfolioGithub}
            rel="noopener noreferrer"
            target="_blank"
            className="inline-block"
          >
            <Tooltip message="Github Repository" position="right" color="accent">
              <Mask
                src={githubIcon}
                className="w-12 h-12"
                variant="circle"
              />
            </Tooltip>
          </a>
          <Mask src={thanksIcon} className="w-12 h-12" variant="circle" />
        </div>
      </Modal.Body>
    </Modal.Legacy>
  );
};

export default InfoModal;