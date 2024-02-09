import { Link } from "react-router-dom";
import { Button, Mask } from "react-daisyui";
import notFoundIcon from "../assets/icons/not-found.gif";
import arrowRx from "../assets/icons/arrowRx-icon.gif";

const ErrorPage = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center content-center">
      <h1 className="mb-3 text-accent text-5xl font-bold drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-primary">
        Ooops....
      </h1>
      <img
        src={notFoundIcon}
        alt="Sorry, page not found :("
        className="w-3/5"
      />

      <div className="justify-end mt-5">
        <Link to={"/"}>
          <Button>
            Back to Home Page
            <Mask src={arrowRx} variant="circle" className="w-9 h-9 block" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
