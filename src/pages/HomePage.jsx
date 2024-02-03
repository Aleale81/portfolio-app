import { Button, Hero, Mask } from "react-daisyui"
import homePicture from "../assets/prova.png"
import arrowRx from "../assets/icons/arrowRx-icon.gif"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <Hero className="min-h-[30rem]">
        <Hero.Content>
          <img src={homePicture} className="max-w-sm rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold">Hello there, I'm <span className="text-primary">Alessandra</span> :)</h1>
            <p className="py-6">
            A (Jr) Web Developer always exited to create, develop
            </p>
            <div className="flex justify-end">
            <Link to={"/about"} ><Button color="primary">Know me better<Mask src={arrowRx} variant="circle" className="w-9 h-9 block" /></Button></Link>
            
         </div>
          </div>
        </Hero.Content>
      </Hero>
    )
}

export default HomePage