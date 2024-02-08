import { Mask, Menu, Tooltip } from "react-daisyui";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/icons/home-icon.gif";
import aboutIcon from "../assets/icons/about-icon.gif";
import projectsIcon from "../assets/icons/projects-icon.gif";
import contactIcon from "../assets/icons/contact-icon.gif";

const isActiveLink = ({ isActive }) =>
  isActive
    ? "active p-1"
    : "p-1";

const NavMenu = () => {
  return (
    <Menu
      className="NavMenu bg-transparent shadow-md shadow-accent rounded-box  mb-5 md:grid grid-col-1 "
      size="md"
      horizontal="true"
    >
      <Menu.Item>
        <NavLink to={"/"} className={isActiveLink}>
          <Tooltip
            message="Home"
            position="right"
            color="accent"
            className="m-1 hover:bg-transparent"
          >
            <Mask src={homeIcon} variant="circle" className="w-8 h-8 block sm:w-11 sm:h-11" />
          </Tooltip>
        </NavLink>
      </Menu.Item>

      <Menu.Item>
        <NavLink to={"/about"} className={isActiveLink}>
          <Tooltip
            message="About"
            position="right"
            color="accent"
            className="m-1 hover:bg-transparent"
          >
            <Mask
              src={aboutIcon}
              variant="circle"
              className="w-8 h-8 block sm:w-11 sm:h-11"
            />
          </Tooltip>
        </NavLink>
      </Menu.Item>

      <Menu.Item>
        <NavLink to={"/projects"} className={isActiveLink}>
          <Tooltip
            message="Projects"
            position="right"
            color="accent"
            className="m-1 hover:bg-transparent"
          >
            <Mask
              src={projectsIcon}
              variant="circle"
              className="w-8 h-8 block sm:w-11 sm:h-11"
            />
          </Tooltip>
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to={"/contact"} className={isActiveLink}>
          <Tooltip
            message="Contact"
            position="right"
            color="accent"
            className="m-1 hover:bg-transparent"
          >
            <Mask
              src={contactIcon}
              variant="circle"
              className="w-8 h-8 block sm:w-11 sm:h-11"
            />
          </Tooltip>
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default NavMenu;
