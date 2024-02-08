import experiences from "../assets/data/experiences.json";
import { Button, Hero, Mask } from "react-daisyui";
import { Link } from "react-router-dom";
import Experience from "../components/Experience";
import meImage from "../assets/images/me.jpg";
import arrowRx from "../assets/icons/arrowRx-icon.gif";

const AboutMePage = () => {
  return (
    <>
      <Hero className="rounded-lg shadow-md shadow-accent">
        <Hero.Content className="flex-col lg:flex-row">
          <img src={meImage} className="max-w-xs rounded-lg h-52 sm:block" />
          <div>
            <h1 className="text-accent text-5xl font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-primary">
              About Me
            </h1>
            <p className="py-6">
              An Italian transplant currently based in the vibrant city of
              Amsterdam, I've traded in my store keys for a keyboard, diving
              headfirst into the world of web development. Bubbling with
              enthusiasm and a hunger for knowledge, I'm on a constant quest to
              learn, create, and build cool stuff on the web. Every line of code
              is a step towards unlocking the vast world of possibilities. When
              I'm not crafting code, you can find me soaking up the electric
              atmosphere of live concerts or laughing along at stand-up comedy
              shows. Join me on this journey as I blend my Italian flair with
              Dutch innovation, one line of code at a time!
            </p>
            <div className="flex justify-end">
              <Link to={"/projects"}>
                <Button>
                  Take a look at some of my projects
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

      {experiences.map((experience) => {
        return <Experience key={experience.id} experience={experience} />;
      })}
    </>
  );
};

export default AboutMePage;
