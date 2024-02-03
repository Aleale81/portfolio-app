import { Menu, Tooltip } from "react-daisyui";
import { NavLink } from "react-router-dom";

const isActiveLink = ({isActive}) => (isActive ? "active rounded-box bg-primary" : "") 

const NavMenu = () => {
  return (
    <div className="NavMenu mb-5">
      <Menu
        className="bg-white shadow-lg shadow-secondary rounded-box sm:grid grid-cols-1"
        size="lg"
        horizontal="true"
      >
      <NavLink to={"/"} className={isActiveLink}>
        <Menu.Item id="home-icon" className="icons m-1">
          <Tooltip message="Home" position="right" color="accent" className="hover:bg-transparent">
          <div className="p-1 m-2"></div>
          </Tooltip>
        </Menu.Item>
        </NavLink>

        <NavLink to={"/about"} className={isActiveLink}>
        <Menu.Item id="about-icon" className="icons m-1">
          <Tooltip message="About Me" position="right" color="accent" className="hover:bg-transparent">
            <div className="p-1 m-2"></div>
          </Tooltip>
        </Menu.Item>
        </NavLink>

        <NavLink to={"projects"} className={isActiveLink}>
        <Menu.Item id="projects-icon" className="icons m-1">
          <Tooltip message="My Projects" position="right" color="accent" className="hover:bg-transparent">
          <div className="p-1 m-2"></div>
          </Tooltip>
        </Menu.Item>
        </NavLink>

        <NavLink to={"contact"} className={isActiveLink}>
        <Menu.Item id="contacts-icon" className="icons m-1">
          <Tooltip message="Contact Me" position="right" color="accent" className="hover:bg-transparent">
          <div className="p-1 m-2"></div>
          </Tooltip>
        </Menu.Item>
        </NavLink>
      </Menu>
    </div>
  );
};

export default NavMenu;
