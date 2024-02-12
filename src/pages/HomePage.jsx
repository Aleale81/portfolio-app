import { Button, Carousel, Hero, Mask } from "react-daisyui";
import { Link } from "react-router-dom";
import meImage from "../assets/images/me.jpg";
import arrowRx from "../assets/icons/arrowRx-icon.gif";

const HomePage = () => {
  return (
    <Hero className="rounded-lg shadow-md shadow-accent">
      <Hero.Content className="flex-col lg:flex-row">
        <img src={meImage} className="max-w-sm h-52 rounded-lg md:block md:h-full" />
        <div>
          <h1 className="text-5xl font-bold">
            Hello there, I'm{" "}
            <span className="text-accent drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-primary">
              Alessandra
            </span>{" "}
            :)
          </h1>
          <p className="py-6">
          A <i className="text-primary">Junior Full-Stack Developer</i> with a passion for crafting dynamic web applications using the <i className="text-primary">MERN</i> stack. As a die-hard <i className="text-primary">React lover</i>, I'm constantly exploring new ways to enhance user interfaces and experiences. Lately, I've been diving into the world of CSS frameworks like <i className="text-primary">Tailwind CSS</i> and experimenting with component libraries to streamline my development process. Currently, I'm on a journey to master <i className="text-primary">TypeScript</i> and unlock even more potential in my coding adventures.
          </p>
          <div className="flex justify-end">
            <Link to={"/about"}>
              <Button>
                Know me better
                <Mask
                  src={arrowRx}
                  variant="circle"
                  className="w-9 h-9 block"
                />
              </Button>
            </Link>
          </div>
        </div>
      </Hero.Content>
    </Hero>
  );
};

export default HomePage;
