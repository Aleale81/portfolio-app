import { useState } from "react";
import { Mask, Tooltip } from "react-daisyui";
import handMade from "../assets/icons/hand-made.gif";
import InfoModal from "./InfoModal";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const handleModal = () => {
    setVisible(false);
  };

  return (
    <div className="bottom-8 mt-4 md:fixed">
    <InfoModal visible={visible} handleModal={handleModal} />
      <button onClick={() => setVisible(true)}>
        <Tooltip
          message="About this Project"
          position="top"
          color="accent"
          className="m-1 hover:bg-transparent"
        >
          <span className="flex items-center text-xs">
            <Mask src={handMade} className="me-2 w-11 h-11" variant="circle" />
            <i className="text-primary">by A.S.</i>
          </span>
        </Tooltip>
      </button>
    </div>
  );
};

export default Footer;
