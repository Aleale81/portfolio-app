import { Button, Hero, Mask } from "react-daisyui";
import homePicture from "../assets/prova.png";
import arrowRx from "../assets/icons/arrowRx-icon.gif";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Hero>
      <Hero.Content className="flex-col lg:flex-row">
        <img src={homePicture} className="max-w-sm rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">
            Hello there, I'm{" "}
            <span className="text-primary drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-blue-500">Alessandra</span> :)
          </h1>
          <p className="py-6">
          A junior Web Developer bubbling with enthusiasm and a hunger for knowledge. I'm on a constant quest to learn, create, and build cool stuff on the web. Every line of code is a step towards unlocking the vast world of possibilities. Join me on this exciting journey, where we turn ideas into reality and make the web a more vibrant place together!
          </p>
          <div className="flex justify-end">
            <Link to={"/about"}>
              <Button color="primary">
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
