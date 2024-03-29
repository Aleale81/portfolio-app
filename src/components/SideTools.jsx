import { Mask, Tooltip } from "react-daisyui"
import { Link } from "react-router-dom"
import contactIcon from "../assets/icons/talking-icon.gif";


const SideTools = () => {
    return (
        <div className="flex flex-col justify-between items-end ">
        {/* <div className="fixed bottom-8 rounded-full hidden sm:block">
            <Tooltip
              message="Switch theme"
              position="left"
              color="accent"
            >
              <Mask src={} variant="circle" className="w-14 h-14" />
            </Tooltip>
          </div> */}
          <div className="fixed bottom-8 rounded-full hidden md:block">
            <Tooltip
              message="Contact Me"
              position="left"
              color="accent"
            >
              <Link to={"/contact"}><Mask src={contactIcon} variant="circle" className="w-11 h-11" /></Link>
            </Tooltip>
          </div>
          </div>
    )
}

export default SideTools