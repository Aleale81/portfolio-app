import { Footer, Mask } from "react-daisyui";
import handMade from "../assets/icons/hand-made.gif";

const FooterLine = () => {
  return (
    <Footer className="Footer p-1 text-neutral-content border-accent">
      <div>
        <a
          href="https://github.com/Aleale81/portfolio-app"
          target="_blank"
          className="inline-block"
        >
          <Mask src={handMade} className=" w-11 h-11" variant="circle" />
        </a>
      </div>
    </Footer>
  );
};

export default FooterLine;
